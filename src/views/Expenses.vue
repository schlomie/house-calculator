<template>
    <b-card header="Expenses" class="border-0">
        <b-row no-gutters>
            <b-col md="4">
                <b-row>
                    <b-col>
                        <b-form-group label="Minimum Price:" label-for="minimum-price">
                            <b-input-group size="sm" prepend="$">
                                <b-input id="minimum-price" type="number" placeholder="Minimum Price" v-model="minimumPrice" :step="1000"/>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group label="Maximum Price:" label-for="maximuim-price">
                            <b-input-group size="sm" prepend="$">
                                <b-input id="maximuim-price" type="number" placeholder="Maximum Price" v-model="maximumPrice" :step="1000"/>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group label="Price Step:" label-for="price-step">
                            <b-input-group size="sm" prepend="$">
                                <b-input id="price-step" type="number" placeholder="Price Step" v-model="priceStep" :step="1000"/>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-col>
            <b-col md="4">
                <b-row>
                    <b-col>
                        <b-form-group label="Down Payment:" label-for="downpayment">
                            <b-input-group size="sm" append="%">
                                <b-input id="downpayment" type="number" placeholder="Down Payment" v-model="downpayment"/>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group label="Closing Costs:" label-for="closing">
                            <b-input-group size="sm" append="%">
                                <b-input id="closing" type="number" placeholder="Closing Costs" v-model="closing"/>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group label="Interest Rate:" label-for="interest">
                            <b-input-group size="sm" append="%">
                                <b-input id="interest" type="number" placeholder="Interest Rate" v-model="interest"/>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-col>
            <b-col md="4">
                <b-row>
                    <b-col>
                        <b-form-group label="2-Months Rent:" label-for="rent">
                            <b-input-group size="sm" prepend="$">
                                <b-input id="rent" type="number" placeholder="Remaining Rent" v-model="rent" :step="100"/>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group label="Lease Buy Out:" label-for="lease">
                            <b-input-group size="sm" prepend="$">
                                <b-input id="lease" type="number" placeholder="Lease Buy Out" v-model="lease" :step="100"/>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-card>
</template>
<script>

import { Vue, Component } from 'vue-property-decorator';


@Component
export default class Expenses extends Vue {

    get minimumPrice() {
        return this.$store.getters.minimumPrice;
    }

    set minimumPrice(minimumPrice) {
        this.$store.commit('minimumPrice', minimumPrice);
    }

    get maximumPrice() {
        return this.$store.getters.maximumPrice;
    }

    set maximumPrice(maximumPrice) {
        this.$store.commit('maximumPrice', maximumPrice);
    }

    get priceStep() {
        return this.$store.getters.priceStep;
    }

    set priceStep(priceStep) {
        this.$store.commit('priceStep', priceStep);
    }

    get downpayment() {
        return this.$store.getters.downpayment;
    }

    set downpayment(downpayment) {
        this.$store.commit('downpayment', downpayment);
    }

    get closing() {
        return this.$store.getters.closing;
    }

    set closing(closing) {
        return this.$store.commit('closing', closing);
    }

    get interest() {
        return this.$store.getters.interest;
    }

    set interest(interest) {
        this.$store.commit('interest', interest);
    }

    get rent() {
        return this.$store.getters.rent;
    }

    set rent(rent) {
        this.$store.commit('rent', rent);
    }

    get lease() {
        return this.$store.getters.lease;
    }

    set lease(lease) {
        this.$store.commit('lease', lease);
    }
}

</script>
<style>
    label {
        cursor: pointer !important;
    }
</style>
