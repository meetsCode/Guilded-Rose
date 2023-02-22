## Razón

La razón de esta rama es investigar como resolver esta kata usando una
filosofía SOLID y para ello aplicando los patrones de diseño que sean
necesarios o nos permita el lenguaje.

En mi caso he tenido que investigar bastante para poder obtener los métodos,
funciones o comandos de JavaScript que me permitieran exprimir al
máximo la implementación del paradigma OOP.

En cada commit intento hacer una justificación de lo hecho.

Este fichero irá, por lo tanto creciendo con cada commit.

En la rama js-2023 el equipo optó por trabajar directamente con los if. El
método era primero cambiar todo el test de los if por una función que fuera descriptiva
Esto nos ayudaría a entender qué estaba seleccionando en cada if.
Además cambiamos la acción que se ejecutaba por una función desciptiva.
Eso nos daba una lectura clara de la lógica del programa.
Este ejercicio habría sido necesario y muy útil si no fuera porque ya teníamos
la lógica expresado en las reglas del ejercicio. Me gustó hacer este ejercicio aunque
nos alejó del objetivo.
De haber tenido más tiempo quizás habríamos limpiado más el código aplicando la
técnica que se observa en este vídeo corto:
https://youtube.com/shorts/5n9mUQSykbM?feature=share

Este repositorio que uso no es el original de la kata sino un fork algo modificado por
el grupo de SoftwareCraftersMurcia.


## En este commit
Veo en el test que el mínimo de calidad de la clase Conjured no se respeta.
Corrijo ese error poniendo una función que calcule el mínimo.
También encuentro un error en el fichero de test que le falta un espacio al final.


## [js-2023-luis-v2 7031aae] corregido el test y creado la clase Item por defecto
Busco pasar test a verde. Debo hacer que Articulo, ante la duda cree la clase Item por defecto.
Para ello debo de crear un nuevo inicializador de la clase. Lo haré con una función de clase
que JS se llaman static que llamaré nuevo.
Resulta que cuando paso el test veo que el test es el que está mal!!!!
tengo que modificar el producto Cojurado. Dicen las instruccionoes que se degrada el doble
de rápido que un producto normal. Eso de dice que para cada día que pasa la calidad se
reduce en -2 para un día normal y -4 para un caducado.


## 3fd22ae delegacion en subclase estandar
Ahora ya puedo programar sin complejos subclases. La clase Articulo quedará como
constructor o creador de clases. Yo solo tengo que llamar a la clase Articulo y él
me devolverá la subclase que mejor corresponda con el tipo de artículo.
Cada subtipo de artículo tendrá su propio comportamiento. Es decir que el método y su lógica
updateQuality() y su lógica no la ejecuta la clase Shop sino que Shop recibe el mensaje
y deriva la responsabilidad a cada objeto.


## 5fb7c3f
Creo la rama partiendo del mismo lugar que la rama js-2023.
Compruebo que las dependencias están y los test funcionan.
```sh
git checkout ca7f8739
git switch -c js-2023-luis
cd javascript
npm install
npm run test
```
Y la versión de node  `node -v` es correcta y ejecuta sin problemas  `node run.js`
Modifico el .gitignore para que no incluya ningún fichero del S.O. ni del IDE

Leo que no puedo modificar la clase item tan solo puedo modificar el método Shop>updateQuality.

Como quiero conservar las propiedades de Item mi planteamiento es crear una
subclase de Item que me permita hacer modificaciones (sobrescribir) a la superclase.
Con eso consigo libertad al escribir código y mantener las propiedades de Item.

El único pero es que ahora los Item serán substituidos por la nueva clase pero para eso
no tengo ninguna limitación porque la clase Shop y el fichero ejecutable (run.js)
son modificables.

Construyo en este commit la clase heredera de Item y compruebo que al crearse instancia
correctamente su superclase.






## fuentes
- [meetup](https://www.meetup.com/software-craftsmanship-murcia/events/291070959/)
- [github original internacional](https://github.com/emilybache/GildedRose-Refactoring-Kata/)
- [github original Murcia](https://github.com/SoftwareCraftersMurcia/Guilded-Rose/tree/js-2023)
- [github mi fork Murcia](https://github.com/meetsCode/Guilded-Rose)
- [Cómo limpiar código con if](https://youtube.com/shorts/5n9mUQSykbM?feature=share)
- [Sintaxis de markdown](https://www.markdownguide.org/cheat-sheet/)
- [Testing con Jest. Oficial](https://jestjs.io/docs/getting-started)
- [Conceptos del Testing en JavaScript](https://github.com/goldbergyoni/javascript-testing-best-practices/blob/master/readme-es.md#sección-0%EF%B8%8F⃣-la-regla-de-oro)
- Testingo con Jest de tecnops.es (autor kimagure44) [parte 1](https://tecnops.es/testing-en-javascript-con-jest-parte-1-de-2/) y [parte 2}(https://tecnops.es/testing-en-javascript-con-jest-parte-2-de-2/)
- [sobre instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
- Sobre clases y herencias dos artículos:
  * [subclassing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/)
  * [Using_classes Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_Classes)
  * [Using_classes reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
  * [complete guide de Dmitri](https://dmitripavlutin.com/javascript-classes-complete-guide/)
  * [herencia de Dmitri](https://dmitripavlutin.com/javascript-prototypal-inheritance/)
