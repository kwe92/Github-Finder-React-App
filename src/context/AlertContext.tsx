import { stat } from "fs";
// import { createContext, useReducer } from "react";
// import { alertReducer } from "./AlertReducer";

// const AlertContext = createContext();

// export const AlertProvider = (props: {children: any}) => {
//     const initialState = "";

//     const [state, dispatch] = useReducer(alertReducer, initialState);

//     const setAlert = (msg: any, type: any)=>{
//         dispatch({
//             type: 'SET_ALERT',
//             payload: {msg, type}
//         });

//         setTimeout(()=>dispatch({type: "REMOVE_ALERT"}), 3000);
//     };
//     return (
//         <AlertContext.Provider value={state}>
//             {props.children}
//         </AlertContext.Provider>
//     );
// };

// export default AlertContext;