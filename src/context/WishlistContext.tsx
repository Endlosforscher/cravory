import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';

const STORAGE_KEY = 'cravory-wishlist';

type WishlistContextType = {
  wishlist: number[];  
  toggle: (id: number) => void; 
  isSaved: (id: number) => boolean;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const isFirstRun = useRef(true);

   useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setWishlist(JSON.parse(stored));
      } catch {
        console.error('Failed to parse wishlist from localStorage');
      }
    }
  }, []);
  
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const toggle = (id: number) =>
    setWishlist((wl) =>
      wl.includes(id) ? wl.filter((x) => x !== id) : [...wl, id]
    );
  const isSaved = (id: number) => wishlist.includes(id);

  return (
    <WishlistContext.Provider value={{ wishlist, toggle, isSaved }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be inside WishlistProvider');
  return ctx;
}
