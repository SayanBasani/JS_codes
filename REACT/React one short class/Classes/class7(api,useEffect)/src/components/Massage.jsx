export function Massage({getPost}){
  return <center className="PostNotAvaliable">
    <h2 className="">No Post is Avaliable Now</h2>
    <button type="button" className="btn btn-primary" onClick={getPost}>Post from server</button>
  </center>
}

export default Massage;