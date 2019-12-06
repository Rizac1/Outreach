import React from 'react'
import { NFPListMapping } from '../components/NFPListMapping'
import 'firebase/database';
import firebase from "../firebase"
import { Form, FormControl } from 'react-bootstrap';
//import mag from '../assets/mag.webp';
import styled from 'styled-components';

const Styles = styled.div`
.nfpsearchbar{
  width: 20rem;
}
// background:blue
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
  console.log(currentList)

  console.log(e.target.value)
        // Use .filter() to determine which items should be displayed
        // based on the search terms
  // newList = currentList.filter(item => {
  //           // change current item to lowercase
  //   const lc = item.toString().toLowerCase();
  //           // change search term to lowercase
  //   const filter = e.target.value.toString().toLowerCase();
  //           // check to see if the current list item includes the search term
  //           // If it does, it will be added to newList. Using lowercase eliminates
  //           // issues with capitalization in search terms and search content
  //   return lc.includes(filter);

  //   // [{},{},{}] ['hi','hello']
  // });
  for (var i=0; i < currentList.length; i++) {
    if (currentList[i].Skills.toLowerCase().includes(e.target.value.toLowerCase())) {
        newList.push(currentList[i]);
    }
}
  console.log(newList)
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
    page = <div> <NFPListMapping nfplist={this.state.filtered} /> </div>
  }else{
    page = <div><p>Loading...</p></div>
  }
    return (
    <Styles>
      <div>
        <Form inline>
        <FormControl className='nfpsearchbar' type="text" placeholder="Search NFP Projects by Skills Needed" onChange={this.handleChange}/>
        {/* <button type="button" className="btn btn-defaulft" >
            <img className='img' src={mag} alt="Javascript is needed" />
        </button> */}
        </Form>
        {page}
      </div>
    </Styles>
      );
  }
}

export default NFPList;

