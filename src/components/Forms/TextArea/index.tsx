import { TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  ...props
}) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} {...props} />
    </Container>
  );
};
