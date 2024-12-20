import React, { useState } from "react";
import axios from "axios";
const ListContext = React.createContext({
    item: [],
    addItems: (() => { }),
})

export const ListContextProvider = (props) => {

    const [data, setData] = useState([]);

    async function addItemsHandler(newitems) {
        console.log(newitems);
        const existingdata = data.findIndex((i)=>{
               return  i.name===newitems.name
            })



        if(existingdata===-1){
            try{
                const response = await axios.post('https://crudcrud.com/api/e6dd61c061e64d0cb61d8df5e4ee7737/list',
                    {
                       newitems,
                    })
                    setData((prevState)=>{
                        return  [...prevState,response.data.newitems]
                      });
            }catch (err){
                 console.log(err.message);
            }         
        }else{
            alert('this item is already exist');
        }
       
    }


    const ContextValue = {
        item: data,
        addItems: addItemsHandler,
    }


    return (
        <ListContext.Provider value={ContextValue}>
            {props.children}
        </ListContext.Provider>
    );
}

export default ListContext;