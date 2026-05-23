'use client';

import { 
  createContext, 
  useContext, 
  useState, 
  useEffect, 
  useCallback, 
  useRef 
} from 'react';
import { AssetsDataType } from '../core/Types';
import { getAssets } from '@/lib/getAssets/getAssets';

interface AssetsContextType {
  assets: AssetsDataType;
  setAssets: (assets: AssetsDataType) => void;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  lastUpdate: Date | null;
}

const AssetsContext = createContext<AssetsContextType | undefined>(undefined);

export function AssetsProvider({ children }: { children: React.ReactNode }) {
  const [assets, setAssets] = useState<AssetsDataType>({} as AssetsDataType);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  
  const isFetchingRef = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef(true);

  const fetchData = useCallback(async (showLoading = true) => {
    if (isFetchingRef.current) return;

    try {
      isFetchingRef.current = true;
      if (showLoading) setIsLoading(true);
      setError(null);

      const response = await getAssets();
      
      if (isMountedRef.current) {
        setAssets(response);
        setLastUpdate(new Date());
      }
    } catch (err) {
      if (isMountedRef.current) {
        setError(err instanceof Error ? err.message : 'خطا در دریافت اطلاعات');
        console.error('Error fetching assets:', err);
      }
    } finally {
      if (isMountedRef.current) {
        setIsLoading(false);
      }
      isFetchingRef.current = false;
    }
  }, []);

  useEffect(() => {
    isMountedRef.current = true;
    
    fetchData();

    intervalRef.current = setInterval(() => {
      fetchData(false); 
    }, 45 * 1000);

    return () => {
      isMountedRef.current = false;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [fetchData]);

  // تابع refetch برای استفاده دستی
  const refetch = useCallback(async () => {
    await fetchData(true);
  }, [fetchData]);

  const value = {
    assets,
    setAssets,
    isLoading,
    error,
    refetch,
    lastUpdate,
  };

  return (
    <AssetsContext.Provider value={value}>
      {children}
    </AssetsContext.Provider>
  );
}

export function useAssets() {
  const context = useContext(AssetsContext);
  if (context === undefined) {
    throw new Error('useAssets must be used within an AssetsProvider');
  }
  return context;
}