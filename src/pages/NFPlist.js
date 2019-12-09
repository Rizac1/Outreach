import React from 'react'
import { NFPListMapping } from '../components/NFPListMapping'
import 'firebase/database';
import firestore from "../firebase"
import Firebase from "firebase"
import firebase from "../firebase";
import styled from "styled-components";

const Styles = styled.div`

`

class NFPList extends React.Component {

constructor(){
  super();
  this.state = {
    nfplist:[],
    databaseLinked: false
  }
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
        databaseLinked: true
      })
    });
  }
render() {
  let page;
  if (this.state.databaseLinked){
    page = <div> <NFPListMapping nfplist={this.state.nfplist} /> </div>
  }else{
    page = <div><p>Loading...</p></div>
  }
    return page;
  }
}

export default NFPList;

