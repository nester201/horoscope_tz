import { useCallback, useMemo } from 'react';

const tg = window?.Telegram.WebApp;
export const useTelegram = () => {
  const onClose = useCallback(() => {
    tg.close();
  }, []);

  return useMemo(() => ({ tg, onClose }), [onClose]);
};
