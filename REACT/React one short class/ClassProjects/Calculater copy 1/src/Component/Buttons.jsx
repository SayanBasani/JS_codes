import style from "./Buttons.module.css";
function Buttons({ Btnarr,onClickActions }) {
  return (
    <>
      <div className={style.buttonDiv}>
        {Btnarr.map((item) => (
          <button
            key={item}
            className={style.button}
            onClick={(event) =>onClickActions(item,event)}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default Buttons;
