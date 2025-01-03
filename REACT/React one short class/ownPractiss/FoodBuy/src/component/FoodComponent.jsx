import style from './FoodComponent.module.css'
function c(a) {
  console.log(a);
}
export default function FoodComponent({ item, index, clickList, setclickList }) {
  const selectClickbtn = (event, i) => {
    if (!clickList.includes(index)) {
      setclickList([...clickList, i])
    }
    if (clickList.includes(i)) {
      c("Removing from clickList...");
      // Use filter to create a new array without the clicked index
      const newClickList = clickList.filter(itemIndex => itemIndex !== i);
      setclickList(newClickList);
      c(newClickList);
    }
    c(clickList)
  }

  const isClicked = clickList.includes(index);
  return <div key={index} className={`${style.FoodComponentDiv} ${isClicked ? style.selectClick : ""}`}>
    <p>{item}</p>
    <button key={index} className={`${style.FoodBuybtn}`} onClick={(event) => selectClickbtn(event, index)}>{isClicked ? "Delete" : "Buy"}</button>
  </div>
}