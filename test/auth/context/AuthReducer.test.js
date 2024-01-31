import { render, screen } from "@testing-library/react";
import { AuthReducer } from "../../../src/auth/contex/AuthReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas con el AuthReducer', () => { 

    test('Debe de retornar el estado por defecto', () => { 
        
        const state = AuthReducer({logged:false}, {});
        expect( state ).toEqual({logged: false});
     });

    test('Debe de llamar el login autenticarlo y establecer el usuario', () => { 

        const action ={
            type: types.login,
            payload:{
                id: '126',
                name: 'Jhana'
            }
        }

        const state = AuthReducer({logged:false}, action);
        expect(state).toEqual({
            ...state,
            logged: true,
            user: action.payload})
    });

    test('debe de el logout borrar el name del usuario y logged en false', () => { 
        const inicialState = {
            logged: true,
            user: {
                id: 'qwee',
                name: 'jojoyes'
            }
        }

        const action = {
            type: types.logout
        }
        
        const state = AuthReducer(inicialState, action);
        // console.log(state); se puede usar este console.log
        expect (state).toEqual( { logged: false })
        
    });

 });