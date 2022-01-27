export type ButtobPrps = {
  title: string;
  onClick: () => void;
};
export const Button = ({ title, onClick }: ButtobPrps) => {
  return <button onClick={onClick}>{title}</button>;
};
