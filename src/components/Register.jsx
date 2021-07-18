import React,{useState} from 'react'
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 }  from 'uuid'
import { FormControl } from '@material-ui/core';
import { addUser } from '../Redux/action/usersAction';

const Register = ({addUser}) => {

    const [user, setUser] = useState({
        id: uuidv4(),
        email: "",
        password: "",
        repeatPassword: "",
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setUser({ ...user, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setUser({ ...user, showPassword: !user.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const onSubmit = (e) => {
        e.preventDefault() 
        const regEml = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(user.password.length < 8){
            alert("رمز عبور باید بالای 8 کاراکتر باشد")
        }else if(!(user.email.match(regEml) || user.email.trim().length === 0)){
            alert("ایمیل نامعتبر است")
        }
        else if(!(user.password === user.repeatPassword)){
            alert("رمز عبور باید با تکرار رمز عبور برابر باشد")
        }else{
            addUser(user)
        }
    }

    return (
        <div className="container">
            <div className=" d-flex justify-content-center my-5">
                <div className="shadow-sm rounded p-5">
                    <div className="text-center">
                        <h3> عضویت در سایت </h3>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="d-grid">
                            <TextField
                                className="pb-3"
                                id="standard-basic"
                                name="email"
                                label=" ایمیل "
                                value={user.email}
                                onChange={handleChange('email')}
                            />
                            <FormControl className="pb-3">
                                <InputLabel htmlFor="standard-adornment-password"> رمز ورود </InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={user.showPassword ? 'text' : 'password'}
                                    value={user.password}
                                    name="password"
                                    onChange={handleChange('password')}
                                />
                            </FormControl>
                            <FormControl className="pb-3">
                                <InputLabel htmlFor="standard-adornment-password"> تکرار رمز ورود </InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={user.showPassword ? 'text' : 'password'}
                                    name="repeatPassword"
                                    value={user.repeatPassword}
                                    onChange={handleChange('repeatPassword')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            >
                                            {user.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <Button
                                className="button mt-4"
                                variant="contained"
                                onClick={onSubmit}
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default connect(null,{addUser})(Register)
