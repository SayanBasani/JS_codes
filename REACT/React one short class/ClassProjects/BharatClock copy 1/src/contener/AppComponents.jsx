import { useEffect, useReducer, useState } from "react";

export function AppName() {
  return <h1 className="AppName fw-bolder">Bharat Clock</h1>;
}

export function AppDescription() {
  return (
    <p className="AppDescription">
      This is the clock that is shows the time in Bharat at all times
    </p>
  );
}


export function AppVariable() {

  const [DateNow, setDateNow] = useState("");
  const [TimeNow, setTimeNow] = useState("");
  const controler = new AbortController()
  const single = controler.signal;
  useEffect((single) => {
    const timeInterval = setInterval(() => {
      const time = new Date();
      setDateNow(time.toLocaleDateString());
      setTimeNow(time.toLocaleTimeString());
    }, 1000)
    return () => {
      console.log("interval is canaled");
      clearInterval(timeInterval);
      controler.abort();
    }
  }, [])
  return (
    <p className="AppVariable">
      This is the current time : {DateNow} - {TimeNow}
    </p>
  );
}
