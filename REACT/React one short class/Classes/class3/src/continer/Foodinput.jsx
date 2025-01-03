import style from "./Foodinput.module.css"
function Foodinput({handonKeydown}){
  return <center>
    <input type="text" placeholder="  Enter food"
    onKeyDown = {
      handonKeydown
    }
    />
  </center>
}
export default Foodinput;