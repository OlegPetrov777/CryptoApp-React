import React from "react";
import style from './Coin.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import BarChartCoin from "./BarChartCoin";
import FormCoin from "./FormCoin";


let Coin = (props) => {

    return (<div className={style.coin_container}>
        <h1>{props.currentCoin.name}/{props.currentCoinVS ? props.currentCoinVS.toUpperCase() : "Coin"}</h1>
        <div className={style.main_content}>

            <BarChartCoin priceList={props.priceList}
            />

            <div className={style.convert}>
                <h3>Conversion</h3>
                <FormCoin currentCoin={props.currentCoin}
                          currentPrice={props.currentPrice}
                          convertCoins={props.convertCoins}
                          myCoins={props.myCoins}
                />
            </div>
        </div>
    </div>)
};

export default Coin;

