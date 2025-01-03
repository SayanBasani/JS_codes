import { useContext } from "react"
import { calContext } from "./cal_stor_logc"

export default function Cal_inp(params) {
  const {InpVal, setInpVal} = useContext(calContext)
  return (
    <div>
      <input value={InpVal} type="text" className="form-control" placeholder="  Enter Value" />
    </div>
  )
}