import React from "react";
import {BrowserRouter, Route, } from "react-router-dom";
import Header from "./Header";
import Category from "./Category";
import GithubBattle from "./GithubBattle";
import UserBattle from "./UserBattle";


class Main extends React.Component {
    constructor(props) {
        super();
        this.state = {
            darkMode: false
        }
    }

    handleClick = () => {
        this.setState((prevStep) => ({darkMode: !prevStep.darkMode}));
    }
    render() {
        return (
           <div className={this.state.darkMode ? "bg-gray-900 text-white min-h-screen": ""}>
            <BrowserRouter>
             
                    < Header handleClick={this.handleClick} {...this.state}/>
                    < Route path="/" exact>
                        < Category {...this.state}/>
                    </Route>
                    < Route path="/battle">
                        < GithubBattle {...this.state}/>
                    </Route>
                    < Route path="/userbattle" >
                        < UserBattle {...this.state}/>
                    </Route>
              
            </BrowserRouter>
           </div>
        )
    }
}

export default Main;