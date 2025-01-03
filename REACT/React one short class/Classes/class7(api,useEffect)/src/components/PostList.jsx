import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { Fdata } from "../store/Social-storage";
import Massage from "./Massage";
import LodingSpinner from "./LodingSpinner";

function PostList() {
  const { state, addInitialPost } = useContext(Fdata)
  const [isloderneeded, setisloderneeded] = useState(false);
  const controler = new AbortController();
  const single = controler.signal;
  useEffect(() => {
    setisloderneeded(true)
    fetch('https://dummyjson.com/products',{single})
      .then(res => res.json())
      .then((data) => {
        addInitialPost(data.products);
        setisloderneeded(false);
      })
      return () => {
        console.log("mission is abborted");
        controler.abort();
      }
  }, [])
  const handlegetPost = () => {
  }

  return <>
    {isloderneeded && <LodingSpinner />}
    {!isloderneeded && state.length == 0 && <Massage getPost={handlegetPost} />}
    {!isloderneeded && state.map((post, index) => (
      <Post key={index} index={index} post={post}></Post>
    ))}
  </>
}
export default PostList;