export const findIdForPost=(state,payload)=>{
   return state.AllPostList.findIndex((post) => { return post.id === payload.id })
}