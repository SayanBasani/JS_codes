let Massage = (props) => {
  let FoodItems = props.foodList
  let Errors = FoodItems.length === 0 || FoodItems.length == undefined ? <h1>I am Also Hungery</h1> : null;
  let Massge = FoodItems.length !== 0 ? <h1>Now i fill Relax </h1> : null;
  return (
    <>
      <center>
        {Errors}
        {Massge}
      </center>
    </>
  )
}

export default Massage;