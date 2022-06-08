import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT,

   } from "./CounterAction.type";




export const counterInc = ()=>({type:COUNTER_INCREMENT})
export const counterDec = ()=>({type:COUNTER_DECREMENT})