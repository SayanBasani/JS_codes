import "bootstrap/dist/css/bootstrap.min.css";
import Style from './ItemsList.module.css';
import FoodNameApply from "./FoodNameApply";
import { useState } from "react";

function ItemsList(props) {
  let foodList = props.foodList;
  let [itemActive,setitemActive] = useState([]);
  const handleBuyButtons = (item,event) => {
    console.log(`${item} is being bought.`);
    setitemActive([...itemActive , item]);
  }
  return (
    <>
      {foodList.length !== 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Names</th>
            </tr>
          </thead>
          <tbody>
            {foodList.map((item, index) => (
              <FoodNameApply
                key={index}
                item={item}
                bought = {itemActive.includes(item)}
                handleBuyButton={(event)=>{handleBuyButtons(item,event)}}  // Pass the function as a prop
              />
            ))}
          </tbody>
        </table>
      ) : null}
    </>
  );
}

export default ItemsList;
