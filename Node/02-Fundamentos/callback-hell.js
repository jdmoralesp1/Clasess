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

const getempleado= (id, callback)=>{
    const empleado = empleados.find( (e) => e.id === id)?.nombre;

    if(empleado){
        callback(null, empleado);
    }else{
        callback(`El empleado con id ${id} no existe`);
    }
}

const getSalario = (id, callback)=>{
    const salario = salarios.find((s) => s.id === id)?.salario; // se coloca el ? para que pregunte si existe y no arroje erros, si aexiste me guarda el salario
    if(salario){
        callback(null, salario);
    }else{
        callback(`No existe salario para el id ${id}`);
    }
}


const id=3;

getempleado(id, (err, empleado)=>{
    if(err){
        console.log('ERROR!');
        return console.log(err);
    }

    getSalario(id, (err, salario)=>{
        if(err){
            return console.log(err);
        }
    
        console.log('El empleado', empleado, 'tiene un salario de:', salario);
    })
});

