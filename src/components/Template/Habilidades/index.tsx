import { Title } from '../../Utilitarios/Title';

import { Container } from './styles';
import { Carrosel } from '../../Utilitarios/Carrosel';

export const Habilidades: React.FC = () => {
  return (
    <Container>
      <Title label="Habilidades" />
      <Carrosel />
    </Container>

    // <Container id="habilidades">
    //   <Title label="Habilidades" />
    //   <Content>
    //     {/* <Linhas />
    //     <main>
    //       <ImageSlider
    //         components={[
    //           {
    //             component: ContainerLinguagens,
    //             props: {
    //               data: options,
    //             },
    //           },
    //           {
    //             component: ContainerLinguagens,
    //             props: {
    //               data: options2,
    //             },
    //           },
    //           {
    //             component: ContainerLinguagens,
    //             props: {
    //               data: options3,
    //             },
    //           },
    //         ]}
    //       />
    //     </main> */}
    //   </Content>
    // </Container>
  );
};
