import React,{useState,useEffect} from 'react';
import './style.scss'
import { Navigation } from '../../layout/Navigation';


export const Home=() =>{


    return (
        <div className='home darkmode'>
            <div className='home__container'>
                <div className='home__container--header'>
                    <Navigation/>
                </div>
                <div className='home__container--featurepost'>

                </div>
                <div className='home__container--content'>
                    <div className='home__container--content-body'>

                    </div>
                    <div className='home__container--content-sidebar'>

                    </div>
                </div>
               
            </div>    
        </div>
    );
}
