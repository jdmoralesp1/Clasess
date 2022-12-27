export default function FormularioTexto(props: formularioTextoprops){
    return(
        <input type="text" 
        onKeyUp={(e) => props.manejarKeyUp(e.currentTarget.value)}
      />
    )
}

interface formularioTextoprops{
    manejarKeyUp(texto: string): void;
}