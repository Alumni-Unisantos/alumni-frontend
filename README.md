Pré-requisitos

É necessário ter uma versão estável do Node.Js em sua máquina: (recomendação: v20.13.1 )


Para iniciar a aplicação, também é necessário ter o npm instalado em sua máquina (pode ser utilizado também o yarn):


Para realizar a instalação das dependências do projeto, basta executar na raiz do projeto o comando: 

npm install

Após a execução do comando, será criada a pasta node_modules e com isso é possível executar a aplicação:

Para rodar o servidor, basta executar o seguinte comando:

npm run dev

Abra no seu navegador e digite: 

http://localhost:3000


Dicas:

1. npm run dev to Start development server at http://localhost:3000

2. npm run build for Generating production build

3. npm serve To serve build files at http://localhost:9000

#Criação do Feed
Integrantes:
-Alec Emil Meier
-Adrielle Valascvijus Fernandes
-Daniel Domingues Gama
-Gustavo Andrade
-Henry Mitsuo Kasai
-Lavínia Lopes de Lana
-Leonardo Wright Lima
-Matheus Gois Rocha
-Matheus Moledo Fonseca Vasconcelos
-Michael Douglas Santos Costa
-Raquel Nazaré Belfort Costa
-Thiago Conrado Martins\

Alterações: Criação da página de feed com as funcionalidades de buscar postagens e inserir postagens.
Ao abrir a página é realizada uma requisição ao back-end buscando as postagens em ordem decrescente da data da postagem e retornado ao front-end para serem exibidas.
Contudo, é possível observar que a integração com o banco de dados foi realizada de forma local e a estrutura de usuários ainda não foi criada, e por isso está sendo exibido uma imagem padrão na foto do usuário, assim com um nome padrão.

Algumas possíveis sugestões de melhorias futuras são:
-Criação da estrutura de usuários, assim como a integração deles com o banco de dados;
-Inserção de novas funcionalidades sobre as postagens. Exemplo: editar, excluir, curtir, comentar, compartilhar.
-Inserir novos tipos de postagens. Exemplo: evento, enquete, inserção de imagens.
