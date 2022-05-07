const IS_FETCHING = 'IS_FETCHING';
const SET_VISIBLE_ALERT = 'SET_VISIBLE_ALERT';
const SET_CURRENT_COIN = 'SET_CURRENT_COIN';
const SET_CURRENT_COIN_VS = 'SET_CURRENT_COIN_VS';
const SET_CURRENT_PRICE = 'SET_CURRENT_PRICE';
const SET_PRICE_LIST = 'SET_PRICE_LIST';


let initialState = {
    isFetching: false,
    visibleAlert: false,
    currentCoin: {},
    currentCoinVS: '',
    currentPrice: -1,
    priceList: []
}

const MarketReducer = (state = initialState, action) => {

    switch (action.type) {
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }

        case SET_VISIBLE_ALERT:
            return {
                ...state, visibleAlert: action.visibleAlert
            }

        case SET_CURRENT_COIN:
            return {
                ...state, currentCoin: action.currentCoin
            }

        case SET_CURRENT_COIN_VS:
            return {
                ...state, currentCoinVS: action.currentCoinVS
            }

        case SET_CURRENT_PRICE:
            return {
                ...state, currentPrice: action.currentPrice
            }

        case SET_PRICE_LIST:
            return {
                ...state, priceList: action.priceList
            }

        default: {
            return state;
        }
    }
}

export const setIsFetchingAC = (isFetching) => {
    return {type: IS_FETCHING, isFetching}
}

export const setVisibleAlertAC = (visibleAlert) => {
    return {type: SET_VISIBLE_ALERT, visibleAlert}
}

export const setCurrentCoinAC = (currentCoin) => {
    return {type: SET_CURRENT_COIN, currentCoin}
}

export const setCurrentCoinVsAC = (currentCoinVS) => {
    return {type: SET_CURRENT_COIN_VS, currentCoinVS}
}

export const setCurrentPriceAC = (currentPrice) => {
    return {type: SET_CURRENT_PRICE, currentPrice}
}

export const setPriceListAC = (priceList) => {
    return {type: SET_PRICE_LIST, priceList}
}


export default MarketReducer;