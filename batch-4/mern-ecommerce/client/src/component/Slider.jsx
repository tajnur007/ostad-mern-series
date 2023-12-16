import React, {useEffect, useState} from 'react';
import {SliderListRequest} from "../apiRequest/ApiRequest.js";
import SliderSkeleton from "./loader/SliderSkeleton.jsx";
import {Link} from "react-router-dom";
const Slider = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        (async () => {
            let result= await SliderListRequest();
            setData(result);
        })()
    },[0])

    if(data.length===0){
        return <SliderSkeleton/>
    }
    else{
        return (
            <div id="carouselExampleDark" className="carousel hero-bg carousel-dark slide">
                <div className="carousel-indicators">
                    {
                        data.map((item,i)=>{
                            return(
                                <button key={i} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={i} className="active" aria-current="true" aria-label={"Slide "+ i}></button>
                            )
                        })
                    }
                </div>
                <div className="carousel-inner py-5">
                    {
                        data.map((item,i)=>{
                                let active="carousel-item";
                                if(i===0){
                                    active="carousel-item active"
                                }
                                return(
                                    <div key={i} className={active} data-bs-interval="10000">
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                                                    <h1 className="headline-1">{item['title']}</h1>
                                                    <p>{item['des']}</p>
                                                    <Link to={"/details/"+item['productID']} className="btn text-white btn-success px-5">Buy Now</Link>
                                                </div>
                                                <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                                                    <img src={item['image']} className="w-100" alt="..."/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                    }
                </div>
                <button className="carousel-control-prev btn rounded-5" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next btn" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }



};

export default Slider;