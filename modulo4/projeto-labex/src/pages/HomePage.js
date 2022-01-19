import React, { useState } from "react";
import styled from "styled-components";

export function HomePage() {
  const [name, setName] = useState("");

  const welcomePage = (
    <div>
      <h1>Boas-vindas</h1>
      <h1>sua próxima viagem começa agora</h1>
    </div>
  );

  const namePage = (
    <div>
      <h1>qual é o seu nome?</h1>
      <input placeholder="nome" />
    </div>
  );

  const renderedComponent = name ? welcomePage : namePage;

  return <div>{renderedComponent}</div>;
}
