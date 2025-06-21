// import { createContext, useState, useEffect, useReducer } from 'react';
// import { checkAuth } from '../services/auth';

// /**
//  * Authentication context for managing user state
//  * Features:
//  * - Persistent login state
//  * - User data management
//  * - Logout functionality
//  */
// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Check for existing session on initial load
//   useEffect(() => {
//     const verifyAuth = async () => {
//       try {
//         const userData = await checkAuth();
//         setUser(userData);
//       } catch (err) {
//         setUser(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     verifyAuth();
//   }, []);

//   const logout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//   };

//   const value = {
//     user,
//     setUser,
//     logout,
//     loading
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }


import { createContext, useReducer, useEffect } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Reducer to manage auth state
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: { ...action.payload } };

        case 'LOGOUT':
            return { ...state, user: null };

        default:
            return state;
    }
};

// AuthContext provider component
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    });

    // Load user from localStorage on first render
    useEffect(() => {
        try {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser) {
                dispatch({ type: 'LOGIN', payload: storedUser });
            }
        } catch (error) {
            console.error('Failed to load user from localStorage:', error);
        }
    }, []);

    // Optional: Sync localStorage on login/logout
    useEffect(() => {
        if (state.user) {
            localStorage.setItem('user', JSON.stringify(state.user));
        } else {
            localStorage.removeItem('user');
        }
    }, [state.user]);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
