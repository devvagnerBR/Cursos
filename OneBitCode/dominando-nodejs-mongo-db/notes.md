[HTTP] = Protocolo de comunicação web
este protocolo possui <verbos> estes verbos ajudam a indentificar
que tipo de ação queremos realizar numa determinada URL;
Ex: GET/users - POST/users

# STATUS REQUISIÇÕES

    - status(100) : são apenas respostas informativas ao cliente;

    - status(200) : success;

    - status(300) : mensagem de redirecionamento;

    - status(400) : sistema inváido;
    - status(401) : informa que o cliente precisa se autenticar;
    - status(403) : informa que o cliente, apesar de autenticado, não tem acesso permitido ao recurso;
    - status(404) : informação não encontrada no servidor;
    - status(422) : requisição bem formada, mas possui erros semânticos;

    - status(500) : representam dados no servidor;

# Montando um servidor HTTP

// MVC = Model-View-Controller

    - Model: Responsável por lidar com os dados, desde a sua leitura, armazenamento e validação;
    - View: É a parte de exibição de dados para o usuário;
    - Controller: Responsável por receber as requisições das views e chamar o model correto;

// Express

    - middlewares
    - segue padrão Chain of Responsibility

instalando: npm install express --save

# nodemom =  ele fica vigiando alteraçoes e atualiza em tempo real;

    - instalando: npm install nodemon --save-dev

# "dev": "nodemon"
dasdasd
