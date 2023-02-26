import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import * as C from "./styles";

function Details() {
  return (
    <C.Container>
      <Header />

      <main>
        <C.Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao ReactJS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil eius eum atque, eveniet obcaecati tenetur a excepturi aperiam explicabo id sapiente qui minus nisi illo deleniti debitis numquam et.
          </p>

          <Section title="Links Úteis">
            <C.Links>
              <li>
                <a href="#">item 1</a>
              </li>
              <li>
                <a href="#">item 2</a>
              </li>
            </C.Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="sei la" />
            <Tag title="nao sei" />
          </Section>

          <Button title="Voltar" />
        </C.Content>
      </main>
    </C.Container>
  );
}

export default Details;
