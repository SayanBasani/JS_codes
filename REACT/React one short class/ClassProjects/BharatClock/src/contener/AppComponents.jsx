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
  let time = new Date();
  return (
    <p className="AppVariable">
      This is the current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()} AM
    </p>
  );
}
