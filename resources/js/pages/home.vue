<template>
  <div class="homepage">
    <div class="container px-6 py-10 mx-auto">
      <div class="flex flex-wrap">
        <button-group
          class="mr-4"
          :buttons="buttonGroup1"
          :selected="[params['currency']]"
          @changeSelected="(selected) => updateParams('currency', selected)"
        />
        <button-group
          class="mr-4"
          :buttons="buttonGroup2"
          :selected="params.years"
          :canSelectOne="false"
          @changeSelected="(selected) => updateParams('years', selected)"
        />
        <button-group
          :buttons="buttonGroup3"
          :selected="[params['display']]"
          @changeSelected="(selected) => updateParams('display', selected)"
        />
      </div>
      <div class="flex flex-wrap mt-4 w-[400px]">
        <input
          type="text"
          class="rounded-lg bg-gray-50 border text-gray-900 focus:ring-[#527094] focus:border-[#527094] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
          placeholder="Filter by company name..."
        />
      </div>
      <div class="table mt-4">
        <table-header :params="params" />
        <table-body :data="getData" :params="params" />
        <average-section :params="params" :data="getData" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

import ButtonGroup from "../components/ButtonGroup.vue"
import TableHeader from '../components/TableHeader.vue'
import TableBody from "../components/TableBody.vue"
import AverageSection from '../components/AverageSection.vue'

export default {
  name: "Home",
  components: {
    ButtonGroup,
    TableHeader,
    TableBody,
    AverageSection
  },
  mounted () {
    this.fetchData(this.params)
  },
  data () {
    return {
      buttonGroup1: [
        { id: "usd", name: "USD" },
        { id: "eur", name: "EUR" },
        { id: "cad", name: "CAD" }
      ],
      buttonGroup2: [
        { id: "5yrs", name: "5 YRS" },
        { id: "10yrs", name: "10 YRS" },
        { id: "40yrs", name: "40 YRS" }
      ],
      buttonGroup3: [
        { id: "Spread", name: "Spread" },
        { id: "Yield", name: "Yield" },
        { id: "3MLSpread", name: "3MLSpread" }
      ],
      params: {
        companyName: "",
        currency: "usd",
        years: ['5yrs', '10yrs', '40yrs'],
        display: "Spread"
      },
    }
  },
  computed: {
    ...mapGetters([
      'getData',
    ]),
  },
  methods: {
    ...mapActions(['fetchData']),
    updateParams (key, value) {
      this.params = {
        ...this.params,
        [key]: value
      }
      this.fetchData(this.params)
    }
  },
}
</script>
