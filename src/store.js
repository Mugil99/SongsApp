import {createStore,combineReducers} from 'redux';
import {songsReducer} from './reducer/songs.reducer';
import {dataReducer} from './reducer/data.reducer';
import { selectSong } from './actions/song.actions';

const rootReducer = combineReducers(
    {
        songs: dataReducer,
        selectedSong: songsReducer,
    }
)
const store=createStore(rootReducer);
export default store;