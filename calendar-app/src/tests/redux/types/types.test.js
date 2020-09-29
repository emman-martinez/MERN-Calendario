import '@testing-library/jest-dom';
import { types } from '../../../redux/types/types';

describe('Pruebas en Types', () => {

    test('Los types deben de ser iguales', () => {
        expect(types).toEqual({

            uiOpenModal: '[UI] Open Modal',
            uiCloseModal: '[UI] Close Modal',
        
            eventSetActive: '[Event] Set Active',
            eventLogout: '[Event] Event Logout',
            eventAddNew: '[Event] Add New',
            eventStartAddNew: '[Event] Start Add New',
            eventClearActiveEvent: '[Event] Clear Active Event',
            eventUpdated: '[Event] Event Updated',
            eventDeleted: '[Event] Event Deleted',
            eventLoaded: '[Event] Events Loaded',
        
            // authChecking: '[Auth] Checking Login State',
            authCheckingFinish: '[Auth] Finish Checking Login State',
            authStartLogin: '[Auth] Start Login',
            authLogin: '[Auth] Login',
            authStartRegister: '[Auth] Start Register',
            authStartTokenRenew: '[Auth] Start Token Renew',
            authLogout: '[Auth] Logout',
            authRestablishPass: '[Auth] Restablish Pass'
        
        });
    });
    
});