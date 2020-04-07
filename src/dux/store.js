import {createStore} from 'redux'

const initialState = {
    movies:[],
    genres:[]
}

export const GET_MOVIES = 'GET_MOVIES'
export const GET_GENRES = 'GET_GENRES'

function reducer (state = initialState, action){
    console.log(action)
    const {type, payload} = action 
    switch(type){
        case GET_MOVIES:
            return {
                ...state, movies: payload
            }
            case GET_GENRES:
                return {
                    ...state, genres: payload
                }
            default:
                return state
                
    }
}

    const store = createStore(reducer)

    export default store;