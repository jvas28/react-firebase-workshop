import React, { Component } from 'react';
import logo_ecudevs from '../../assets/img/ecudevs_logo.svg';
import logo_bluefire from '../../assets/img/blufiredev_logo.svg';

import "./Branding.css";
class Branding extends Component {
    render() {
        return (
            <div id="branding-container">
                <img alt="bluefire" id="logo-bluefire" src={logo_bluefire} />
                <img alt="ecudevs" id="logo-ecudevs" src={logo_ecudevs} />
            </div>
        );
    }
}

export default Branding;