# Ejercicio de práctica - Git - Github - Markdown
## Pasos realizados en este ejercicio:

1. Se creó una carpeta en el directorio home:
~~~
$ cd
mkdir Git-Markdown-Exercise
~~~
2. Se inicializó un repositorio Git en el directorio creado:
~~~
$ cd Git-Markdown-Exercise
$ git init
~~~
3. Se creó un archivo README.md:
~~~
$ touch README.md
~~~
4. Se modificó el archivo creado agregando un título:
~~~
$ echo '# Ejercicio de practica - Git - Github - Markdown' >> README.md
~~~
5. Se agregaró el archivo README.md al área de *Staging*:
~~~
$ git add README.md
~~~
6. Se realizó un *Commit* para confirmar las modificaciones en el repositorio:
~~~
$ git commit -m "Creado archivo .gitignore y README.md"
~~~
## Respuestas a los interrogantes a investigar

### Sobre Git

#### ¿Qué es una rama?

Git almacena sus datos como una serie de instantáneas o copias de los archivos completos en el estado en que se encuentran en un determinado momento. Esto es lo que sucede al confirmar modificaciónes mediante el comando *commit*. Por lo tanto un rama no es más que un puntero que apunta a una de estas instantáneas, pudiendo haber multiples punteros que apuntan a la misma instantánea. Lo cual permite realizar diferentes ramificaciones de un proyecto a partir de una instantánea en particular y trabajar por separado en cada una de ellas.
#### ¿Qué hacen los comandos add / commit / push ?

El comando *add* se utiliza para agregar modificaciones al área de *Staging*. Para luego confirmar estos cambios utilizando el comando *commit*.
Cuando se trabaja con repositorios remotos, el comando *push* realiza la actualización de estos con los *commits* realizados.
#### Diferencia entre pull y push

Siguiendo con lo explicado anteriormente, a diferencia del comando *push* que se utiliza para actualizar repositorios remotos con los cambios realizados en un repositorio local, el comando *pull* realiza la actualización del repositorio local a partir de un repositorio remoto.
#### Diferencia entre clone e init

El comando *clone* se utiliza para crear una copia de un repositorio remoto en un repositorio local. A diferencia de *init* que solo realiza la inicialización de un repositorio local en un directorio determinado.
### Sobre Markdown

#### ¿Es un lenguaje de programación?

Markdown no es un lenguaje de programación, es simplemente un lenguaje de marcado.
#### ¿Para qué se suele usar comúnmente?

Es comunmente utilizado para formatear textos de publicaciones en blog y sitios web como Reddit, GitHub, etc. Particularmente en GitHub es utilizado para escribir el archivo README.md de cada repositorio y mostrar toda la información importante del mismo.
#### ¿Qué otro lenguaje es similar?

Markdown es similar al lenguaje de marcado *HTML*, pero a diferencia de este, Markdown es más simple y ligero.