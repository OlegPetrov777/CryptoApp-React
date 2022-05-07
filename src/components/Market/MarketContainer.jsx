import React from "react";
import {connect} from "react-redux";
import {
    setIsFetchingAC,
    setCurrentCoinAC,
    setPriceListAC,
    setCurrentCoinVsAC,
    setCurrentPriceAC, setVisibleAlertAC
} from "../../redux/MarketReducer";
import Market from "./Market";
import {cryptoAPI} from "../API/API";
import Preloader from "../Preloader/Preloader";


class MarketContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        this.props.setCurrentCoinVs('usd')

        cryptoAPI.getCoin('bitcoin').then(data => {
            this.props.setCurrentCoin(data)
            this.props.setCurrentPrice(data.market_data.current_price.usd)
        })
        cryptoAPI.getPrice('bitcoin', 'usd').then(data => {
            this.props.setPriceList(data)
        })
        this.props.setIsFetching(false);
    }


    onPageChanged = (coinName, coinNameVS) => {
        this.props.setIsFetching(true);
        this.props.setCurrentCoinVs(coinNameVS)

        cryptoAPI.getCoin(coinName).then(data => {
            this.props.setCurrentCoin(data)
            this.props.setCurrentPrice(data.market_data.current_price[coinNameVS])
        })
        cryptoAPI.getPrice(coinName, coinNameVS).then(data => {
            this.props.setPriceList(data)
        })
        this.props.setIsFetching(false);
    }


    convertCoins = (count) => {
        let a = count / this.props.currentPrice

        if (Number(count) === 0) {
            alert("Enter the count!")
        } else if (this.props.myCoins[this.props.currentCoin.symbol] - a < 0) {
            alert("Insufficient funds!")
        } else {
            this.props.myCoins[this.props.currentCoin.symbol] -= a
            this.props.myCoins[this.props.currentCoinVS] += Number(count)
            alert("Successfully!");
            this.onPageChanged(this.props.currentCoin.name, this.props.currentCoinVS)
        }
    }

    render() {
        return (<>
            {
                this.props.isFetching === false ? <Market
                    currentCoin={this.props.currentCoin}
                    currentCoinVS={this.props.currentCoinVS}
                    currentPrice={this.props.currentPrice}
                    priceList={this.props.priceList}
                    myCoins={this.props.myCoins}
                    visibleAlert={this.props.visibleAlert}
                    setVisibleAlert={this.props.setVisibleAlert}
                    onPageChanged={this.onPageChanged}
                    convertCoins={this.convertCoins}
                /> : <Preloader/>
            }
        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.marketPage.isFetching,
        visibleAlert: state.marketPage.visibleAlert,
        currentCoin: state.marketPage.currentCoin,
        currentCoinVS: state.marketPage.currentCoinVS,
        currentPrice: state.marketPage.currentPrice,
        priceList: state.marketPage.priceList,
        myCoins: state.profilePage.myCoins
    }
}

export default connect(mapStateToProps, {
    setIsFetching: setIsFetchingAC,
    setCurrentCoin: setCurrentCoinAC,
    setCurrentPrice: setCurrentPriceAC,
    setPriceList: setPriceListAC,
    setCurrentCoinVs: setCurrentCoinVsAC,
    setVisibleAlert: setVisibleAlertAC
})(MarketContainer);
