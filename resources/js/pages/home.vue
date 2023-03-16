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
          v-model="params.companyName"
        />
      </div>
      <div class="table mt-4">
        <table-header :params="params" :sort="sort" @updateSort="updateSort" />
        <table-body :data="sortedData" :params="params" />
        <average-section :params="params" :data="sortedData" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import moment from "moment"

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
      sort: {
        companySort: "",
        dateSort: ""
      },
      sortedData: this.getData
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
    },
    updateSort (key) {
      this.sort = {
        ...this.sort,
        [key]: this.sort[key] === 'desc' ? "asc" : "desc"
      }
    }
  },
  watch: {
    'params.companyName': function () {
      this.fetchData(this.params)
    },
    'sort': function (newVal, oldVal) {
      if (newVal.companySort !== oldVal.companySort) {
        if (this.sort.companySort === "desc") this.sortedData = this.sortedData.sort((a, b) => {
          if (a.Company < b.Company) {
            return -1;
          } else if (a.Company > b.Company) {
            return 1;
          } else {
            return 0;
          }
        })
        if (this.sort.companySort === "asc")
          this.sortedData = this.sortedData.sort((a, b) => {
            if (a.Company < b.Company) {
              return 1;
            } else if (a.Company > b.Company) {
              return -1;
            } else {
              return 0;
            }
          })
      }

      if (newVal.dateSort !== oldVal.dateSort) {
        let dateExistedData = this.sortedData.filter(item => item.DateSent !== null);
        const dateNonExistedData = this.sortedData.filter(item => item.DateSent === null);
        dateExistedData = dateExistedData.map((item) => ({
          ...item,
          DateSent: moment(item.DateSent)
        }))

        if (this.sort.dateSort === "desc") {
          dateExistedData.sort((a, b) => a.DateSent - b.DateSent)
        }
        if (this.sort.dateSort === "asc") {
          dateExistedData.sort((a, b) => b.DateSent - a.DateSent)
        }

        this.sortedData = [...dateExistedData, ...dateNonExistedData]
      }
    },
    'getData': function (newVal) {
      this.sortedData = newVal
    }
  }
}
</script>
