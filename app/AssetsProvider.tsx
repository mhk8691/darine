'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import { usePathname } from 'next/navigation';
import { AllAssetsDataType } from './core/Types';
import { getAssets } from '@/lib/getAssets/getAssets';

interface AssetsContextType {
  assets: AllAssetsDataType;
  setAssets: (assets: AllAssetsDataType) => void;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  lastUpdate: Date | null;
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const AssetsContext = createContext<AssetsContextType | null>(null);

export function AssetsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isAuthPage = pathname.startsWith('/login');
  const [assets, setAssets] = useState<AllAssetsDataType>({} as AllAssetsDataType);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const isFetchingRef = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // ← اضافه شده

  useEffect(() => {
    const stored = localStorage.getItem('eyeState');
    if (stored !== null) {
      setIsVisible(stored === 'true');
    }
  }, []);

  const fetchData = useCallback(
    async (showLoading = true, retryCount = 0) => {
      const MAX_RETRIES = 3; // حداکثر تعداد تلاش مجدد
      
      if (isAuthPage) return;
      if (isFetchingRef.current) return;

      try {
        isFetchingRef.current = true;

        if (showLoading) setIsLoading(true);
        setError(null);

        const response = await getAssets();

        if (isMountedRef.current) {
          setAssets(response || ({} as AllAssetsDataType));
          setLastUpdate(new Date());
          // در صورت موفقیت، شمارنده تلاش مجدد را ریست کنید
          retryCount = 0;
        }
      } catch (err) {
        if (isMountedRef.current) {
          setError(
            err instanceof Error ? err.message : 'خطا در دریافت اطلاعات'
          );

          // فقط اگر تعداد تلاش‌ها از حداکثر کمتر است، دوباره تلاش کن
          if (retryCount < MAX_RETRIES) {
            // پاک کردن تایمر قبلی اگر وجود دارد
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            
            timeoutRef.current = setTimeout(() => {
              fetchData(false, retryCount + 1);
            }, 2000);
          } else {
            // اگر تعداد تلاش‌ها به حداکثر رسید، خطا را نمایش بده
            setError(`خطا در دریافت اطلاعات پس از ${MAX_RETRIES} بار تلاش`);
            setIsLoading(false);
          }
        }
      } finally {
        if (isMountedRef.current) {
          setIsLoading(false);
        }
        isFetchingRef.current = false;
      }
    },
    [isAuthPage]
  );

  useEffect(() => {
    isMountedRef.current = true;

    if (!isAuthPage) {
      fetchData();

      intervalRef.current = setInterval(() => {
        fetchData(false, 0); // ریست کردن شمارنده تلاش مجدد برای اینتروال
      }, 45 * 1000);
    }

    return () => {
      isMountedRef.current = false;

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      // پاک کردن تایمر در زمان unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [fetchData, isAuthPage]);

  const refetch = useCallback(async () => {
    // ریست کردن تایمر و شمارنده هنگام رفرش دستی
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    await fetchData(true, 0);
  }, [fetchData]);

  const value: AssetsContextType = {
    assets,
    setAssets,
    isLoading,
    error,
    refetch,
    lastUpdate,
    isVisible,
    setIsVisible,
  };

  return (
    <AssetsContext.Provider value={value}>
      {children}
    </AssetsContext.Provider>
  );
}

export function useAssets() {
  const context = useContext(AssetsContext);
  if (!context) {
    throw new Error(
      'useAssets context پیدا نشد! مطمئن شوید داخل <AssetsProvider> هستید.'
    );
  }
  return context;
}