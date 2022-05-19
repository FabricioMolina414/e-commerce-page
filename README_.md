
# E-commerce page 🛒

En este proyecto se creó la simulación de la compra de un producto. Esta idea es proveniente de 
un desafío que se obtuvo de la página [Fontend Mentor](https://www.frontendmentor.io/).


## Preview 📸

[![e-commerce-page.png](https://i.postimg.cc/qRW1yN3d/e-commerce-page.png)](https://postimg.cc/BLc5GQph)

## Tecnologías utilizadas 🛠️

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JAVASCXRIPT](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![JQUERY](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)


### Librerías complemetarias 🔩

Además de las tecnologías mencionadas, también se incorporaron dos librerías en este proyecto. 

- Para las animaciones del carrito y del menú en la versión mobile se utilizó la librería [Animate.css](https://animate.style/).
- Para el slider de las imágenes se utilizó la librería [Slick](https://kenwheeler.github.io/slick/).
## Funcionamiento ⚙️

- Secciones
En la página podríamos elegir la sección a la cual nos queremos dirigir. En este proyecto sólo se 
genera el efecto de selección pero al hacer clic sobre algunas de estas, no ingresa a ningún lado.

[![ecommerce-page-section.png](https://i.postimg.cc/qvB0mxww/ecommerce-page-section.png)](https://postimg.cc/2VtPyvPL)


- Funcionamiento del contador
En el contador podemos aumentar la cantidad de unidades del producto que queremos hasta llegar al límite 
de stock, que para este proyecto se eligió un stock igual a 9.
También podemos disminuir la cantidad de unidades del producto hasta llegar a 0. Esto se logra presionando los 
símbolos de ➕ para aumentar las unidades y ➖ para disminuirlas. 

[![ecommerce-page-contador.png](https://i.postimg.cc/rpXPz8HH/ecommerce-page-contador.png)](https://postimg.cc/RWdRDz41)

- Agregar al carrito 
Una vez que se haya seleccionado la cantidad de unidades deseadas, podemos agregar el 
pedido al carrito presionando el botón _**Add to cart**_. Una vez hecho esto, nos aparecerá el 
número de productos seleccionados en el ícono del carrito que se encuentra en la parte 
superior derecha de la página. 
En el caso que se presione el botón de _**Add to cart**_ y el valor del contador 
sea 0, no se mostrará ningún número sobre el ícono del carrito. 

[![ecommerce-page-cart-full.png](https://i.postimg.cc/dt8v3WQQ/ecommerce-page-cart-full.png)](https://postimg.cc/vcHCSt6C)
_Este es un ejemplo dónde se presionó el botón de **Add to cart** y el valor del contador era 4._

- Funcionamiento del carrito
Una vez que se agregararon las unidades del producto al carrito, podemos previsualizar si se 
cargaron correctamente la cantidad elegida y además podemos ver el monto total. Esto lo 
logramos haciendo clic sobre el ícono del carrito.
En el caso de que se haga clic sobre el ícono y 
no haya productos seleccionados, se mostrará el mensaje _**Your cart is empty.**_

[![ecommerce-page-cart-empty.png](https://i.postimg.cc/PrLp7nM3/ecommerce-page-cart-empty.png)](https://postimg.cc/HVgkJKRX)
_Este es un ejemplo cuando el carrito está vacío._

[![ecommerce-page-cart-full2.png](https://i.postimg.cc/cLvJHRzF/ecommerce-page-cart-full2.png)](https://postimg.cc/BjG37K4F)
_Este es un ejemplo cuando el carrito tiene algún producto seleccionado._


Cómo vemos en la última imagen, cuando el carrito tiene algún producto, este se puede eliminar 
del carrito haciendo clic sobre el ícono del cesto de basura. 
También cuenta con un botón de 
_**Checkout**_ el cual simularía que se va a redirigir a otra página para finalizar la compra. Sin 
embargo, en este proyecto no ejecuta ninguna acción. 
## Visitá la página del proyecto 🚀

https://fabriciomolina414.github.io/e-commerce-page/