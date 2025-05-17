import { Container } from "./components/Container";
// import { Heading } from "./components/Heading";
import { CountDown } from "./components/CountDown";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { Footer } from "./components/Footer";
import { DefaulButton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";
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
            <DefaultInput id="meuInput" labeltext="Task" type="text" />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaulButton type="submit" icon={<PlayCircleIcon />} />
            {/* <DefaulButton type="submit" icon={<StopCircleIcon />} color="red" /> */}
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
