import history  from "../../Utils/history";

export const addUser = newUser => (dispatch,getState) => {
    const users= getState().Users;
    const filteredUser = users.users.filter(u => u.email === newUser.email)[0]
    if(filteredUser){
        alert("این ایمیل قبلا در سیستم ثبت شده است")
    }else{
        alert("ورود کاربر با موفقیت انجام شد")
        history.push("/login")
        dispatch({type: 'ADD_USER', payload: newUser});
    }
}
export const chkUser = (email, password) => (dispatch , getState) => {
    const users = getState().Users;
    const filteredUser= users.users.filter(u => u.email === email)[0]
    console.log(filteredUser);
    if(filteredUser){
        if(filteredUser.password === password){
            localStorage.setItem('TOKEN_KEY', 'TestLogin');
            alert('ورود با موفقیت انجام شد')
            dispatch(addUserInfo(filteredUser))
            history.push("dashboard")
        }else{
            alert("رمز عبور صحیح نمی باشد")
        }
    }else{
        alert("کاربر در سرور عضو نشده است");
        return false
    }
    dispatch({type:"CHK_USER", payload:{email, password}})
}
export const addUserInfo = user => dispatch => {
    dispatch({type:'ADD_USER_INFO', payload: user})
}

export const logOut = () => (dispatch, getState) => {
    localStorage.removeItem('TOKEN_KEY');
    
    history.push("/login")
    dispatch({type:'USER_LOG_OUT'})
}