const empleados = [
    {
        id: 1,
        nombre: 'Juan'
    },
    {
        id: 2,
        nombre: 'Carlos'
    },
    {
        id: 3,
        nombre: 'Laura'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
];

const getEmpleado= (id)=>{
    
    return new Promise( (resolve, reject)=>{

        const empleado = empleados.find( (e) => e.id === id)?.nombre;

        (empleado) // ¿Existe empleado? //Esta es otra forma de realizar el if con ternario
            ? resolve(empleado) //Entro al if
            : reject(`No existe empleado con id ${id}`); //No entro al if

    });

    //return promesa; cambio el return para el inicio en vez de declarar en la linea 29 const promesa =
}

const getSalario = (id) =>{
    return new Promise((resolve, reject) =>{
        const salario = salarios.find( (s) => s.id === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`No existe salario para el id: ${id}`);
    });
}

const id=1;

/*getempleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.error(err));

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.error(err));*/

/*getEmpleado(id)
    .then(empleado =>{

        getSalario(id)
            .then(salario=>{
                console.log(`El empleado ${empleado} tiene un salario de ${salario}`);
            })
            .catch(err => console.log(err));

    })
    .catch(err => console.log(err));*/ // Este es otro callback y no se debería realizar

let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log(`El empleado: ${nombre} tiene un salario de ${salario}`))
    .catch(err => console.log(err));