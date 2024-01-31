import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";


describe('Pruebas en PrivateRoute', () => { 
    test('Debe de mostrar el Children si esta utenticado', () => { 

        Storage.prototype.setItem = jest.fn();

        const contexValue= {
            logged:true,
            user: {
                id:'rte',
                name:'jaime'
            }
        }
        render(
            <AuthContext.Provider value={contexValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect (localStorage.setItem).toHaveBeenCalledWith('LastPath', "/marvel");
     });
 })