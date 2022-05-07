import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.coingecko.com/api',
})

export const cryptoAPI = {

    getCoin(coinName) {
        return instance.get(`/v3/coins/${coinName}`)
            .then(response => {
                return response.data;
            })
    },

    getPrice(coinName, coinNameVS) {
        return instance.get(`/v3/coins/${coinName}/ohlc?vs_currency=${coinNameVS}&days=14`)
            .then(response => {
                return response.data;
            })
    }
}
