import { useContext } from "react";
import Hijo from "./Hijo";
import ValorContext from "./ValorContext";

export default function Padre(){

    const valor = useContext(ValorContext);

    return (
        <>
            <h3>Componente padre: El valor del context es: {valor}</h3>
            <Hijo/>
        </>
    );
}