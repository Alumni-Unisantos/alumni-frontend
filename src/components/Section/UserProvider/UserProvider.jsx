"use client";
import React, { useState, useEffect } from "react";
import UserContext from "~/contexts/UserContext";

export default function UserProvider({ children }) {
    const [user, setUser] = useState({});

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUserId = localStorage.getItem('user_id');
            if (storedUserId) {
                setUser({ id: storedUserId });
            }
        }
    }, []); 

    const contextValue = { 
        user, 
        setUser: (newUserState) => {
            setUser(newUserState);
            if (newUserState?.id) {
                localStorage.setItem('user_id', newUserState.id);
            } else {
                localStorage.removeItem('user_id');
            }
        }
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}