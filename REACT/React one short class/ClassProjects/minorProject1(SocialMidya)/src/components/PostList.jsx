import { useContext } from "react";
import Post from "./Post";
import { Fdata } from "../store/Social-storage";
function PostList() {
  const {state} = useContext(Fdata)
  

  return <>
  {state.map((post,index)=>(
    <Post key={index} index={index} post = {post}></Post>
  ) )}
  </>
}
export default PostList;