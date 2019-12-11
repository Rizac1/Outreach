import React from 'react'
import { NFPListMapping } from '../components/NFPListMapping'
// import firestore from "../firebase"
import firebase from "../firebase"
import { Form, FormControl } from 'react-bootstrap';
//import mag from '../assets/mag.webp';
import styled from 'styled-components';

const Styles = styled.div`
.nfpsearchbar{
  width: 30rem !important;
  margin: 25px;
}

`;


class NFPList extends React.Component {

constructor(){
  super();
  this.state = {
    nfplist:[],
    filtered: [],
    databaseLinked: false
  }
 this.handleChange = this.handleChange.bind(this)
}

  componentDidMount() {
    const db = firebase.firestore();
    var mydata = [];

    db.collection("Projects").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        mydata.push(doc.data())

      });

      this.setState({
        nfplist: mydata,
        filtered: mydata,
        databaseLinked: true
      })
    });
  }

handleChange = (e) => {
    // Variable to hold the original version of the list
let currentList = [];
    // Variable to hold the filtered list before putting into state
let newList = [];

    // If the search bar isn't empty
if (e.target.value !== "") {
        // Assign the original list to currentList
  currentList = this.state.nfplist;
//loop list
  for (var i=0; i < currentList.length; i++) {
    //if they are included and sets them to lower case first
    if (currentList[i].Skills.toLowerCase().includes(e.target.value.toLowerCase())) {
      //push to  the filtered list  
      newList.push(currentList[i]);
    }

}
} else {
        // If the search bar is empty, set newList to original task list
  newList = this.props.nfplist;
}
    // Set the filtered state based on what our rules added to newList
this.setState({
  filtered: newList
});
}

render() {

  let page;
  if (this.state.databaseLinked){
    page = <div> 
      <Form inline>
        <FormControl className='nfpsearchbar' type="text" placeholder="Search NFP Projects by Skills Needed" onChange={this.handleChange}/>
        </Form>
      <NFPListMapping nfplist={this.state.filtered} /> 
    
    </div>
  }else{
    page = <div><p>Loading...</p></div>
  }
    return (
    <Styles>
      <div>
        
        {page}
      </div>
    </Styles>
      );
  }
}

export default NFPList;

