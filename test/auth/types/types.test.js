import {types} from "../../../src/auth/types/types"

describe('Pruebas en  "types.jsx"', () => { 
    test('Debe de regresar estos taypes', () => { 

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        });
        
     })
 })