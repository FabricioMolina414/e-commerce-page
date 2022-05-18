$(document).ready(function() {

// Código para revisar el carrito

    // Declaración de variables

    let $cart = $(".header__right--cart");
    let $cartContainer = $(".cart-container");
    let $cartCloseButton = $(".cart--close-button")
    
  

    $cart.click(() => {
        $cartContainer.addClass("cart-container--active animate__animated animate__fadeInDown");
    })

    $cartCloseButton.click(() => {
        $cartContainer.removeClass("cart-container--active animate__animated animate__fadeInDown");
    })



// Código para el carrousel

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $(".carrousel--preview-arrow"),
        nextArrow: $(".carrousel--next-arrow"),
        fade: true,
        dots: true,
        asNavFor: '.slider-nav',
        focusOnSelect: true
    });
    $('.slider-nav').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
    });




// código para las animaciones 

    // declaración de variables para la apertura del menú

    let $menu = $(".header__left--menu");
    let $backgroundMenu = $(".menu__container");
    let $navbar = $(".navbar__container");

    // declaración de variables para el cierre del menú

    let $closeMenuButton = $(".navbar--close-button");

    // Apertura del menú al hacer clic sobre el ícono

    $menu.click(() => {
        $backgroundMenu.addClass("menu__container--active")
        $navbar.addClass("navbar__container--active animate__animated animate__fadeInLeft");

    })

    // Cierre del menú al hacer clic sobre el ícono

    $closeMenuButton.click(() => {
        $backgroundMenu.removeClass("menu__container--active");
        $navbar.removeClass("navbar__container--active");
    })

// Código del contador

//Declaración de variables 
    let quantity = document.querySelector(".counter__display");
    quantity.innerHTML = 0; // iniciamos el contador en cero
    let quantityNumber = parseInt(quantity.innerHTML); //convertimos el string en number
    let add = document.querySelector(".counter--plus");
    let quit = document.querySelector(".counter--minus");

    // Lógica del contador 

    add.addEventListener("click", () => {
        if (quantityNumber === 0 || (quantityNumber > 0 && quantityNumber < 9)) {
            quantityNumber = quantityNumber + 1;
            quantity.innerHTML = String(quantityNumber); // transformo el resultado de tipo number a string
        } 
    })

    quit.addEventListener("click", () => {
        if (quantityNumber === 0) return; 
        if (quantityNumber > 0 && quantityNumber <= 9) {
            quantityNumber = quantityNumber - 1;
            quantity.innerHTML = String(quantityNumber); 
        } // en esta condición tengo que poner que sea <= 9 porque sino queda clavado en 9
    })
    

// Agregar productos al carrito 

    // Declaración de variables 

    let $addToCart = $(".button__container");
    let cartQuantity = document.querySelector(".header__right--count");
    let $cartContainer1 = $(".cart-container1");
    let $cartContainer2 = $(".cart-container2");
    let $cartDescription = $(".cart__description");
    let $trashCanButton = $(".cart__trash-can");


// Detalle del producto - precios acordaes a la cantidad de productos seleccionados. 

    // Se declaran las variables

    const price = 125;  // precio de la unidad
    let total = document.getElementById("price__finish"); 
    total.innerHTML = 0;
    let priceCount = document.getElementById("price__count");
    priceCount.innerHTML = `${quantityNumber}`;


    $addToCart.click(() => {
 

        if (quantity.innerHTML == "0") {
            cartQuantity.style.visibility = "hidden";
            
            $cart.click(() => {
                $cartDescription.removeClass("cart__description--enabled");
                $cartContainer1.removeClass("cart-container1--enabled");
                $cartContainer2.addClass("cart-container2--enabled").removeClass("cart-container2--disabled");

                $cartCloseButton.click(() => {
                    $cartDescription.removeClass("cart__description--enabled");
                    $cartContainer1.removeClass("cart-container1--enabled");
                    $cartContainer2.removeClass("cart-container2--enabled");
                })
            })      
        } 
        
        if (quantity.innerHTML > "0") {
            cartQuantity.style.visibility = "visible";
            cartQuantity.innerHTML = quantity.innerHTML;
            priceCount.innerHTML = `${quantityNumber} :`;

            let numberPriceCount = parseInt(priceCount.innerHTML)
            let subtotal = `$${parseFloat(numberPriceCount * price).toFixed(2)}`; // convertimos a un decimal con dos cifras después de la coma


            total.innerHTML = String(subtotal)

            $cart.click(() => {
                
                $cartDescription.addClass("cart__description--enabled");
                $cartContainer1.addClass("cart-container1--enabled");
                $cartContainer2.addClass("cart-container2--disabled");


                $cartCloseButton.click(() => {
                    $cartDescription.removeClass("cart__description--enabled");
                    $cartContainer1.removeClass("cart-container1--enabled");
                    $cartContainer2.removeClass("cart-container2--disabled cart-container2--enabled");
                })


                $trashCanButton.click(() =>{
                    cartQuantity.style.visibility = "hidden";
                    quantity.innerHTML = "0";
                    quantityNumber = 0

                    $cartDescription.removeClass("cart__description--enabled");
                    $cartContainer1.removeClass("cart-container1--enabled");
                    $cartContainer2.removeClass("cart-container2--disabled");

                    $cart.click(() => {
                        $cartDescription.removeClass("cart__description--enabled");
                        $cartContainer1.removeClass("cart-container1--enabled");
                        $cartContainer2.removeClass("cart-container2--disabled");
                    })
                })
            })
        }

    })


});