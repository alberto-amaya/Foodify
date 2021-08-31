import React from 'react';
import Icon from '../iconComponent/Icon.jsx';
import "./BottomNav.css";



export default function BottomNav() {
    return (
        <nav className="bottomnav" >
            <ul>
                <li>
                    <Icon name="home"   fill="var(--bg-secundary)"/>
                </li>
            
                <li>
                     <Icon name="cutlery"  fill="#666"/>
                </li>

                <li>
                     <Icon name="user"  fill="#666"/>
                </li>
                <li>
                     <Icon name="recipes"  fill="#666"/>
                </li>
            </ul>
        </nav>
    )
}
