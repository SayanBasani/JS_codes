import style from "./App.module.css";
import Buttons from "./Component/buttons";
import InputFields from "./Component/InputFields";
import {useState} from "react"
function c(con){
  console.log(con)
}



function App() {
  let Btnarr = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "C", 0, "=", "/"];
  let [calVal , setcalVal] = useState([]);
  let inputText =""
  let itemkey = ""
  const onClickActions = (item,event) =>{
    
    console.log(item)
    if (item == "C"){
      setcalVal([]);
      inputText=""
      return
    }
    if(item == "="){
      console.log("it is =")
      console.log(calVal[0])
      inputText = eval(calVal[0]);
      setcalVal(inputText)
    }else{
      setcalVal([calVal+item]);
    }
  }
  
  console.log(calVal)
  return (
    <div className={style.center}>
      <div className={style.calculater}>
        <InputFields inputText = {calVal}/>
        <Buttons Btnarr={Btnarr} onClickActions={onClickActions} />
      </div>
    </div>
  );
}

export default App;
