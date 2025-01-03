import style from "./App.module.css";
import Buttons from "./Component/buttons";
import InputFields from "./Component/InputFields";
function App() {
  let Btnarr = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "C", 0, "=", "/"];
  return (
    <div className={style.center}>
      <div className={style.calculater}>
        <InputFields />
        <Buttons Btnarr={Btnarr} />
      </div>
    </div>
  );
}

export default App;
