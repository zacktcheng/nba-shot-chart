import React, {Component} from 'react';
import logo from "../assets/images/logo-nba.svg";

class TopNavBar extends Component {
   render() {
       return (
           <header className="App-header">
               <div>
                   <img src={logo} className="App-logo" alt="logo" />
               </div>
           </header>
       );
   }
}

export default TopNavBar;