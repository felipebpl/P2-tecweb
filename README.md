# Projeto 2 - Tecnologias Web

Página de filmes e séries feita em React e backend feito em Django REST framework. 

# OBSERVAÇÃO PARA A CORREÇÃO DO P2 (percebi estudando para a prova final)
- BACKEND
  - Tava dando certo depois que eu migrei o backend do sqlite3 para o postgree, porém parece que depois que eu commitei estava dando erro de conexão com o banco de dados.
  - Fiz uma branch ("sqlite3") utilizando o sqlite que roda perfeitamente. 
- FRONTEND
  - Antes rodando perfeitamente como mostrado na aula, porém erro de rodar depois do ultimo commit. O erro ocorria pois faltava a pasta node modules. Por algum motivo no commit final a pasta node_modules não entrou, e eu não percebi. Para resolver basta entrar na pasta frontend-react/cinelist/ e rodar no terminal: $ npm install. Depois basta dar $ npm start e o frontendo funcionará perfeitamente. 


### Funcionalidades:

- Acesso a filmes de diferentes gêneros, disponibilizando mais informações sobre o mesmo (trailer, data, descrição, etc.)
- Acesso a séries de diferentes gêneros, disponibilizando mais informações sobre o mesmo (trailer, data, descrição, etc.)
- Adicionar filme/série para lista personalizada : "Minha Lista"
- Deploy da aplicação do django no utilizando o Heroku: https://cinelist-backend.herokuapp.com/minha-lista/
- Banco de dados utilizando Docker e postgrees 

### API :

- The Movie Database : https://www.themoviedb.org/
- Para desenvolvedores: https://api.themoviedb.org/3

### Propostas para A+: 

- Estilo da página 
- Usabilidade de navegação entre filmes/séries voltadas para a melhor experiência do usuário. 
- Assim que escolhe um filme ou série, o usuário automaticamente assiste ao seu trailer, o que acaba ajudando muito na sua escolha. 
- Frontend responsivo para diferente tamanhos de tela, inclusive mobile. 
