import { useContext, useRef } from "react";
import { TiDelete } from "react-icons/ti";
import { Fdata } from "../store/Social-storage";
export function CreatPost() {
  const {addPost} = useContext(Fdata)
  const idElement = useRef()
  const titleElement = useRef()
  const contentElement = useRef()
  const reactionElement = useRef()
  const tagsElement = useRef()
  const HandelSubmit = (event) => {
    event.preventDefault()
    console.log("it is the creat post handeler")
    const id = toString(idElement.current.value)
    const title = titleElement.current.value
    const content = contentElement.current.value
    const reaction = reactionElement.current.value
    const tags = tagsElement.current.value.split(" ")

    idElement.current.value = ""
    titleElement.current.value = ""
    contentElement.current.value = ""
    reactionElement.current.value = ""
    tagsElement.current.value = ""
    
    addPost(id,title,content,reaction,tags)
  }
  return <form className="CreatePost" onSubmit={HandelSubmit}>
    <div className="mb-3">
      <label htmlFor="postId" className="form-label">Enter Your uid </label>
      <input type="text"ref={idElement} className="form-control" placeholder="Enter Your uid"  />
    </div>
    <div className="mb-3">
      <label htmlFor="postTitle" className="form-label">Post title </label>
      <input type="text" ref={titleElement} className="form-control" id="postTitle" placeholder="Enter Post Title"/>
    </div>
    <div className="mb-3">
      <label htmlFor="postContent" className="form-label">Enter Post Contents</label>
      <input type="text" ref={contentElement} className="form-control" id="postContent" placeholder="Enter Post Content" />
    </div>
    <div className="mb-3">
      <label htmlFor="postReaction" className="form-label">Enter Post Reaction</label>
      <input type="text" ref={reactionElement} className="form-control" id="postReaction" placeholder="Enter Post Reaction" />
    </div>
    <div className="mb-3">
      <label htmlFor="postTags" className="form-label">Enter Post Tags</label>
      <input type="text" ref={tagsElement} className="form-control" id="postTags" placeholder="Maintain single space between tags" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
}
export default CreatPost;