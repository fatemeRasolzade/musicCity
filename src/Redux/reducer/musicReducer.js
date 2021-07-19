const initialState = {
    musics: [],
    musicInfo : {}
}

export const musicsReducer = (state=initialState, action) =>{
    switch (action.type) {
        case 'INIT':
            return{
                ...state,
                musics: action.payload
            }
        case 'GET_INFO_OF_MUSIC':
            return{
                ...state,
                musicInfo: action.payload
            }
        default:
            return state;
    }
}
