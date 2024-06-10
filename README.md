# API para Validação de Senha

- [Funcionalidades](#funcionalidades)
  - [Requisitos da Senha](#requisitos-da-senha)
    - [Exemplos](#exemplos)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Como Executar o Projeto?](#como-executar-o-projeto)
    - [Pré-requisitos](#pré-requisitos)
    - [Passos para Execução do Projeto](#passos-para-execução-do-projeto)
    - [Execução dos Testes](#execução-dos-testes)
  - [Decisões Técnicas do Projeto](#decisões-técnicas)
    - [Implementação do Validador](#implementação-do-validador)
- [Contato](#contato)

Este projeto consiste em uma API REST desenvolvida utilizando NestJS e TypeScript. A API expõe um endpoint para validar se a senha do usuário corresponde a determinados critérios.

## Funcionalidades

A API dispõe de um único endpoint, que verifica se uma senha é válida de acordo com critérios específicos.

- URL: `/validate/password`
- Método: `POST`
- Input: o body da requisição deve seguir a interface abaixo.
  ```typescript
  {
    "password": string
  }
  ```
- Output:
  ```typescript
  true / false;
  ```

## Requisitos da Senha

Uma senha é considerada válida se atender aos seguintes critérios:

- Contém nove ou mais caracteres.
- Contém pelo menos 1 dígito.
- Contém pelo menos 1 letra minúscula.
- Contém pelo menos 1 letra maiúscula.
- Contém pelo menos 1 caractere especial (`!@#$%^&*()-+`).
- Não contém caracteres repetidos.

> Espaços em branco não são considerados caracteres válidos.

### Exemplos

```javascript
isValid(''); // false
isValid('aa'); // false
isValid('ab'); // false
isValid('AAAbbbCc'); // false
isValid('AbTp9!foo'); // false
isValid('AbTp9!foA'); // false
isValid('AbTp9 fok'); // false
isValid('AbTp9!fok'); // true
```

## Tecnologias Utilizadas

Abaixo são elencadas as principais tecnologias que foram utilizadas no projeto:

- NestJS
- TypeScript
- `@nestjs/testing` e `jest`: ferramentas de _test runner_.

## Como Executar o Projeto?

### Pré-requisitos

É necessário que as ferramentas elencadas abaixo estejam devidamente instaladas em sua máquina:

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior)
- yarn (versão 1)

### Passos para Execução do Projeto

1. Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/walissonsilva/nestjs-password-validation.git
cd nestjs-password-validation
```

2. Instale as dependências:

```bash
yarn install
```

3. Execute o servidor:

```bash
yarn start:dev
```

O comando acima executa o servidor em modo de desenvolvimento. Alternativamente, você pode prefirir build o projeto antes de executá-lo. Nesse caso, utilize o comando:

```bash
yarn build && yarn start:prod
```

### Execução dos Testes

Para rodar todos os testes da aplicação, utilize o comando:

```bash
yarn test
```

## Decisões Técnicas do Projeto

### Implementação do Validador

Embora tenha sido solicitado o desenvolvimento de um endpoint apenas para a validação de senha, eu optei por tentar criar uma solução que fosse capaz de abstrair um validador genérico e que, a partir dele, fosse possível criar um validador de senhas que validasse as regras que foram especificadas no documento do problema.

Essa implementação do validador foi feita utilizando os princípios do SOLID, a fim de favorecer essa abstração e tornar o código mais extensível e com baixo acoplamento.

Essa abstração iniciou com a criação da interface `IValidationRule` que consiste em um contrato para a implementação de uma classe que represente uma regra de validação. Com base nessa interface, foi criada uma classe abstrata, `ValidationRule`, para que as regras de validação fossem criadas extendendo desta classe (herança), exigindo que haja um método `validate` que retorna um booleano, indicando se a validação passou (`true`) ou não (`false`).

Com isso, foram criadas as regras de validação da senha, as quais estão no arquivo `PasswordRules.ts`. Para exemplificar, na classe `LowerCaseRule`, o método `validate` retorna `true` caso exista, pelo menos, um caractere que corresponda a uma letra minúscula.

> 💡 Apesar de todas as classes das regras de validação da senha terem sido criadas com nomes intuitivos (significativos), foi também adicionada uma documentação ao método `validate` de cada uma delas, a fim de melhorar a experiência de desenvolvimento.

Com a implementação da interface do `ValidationRule` também foi possível criar um validador genérico, o `BaseValidator` (arquivo `BaseValidator.ts`). Ele consiste em uma classe cujo construtor recebe um array de `ValidationRule`, correspondendo às regras que deverão ser validadas por ele. Além disso, o `BaseValidator` possui o método `validate`, o qual combina todas as regras que foram passadas no construtor; ele retorna `true`, se todas as regras retornam `true`, e `false`, caso contrário.

> 💡 O método `validate` do `BaseValidate` também foi documentado.

Com o `BaseValidator` ficou simples criar o `PasswordValidator` e, para isso, foi necessário apenas utilizar o conceito de herança (veja o arquivo `PasswordValidator.ts`). Além disso, será fácil criar qualquer outro validador, com suas próprias regras, apenas utilizando a interface do `ValidationRule` e o próprio `BaseValidator`.

#### O que acontece quando é passado um array vazio de regras (`ValidationRule`)?

Nesse caso, como não existe nenhuma regra definida, o validador retornará sempre `true` para qualquer input que for fornecido.

> 🧪 Observe os testes que foram desenvolvidos no arquivo `BaseValidator.test.ts`.

# Contato

Qualquer dúvida, entre em contato:

- [LinkedIn](https://www.linkedin.com/in/walissonsilva/)
- Email: [walissonsilva.dev@gmail.com](mailto:walissonsilva.dev@gmail.com) | [walissonsilva.me@gmail.com](mailto:walissonsilva.me@gmail.com)
- WhatsApp: (11) 9 5787-2138
