# Trabalho-extra-de-Web-Full-Stack
Meu projeto individual de uma API REST simples utilizando Node.js e Express, a API foi criada para gerenciar uma lista de tarefa com funcionalidades básicas de CRUD.


<h2>Descrição do projeto</h2>
<p>Esta é uma API REST simples desenvolvida em Node.js utilizando o framework Express. Ela permite gerenciar uma lista de tarefas (To-Do List) com as operações básicas de CRUD: criar, listar, atualizar e excluir tarefas.</p>
<p>A comunicação é feita via JSON e as tarefas são armazenadas em memória (sem banco de dados). O projeto utiliza dotenv para variáveis de ambiente e nodemon para facilitar o desenvolvimento.</p>

<h2>Pré-requisitos</h2>
<ul>
<li>Node.js instalado (recomenda-se versão 16+)</li>
<li>npm (gerenciador de pacotes do Node.js)</li>
</ul>

<h2>Instalação</h2>
<ol>
<li>Clone ou baixe este repositório</li>
<li>No terminal, navegue até a pasta do projeto</li>
<li>Execute o comando para instalar as dependências:</li>
</ol>
<pre><code>npm install
</code></pre>

<h2>Como iniciar o servidor</h2>
<p>Use o comando para iniciar o servidor com nodemon:</p>
<pre><code>npm run dev
<p>Por padrão o servidor estará disponível em <code>http://localhost:3000</code>.</p>

<h2>Rotas disponíveis</h2>
<table>
<thead>
<tr><th>Método</th><th>Rota</th><th>Descrição</th></tr>
</thead>
<tbody>
<tr><td>GET</td><td>/tarefas</td><td>Lista todas as tarefas</td></tr>
<tr><td>POST</td><td>/tarefas</td><td>Cria uma nova tarefa</td></tr>
<tr><td>PUT</td><td>/tarefas/:id</td><td>Atualiza uma tarefa pelo ID</td></tr>
<tr><td>DELETE</td><td>/tarefas/:id</td><td>Exclui uma tarefa pelo ID</td></tr>
</tbody>
</table>

<h2>Exemplo de JSON para uso nas requisições</h2>
<p>Para criar ou atualizar uma tarefa, envie um JSON no corpo da requisição, por exemplo:</p>
<pre><code>{
  "descricao": "Comprar leite",
  "concluida": false
}
</code></pre>

<h2>Como testar no Postman</h2>
<ul>
<li>Importe as rotas acima no Postman</li>
<li>Use método GET para listar tarefas</li>
<li>Use método POST com JSON no corpo para criar tarefa</li>
<li>Use método PUT com ID na URL e JSON no corpo para atualizar tarefa</li>
<li>Use método DELETE com ID na URL para remover tarefa</li>
</ul>

<hr />

</body>
