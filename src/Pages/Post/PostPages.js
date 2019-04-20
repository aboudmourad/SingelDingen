import React from 'react'
import { connect } from "react-redux"
import FbPostAction from "../../store/action/FbPostAction"
import OutputPost from './OutputPost';
import Loading from 'react-loading';

const PostPages = (props) => {
  const { facebookPost, isLoading } = props
  const fb = facebookPost
  const post = fb && fb.data 
   const facebook = post && post.map((value,index)=>{
     const data ={"true" : "l","false":"r"}
      let l = data[index % 2 === 0], r = data[index % 2 === 1];
        return value && value.full_picture && value.message? 
        <OutputPost value={value} l={l} r={r} key={value.id}/>
        : null
        
    })
  return isLoading ? <div className="loading"><Loading /></div>: facebook
}

const mapStateToProps=(state)=>{
  return {
  facebookPost:state.fbPost.fbPost,
  isLoading:state.fbPost.isFetching
}}

const mapDipatchToProps=(dispatch)=>{ return { fbPost:dispatch(FbPostAction())}}


export default connect(mapStateToProps,mapDipatchToProps)(PostPages)
