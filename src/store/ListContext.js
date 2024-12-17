import React, { useState } from "react";

const ListContext = React.createContext({
    item: [],
    addItems: (() => { }),
})

export const ListContextProvider = (props) => {

    const [data,setData] = useState([]);

    const addItemsHandler = (data) =>{
        setData((prevState)=>{
          return  [...prevState,data]
        });
    }


    const ContextValue = {
        item : data,
       addItems : addItemsHandler,
    }


    return (
        <ListContext.Provider value={ContextValue}>
            {props.children}
        </ListContext.Provider>
    );
}

export default ListContext;