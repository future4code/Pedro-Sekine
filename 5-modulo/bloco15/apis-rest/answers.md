# Respostas do Exercício
## APIs Rest
1. Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. A lista está disponível abaixo.
    > "Qual método HTTP você deve utilizar para isso?"
    - GET
    > Como você indicaria a entidade que está sendo manipulada?
    - A entidade que está sendo manipulada seria indicada por meio do path da minha URL. No caso, ter uma ULR `http:localstorage:3003/users`  já seria um bom indicador da entidade que estou manipulando.
2. Agora, vamos criar um novo endpoint, que busque todos os usuários que tenham uma propriedade type específica, recebendo apenas um type por vez. Após isso, responda:
    > Como você passou os parâmetros de type para a requisição? Por quê?
    - O parâmetro foi passado por Path Params. Pensando agora eu deveria ter usado Query Params como um parâmetro opcional e ter deixado tudo em uma requisição só: ver todos os usuários, ver somente os ADMINs ou somente os NORMALs. Isso porque o estava fazendo uma busca dentro de um conjunto, não aprofundando no caminho da minha URL.
    > Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
    - Como existem somente dois tipos de usuário, é prático e confiável usar `enum` para lidar com essa questão. Assim, comparar a string enviada com o enum garante que um dos dois tipos serão escolhido ou que o usuário fez a busca pela string errada.
3. Vamos agora praticar o uso de buscas mais variáveis. Faça agora um endpoint de busca que encontre um usuário buscando **por nome**.
    > Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
    - Como no caso anterior, acredito que Query Params seja o caminho mais adequado a seguir, permitindo que somente um endpoint cumpra mais de um papel e seja mais flexível.
4. Fizemos algumas buscas no nosso conjunto de itens, agora é hora de **adicionar** coisas. Comecemos criando um usuário na nossa lista. Crie um endpoint que use o método `POST` para adicionar um item ao nosso conjunto de usuários.
    > Mude o método do endpoint para `PUT`. O que mudou?
    - Nada muda. O usuário é criado da mesma forma que ele teria sido caso eu tivesse usado POST.
    > Você considera o método `PUT` apropriado para esta transação? Por quê?
    - Considerando que POST é utilizado para a criação de dados, enquanto o PUT é utilizado para a alteração do que já foi criado, POST é o método adequado, não PUT.