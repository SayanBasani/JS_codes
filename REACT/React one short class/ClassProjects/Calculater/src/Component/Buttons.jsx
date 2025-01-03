import style from "./Buttons.module.css";
function Buttons({ Btnarr }) {
  return (
    <>
      <div className={style.buttonDiv}>
        {Btnarr.map((item) => (
          <button className={style.button}>{item}</button>
        ))}
      </div>
    </>
  );
}

export default Buttons;
