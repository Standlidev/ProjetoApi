# Pokédex Interativa com PokeAPI

Uma aplicação web simples e dinâmica que consome dados da [PokeAPI](https://pokeapi.co/) para simular o funcionamento de uma Pokédex clássica. O projeto permite pesquisar Pokémons por nome ou ID, navegar sequencialmente e guardar parceiros favoritos diretamente no navegador.

## 🚀 Funcionalidades Construídas

* **Busca Avançada:** Permite encontrar Pokémons digitando o nome ou o número de identificação (ID).
* **Tratamento de Erros Integrado:** Sistema preparado para lidar interativamente com respostas de erro (como o Status 404 para termos não encontrados) ou falhas de ligação à internet, exibindo um ecrã alternativo amigável em vez de travar o sistema.
* **Mensagens de Diagnóstico:** Feedback visual direto no terminal do desenvolvedor com logs estilizados para monitorização de requisições bem-sucedidas (Status 200).
* **Navegação em Loop:** Botões de "Anterior" e "Próximo" que alternam dinamicamente entre os IDs e reiniciam o ciclo automaticamente ao atingir os limites da lista da API.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica dos elementos da Pokédex.
* **CSS3:** Estilização baseada na paleta de cores oficial e posicionamento usando Flexbox moderno.
* **JavaScript (ES6+):** Lógica de programação, manipulação assíncrona do DOM utilizando `async/await` e manipulação da Fetch API.

## 📁 Estrutura de Pastas do Projeto

Conforme as boas práticas exigidas, o projeto está estruturado de forma limpa e modular:

```text
├── index.html       # Página principal da aplicação (HTML)
├── sytle.css        # Folha de estilos e layout (CSS)
└── app.js           # Lógica de consumo da API e eventos (JavaScript)