const NIVEL_CRITICO_HAMBRE = 80;
const NIVEL_CRITICO_SUENIO = 80;
const NIVEL_CRITICO_ABURRIMIENTO = 20;
const NIVEL_CRITICO_LIMPIEZA = 20;

class Estado {
    constructor(mascota) {
        this.mascota = mascota;
    }

    alimentar() {
        this.mascota.actualizarImagenMascota(this.mascota.obtenerImagen('alimentar'));
    }

    dormir() {
        this.mascota.actualizarImagenMascota(this.mascota.obtenerImagen('dormir'));
    }

    jugar() {
        this.mascota.actualizarImagenMascota(this.mascota.obtenerImagen('jugar'));
    }

    limpiar() {
        this.mascota.actualizarImagenMascota(this.mascota.obtenerImagen('limpiar'));
    }

    valorMaximo(atributo) {
        if (this.mascota[atributo] > 100) {
            this.mascota[atributo] = 100;
        }
    }

    valorMinimo(atributo) {
        if (this.mascota[atributo] < 0) {
            this.mascota[atributo] = 0;
        }
    }
}

class EstadoNormal extends Estado {
    alimentar() {
        super.alimentar();
        this.mascota.hambre -= 5;
        this.valorMaximo('hambre');
    }

    dormir() {
        super.dormir();
        this.mascota.suenio -= 5;
        this.valorMinimo('suenio');
    }

    jugar() {
        super.jugar();
        this.mascota.felicidad += 5;
        this.valorMaximo('felicidad');
    }

    limpiar() {
        super.limpiar();
        this.mascota.limpieza += 5;
        this.valorMaximo('limpieza');
    }
}

class EstadoHambriento extends Estado {
    alimentar() {
        super.alimentar();
        this.mascota.hambre -= 100;
        this.valorMinimo('hambre');
    }

    dormir() {
        super.dormir();
    }

    jugar() {
        super.jugar();
    }

    limpiar() {
        super.limpiar();
    }
}

class EstadoTriste extends Estado {
    jugar() {
        super.jugar();
        this.mascota.felicidad += 100;
        this.valorMaximo('felicidad');
    }

    alimentar() {
        super.alimentar();
    }

    dormir() {
        super.dormir();
    }

    limpiar() {
        super.limpiar();
    }
}

class EstadoCansado extends Estado {
    jugar() {
        super.jugar();
    }

    alimentar() {
        super.alimentar();
    }

    dormir() {
        super.dormir();
        this.mascota.suenio -= 100;
        this.valorMinimo('suenio');
    }

    limpiar() {
        super.limpiar();
    }
}

class EstadoSucio extends Estado {
    jugar() {
        super.jugar();
    }

    alimentar() {
        super.alimentar();
    }

    dormir() {
        super.dormir();
    }

    limpiar() {
        super.limpiar();
        this.mascota.limpieza += 100;
        this.valorMaximo('limpieza');
    }
}

class ImagenBehavior {
    obtenerImagen(mascotaViva) {
        throw new Error('Método obtenerImagen debe ser implementado');
    }
}

class ImagenTigre extends ImagenBehavior {
    obtenerImagen(mascotaViva, estado, accion = '') {
        if (!mascotaViva) {
            return `ImagenesT/tigreAngel.png`;
        }

        switch (estado.constructor) {
            case EstadoHambriento:
                if (accion === 'alimentar') {
                    return 'ImagenesT/tigreComiendo.png';
                }
                return 'ImagenesT/tigreHambriento.png';
            case EstadoTriste:
                if (accion === 'jugar') {
                    return 'ImagenesT/tigreFeliz.png';
                }
                return 'ImagenesT/tigreTriste.png';
            case EstadoCansado:
                if (accion === 'dormir') {
                    return 'ImagenesT/tigreDormido.png';
                }
                return 'ImagenesT/tigreCansado.png';
            case EstadoSucio:
                if (accion === 'limpiar') {
                    return 'ImagenesT/tigreLimpio.png';
                }
                return 'ImagenesT/tigreSucio.png';
            default:
                if (accion === 'alimentar') {
                    return 'ImagenesT/tigreComiendo.png';
                }
                if (accion === 'dormir') {
                    return 'ImagenesT/tigreDormido.png';
                }
                if (accion === 'jugar') {
                    return 'ImagenesT/tigreFeliz.png';
                }
                if (accion === 'limpiar') {
                    return 'ImagenesT/tigreLimpio.png';
                }
                return 'ImagenesT/tigre.png';
        }
    }
}

class ImagenLeon extends ImagenBehavior {
    obtenerImagen(mascotaViva, estado, accion = '') {
        if (!mascotaViva) {
            return 'ImagenesT/leonAngel.png';
        }

        switch (estado.constructor) {
            case EstadoHambriento:
                if (accion === 'alimentar') {
                    return 'ImagenesT/leonComiendo.png';
                }
                return 'ImagenesT/leonHambriento.png';
            case EstadoTriste:
                if (accion === 'jugar') {
                    return 'ImagenesT/leonFeliz.png';
                }
                return 'ImagenesT/leonTriste.png';
            case EstadoCansado:
                if (accion === 'dormir') {
                    return 'ImagenesT/leonDormido.png';
                }
                return 'ImagenesT/leonCansado.png';
            case EstadoSucio:
                if (accion === 'limpiar') {
                    return 'ImagenesT/leonLimpio.png';
                }
                return 'ImagenesT/leonSucio.png';
            default:
                if (accion === 'alimentar') {
                    return 'ImagenesT/leonComiendo.png';
                }
                if (accion === 'dormir') {
                    return 'ImagenesT/leonDormido.png';
                }
                if (accion === 'jugar') {
                    return 'ImagenesT/leonFeliz.png';
                }
                if (accion === 'limpiar') {
                    return 'ImagenesT/leonLimpio.png';
                }
                return 'ImagenesT/leon.png';
        }
    }
}

class ImagenMono extends ImagenBehavior {
    obtenerImagen(mascotaViva, estado, accion = '') {
        if (!mascotaViva) {
            return 'ImagenesT/monoAngel.png';
        }

        switch (estado.constructor) {
            case EstadoHambriento:
                if (accion === 'alimentar') {
                    return 'ImagenesT/monoComiendo.png';
                }
                return 'ImagenesT/monoHambriento.png';
            case EstadoTriste:
                if (accion === 'jugar') {
                    return 'ImagenesT/monoFeliz.png';
                }
                return 'ImagenesT/monoTriste.png';
            case EstadoCansado:
                if (accion === 'dormir') {
                    return 'ImagenesT/monoDormido.png';
                }
                return 'ImagenesT/monoCansado.png';
            case EstadoSucio:
                if (accion === 'limpiar') {
                    return 'ImagenesT/monoLimpio.png';
                }
                return 'ImagenesT/monoSucio.png';
            default:
                if (accion === 'alimentar') {
                    return 'ImagenesT/monoComiendo.png';
                }
                if (accion === 'dormir') {
                    return 'ImagenesT/monoDormido.png';
                }
                if (accion === 'jugar') {
                    return 'ImagenesT/monoFeliz.png';
                }
                if (accion === 'limpiar') {
                    return 'ImagenesT/monoLimpio.png';
                }
                return 'ImagenesT/mono.png';
        }
    }
}

const PetFactory = (() => {
    let instance;
    function createPetFactory() {
        function createPet(type, name) {
            let imagenBehavior;
            switch (type) {
                case 'tigre':
                    imagenBehavior = new ImagenTigre();
                    break;
                case 'leon':
                    imagenBehavior = new ImagenLeon();
                    break;
                case 'mono':
                    imagenBehavior = new ImagenMono();
                    break;
                default:
                    throw new Error('Tipo de mascota no existe');
            }
            const mascota = new Mascota(name);
            mascota.cambiarEstado(new EstadoNormal(mascota));
            mascota.establecerImagenBehavior(imagenBehavior);

            return mascota;
        }

        return {
            createPet
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createPetFactory();
            }
            return instance;
        }
    };
})();

class Mascota {
    constructor(nombre) {
        this.nombre = nombre;
        this.hambre = 50;
        this.suenio = 50;
        this.felicidad = 50;
        this.limpieza = 50;
        this.vivo = true;
        this.observadores = [];
        this.intervalo = setInterval(() => this.actualizar(), 1000);
        this.estado = new EstadoNormal(this);
        this.imagenBehavior = null;
        this.accion = '';
    }

    actualizar() {
        if (!this.vivo) {
            this.mostrarMensajeFinJuego();
            clearInterval(this.intervalo);
            this.redirigirMascotaFallecida();
            return;
        }

        if (this.hambre >= NIVEL_CRITICO_HAMBRE) {
            this.cambiarEstado(new EstadoHambriento(this));
        } else if (this.felicidad <= NIVEL_CRITICO_ABURRIMIENTO) {
            this.cambiarEstado(new EstadoTriste(this));
        } else if (this.suenio >= NIVEL_CRITICO_SUENIO) {
            this.cambiarEstado(new EstadoCansado(this));
        } else if (this.limpieza <= NIVEL_CRITICO_LIMPIEZA) {
            this.cambiarEstado(new EstadoSucio(this));
        } else {
            this.cambiarEstado(new EstadoNormal(this));
        }

        this.hambre = Math.max(this.hambre + 5, 0);
        this.suenio = Math.max(this.suenio + 3, 0);
        this.felicidad = Math.max(this.felicidad - 2, 0);
        this.limpieza = Math.max(this.limpieza - 2, 0);

        if (this.hambre >= 100 && this.suenio >= 100 && this.felicidad <= 0 && this.limpieza <= 0) {
            this.vivo = false;
        }

        this.estado.valorMinimo('hambre');
        this.estado.valorMinimo('suenio');
        this.estado.valorMaximo('felicidad');
        this.estado.valorMaximo('limpieza');

        this.notificarObservadores();
        this.obtenerImagen();
    }

    alimentar() {
        this.accion = 'alimentar';
        this.estado.alimentar();
        this.obtenerImagen();
    }

    dormir() {
        this.accion = 'dormir';
        this.estado.dormir();
        this.obtenerImagen();
    }

    jugar() {
        this.accion = 'jugar';
        this.estado.jugar();
        this.obtenerImagen();
    }

    limpiar() {
        this.accion = 'limpiar';
        this.estado.limpiar();
        this.obtenerImagen();
    }

    agregarObservador(observador) {
        this.observadores.push(observador);
    }

    eliminarObservador(observador) {
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    notificarObservadores() {
        this.observadores.forEach(observador => observador.actualizar(this));
    }

    actualizarImagenMascota(url) {
        document.getElementById('imagenMascota').src = url;
    }

    obtenerImagen() {
        if (!this.imagenBehavior) {
            throw new Error('ImagenBehavior no está definido');
        }
        const imagenURL = this.imagenBehavior.obtenerImagen(this.vivo, this.estado, this.accion);
        this.actualizarImagenMascota(imagenURL);
    }

    mostrarMensajeFinJuego() {
        const mensajeDiv = document.getElementById('mensaje');
        mensajeDiv.innerText = `${this.nombre} ha fallecido. Fin del juego.`;
        mensajeDiv.style.display = 'block';
    }

    redirigirMascotaFallecida() {
        setTimeout(() => {
            window.location.href = 'muerte.html';
        }, 3000); // Espera 3 segundos antes de redirigir
    }

    cambiarEstado(estado) {
        this.estado = estado;
    }

    establecerImagenBehavior(imagenBehavior) {
        this.imagenBehavior = imagenBehavior;
        this.obtenerImagen();
    }
}


class ObservadorMascota {
    actualizar(mascota) {
        document.getElementById('nombreMascota').innerText = mascota.nombre;
        document.getElementById('barraHambre').value = mascota.hambre;
        document.getElementById('barraSuenio').value = mascota.suenio;
        document.getElementById('barraFelicidad').value = mascota.felicidad;
        document.getElementById('barraLimpieza').value = mascota.limpieza;
        document.getElementById('estadoMascota').innerText = mascota.vivo ? 'Vivo' : 'Fallecido';
    }
}

