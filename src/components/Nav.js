import React, { Component } from 'react';
import { Link  } from 'react-router-dom';


// navbar Links
class Nav extends Component {
    render() {

        const styelLink = {
            color : "#333",
            textDecoration : "none"
        }
    

        return (
            <nav>
               <ul>
                    <li><Link style={styelLink} to="/">Home</Link></li>
                    <li><Link style={styelLink} to="/measures">Measures</Link></li>
                    <li><Link style={styelLink} to="/more">More Info</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav
