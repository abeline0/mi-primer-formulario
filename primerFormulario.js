class Formulario {
    constructor(nombre,apellido,secondapellido){
    this.nombre=nombre;
    this.apellido=apellido;
    this.secondapellido=secondapellido
    }

    mostrarinformacion(){
        console.log("Nombre:",this.nombre)
        console.log("Primer Apellido:",this.apellido)
        console.log("Segundo Apellido:",this.secondapellido)
    }

    
}

function mostrarinputs(){
    let inputNombre=document.getElementById("inputNombre").value;
    let inputApellido=document.getElementById("inputApellido").value;
    let inputSegungoApellido=document.getElementById("inputSegungoApellido").value;
    const Datos= new Formulario(inputNombre,inputApellido,inputSegungoApellido);
    Datos.mostrarinformacion();
}