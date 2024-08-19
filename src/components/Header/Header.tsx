import React from 'react';
import './Header.css';
import Button from '../Button/Button';
import { useInitialContext } from '../../hooks/useInitialComtext';

const Header = () => {
  const { currentLanguage, currentUser } = useInitialContext();

  return (
    <div className={'header'}>
      <Button text={'Button'} onClick={() => {}} />
      <span className={'username'}>{currentUser?.username}</span>
      <div>{currentLanguage}</div>
    </div>
  );
};

export default Header;
