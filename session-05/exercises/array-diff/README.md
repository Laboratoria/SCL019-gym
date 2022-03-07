---
difficulty:
  - intermediate
OAs:
  - arrays
projects:
  - data-lovers
  - memory-match
---

# Array diff

[https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript](https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript)

Tu objetivo en este ejercicio es implementar una función de diferencia, la cual
"resta" un arreglo de otro y devuelve el resultado.

La "resta" entre un arreglo
`a` y `b` se define así: tomar los elementos de `a` y eliminar los elementos que
también están presentes en `b`.

Se debe mantener el orden original de los elementos

__Ejemplo 1__

```js
Entrada: a=[1,2] b=[1]
Salida: [2]
Explicación: restando de [1,2] la coincidencia de valor [1] el resultado es [2]
```

__Ejemplo 2__

```js
Entrada: a=[1,2,2,2,3], b=[2]
Salida: [1, 3]
Explicación: restando de [1,2,2,2,3] la coincidencia de valor [2] el resultado es [1, 3]
```

> __Importante__ ❗
>
> - Si un valor de `a` está presente en `b`, todas sus coincidencias deben
> eliminarse de `b`
