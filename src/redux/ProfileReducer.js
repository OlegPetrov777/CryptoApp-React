const IS_FETCHING = 'IS_FETCHING';
const SET_PRICE_BTC = 'SET_PRICE_BTC';
const SET_PRICE_ETH = 'SET_PRICE_ETH';


let initialState = {
    isFetching: false,
    priceBtc: 0,
    priceEth: 0,
    myCoins: {
        btc: 0.003351,
        eth: 0.105684,
        usd: 1000
    }
}

const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }

        case SET_PRICE_BTC:
            return {
                ...state, priceBtc: action.priceBtc
            }

        case SET_PRICE_ETH:
            return {
                ...state, priceEth: action.priceEth
            }


        default: {
            return state;
        }
    }
}

export const setIsFetchingAC = (isFetching) => {
    return {type: IS_FETCHING, isFetching}
}

export const setPriceBtcAC = (priceBtc) => {
    return {type: SET_PRICE_BTC, priceBtc}
}

export const setPriceEthAC = (priceEth) => {
    return {type: SET_PRICE_ETH, priceEth}
}

export default ProfileReducer;