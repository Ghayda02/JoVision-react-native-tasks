import { Children, createContext, useContext, useState } from 'react';

export const textContext = createContext();
export const updateTextContext = createContext();


export const useTextContext = () =>{
    return useContext(textContext);
};

export const useUpdateTextContext = () =>{
    return useContext(updateTextContext);
};

export const ContextProvider = ({value, children}) => {
    const [text, setText] = useState(value);
    return(
      <textContext.Provider value={text}>
        <updateTextContext.Provider value={setText}>
          {children}
        </updateTextContext.Provider>
      </textContext.Provider>
    )   
}

export default ContextProvider;
