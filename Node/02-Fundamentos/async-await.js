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

const id=3;

const getInfoUsuario = async( id )=>{// transforma mi función en una función asincrona
    
    try {

        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado: ${empleado} es de ${salario}`;

    } catch (error) {
        throw error;
    }
}

getInfoUsuario(id)
    .then(msg => {
        console.log('TODO BIEN!')
        console.log(msg)
    })
    .catch(err => {
        console.log('TODO MAL!!')
        console.log(err)
    });