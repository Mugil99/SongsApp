import {SELECT_SONG} from '../actions/actionTypes';

export const songsReducer=(state=null,action)=>{
    if(action.type===SELECT_SONG){
        return action.payload;
    }
    return state;
}