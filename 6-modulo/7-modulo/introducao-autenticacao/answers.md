## 1 

```tsx
import { v4 } from "uuid"

const id = v4();

console.log("Generated Id: ", id);
```

**Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?**
Com relação à comparação, entre strings e números, realmente não tenho uma dimensão prática do significado. O que eu consigo entender, contudo, é que o uso de strings ao invés de números permite que a mesma quantidade de caracteres possa gerar uma magnitude muito maior de combinação do que os números.
Isso porque existe diferenciação entre maiúsculas e minúsculas, além de todos os números que também podem fazer parte de strings.

----
## 2 

```tsx
import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}
```

**O que a linha `as string` faz? Por que precisamos usar ela ali?**

A função `jwt.sign()` pode retornar outros tipos de valores, não somente strings. Ao pontuar `as strings`, o usuário assume para o código que esse código retornará somente strings e que ele não precisa pontuar um conflito nos tipos da variáveis utilizadas.