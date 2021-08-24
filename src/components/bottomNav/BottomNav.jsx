import React from 'react';
import Icon from '../icon/Icon.jsx';
import "./BottomNav.css";



export default function BottomNav() {
    return (
        <nav className="bottomnav" >
            <ul>
                <li>
                    <Icon name="home" alt="home" color="var(--bg-secundary)"/>
                </li>
            
                <li>
                     <Icon name="cutlery" alt="find recipes"/>
                </li>

                <li>
                     <Icon name="user" alt="account"/>
                </li>
                <li>
                     <Icon name="recipes" alt="my recipes"/>
                </li>
            </ul>
        </nav>
    )
}
