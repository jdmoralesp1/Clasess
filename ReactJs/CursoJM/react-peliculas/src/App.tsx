import "./App.css";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import PeliculaIndividual from "./peliculas/Peliculaindividual";
import { landingPageDTO, pelicula } from "./peliculas/peliculas.model";
import { useEffect, useState } from "react";
import Button from "./utils/Button";

function App() {
  const [peliculas, setPeliculas] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setPeliculas({
        enCartelera: [
          {
            id: 1,
            titulo: "Spider-Man: Way No Home",
            poster:
              "https://img.ecartelera.com/noticias/fotos/70100/70190/1.jpg",
          },
          {
            id: 2,
            titulo: "Moana",
            poster:
              "https://i.pinimg.com/736x/25/f4/46/25f4469d3b2c7315250527a0409fa880--moana--princess-moana.jpg",
          },
        ],
        proximosEstrenos: [
          {
            id: 3,
            titulo: "Soul",
            poster:
              "https://i0.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2020/10/soul_7.jpg?resize=743%2C1100&ssl=1",
          },
          {
            id: 4,
            titulo: "One Piece Red",
            poster:
              "https://cdn.beahero.gg/2022/09/ONEPIECE-RED-ONESHEET-LATAM-FECHA.jpg",
          },
        ],
      });
    }, 500);

    return () => clearTimeout(timerId);
  });

  return (
    <>
      <div className="container">

        <Button>Mi componente botón</Button>

        <h3>En cartelera</h3>
        <ListadoPeliculas peliculas={peliculas.enCartelera} />

        <h3>Proximos estrenos</h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
      </div>
    </>
  );
}

export default App;
