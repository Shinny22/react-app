// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, primary = false }) => {
  const baseStyle = 'py-2 px-4 font-bold rounded';
  const primaryStyle = 'bg-blue-500 text-white hover:bg-blue-700';
  const secondaryStyle = 'bg-gray-500 text-white hover:bg-gray-700';

  const buttonStyle = primary ? primaryStyle : secondaryStyle;

  return (
    <button className={`${baseStyle} ${buttonStyle}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
