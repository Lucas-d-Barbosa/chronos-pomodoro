import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function AboutPomodoro() {
  return (
    <MainTemplate>
      <GenericHtml>
        <Container>
          <Heading>A Técnica Pomodoro </Heading>
          <p>
            A técnica Pomodoro é um método de gestão de tempo criado para
            aumentar a produtividade e o foco durante as atividades. Ela
            consiste em dividir o trabalho em blocos de tempo de 25 minutos,
            chamados “pomodoros”, seguidos por breves pausas de 5 minutos. Após
            a realização de quatro pomodoros, é recomendada uma pausa mais
            longa, geralmente de 15 a 30 minutos. Essa técnica ajuda a combater
            a procrastinação, melhora a concentração e permite que o cérebro
            descanse regularmente, tornando o processo de estudo ou trabalho
            mais eficiente e menos cansativo.
          </p>
          <img
            src="https://imgs.search.brave.com/PDFLi_Tvg_7TZtugs0Kx3hUxabg3BnFndvoHEI3dim0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nZWVr/Ym90LmNvbS9ibG9n/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzAxLzYxNzYxNjA3/NDk3NjUxXy5waWNf/aGQtMTQwMHg3MzYu/cG5n"
            alt=""
          />
          <h2>Como funciona a técnica Pomodoro? 🍅 </h2>
          <ol>
            <li>
              📝 <strong>Escolha a tarefa</strong> que você quer realizar.
            </li>
            <li>
              ⏲️ Configure um timer para <strong>25 minutos</strong>, que será o
              seu "<strong>pomodoro</strong>".
            </li>
            <li>
              🎯 Trabalhe focado na tarefa até o timer tocar,{" "}
              <strong>sem distrações</strong>.
            </li>
            <li>
              ☕ Quando o timer tocar, faça uma{" "}
              <strong>pausa curta de 5 minutos</strong>.
            </li>
            <li>
              🔁 Repita o ciclo de{" "}
              <strong>25 minutos de trabalho e 5 minutos de pausa</strong> mais
              três vezes.
            </li>
            <li>
              🧘 Após quatro pomodoros, faça uma{" "}
              <strong>pausa mais longa</strong>, entre{" "}
              <strong>15 e 30 minutos</strong>.
            </li>
            <li>
              🔄 Volte ao ciclo para{" "}
              <strong>manter o foco e a produtividade</strong> ao longo do dia.
            </li>
          </ol>

          <h2> Por que nosso aplicativo é diferenciado?✨</h2>
          <ul>
            <li>
              ⏳ <strong>Personalize o tempo de foco e descanso</strong>{" "}
              conforme sua necessidade para maximizar sua produtividade.
            </li>
            <li>
              🖥️📱 <strong>Acesse de qualquer dispositivo</strong> via web, seja
              no computador, tablet ou smartphone, sem complicação.
            </li>
            <li>
              ⚙️ <strong>Configurações flexíveis</strong> que permitem ajustar
              ciclos, pausas longas e curtas de forma simples e rápida.
            </li>
            <li>
              🚀 <strong>Otimize seu tempo</strong> com uma interface intuitiva,
              focada em ajudar você a manter o foco e descansar na medida certa.
            </li>
          </ul>

          <h2> Visualização de Histórico Inteligente 📊</h2>
          <ul>
            <li>
              💾 <strong>Seu histórico de sessões é salvo localmente</strong> no
              navegador usando o <em>localStorage</em>, garantindo privacidade e
              rapidez.
            </li>
            <li>
              🕒 <strong>Acompanhe facilmente seu progresso</strong> ao longo do
              tempo com registros claros e acessíveis a qualquer momento.
            </li>
            <li>
              🔄 <strong>Sem necessidade de conexão com a internet</strong> para
              consultar o histórico, tudo fica armazenado no seu dispositivo.
            </li>
            <li>
              📈 <strong>Melhore sua produtividade</strong> analisando dados
              reais das suas sessões anteriores para ajustar seus ciclos de foco
              e descanso.
            </li>
          </ul>

          <h2>Por que usar o Chronos Pomodoro? 🚀</h2>
          <ul>
            <li>
              ⏰ <strong>Personalização completa:</strong> ajuste os tempos de
              foco e descanso conforme sua necessidade para maximizar sua
              produtividade.
            </li>
            <li>
              🌐 <strong>Acesso multiplataforma:</strong> utilize o Chronos
              Pomodoro em qualquer dispositivo com acesso à web, sem instalação
              necessária.
            </li>
            <li>
              💾 <strong>Histórico local seguro:</strong> seus dados ficam
              salvos no seu navegador, garantindo privacidade e rapidez no
              acesso.
            </li>
            <li>
              🎯 <strong>Interface intuitiva e simples:</strong> foco no que
              realmente importa, para você manter a concentração sem distrações.
            </li>
            <li>
              🔔 <strong>Notificações inteligentes:</strong> para te avisar
              quando iniciar e terminar seus ciclos, mantendo seu ritmo.
            </li>
          </ul>
        </Container>
      </GenericHtml>
    </MainTemplate>
  );
}
