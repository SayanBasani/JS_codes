import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { Fdata } from "../store/Social-storage";
function Post({ post ,index}) {
  const {deletePost} = useContext(Fdata)
  return<div key={index} className="card post" >
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black">
            {post.reaction}
          </span>
          <span onClick={()=>deletePost(post.id)} className="position-absolute bottom-0 start-100 translate-middle badge rounded-pill bg-danger">
          <TiDelete />
          </span>
        </h5>
        <p className="card-text">{post.content}</p>
        {post.tags.map((tag,indextg) => (<span key={indextg} className="tags badge text-bg-primary">{tag}</span>))}
      </div>
    </div>
}
export default Post;