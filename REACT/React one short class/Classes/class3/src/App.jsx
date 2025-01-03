import ItemsList from "./continer/ItemsList"
import Massage from "./continer/Massage";
import Container from "./continer/Container";
import Foodinput from "./continer/Foodinput";
import { useState } from 'react'
function App() {
  // let FoodItems = []
  let [FoodItems, setFoodItems] = useState(["apple"]);
  const onKeydown = (event) => {
    console.log(event)
    console.log(event.code)
    if (event.code === 'Enter') {
      console.log("it is entered")
      let newFooditem = event.target.value;
      event.target.value = ""
      console.log(`new added : ${newFooditem}`)
      let newFoodItems = [...FoodItems, newFooditem]
      setFoodItems(newFoodItems)
    }
    console.log(FoodItems)
  }
  return (
    <>
      <Container sayan="Sayan Basani">
        <Massage foodList={FoodItems} />
        <Foodinput handonKeydown={onKeydown} />
        <ItemsList foodList={FoodItems} />
      </Container>
      {/* <Container>
      It is the list of foods what you can buy from my shop.
    </Container> */}
    </>
  )
}

export default App;
