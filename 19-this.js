// This en JS

// Thies es una palabra reservada de sistema y No podemos usarla para nombrar varibales o funciones.

const reservation = {
    userName : "Edwar",
    lastName : "Velásquez",
    userAge : 42,
    totalPay : 420000,
    isPayed : true,


    information : function(){
        console.log(`El cliente ${this.userName} reservó y la cantidad a pagar es ${this.totalPay} `)
    }
}

console.log(reservation.information());
console.log(reservation.lastName);


const reservation2 = {
    userName : "Carlos",
    lastName : "Perez",
    userAge : 42,
    totalPay : 20000,
    isPayed : true,


    information : function() {
        console.log(`El cliente ${this.userName} reservó y la cantidad a pagar es ${this.totalPay} `)
    }
}

console.log(reservation2.information());