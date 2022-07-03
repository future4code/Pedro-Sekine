import React from "react";
import { render, screen, within } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { getByPlaceholderText, findByAltText, findByText } from "@testing-library/react";
import {toHaveValue, toBeInTheDocument} from "@testing-library/jest-dom";

describe("Tests should expose the 7 erros in the application",  () => {
  test("Should return an array with 2 items with minValue===40 && maxValue===60", async () => {
    render(<App />);

    const minPrice = "40";
    const maxPrice = "60";

    // const expensiveProduct = await screen.findByAltText('Conjunto Fogo Grátis');
    const expensiveProduct = await screen.findByText(/Conjunto Fogo Grátis/i);
    // console.log(expensiveProduct)
    
    const maxInput = screen.getByPlaceholderText("Máximo");
    userEvent.type(maxInput, maxPrice);

    const minInput = screen.getByPlaceholderText("Mínimo");
    userEvent.type(minInput, minPrice);

    expect(expensiveProduct).not.toBeInTheDocument()
  });

  test("Shopping Cart should total R$250 after adding Conjunto Fogo Grátis to it ", async () => {
    render(<App />);

    const product = await screen.findByTestId(/Conjunto Fogo Grátis/i)
    const price = within(product).getByRole('heading', /250/)
    const button = within(product).getByRole('button', {name: /comprar/i})

    userEvent.click(button)


    })
  })
  // test.todo("Teste 3", () => {
  //   render(<App />);

  //   userEvent.click(
  //     screen.getByRole("button", {
  //       name: /carrinho/i,
  //     })
  //   );
  // });
  // test.todo("Teste 4", () => {
  //   render(<App />);

  //   userEvent.click(
  //     screen.getByRole("button", {
  //       name: /carrinho/i,
  //     })
  //   );
  // });
  // test.todo("Teste 5", () => {
  //   render(<App />);

  //   userEvent.click(
  //     screen.getByRole("button", {
  //       name: /carrinho/i,
  //     })
  //   );
  // });
