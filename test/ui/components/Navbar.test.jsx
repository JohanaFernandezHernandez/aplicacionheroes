import { fireEvent, render, screen } from "@testing-library/react";
import { useContext } from "react";
import { Navbar } from "../../../src/ui/components/Navbar";
import { AuthContext } from "../../../src/auth/contex/AuthContext";
import { MemoryRouter, useNavigate } from "react-router-dom";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate

}));

describe('Pruebas en <Navbar/>', () => {
    
    const contexValue= {
        logged: true,
        user: {
            name: 'julian',
            id: 'per'
        },
        SalirLogout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());


    test('Debe de mostrar el nombre ', () => { 


        render(
            <AuthContext.Provider value={contexValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
                
            </AuthContext.Provider>
            
        );

        expect( screen.getByText('julian')).toBeTruthy();

     });


    test('Debe de llamar el Logout y el navegate cuando se hace click en el boton', () => { 
        
        render(
            <AuthContext.Provider value={contexValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
                
            </AuthContext.Provider>
            
        );

        const logoutbtn = screen.getByRole('button');
        fireEvent.click( logoutbtn );

        expect( contexValue.SalirLogout).toHaveBeenCalled();
        expect( mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});

     });

    
 })