import { act, createContext, useReducer } from "react";

export const Fdata = createContext({
  state : [],
  addPost : () => {},
  addInitialPost : () =>{},
  deletePost :() => {},
});
const ReducerFunction = (state , action) =>{
  // console.log(state);
  console.log(action);
  
  let array = []
  if (action.type == "DELETE_POST"){
    array = state.filter((post)=>(post.id !== action.payload.id))
    return array
  }else if (action.type == "CREATE_Initial_POST"){
    array = action.paylode.posts;
    console.log(array);
    return array
  }else if (action.type == "CREATE_POST"){
    array = [action.paylode , ...state]
    console.log(array);
    return array
  }
  return []
}
let def_post = [{
  id : "1",
  title : "identifaction",
  content : "i am sayan now my birth day",
  reaction : "0" ,
  userId : "sayan005",
  tags : ["good daya","bityhday","happy"],
},
{
  id : 2,
  title : "travile",
  content : "Love Hills",
  reaction : 0 ,
  userId : "sayan006",
  tags : ["sandakufu","hills","travile"]
}];
function FunctionProvider({children}){
  
  const [state,dispacher] = useReducer(ReducerFunction,[]);
  const addInitialPost = (posts)=>{
    const action = {
      type : "CREATE_Initial_POST",
      paylode : {
      posts,
    }}
    dispacher(action)
  }
  const addPost = (id,title,content,reaction,tags)=>{
    console.log(`${id} ${title} ${content}  ${reaction} ${tags}`);
    const action = {
      type : "CREATE_POST",
      paylode : {
      id:Date.now() ,title,content,reaction,userId : id,tags,
    }}
    dispacher(action)
  }
  const deletePost =(id)=>{
    console.log(id);
    const action = {
      type : "DELETE_POST",
      payload : {
        id ,
      }
    }
    dispacher(action)
  }
  return <Fdata.Provider value={{state,addPost,addInitialPost,deletePost}}>
    {children}
  </Fdata.Provider>
}
export default FunctionProvider;