import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { DefaultInput } from "./components/DefaultInput";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form action="" className="form">
          <div className="formRow">
            <DefaultInput id="meuInput" label="Task" type="text" />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0</p>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
