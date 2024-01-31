import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"

describe('Pruebas en <SearchPage/>', () => { 
    test('Debe de mostrarse correctamente con valores por defecto', () => { 
        
        const {container } = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>

        );

        expect( container ).toMatchSnapshot();
    })


    test('Debe de mostrar a Batman en el input de busqueda ', () => { 
        
         render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>

        );

        const input = screen.getByRole('textbox')// ESTO ES QUE HAYA UN INPUT
        expect( input.valeu ).toBe('batman');
        screen.debug(); 
        
    })
 })