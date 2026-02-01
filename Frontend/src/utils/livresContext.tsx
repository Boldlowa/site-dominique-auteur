import { createContext, useContext, useEffect, useState } from "react";
import type { Livre } from "../models";
import { getAllBooks } from "./client";

interface LivresContextType {
  livres: Livre[];
}

const LivresContext = createContext<LivresContextType>({
  livres: [],
});

export const LivresProvider = ({ children }: { children: React.ReactNode }) => {
  const [livres, setLivres] = useState<Livre[]>([]);

  useEffect(() => {
    const fetchLivres = async () => {
      const data = await getAllBooks();
      setLivres(data);
    };
    fetchLivres();
  }, []);

  return (
    <LivresContext.Provider value={{ livres }}>
      {children}
    </LivresContext.Provider>
  );
};

export const useLivres = () => useContext(LivresContext);
