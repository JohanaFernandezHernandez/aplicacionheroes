import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth"
import { PublicRoute } from "../../src/router/PublicRoute"
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('pruebas en PublicRouter', () => { 
    test('Si no estoy autenticado debe de mostrar el children', () => { 

        const contexValue= {
            logged:false
        }


        render(
            <AuthContext.Provider value={contexValue}>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta Publica')).toBeTruthy();
     });


    test('Debe de navegar si esta autenticado', () => { 
       
        const contexValue= {
            logged: true,
            user:{
                name:'johana',
                id:'urty'
            }
        }

        render(
            <AuthContext.Provider value={contexValue}>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta Publica</h1>
                            </PublicRoute>
                        }/>
                        <Route path='marvel' element={<h1>hola desde Marvel</h1>}/>
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('hola desde Marvel')).toBeTruthy();

     })
 })