import Header from './componentes/principal/Header';
import styled from 'styled-components';
import Pesquisa from './componentes/principal/pesquisa';
import UltimosLancamentos from './componentes/principal/UltimosLancamentos';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 25%,#326589 165%);

`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default App;
