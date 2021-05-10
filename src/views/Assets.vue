<template>
    <b-card header="Assets" class="border-0">
        <b-row no-gutters>
            <b-col>
                <b-row>
                    <b-col>
                        <b-form-group label="Gift:" label-for="gift">
                            <b-input-group size="sm" prepend="$">
                                <b-input id="gift" type="number" placeholder="Gift" v-model="gift" :step="1000"/>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group label="Cash on Hand:" label-for="cash">
                            <b-input-group size="sm" prepend="$">
                                <b-input id="cash" type="number" placeholder="Cash on Hand" v-model="cash" :step="1000"/>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-card>
</template>
<script>

import {Vue, Component} from 'vue-property-decorator';

@Component
export default class Assets extends Vue {
    get gift() {
        return this.$store.getters.gift;
    }

    set gift(gift) {
        this.$store.commit('gift', gift);
    }

    get cash() {
        return this.$store.getters.cash;
    }

    set cash(cash) {
        this.$store.commit('cash', cash);
    }
}

</script>
<style scoped>


</style>
