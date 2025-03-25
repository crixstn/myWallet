import { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({children}){
    const userDatas = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(userDatas !== null ? userDatas : {});
    const navigate = useNavigate()

    useEffect(() => {
        if(!userDatas) navigate("/")
    }, [])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
};