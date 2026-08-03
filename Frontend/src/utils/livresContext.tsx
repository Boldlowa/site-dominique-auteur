import { createContext, useContext, useEffect, useState } from "react";
import type { Livre } from "../models";
import { getAllBooks } from "./client";

const STORAGE_KEY = "livresCache";
const CACHE_VERSION = 2;

interface LivresContextType {
  livres: Livre[];
}

interface CachedLivres {
  version: number;
  livres: Livre[];
}

interface CachedLivres {
  version: number;
  livres: Livre[];
}

const LivresContext = createContext<LivresContextType>({
  livres: [],
});

export const LivresProvider = ({ children }: { children: React.ReactNode }) => {
  const [livres, setLivres] = useState<Livre[]>([]);

  useEffect(() => {
    const cached = sessionStorage.getItem(STORAGE_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached) as CachedLivres;
        if (parsed.version === CACHE_VERSION && Array.isArray(parsed.livres)) {
          setLivres(parsed.livres);
          return;
        }
      } catch {
        // ignore invalid cache
      }
      sessionStorage.removeItem(STORAGE_KEY);
    }

    const fetchLivres = async () => {
      const data = await getAllBooks();
      setLivres(data);
      try {
        sessionStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ version: CACHE_VERSION, livres: data })
        );
      } catch {
        // sessionStorage may be unavailable or full; ignore
      }
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
