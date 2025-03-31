function persona(nombre, edad, genero) {
    this.nombre = nombre
    this.edad = edad
    this.genero = genero
}

persona.prototype.obtDetalles = function () {
    console.log(this.nombre)
    console.log(this.edad)
    console.log(this.genero)
}

function estudiante(nombre, edad, genero, curso, grupo) {
    persona.call(this, nombre, edad, genero)
    this.curso = curso
    this.grupo = grupo
}

estudiante.prototype = Object.create(persona.prototype)
profesor.prototype = Object.create(estudiante.prototype)

function profesor(nombre, edad, genero, asignatura, nivel) {
    persona.call(this, nombre, edad, genero)
    this.asignatura = asignatura
    this.nivel = nivel
}

function print() {
    let p1 = new persona("lean", 32, "macho")
    p1.obtDetalles();

    let e1 = new persona("catalina", 15, "hembra")
    e1.obtDetalles();
    //e1.registrar();

    let pr1 = new persona("walter", 59, "macho")
    pr1.obtDetalles();
    //pr1.asignar();
}



