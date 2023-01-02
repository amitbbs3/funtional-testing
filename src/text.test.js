import {getAllByLabelText, render, screen} from "@testing-library/react"
import '@testing-library/jest-dom';
import Header from  './Header';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

describe("Test the NavBar Component", () => {
    test("render the Navbar component", async () => {
      render( <BrowserRouter> <Header/> </BrowserRouter>);
      expect(screen.getByTestId('head1').textContent).toBe('My GH Projects')
    });

    
})