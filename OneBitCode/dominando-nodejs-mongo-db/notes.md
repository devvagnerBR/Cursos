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
    - segue padrão Chain of Responsibility | cadeia de responsabilidade

instalando: npm install express --save

# nodemom = ele fica vigiando alteraçoes e atualiza em tempo real;

    - instalando: npm install nodemon --save-dev

# "dev": "nodemon"

# MongoDB | Banco de dados relacionados a documentos. armazena documentos em formato similar a JSON'S que não precisam ter uma estrutura previamente definida

    - são em formatos JavScript  .BSON

# Why use MongoDb?

    - Sem esquema fixo;
    - Alta performance;
    - Alta disponibilidade;
    - Fácil escalabidade;

# INSTALAÇÃO MongoDb

# USANDO MONGODB

    - terminal PowerShell :
        mongod

    - terminal mongosh : ENTER

    - show dbs : monstra todos os bancos  de dados
    - use todo-list :  começa a usar esse banco | ou cria caso não tenha

    [CRIANDO A COLLECTION(TABLE)]

    db.createCollection('checklists')

    - show collections : mostra todas as COLLECTIONS(TABLES)

    db.checklists.insert({name: 'Primeiro checklist', tasks: [{name: 'Tarefa 1', {name: 'Tarefa 2'}}]})
                 .save : ambos fazem a  mesma coisa

    db.checklists.find({name: 'Primeiro checklist'}) // busca por algo especifico

    db.checklists.updateOne({name: 'Primeiro checklist'}, {$set: {name: 'Primeiro checklist :)))))) '}})

db.checklists.updateOne({ \_Id: ObjectId("638f4a5f065aa5a96ab7aec9") }, {$set: { name: 'Primeiro CheckList haha' }}).

db.checklists.updateOne({"\_id": 638f4a5f065aa5a96ab7aec9, "name": Primeiro Checklist }, {$set: {}})

db.checklists.update({ name: "Primeiro CheckList" }, { name: "Minha checklist" })

# ASSOCIAÇÕES

    one-to-one
    one-to-many
    many-to-many

# REFERÊNCIAS

638f52a4065aa5a96ab7aecc

db.task.insertMany([{name: 'Preparar o café', done: false, checklistsId: ObjectId('638f52a4065aa5a96ab7aecc')}, {name: 'Ligar o notebook', done: true, checklistsId: ObjectId('638f52a4065aa5a96ab7aecc')}])


db.checklists.aggregate({$lookup: {from: "task", localField: "_id", foreignField: "checklistsId", as: "tasks"}}).pretty()