import { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, name, ...props }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} {...props} />
    </Container>
  );
};
