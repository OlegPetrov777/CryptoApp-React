import React from "react";
import Coin from "./Coin/Coin";
import NavBar from "../NavBar/NavBar";
import Preloader from "../Preloader/Preloader";


let Market = (props) => {
    return (
        <div>
            <NavBar onPageChanged={props.onPageChanged}/>

            {props.currentCoin ? <Coin currentCoin={props.currentCoin}
                                       currentCoinVS={props.currentCoinVS}
                                       currentPrice={props.currentPrice}
                                       myCoins={props.myCoins}
                                       priceList={props.priceList}
                                       convertCoins={props.convertCoins}
                                       onPageChanged={props.onPageChanged}
            /> : <Preloader/>}
        </div>);
}

export default Market;
