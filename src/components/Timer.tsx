type TimerProps = {
  time: number;
};

export const Timer = ({ time }: TimerProps) => {
  return (
    <div className="numbers">
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </div>
  );
};
