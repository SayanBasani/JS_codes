import Style from "./FoodNameApply.module.css";

function FoodNameApply({ item, handleBuyButton, bought }) {
  return (
    <tr>
      <td className={`${Style.td} ${bought && "bg-danger"} `}>
        {item}
        <button
          className={`${Style.button}`}
          onClick={handleBuyButton}
        >
          Buy
        </button>
      </td>
    </tr>
  );
}

export default FoodNameApply;