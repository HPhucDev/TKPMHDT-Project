import React,{useState,useEffect} from 'react';
import './style.scss'
export const Navigation=() =>{
    const categories= [
        {
            name:"ForU",
        },
        {
            name:"Covid19",    
        },
        {
            name:"Thiết bị y tế",
        },
        
    ]
    return (
        <div className='navigation' >
            <div className='navigation__left'>
                <div className='navigation__left--logo' >
                    <img  src={require('../../assets/images/Logo.png')} />
                </div>
                <div className='navigation__left--title' >
                    <p>Medical News</p>
                </div>
            </div>
            <div className='navigation__right' >
                {categories.map((category, index) => (
                    <span className="navigation__right--item">{category.name}</span>
                ))}
            </div>
        </div>
    );
}
