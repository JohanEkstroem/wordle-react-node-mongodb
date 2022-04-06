function Stopwatch({ time }) {
  return (
    <div className="">
      <h1>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </h1>
    </div>
  );
}

export default Stopwatch;
