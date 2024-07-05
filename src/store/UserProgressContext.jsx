import { createContext } from "react";

const UserProgressContext = ({
    progress: '',
    showCart:() => {},
    hideCart:() => {},
    showCheckout:() => {},
    hideCheckout:() => {},
    
});

export function UserProgressContextProvider({ children }) {
    return <UserProgressContext.Provider value={{}}>{children}</UserProgressContext.Provider>
}

export default UserProgressContext
