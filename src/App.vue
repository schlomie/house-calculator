<template>
    <div id="app" class="container">
        <b-list-group flush>
            <b-list-group-item class="p-0">
                <b-row no-gutters class="m-0">
                    <b-col md="9" class="p-0">
                        <expenses/>
                    </b-col>
                    <b-col md="3" class="p-0">
                        <assets/>
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item class="p-0">
                <can-afford-table/>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>

import Expenses from '@/views/Expenses';
import Assets from '@/views/Assets';
import CanAffordTable from '@/views/CanAffordTable';
import {Vue, Component} from 'vue-property-decorator';


@Component({
    components: {
        Expenses,
        Assets,
        CanAffordTable
    }
})
export default class App extends Vue {
    get name() {
        return 'App';
    }
}
</script>
<style>
body {
    background-color: #777 !important;
}

#app {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 50px;
}

div.card {
    border-radius: 0 !important;
}

</style>
