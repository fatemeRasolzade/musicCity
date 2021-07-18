const initialState = {
    musics: []
}

export const musicsReducer = (state=initialState, action) =>{
    switch (action.type) {
        case 'INIT':
            return{
                ...state,
                musics: action.payload
            }
        default:
            return state;
    }
}