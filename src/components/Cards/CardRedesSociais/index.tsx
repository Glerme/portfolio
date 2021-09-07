import { Container } from './styles';

import { FiGithub } from 'react-icons/fi';

// interface CardLinguagensProps {
//   title: string;
//   url: string;
// }

export const CardRedesSociais: React.FC = () => {
  return (
    <Container title={'teste'}>
      <FiGithub size={48} />
      <p>Github</p>
    </Container>
  );
};
