# Exercício 1
### Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
O construtor dentro de uma classe tem o papel de instruir o usuário que cria uma instância dela. Classes com construtores definidos só permitem que instâncias sejam criadas se respeitarem determinadas limitações. Sendo assim, construtores são condições que precisam ser atendidas para que uma intância de uma classe seja criada.

Na verdade, a resposta acima está errada.

Um construtor possui uma função mais ampla do que a descrita. Ele é responsável por executar uma série de ações na inicialização de um objeto. Por inicialização entende-se quando for criado. Parte dessa inicialização pode ser demandar de um usuário parâmetros para que a instância seja criada. Mas não somente. A inicialização pode ser a declaração de variáveis ou também a execução de funções.

### Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?

Somente uma vez.

### Como conseguimos ter acesso às propriedades privadas de uma classe?

O acesso às propriedades privadas de uma classe se dá ao se usar métodos públicos que se relacionam a elas. Com isso, somente determinadas alteraçãoes a uma propriedade são permitidas e o usuário deixa de ter total controle sobre o que está acontecendo.