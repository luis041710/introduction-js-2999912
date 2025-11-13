// Se va a relaizar un reproductor de canciones

// Metodos de propiedad
const player = {
    play : function(id){
        return(`Reproduciendo cancion ${id}`);
    },

    pause : function(){
        console.log('Pausando cancion...');
    },
}

player.delete = function(id){
    return `Eliminando cancion ${id}`
}

player.create = function(id){
    return `Creando lista de ${id}`
}

console.log(player.play(1023));
console.log(player.pause);
console.log(player.delete(34));
console.log(player.create('vallenato'));
