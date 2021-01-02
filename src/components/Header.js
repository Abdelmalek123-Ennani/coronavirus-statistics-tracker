import React, { Component } from 'react';
import logo from "../svgs/logo.svg";


class Header extends Component {
    render() {
        return (
            <header>
              <img className="logo" src={ logo } alt="logo" />
              <h2>&lt;Coronavirus Disease /&gt;</h2>
            </header>
        )
    }
}

export default Header