# Boas-vindas ao repositório do exercício Dogs API!

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Neste exercício você vai desenvolver uma página que consome a API [dog.ceo](https://dog.ceo/dog-api/) de fotos aleatórias de cachorros!

> **Observação 🔎**: Caso você tenha alguma dúvida sobre como fazer requisições, consulte a [documentação](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) para ter mais informações.

Observe a estrutura de dados que a API retorna:

```bash
{
    "message": "https://images.dog.ceo/breeds/bulldog-french/n02108915_5306.jpg",
    "status": "success"
}
```
</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

Neste exercício, verificamos se você é capaz de:

- Ler o estado de um componente e usá-lo para alterar o que exibimos no _browser_;

- Atualizar o estado de um componente;

- Capturar eventos utilizando a sintaxe do React;

- Utilizar o `useEffect` e executar funções assíncronas após a montagem do componente.
</details>

## 1. Crie uma aplicação que consuma a API de fotos aleatórias de cachorros.

Nesse exercício você deve desenvolver uma aplicação React que fará requisições para uma API externa, a `dog.ceo` no endpoint https://dog.ceo/api/breeds/image/random para recuperar imagens de doguinhos. Todo seu código deverá ser implementado no `App.js`.

Ao utilizar essa aplicação, uma pessoa usuária deverá ser capaz de:

- Fazer uma requisição para a API (endpoint: https://dog.ceo/api/breeds/image/random), para recuperar imagens de doguinhos aleatórios.

> **De olho na dica 👀**: Utilize o `useEffect` de forma que seja chamado apenas 1 vez. Você pode usar `imageUrl` e `isLoading` para seus estados iniciais.

- Visualizar uma foto aleatória de um doguinho assim que a página for montada.

- Na primeira vez em que a página carrega, o texto "Loading..." deve ser a única coisa presente na tela.

- Ao receber o retorno da requisição, uma imagem deve ser renderizada com a URL recebida da API. Essa imagem deve ter o atributo `alt` com o valor "Doguinho aleatório".

- Deve existir um botão que dispare uma nova requisição para API quando for clicado. Esse botão deve ter o texto "Novo doguinho!".

> **Atenção ⚠️**: Nesta nova requisição, não é necessário mostrar novamente o `Loading...`.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Se existe um texto `Loading...` presente na tela enquanto a requisição é feita;

- Se existe uma imagem com o atributo `alt` com valor `Doguinho aleatório`;

- Se a imagem renderizada possui o atributo `src` com o valor da URL recebida da API;

- Se existe um botão com o texto `Novo doguinho!`.

</details>

---

## 2. Adicione algumas ações após receber o retorno da requisição para API.

- Utilize o useEffect para armazenar a URL da última imagem gerada no localStorage. Certifique-se de que o useEffect seja chamado sempre que houver uma alteração na URL da imagem, garantindo que os dados sejam atualizados de forma adequada.

- Após a atualização do componente, exiba um `alert` com a raça do doguinho.

> **De olho na dica 👀**: Utilize o método `split` para pegar a raça a partir da URL da imagem.

---

## 3. Adicione outras funcionalidades à página.

- Verifique se existem dados prévios guardados no `localStorage` quando a página é carregada:
  - Se houver, recupere a URL da imagem diretamente do `localStorage`, sem fazer um novo _fetch_.

> **Observação 🔎**: Se o `localStorage` não possuir dados, prossiga com o fluxo normal (fazendo uma nova requisição).

- Renderize a imagem na aplicação com a URL recuperada.

---
