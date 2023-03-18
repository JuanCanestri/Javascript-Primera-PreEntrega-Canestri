// Primera PreEntrega - Juan Canestri - JS - CoderHouse

// Tema: Menu de peliculas para puntuar

// Todo el codigo se encierra en un do/while para repetir el proceso
do{
    // Mensaje de bienvenida y acceso a Menu
    alert("< Bienvenido a ShowCase > \n A continuación puede ver la grilla de peliculas para puntuar.");
    alert("< Grilla > \n 1 - John Wick 4 \n 2 - Quizas para siempre \n 3 - La ballena 2 \n 4 - Close \n 5 - Creed III");
    let opcion=0;
    let valid1=false;

    // Validacion de la elección de un numero del 1 al 5
    do {
        opcion = Number(prompt("< Ingrese el número de la película que desea puntuar >"));
        if (opcion<1 || opcion >5) {
            valid1=true;
            alert("Por favor, ingrese un número valido");
        } else {
            break;
        }
    } while (valid1=true);

    // Guardamos la pelicula elegida a través de un switch en una variable para poder puntuar
        switch (opcion) {
            case 1:
                pelicula = "John Wick 4";
                break;
            case 2:
                pelicula = "Quizas para siempre";
                break;
            case 3:
                pelicula = "La ballena";
                break;
            case 4:
                pelicula = "Close";
                break;
            case 5:
                pelicula = "Creed III";
                break;    
        }

    // Mensaje de confirmación de la pelicula seleccionada y pedido de puntuación
    let puntuacion = prompt("Espero que haya disfrutado de la pelicula: "+ pelicula + ". \nQue puntaje del 1 al 5 le darias a la película? \n 1 - Flojisima \n 2- Mala \n 3- Me gustaron algunas partes \n 4 - Muy buena \n 5 - Excelente")

    // Validacion
    let valid2=false;
    do {
        if (puntuacion == "1") {
            alert("Lamentamos mucho que no le haya gustado la pelicula");
            break;
        } else if (puntuacion == "2") {
            alert("Lamentamos mucho que no le haya gustado la pelicula");
            break;
        } else if (puntuacion == "3") {
            alert("Nos alegra que haya podido disfrutar de al menos unas partes de la película");
            break;
        } else if (puntuacion == "4") {
            alert("Que buena noticia! Te esperamos nuevamente");
            break;
        } else if (puntuacion == "5") {
            alert("Excelente! sale " + pelicula + " de nuevo?");
            break;
        } else {
            alert("Debe haber un error, por favor ingrese una puntuación válida")
            valid2=true;
        }
    } while (valid2=true);

} while (confirm("Desea puntuar otra pelicula?"))

// Mensaje despedida
alert("Muchas gracias por el feedback!! te esperamos nuevamente por acá!")

