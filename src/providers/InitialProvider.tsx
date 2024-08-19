import { createContext, FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { IInitialProvider } from '../interfaces/IInitialProvider';

const tg = window?.Telegram.WebApp;

export const InitialContext = createContext({} as IInitialProvider);

export const InitialProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<WebAppUser | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<string>(currentUser?.language_code || '');

  useEffect(() => {
    if (tg.initDataUnsafe.user) {
      setCurrentUser(tg.initDataUnsafe.user);
    }
  }, []);

  const value = useMemo(() => ({ currentLanguage, setCurrentLanguage }), [currentLanguage, setCurrentLanguage]);

  return <InitialContext.Provider value={value}>{children}</InitialContext.Provider>;
};
