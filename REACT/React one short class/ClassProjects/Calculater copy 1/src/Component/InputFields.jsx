import style from "./InputFields.module.css";

function InputFields({inputText}) {
  
  return (
      <input 
      type="text" 
      className={style.calInput}
      value={inputText}
      readOnly
      />
  );
}
export default InputFields;
