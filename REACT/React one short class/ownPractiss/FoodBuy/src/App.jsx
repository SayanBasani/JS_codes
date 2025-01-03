import { useState } from 'react'
import './App.css'
import FoodInput from './component/FoodInput'
import FoodLists from './component/FoodLists'

function App() {
  let [allFood, setallFood] = useState(["banana","banana","apple"])
  const retriveData = (event) => {
    {
      let inputItem = event.target.value.trim();
      console.log({ inputItem })
      if (inputItem === ""){
        console.log("nothing to add")
      }
      if (event.key == "Enter") {
        if (inputItem != ""){
          setallFood([...allFood,inputItem]);
        }
        event.target.value = ""
      }
    }
  }
  return (
    <div className='FoodMainContainer'>
      <FoodInput retriveData={retriveData} />
      <FoodLists allFoods={allFood} />
    </div>
  )
}

export default App
