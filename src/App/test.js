import React, { Component } from 'react'
import { connect } from "react-redux"
import FbPostAction from '../store/action/FbPostAction';
import Pagination from "react-js-pagination";

class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 15
    };
  }
 
  handlePageChange=(pageNumber) =>{
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }
 
  render() {

    return(
      <div>
      <Pagination
        activePage={this.state.activePage}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        onChange={this.handlePageChange}
      />
    </div>
    )
         
     
    
    
  }
  
}


const mapStateToProps=(state)=>{

  return {
     facebookPost:state.fbPost.fbPost
  }
}
const mapDipatchToProps=(dispatch)=>{
  return {
     fbPost:dispatch(FbPostAction())
  }
}


export default connect(mapStateToProps,mapDipatchToProps)(test)