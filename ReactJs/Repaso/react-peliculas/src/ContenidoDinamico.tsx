export default function ContenidoDinamico(props: any){
    // Ej 1: operador ternario
    // return(
    //     <div>
    //         {props.mostrarMensajeSecreto ? <span>Mensaje secreto: 42</span> : null}
    //     </div>
    // )

    // Ej 2; IF

    if(props.calificacion > 90){
        return (
            <div>
                <h3>{props.nombre}: Excelente calificación</h3>
            </div>
        )
    } else if(props.calificacion >= 80 && props.calificacion <= 90){
        return (
            <div>
                <h3>{props.nombre}: Muy bien hecho</h3>
            </div>
        ) 
    }else if(props.calificacion >= 0 && props.calificacion < 80){
        return (
            <div>
                <h3>{props.nombre}: Regular</h3>
            </div>
        )
    } else {
        throw `Ha habido un error con la calificación de ${props.nombre}`;
    }
}