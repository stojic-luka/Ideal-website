import { useState, useEffect, ReactNode, createContext } from "react";

interface TitleContextType {
  setTitle: (newTitle: string) => void;
}
const TitleContext = createContext<TitleContextType>({ setTitle: () => {} });

interface Props {
  children: ReactNode;
}
const TitleProvider = ({ children }: Props) => {
  const [title, setTitle] = useState("Ideal Development");

  useEffect(() => {
    document.title = title;
  }, [title]);

  return <TitleContext.Provider value={{ setTitle }}>{children}</TitleContext.Provider>;
};

export { TitleContext, TitleProvider };
