<template>
    <b-card no-body header="What You Can Afford" class="border-0 m-0">
        <b-table :items="tableData" :fields="fields"
                 :tbody-tr-class="rowClass"
                 small striped outline
                 stacked="md">
            <template #cell(price)="data">
                ${{ data.value.toLocaleString() }}
            </template>
            <template #cell(downpayment)="data">
                ${{ data.value.toLocaleString() }}
            </template>
            <template #cell(monthlyPayment)="data">
                ${{ data.value.toLocaleString() }}
            </template>
            <template #cell(closing)="data">
                ${{ data.value.toLocaleString() }}
            </template>
            <template #cell(cashNeeded)="data">
                ${{ data.value.toLocaleString() }}
            </template>
            <template #cell(cashAvailable)="data">
                ${{ data.value.toLocaleString() }}
            </template>
            <template #cell(diff)="data">
                ${{ data.value.toLocaleString() }}
            </template>
        </b-table>
    </b-card>
</template>
<script>

import {Vue, Component} from 'vue-property-decorator';

@Component
export default class CanAffordTable extends Vue {

    get minimumPrice() {
        return this.$store.getters.minimumPrice;
    }

    get maximumPrice() {
        return this.$store.getters.maximumPrice;
    }

    get priceStep() {
        return this.$store.getters.priceStep;
    }

    get downpayment() {
        return this.$store.getters.downpayment;
    }

    get closing() {
        return this.$store.getters.closing;
    }

    get interest() {
        return this.$store.getters.interest;
    }

    get rent() {
        return this.$store.getters.rent;
    }

    get lease() {
        return this.$store.getters.lease;
    }

    get gift() {
        return this.$store.getters.gift;
    }

    get cash() {
        return this.$store.getters.cash;
    }

    get cashAvailable() {
        return this.gift + this.cash;
    }


    get fields() {
        return [{
            key: 'price',
            label: 'Price',
            sortable: false
        }, {
            key: 'downpayment',
            label: 'Down Payment',
            sortable: false
        }, {
            key: 'monthlyPayment',
            label: 'Mortgage Payment',
            sortable: false
        }, {
            key: 'closing',
            label: 'Closing Costs',
            sortable: false
        }, {
            key: 'cashNeeded',
            label: 'Cash Needed',
            sortable: false
        }, {
            key: 'cashAvailable',
            label: 'Cash Available',
            sortable: false
        }, {
            key: 'diff',
            label: 'Deficit / Surplus',
            sortable: false
        }];
    }

    get tableData() {

        const priceDiff = Math.max(this.maximumPrice - this.minimumPrice, 0);
        const numRows =  Math.ceil(priceDiff / Math.max(this.priceStep, 1));

        const rows = [];


        for (let i = 0; i<=numRows; ++i) {
            const adj = i * this.priceStep;
            const price = adj + this.minimumPrice;
            const downpayment = price * (this.downpayment / 100);
            const closing = price * (this.closing / 100);
            const cashNeeded = downpayment + closing + this.rent + this.lease;
            const cashAvailable = this.cashAvailable;
            const diff = cashAvailable - cashNeeded;
            const monthlyPayment = this.monthlyPayment(price);
            rows.push({
                price,
                downpayment,
                closing,
                cashNeeded,
                cashAvailable,
                diff,
                monthlyPayment
            });
        }

        return rows;
    }

    rowClass(item, type) {
        if (!item || 'row' !== type) return null;

        switch (true) {
            case item.diff < 0: return 'table-danger';
            case item.diff > 0: return 'table-success';
            default: return null;
        }
    }

    monthlyPayment(price) {
        const numberOfPayments = 30 /* years */ * 12;
        const downpayment = price * this.downpayment / 100;
        const monthlyInterestRate = this.interest / 100 / 12;
        const loanAmount = price - downpayment;

        return Math.ceil(loanAmount * monthlyInterestRate *
            (Math.pow(1 + monthlyInterestRate, numberOfPayments) /
            (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)));
    }

}

</script>
<style scoped>

</style>
