import { combineReducers } from 'redux'; 

export const initialState = {
    A: 0,
    B: 0,
    C: 0,
    M: 0,
    Ne_A :0,
    Ne_B :0,
    Ne_D :0,
    Br_A :0,
    Br_B :0,
    Br_D :0,
    M_A :0,
    M_B :0,
    M_D :0,
    DP:0,
    DV:0,
    pos:1,
}

export default function Calcvalue (state= initialState, action) {
    switch (action.type) {
        case "updateA":
            let A = Number(action.value); 
            let B = Number(state.B);
            return Object.assign({}, state, {A:A, DV: (B-A).toFixed(2), DP: ((1 - A/B)*100).toFixed(2) });
            break; 
        case "updateB":
            A = Number(state.A); 
            B = Number(action.value);
            return Object.assign({}, state, {B:B, DV: (B-A).toFixed(2), DP: ((1 - A/B)*100).toFixed(2) })
            break; 
        case "updateC":
            return Object.assign({}, state, {C: +action.value })
            break; 
        case "updateM":
            A = +state.A;
            B = +state.B;
            let M = +action.value;
            return Object.assign({}, state, {M:M, M_A: (A*M/100).toFixed(2) , M_B: (B*M/100).toFixed(2), M_D: ((B-A)*M/100).toFixed(2) })
            break; 
        case "updateNe":
            A = +state.A;
            B = +state.B;
            return Object.assign({},state, {Ne_A: A, Ne_B: B, Ne_D:B-A })
            break; 
        case "updateBr":
            A = +state.A;
            B = +state.B;
            M = +state.M;
            return Object.assign({} ,state, {Br_A: (A + A*M/100).toFixed(2)  , Br_B: (B + B*M/100).toFixed(2)  , Br_D: (B-A + (B-A)*M/100).toFixed(2) })
            break;
        case "addPos":
            return Object.assign({}, state, {pos : action.value+1})
        default:
            return state;
    }
}