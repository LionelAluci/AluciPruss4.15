
function Persona(nombre, edad, genero) {
    this.nombre = nombre
    this.edad = edad
    this.genero = genero
}

Persona.prototype.obtDetalles = function () {
    console.log(this.nombre)
    console.log(this.edad)
    console.log(this.genero)
}

function Estudiante(nombre, edad, genero, curso, grupo) {
    Persona.call(this, nombre, edad, genero)
    this.curso = curso
    this.grupo = grupo
}

Estudiante.prototype = Object.create(Persona.prototype)

Estudiante.prototype.registrar = function() {
    console.log(this.curso)
    console.log(this.grupo)
}



function Profesor(nombre, edad, genero, asignatura, nivel) {
    Persona.call(this, nombre, edad, genero)
    this.asignatura = asignatura
    this.nivel = nivel
}

Profesor.prototype = Object.create(Estudiante.prototype)

Profesor.prototype.asignar = function () {
    console.log(this.asignatura)
    console.log(this.nivel)
}


function print() {
    const p1 = new Persona("lean", 32, "macho")
    p1.obtDetalles()

    const e1 = new Estudiante("catalina", 15, "hembra", "4to","15se")
    e1.obtDetalles()
    e1.registrar()
    const pr1 = new Profesor("walter", 59, "macho","tec rep","1000")
    pr1.obtDetalles()
    pr1.asignar();
}