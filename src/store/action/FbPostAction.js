import axios from "axios";

const FbPostAction =()=>{
    return (dispatch)=>{
        dispatch({
              type:"LOADING_FB_POST",
              isFetching:true  
        })
        const access_token="EAAIqLXQVD0cBAGcsaNi6Ga62glIQUbECHgbBm4ot0CBdFfum7KVcWdmZA0HXqZCN29Nhv5GT1ZB3doQBKsRAgJWEZBFzoscFfs2S3a4rbulj68yo0GzJqL8r2QNe2PXj5Kj295NX9HMiQehG1EIwc3jx9EMua8UcBdXqBZBDp8wZDZD"
        return axios.get(`https://graph.facebook.com/singeldingen?fields=app_id,posts.limit(10){id,message,created_time,link,event,full_picture}&access_token=${access_token}`)
        .then( (response) =>{
            const fbPost= response.data.posts
            dispatch({
                type:"FB_POST_SUCCESS",
                fbPost,
                isFetching:false  
            })
        })
        .catch( (error)=> {
            dispatch({
                type:"FB_POST_FAILD",
                error,
                isFetching:true
            })
        })
        
    }
}

export default FbPostAction