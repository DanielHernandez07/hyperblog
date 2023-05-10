const natalia = {
    name: "Natalia",
    age:20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso practico de HTML y CSS"
    ],
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);

    },

//Hacer que Natalia apruebe otro curso
//natalia.cursosAprobados.push("Curso de responsive desing");
};

function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    //this.aprobarCurso = function (nuevoCursito){
    //    this.cursosAprobados.psuh(nuevoCursito);
    //}
}

Student.prototype.aprobarCurso = function (nuevoCursito){
       this.cursosAprobados.psuh(nuevoCursito);
    }

const juanita = new Student(
    "juanita alejandra",
    15,
    [
        "Curso de introducción a la producción de video juegos ", 
        "Curso de cración de personaje "
    ],
);  

// Prototipos en la sintaxis por clases 

class Student2{
    constructor (name, age)
}
