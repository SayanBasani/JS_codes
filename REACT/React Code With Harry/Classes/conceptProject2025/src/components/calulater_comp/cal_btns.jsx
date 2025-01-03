import { useContext, useEffect } from "react"
import { calContext } from "./cal_stor_logc"


function btns(arr,InpVal, setInpVal){
  // console.log(arr)
  return arr.map((val, index) => {  
    
     
    return <button key={index} className="btn bg-slate-200 m-2 w-7" onClick={()=>{
      let lastChar = InpVal.slice(-1);
      // console.log("clicked btn :- " + val+"  Last Char :- "+lastChar +  "  the value is:-  "+InpVal);

      if (val === "+" || val === "-" || val === "*" || val === "/"||val === "=") {
        
        if(val == "="){
          setInpVal(eval(InpVal).toString());
        }
        else if(lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/"){
          
          setInpVal(InpVal.slice(0,-1)+val);
        }
        else{
          setInpVal(InpVal+val);
        }
      }
      else{
        setInpVal(InpVal+val);
      }
    }}>{val}</button>
  })
}

export default function Cal_btns() {
  const { InpVal, setInpVal } = useContext(calContext);  

  
  let array = [ 1,2,3,"+",4,5,6,"-",7,8,9,"*",".",0,"=","/"]
  const arr = btns(array,InpVal, setInpVal)

  return(
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="btns grid grid-cols-4">
          {arr}
        </div>
        <button className="w-[80%] b-3 bg-red-600" onClick={()=>{
          setInpVal("")
        }}>C</button>
      </div>
    </>
  )
}