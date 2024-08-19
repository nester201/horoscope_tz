import React, { FC } from 'react';
import './Button.css';

type Props = {
  onClick: () => void;
  text: string;
  className?: string;
};

const Button: FC<Props> = ({ onClick, text, className = '' }) => {
  return (
    <button onClick={onClick} className={'button' + className}>
      {text}
    </button>
  );
};

export default Button;
