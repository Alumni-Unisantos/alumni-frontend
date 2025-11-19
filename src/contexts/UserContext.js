import { createContext } from 'react';

const UserContext = createContext({
    user: {id: null, nm_user: null},
    setUser: () => {
        console.error("UserContext Error: setUser chamado sem Provider.");
    }
});

export default UserContext;