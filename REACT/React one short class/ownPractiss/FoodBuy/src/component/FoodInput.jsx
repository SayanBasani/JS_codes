import style from './FoodInput.module.css'
function FoodInput({retriveData}){
  return <>
  <div className={`${style.foodinputdiv}`}>
    <input type="text" className={`${style.foodinput}`} onKeyDown={retriveData}/>
  </div>
  </>
}
export default FoodInput;