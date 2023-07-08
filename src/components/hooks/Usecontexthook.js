import React from "react";
import { useContext ,createContext} from "react";




export const User = createContext();



export function AComponent(){
    return (
        <User.Provider value="Karthik">
        <div>User Context Hook </div>
           <BComponnet></BComponnet>

        </User.Provider>
    );
}


export function BComponnet(){
    const data = useContext(User);
    return (
        <>
              <div>{data}</div>
        </>
    )
}



