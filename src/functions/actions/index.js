import { type } from "./type";

export const add = ()=>{
    return {
        type : type.add,
        payLoad : "add values"
    }   
}

export const dec = ()=>{
    return {
        type : type.dec,
        payLoad : "add values"
    }   
}