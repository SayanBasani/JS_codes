import { useState } from 'react'
import style from './FoodLists.module.css'
import FoodComponent from './FoodComponent'
export default function FoodLists({allFoods}){
  let [clickList,setclickList] = useState([]) // store index of the clicked button div
  return <div className={`${style.FoodLists}`}>
    {allFoods.map((item,index)=>( <FoodComponent clickList={clickList} setclickList={setclickList} key={index} item = {item} index = {index}  />))}
  </div>
}