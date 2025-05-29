import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import style from "./styles.module.css";
import { RouterLink } from "../../components/RouterLink";
export function NotFound() {
  return (
    <MainTemplate>
      <GenericHtml>
        <Container>
          <Heading>😕 Opa! Essa página sumiu...</Heading>
          <div className={style.center}>
            <p>Não conseguimos encontrar o que você está procurando.</p>
            <p>
              Talvez o link esteja quebrado ou a página tenha sido removida.
            </p>
            <p>
              Você pode{" "}
              <RouterLink href="/">voltar para a página inicial</RouterLink> e
              continuar sua jornada por lá.
            </p>
          </div>
        </Container>
      </GenericHtml>
    </MainTemplate>
  );
}
