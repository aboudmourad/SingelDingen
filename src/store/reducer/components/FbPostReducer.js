const initState = {
    fbPost:null,
    isFetching:false
}

const FbPostReducer = (state = initState, action)=>{
    switch (action.type){
        case "LOADING_FB_POST":
        return {
            ...state,
            isFetching:action.isFetching

        }
        case "FB_POST_SUCCESS":
        return {
            ...state,
            fbPost : action.fbPost,
            isFetching:action.isFetching

        }
        case "FB_POST_FAILD":
        return {
            ...state,
            error : action.error,
            isFetching:action.isFetching
        }
        default:
        return state;
    }
}

export default FbPostReducer;