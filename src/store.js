import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        minimumPrice: 300000,
        maximumPrice: 360000,
        priceStep: 5000,
        downpayment: 3,
        closing: 3,
        interest: 4,
        rent: 3600,
        lease: 3400,
        gift: 9000,
        cash: 10000
    },
    getters: {
        minimumPrice: (state) => state.minimumPrice,
        maximumPrice: (state) => state.maximumPrice,
        priceStep: (state) => state.priceStep,
        downpayment: (state) => state.downpayment,
        closing: (state) => state.closing,
        interest: (state) => state.interest,
        rent: (state) => state.rent,
        lease: (state) => state.lease,
        gift: (state) => state.gift,
        cash: (state) => state.cash
    },
    mutations: {
        minimumPrice: (state, minimumPrice) => state.minimumPrice = parseInt(minimumPrice, 10),
        maximumPrice: (state, maximumPrice) => state.maximumPrice = parseInt(maximumPrice, 10),
        priceStep: (state, priceStep) => state.priceStep = parseInt(priceStep, 10),
        downpayment: (state, downpayment) => state.downpayment = parseFloat(downpayment),
        closing: (state, closing) => state.closing = parseFloat(closing),
        interest: (state, interest) => state.interest = parseFloat(interest, 10),
        rent: (state, rent) => state.rent = parseInt(rent, 10),
        lease: (state, lease) => state.lease = parseInt(lease, 10),
        gift: (state, gift) => state.gift = parseInt(gift, 10),
        cash: (state, cash) => state.cash = parseInt(cash, 10)
    }
});
