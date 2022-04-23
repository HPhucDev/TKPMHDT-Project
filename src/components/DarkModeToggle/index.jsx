import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './style.scss'

export const  DarkModeToggle=()=> {
    return (
        <div className='darkmode'>
            <input type="checkbox" className="checkbox" id="chk" />
            <label className="panel" for="chk">
                <img className="panel__icon--moon" src={require('../../assets/icons/moon.png')} />
                <img className="panel__icon--sun" src={require('../../assets/icons/sun.png')}  />
                <div className="panel__ball"></div>
            </label>
        </div>
    );
}

