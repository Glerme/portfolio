import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { Container, Linhas } from './styles';

export const CardImg: React.FC = () => {
  return (
    <>
      <Container className="card__collection clear-fix">
        <Linhas />
        <div className="cards cards--two">
          <img src="/foto.png" className="img-responsive" alt="Cards Image" />
          <span className="cards--two__rect"></span>
          <span className="cards--two__tri"></span>
          <p>Guilherme Felipe</p>
          <ul className="cards__list">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Glerme"
              >
                <FiGithub size={20} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/glerme/"
              >
                <FaLinkedinIn size={20} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://api.whatsapp.com/send?phone=5514998363749"
              >
                <FaWhatsapp size={20} />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};
