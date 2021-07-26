import React from 'react'
import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons"

export default function topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                
                    <a href="#intro" className="logo">devTor</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+34 655161670</span>
                    </div>       
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>victorcubilesdiaz@gmail.com</span>
                    </div>
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}
