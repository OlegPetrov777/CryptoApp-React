import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {cryptoAPI} from "../API/API";
import {setPriceBtcAC, setPriceEthAC} from "../../redux/ProfileReducer";


class ProfileContainer extends React.Component {
    componentDidMount() {

        cryptoAPI.getCoin('bitcoin').then(data => {
            this.props.setPriceBtc(data.market_data.current_price.usd)
        })
        cryptoAPI.getCoin('ethereum').then(data => {
            this.props.setPriceEth(data.market_data.current_price.usd)
        })
    }

    render() {
        return (<>
            <Profile myCoins={this.props.myCoins}
                     priceBtc={this.props.priceBtc}
                     priceEth={this.props.priceEth}
            />
        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.profilePage.isFetching,
        myCoins: state.profilePage.myCoins,
        priceBtc: state.profilePage.priceBtc,
        priceEth: state.profilePage.priceEth
    }
}

export default connect(mapStateToProps, {
    setPriceBtc: setPriceBtcAC,
    setPriceEth: setPriceEthAC
})(ProfileContainer);