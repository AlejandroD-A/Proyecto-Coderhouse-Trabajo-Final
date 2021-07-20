## Proyecto Final- Segunda entrega

A partir de la primera entrega se debia cumplir: 

Implementar diferentes persistencias utilizando clases con la misma interfaz( los mismos metodos ). Cada clase debia representar una persistencia diferente.
Para seleccionar el modo de persistencia se debia usar el patron Factory el cual reciba un numero de persistenca y devolver el objeto correspondiente para el uso por parte del controlador.

---
La variable global para cambiar la persistencia se encuentra en `config\index`. Segun el numero :
   **1** FileSystem
   **2** Mongo
   **3** MongoAtlas
   **4** MySql 

Cada clase que devuelve el Factory implementa los metodos definidos en Persistencia `persistence/Persistence.js` la cual hace de interfaz, y otorga los metodos : 
 * **connectDB** : Se utiliza en server.js para iniciar la db
 * **getModel**: En los controladores para obtener el model correspondiente para realizar las operaciones del CRUD.


----

Para ejecutar en local:   
`npm run dev`

El nombre de la base de datos en mysql es `ecommerce`
Para realizar las migracion en mysql:
`npm run mysql:migrate`

Para realizar el drop de las tablas: 
`npm run mysql:drop`

---
#### Rutas: 

 ##### Productos

 * **Obtener todos los productos**
    * `GET` | /productos/listar
  
 * **Filtrar Productos**
    * `GET` |  /productos/listar?nombre=producto&codigo=5&precio=200.00&stock=1
  
 * **Obtener un producto**
    * `GET` |  /productos/listar/:id 
 
 * **Crear un nuevo producto**
    * `POST` |  /productos/agregar
 
 * **Actualizar  producto**
    * `PUT` |  /productos/actualizar/:id
 
 * **Eliminar producto**
    * `DELETE` |  /productos/borrar/:id
 
 ##### Carrito

* **Obtener todos los productos del carrito con los campos id y timestamps de carrito**
    * `GET` | /carrito/listar
  
 * **Obtener un producto del carrito con los campos id y timestamps de carrito**
    * `GET` |  /carrito/listar/:id 
 
 * **Agregar al carrito**
    * `POST` |  /carrito/agregar/:id_producto
 
 * **Eliminar item del carrito**
    * `DELETE` |  /carrito/borrar/:id







---
 *made with* :persevere: *by ale*
