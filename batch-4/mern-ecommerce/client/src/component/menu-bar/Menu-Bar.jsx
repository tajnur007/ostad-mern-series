import React, {useState} from 'react';
import logo from "../../assets/images/plainb-logo.svg"
import {Link} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import {useNavigate} from "react-router-dom"
import {Button} from "react-bootstrap";
import SubmitButton from "../SubmitButton.jsx";
import {UserLogout} from "../../apiRequest/ApiRequest.js";

const MenuBar = () => {

    const [keyword,setKeyword]=useState("");
    const [logoutLoader,setLogoutLoader]=useState(false);
    const navigate = useNavigate();

    const onSearch = () => {
      if(keyword.length===0){
          toast.error("Search Keyword Required!");
      }
      else{
          navigate("/product-by-search/"+keyword)
      }
    }


    const Logout = async () => {
        setLogoutLoader(true)
        sessionStorage.clear();
        localStorage.clear();
        await UserLogout()
        setLogoutLoader(false);
        window.location.href="/"
    }


    return (
        <>
            <nav className="navbar shadow-sm sticky-top bg-white navbar-expand-lg navbar-light py-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="img-fluid" src={logo} alt="" width="96px"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav06"
                            aria-controls="nav06" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="nav06">
                        <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-3">
                            <span className="nav-item me-4"><Link className="nav-link" to="/">Home</Link></span>
                        </ul>
                    </div>
                    <div className=" d-lg-flex" action="">
                        <div className="input-group">
                            <input onChange={(e)=>setKeyword(e.target.value)} className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                                <button onClick={onSearch} className="btn btn-outline-dark" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: 24, height: 24 }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                    </svg>
                                </button>
                        </div>
                        <Link to="/cart" type="button" className="btn ms-3 btn-outline-success position-relative">
                            <i className="bi bi-bag"></i>
                        </Link>
                        <Link to="/wish" type="button" className="btn ms-3 btn-dark d-flex">
                            <i className="bi bi-heart"></i>
                        </Link>
                        {
                            (()=>{
                                if(localStorage.getItem('login')==="1"){
                                    return (
                                        <>
                                            <Link type="button" className="btn ms-3 btn-success d-flex" to="/profile">Profile</Link>
                                            <SubmitButton submit={logoutLoader} text="Logout" onClick={Logout} type="button" className="btn ms-3 btn-success d-flex"/>
                                        </>

                                    )
                                }
                                else{
                                    return (
                                        <Link type="button" className="btn ms-3 btn-success d-flex" to="/login">Login</Link>
                                    )
                                }
                            })()
                        }
                    </div>
                </div>
            </nav>
            <Toaster position={"bottom-center"} />
        </>
    );
};

export default MenuBar;