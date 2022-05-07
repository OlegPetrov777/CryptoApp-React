import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Redirect, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import MarketContainer from "./components/Market/MarketContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {
    return (
        <div className="App">
            <Header/>
            <div className="block">
                {/*<Route path={'/'} exact render={() => <Redirect to={'/gallery'}/>}/>*/}
                <Route path={'/'} exact render={() => <Redirect to={'/market'}/>}/>
                <Route path={'/market'} exact render={() => <MarketContainer/>}/>
                <Route path={'/profile'} exact render={() => <ProfileContainer/>}/>
            </div>
        </div>
    );
}

export default App;
