import React from 'react';
import './Header.css';
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';
import { useInitialContext } from '../../hooks/useInitialComtext';

const Header = () => {
  const { currentLanguage } = useInitialContext();
  const { user } = useTelegram();

  return (
    <div className={'header'}>
      <Button text={'Button'} onClick={() => {}} />
      <span className={'username'}>{user?.username}</span>
      <div>{currentLanguage}</div>
    </div>
  );
};

export default Header;
