import React from "react";
import style from './Profile.module.css'
import PieChartProfile from "./PieChartProfile";


let Profile = (props) => {
    let balance = (props.priceBtc * props.myCoins.btc + props.priceEth * props.myCoins.eth + props.myCoins.usd).toFixed(2)
    return (<div className={style.profile_container}>
            <h1>My Profile</h1>
            <div className={style.main_content}>
                <div>
                    <h2 >Balance: {balance}$</h2>
                    <h5>BTC: {props.myCoins.btc.toFixed(6)}</h5>
                    <h5>ETH: {props.myCoins.eth.toFixed(6)}</h5>
                    <h5>USD: {props.myCoins.usd.toFixed(2)}</h5>
                </div>
                <PieChartProfile myCoins={props.myCoins}
                                 priceBtc={props.priceBtc}
                                 priceEth={props.priceEth}
                />
            </div>
        </div>);
}

export default Profile;
