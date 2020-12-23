import { type } from "../actions/type";

export  const reducer = (state={}, action)=>{
    switch (action.type) {
        case type.add :{
            return (state+1)
        }
        case type.dec :{
            return (state-1)
        }
        default :
            return (state)
        
    }
}