import { createContext, FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { IInitialProvider } from '../interfaces/IInitialProvider';
import { useTelegram } from '../hooks/useTelegram';

export const InitialContext = createContext({} as IInitialProvider);

export const InitialProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('');
  const { user } = useTelegram();

  useEffect(() => {
    if (user?.language_code) {
      setCurrentLanguage(user.language_code);
    }
  }, []);

  const value = useMemo(() => ({ currentLanguage, setCurrentLanguage }), [currentLanguage, setCurrentLanguage]);

  return <InitialContext.Provider value={value}>{children}</InitialContext.Provider>;
};
