import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";

describe('Pruebas en AppRouter', () => { 
    test('Debe de mostrar el Login SI no esta Autenticado', () => { 

        const contexValue = {
            logged: false
        }

        render(
        <MemoryRouter initialEntries={['/marvel']}>
            <AuthContext.Provider value ={contexValue}>
                    <AppRouter/>
            </AuthContext.Provider>
         </MemoryRouter>
        );

        expect( screen.getAllByText('Login').length).toBe(2);
     })

    test('Debe de mostrar el componente de Marveñl si esta autenticado', () => { 
        
        const contexValue = {
            logged: true,
            user:{
                name: 'johana',
                id: 'asd'
            }
        }

        render(
        <MemoryRouter initialEntries={['/login']}>
            <AuthContext.Provider value ={contexValue}>
                    <AppRouter/>
            </AuthContext.Provider>
         </MemoryRouter>

        );

        expect( screen.getAllByText('Marvel').length).toBeGreaterThan(1);

     })
 })