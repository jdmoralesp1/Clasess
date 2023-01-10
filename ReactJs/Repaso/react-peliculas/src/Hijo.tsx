import { useContext } from "react";
import ValorContext from "./ValorContext";

export default function Hijo(){

    const valor = useContext(ValorContext);

    return (
        <>
            <h3>Componente Hijo: El valor del context es: {valor}</h3>
        </>
    );
}