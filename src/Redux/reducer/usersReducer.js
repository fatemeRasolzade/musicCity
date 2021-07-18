const initialState={
    users:[
        {
            id:1,
            email: "f.rasoolzadeh.1424@gmail.com",
            password: "0000000000",
            playlist: []
        }
    ],
    userInfo:{
            
    },
}

export const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return{
                ...state,
                users: [...state.users, action.payload]
            }
        case 'USER_LOG_OUT':
            return{
                ...state,
                userInfo: {}
            }

        case 'ADD_USER_INFO':
            return{
                ...state,
                userInfo: action.payload
            }        
        default:
        return state;
    }
}