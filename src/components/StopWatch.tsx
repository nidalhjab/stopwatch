import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Timer } from "./Timer";
export const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState("");
  useEffect(() => {
    let interval: any;
    if (status === "started") {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (status === "paused") {
      clearInterval(interval);
    } else {
      setTime(0);
    }
    return () => clearInterval(interval);
  }, [status]);
  return (
    <div className="stopwatch">
      <Timer time={time} />
      <div className="buttons">
        <Button
          title={status ? "pause" : "start"}
          onClick={
            time ? () => setStatus("paused") : () => setStatus("started")
          }
        />
        <Button title="reset" onClick={() => setStatus("reset")} />
      </div>
    </div>
  );
};
