## Exercício 1
a) Seria possível imprimir a senha (password) atrelada a essa instância?

    Não seria possível imprimir a senha atrelada à instância em questão porque sua propriedade, além de ser privada, não é acessada por nenhum método público que faria a função de um getter.

b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?

     Uma vez.

## Exercício 2
a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 

    Uma vez.

b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?

    Duas vezes. O motivo desse construtor ter sido chamado no terminal se refere ao fato da classe `Customer`  ser uma subclasse de User. Assim, quando criamos um novo Customer, também estamos criando um User.

## Exercício 3
a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?

     Não seria possível fazer essa impressão. Como Customer é uma subclasse de User, que possui a propriedade password privada, não é possível acessá-la.

## Exercício 4

Adicione um método público à classe User. Esse método deve ter o nome de introduceYourself("apresente-se") e deve retornar a mensagem: "Olá, bom dia!". As classes filhas sempre têm acesso aos métodos públicos da classe pai. Então, para realizar o teste dessa sua função, faça com que a instância que você criou para a classe Customer chame esse método