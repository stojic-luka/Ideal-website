import { ReactNode } from "react";

interface Props {
  width: number;
  children: ReactNode;
  className?: string;
}
export default function Container({ width, children, className = "" }: Props) {
  const styles = {
    maxWidth: `${width}px`,
    width: "100%",
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
  };

  return (
    <div style={styles} className={className}>
      {children}
    </div>
  );
}
