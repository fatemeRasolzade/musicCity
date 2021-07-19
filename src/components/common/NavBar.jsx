import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'
import { logOut } from '../../Redux/action/usersAction';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBar from './SearchBar';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const NavBar = ({location ,userInfo, logOut}) => {

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className="modal-container">
     
      <p id="simple-modal-description">
        آیا میخواهید از حساب کاربری خود خارج شوید؟
      </p>
      <div className="d-flex justify-content-around">
        <Button
          className="my-3 px-5"
          variant="contained"
          onClick={() => logOut()}
        >
          بلی
        </Button>
        <Button
          className="my-3 px-5"
          variant="contained"
          onClick={handleClose}
        >
          خیر
        </Button>
      </div>
    </div>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid align-items-start">
        <div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <MenuIcon className="text-white fs-2"/>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav align-items-baseline">
              {userInfo.id ? 
              <li class="nav-item">
                <a class="nav-link text-white" type="button" onClick={handleOpen}>
                  خروج از حساب کاربری
                </a>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  {body}
                </Modal>
              </li>
              : null}
              <li class="nav-item">
                <Link class="nav-link text-white" aria-current="page"
                  to=
                    {userInfo.id ? "/userInfo" : "/register"}
                  >
                  {userInfo.id ? userInfo.email : "عضویت"}
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" aria-current="page"
                  to=
                    {userInfo.id ? "/playlist" : "/login"}
                  >
                  {userInfo.id ? "پلی لیست" : "ورود"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="d-flex align-items-center">
          {location.pathname === "/dashboard" ? null :
            <SearchBar color="text-white"/>
          }
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => ({
  userInfo: state.Users.userInfo
})

export default withRouter(connect(mapStateToProps,{logOut})(NavBar))
