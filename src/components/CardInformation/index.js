import React from "react";

// Import presentational components of styled components
import { Container } from "./styles";

export const CardInformation = ({ name, data, appointment, type }) => {
  return (
    <Container>
      <h3>{name}</h3>
      {appointment ? (
        <>
          <h4>Esteticista</h4>
          <p>{data.name}</p>
          <h4>Día</h4>
          <p>{data.day}</p>
          <h4>Hora</h4>
          <p>{data.time}</p>
          <h4>Duración</h4>
          <p>{data.duration}</p>
          <h4>Descripcion</h4>
          {data.procedures.map((procedure, index) => (
            <p key={`Procedure ${index}`}>{procedure}</p>
          ))}
          <h4>Costo</h4>
          <p>{data.cost}</p>
        </>
      ) : (
        ""
      )}
      {type === "procedures" ? (
        <>
          <h4>Procedimento</h4>
          <p>{data.name}</p>
          <h4>Número de veces</h4>
          <p>{data.times}</p>
        </>
      ) : (
        <>
          <h4>Día</h4>
          <p>{data.day}</p>
          <h4>Duración</h4>
          <p>{data.duration}</p>
          <h4>Costo</h4>
          <p>{data.cost}</p>
        </>
      )}
    </Container>
  );
};
