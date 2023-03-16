<template>
  <div class="homepage">
    <div class="container px-6 py-10 mx-auto">
      <div class="flex flex-wrap">
        <button-group
          class="mr-4"
          :buttons="buttonGroup1"
          :selected="['usd']"
        />
        <button-group
          class="mr-4"
          :buttons="buttonGroup2"
          :selected="['5yrs', '10yrs', '40yrs']"
        />
        <button-group :buttons="buttonGroup3" :selected="['spread']" />
      </div>
      <div class="flex flex-wrap mt-4 w-[400px]">
        <input
          type="text"
          class="rounded-lg bg-gray-50 border text-gray-900 focus:ring-[#527094] focus:border-[#527094] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
          placeholder="Filter by company name..."
        />
      </div>
      <div class="table mt-4">
        <table-header />
        <div>
          <div v-for="(item, index) in getData" :key="item.Company + index">
            <div class="flex py-1 border-b border-1 border-b-gray-300">
              <div
                class="w-[170px] text-black flex justify-center items-center"
              >
                <button
                  @click="changeCollapseIndex(index)"
                  class="bg-white text-black rounded pr-3"
                >
                  {{ collapseIndex !== index ? '+' : '-' }}
                </button>
                <span>
                  {{ convertDate(item.DateSent) }}
                </span>
              </div>
              <div
                class="w-[380px] text-gray-400 flex justify-start items-center"
              >
                {{ item.Company }}
              </div>
              <div class="w-[180px] text-black flex justify-around">
                <p class="text-center w-[90px] pt-1">
                  {{
                    item.Quote
                      ? getQuoteItem(item.Quote, 5, 'FIX', 'Spread')
                        ? '+' +
                          getQuoteItem(item.Quote, 5, 'FIX', 'Spread') +
                          'bp'
                        : ''
                      : ''
                  }}
                </p>
                <p class="text-center w-[90px] pt-1">
                  {{
                    item.Quote
                      ? getQuoteItem(item.Quote, 5, 'FRN', 'Spread')
                        ? '+' +
                          getQuoteItem(item.Quote, 5, 'FRN', 'Spread') +
                          'bp'
                        : ''
                      : ''
                  }}
                </p>
              </div>
              <div class="w-[180px] text-black flex justify-around">
                <p class="text-center w-[90px] pt-1">
                  {{
                    item.Quote
                      ? getQuoteItem(item.Quote, 10, 'FIX', 'Spread')
                        ? '+' +
                          getQuoteItem(item.Quote, 10, 'FIX', 'Spread') +
                          'bp'
                        : ''
                      : ''
                  }}
                </p>
                <p class="text-center w-[90px] pt-1">
                  {{
                    item.Quote
                      ? getQuoteItem(item.Quote, 10, 'FRN', 'Spread')
                        ? '+' +
                          getQuoteItem(item.Quote, 10, 'FRN', 'Spread') +
                          'bp'
                        : ''
                      : ''
                  }}
                </p>
              </div>
              <div class="w-[180px] text-black flex justify-around">
                <p class="text-center w-[90px] pt-1">
                  {{
                    item.Quote
                      ? getQuoteItem(item.Quote, 40, 'FIX', 'Spread')
                        ? '+' +
                          getQuoteItem(item.Quote, 40, 'FIX', 'Spread') +
                          'bp'
                        : ''
                      : ''
                  }}
                </p>
                <p class="text-center w-[90px] pt-1">
                  {{
                    item.Quote
                      ? getQuoteItem(item.Quote, 40, 'FRN', 'Spread')
                        ? '+' +
                          getQuoteItem(item.Quote, 40, 'FRN', 'Spread') +
                          'bp'
                        : ''
                      : ''
                  }}
                </p>
              </div>
            </div>
            <transition
              enter-active-class="animate-fade-in"
              leave-active-class="animate-fade-out"
            >
              <div v-show="collapseIndex === index" class="flex flex-col">
                <div class="flex py-1 border-b border-1 border-b-gray-300">
                  <div
                    class="w-[170px] text-black flex justify-center items-center"
                  ></div>
                  <div
                    class="w-[380px] text-gray-400 flex justify-start items-center"
                  >
                    Yield
                  </div>
                  <div class="w-[180px] text-black flex justify-around">
                    <p class="text-center w-[90px] pt-1">
                      {{
                        item.Quote
                          ? getQuoteItem(item.Quote, 5, 'FIX', 'Yield')
                            ? getQuoteItem(item.Quote, 5, 'FIX', 'Yield') + '%'
                            : ''
                          : ''
                      }}
                    </p>
                    <p class="text-center w-[90px] pt-1">
                      {{
                        item.Quote
                          ? getQuoteItem(item.Quote, 5, 'FRN', 'Yield')
                            ? getQuoteItem(item.Quote, 5, 'FRN', 'Yield') + '%'
                            : ''
                          : ''
                      }}
                    </p>
                  </div>
                  <div class="w-[180px] text-black flex justify-around">
                    <p class="text-center w-[90px] pt-1">
                      {{
                        item.Quote
                          ? getQuoteItem(item.Quote, 10, 'FIX', 'Yield')
                            ? getQuoteItem(item.Quote, 10, 'FIX', 'Yield') + '%'
                            : ''
                          : ''
                      }}
                    </p>
                    <p class="text-center w-[90px] pt-1">
                      {{
                        item.Quote
                          ? getQuoteItem(item.Quote, 10, 'FRN', 'Yield')
                            ? getQuoteItem(item.Quote, 10, 'FRN', 'Yield') + '%'
                            : ''
                          : ''
                      }}
                    </p>
                  </div>
                  <div class="w-[180px] text-black flex justify-around">
                    <p class="text-center w-[90px] pt-1">
                      {{
                        item.Quote
                          ? getQuoteItem(item.Quote, 40, 'FIX', 'Yield')
                            ? getQuoteItem(item.Quote, 40, 'FIX', 'Yield') + '%'
                            : ''
                          : ''
                      }}
                    </p>
                    <p class="text-center w-[90px] pt-1">
                      {{
                        item.Quote
                          ? getQuoteItem(item.Quote, 40, 'FRN', 'Yield')
                            ? getQuoteItem(item.Quote, 40, 'FRN', 'Yield') + '%'
                            : ''
                          : ''
                      }}
                    </p>
                  </div>
                </div>
                <div class="flex py-1 border-b border-1 border-b-gray-300">
                  <div
                    class="w-[170px] text-black flex justify-center items-center"
                  ></div>
                  <div
                    class="w-[380px] text-gray-400 flex justify-start items-center"
                  >
                    3MLSpread
                  </div>
                  <div class="w-[180px] text-black flex justify-around">
                    <p class="text-center w-[90px] pt-1">
                      {{
                        item.Quote
                          ? getQuoteItem(item.Quote, 5, 'FIX', '3MLSpread')
                            ? '+' +
                              getQuoteItem(item.Quote, 5, 'FIX', '3MLSpread') +
                              'bp'
                            : ''
                          : ''
                      }}
                    </p>
                    <p class="text-center w-[90px] pt-1">
                      {{
                        item.Quote
                          ? getQuoteItem(item.Quote, 5, 'FRN', '3MLSpread')
                            ? '+' +
                              getQuoteItem(item.Quote, 5, 'FRN', '3MLSpread') +
                              'bp'
                            : ''
                          : ''
                      }}
                    </p>
                  </div>
                  <div class="w-[180px] text-black flex justify-around">
                    <p class="text-center w-[90px] pt-1">
                      {{
                        item.Quote
                          ? getQuoteItem(item.Quote, 10, 'FIX', '3MLSpread')
                            ? '+' +
                              getQuoteItem(item.Quote, 10, 'FIX', '3MLSpread') +
                              'bp'
                            : ''
                          : ''
                      }}
                    </p>
                    <p class="text-center w-[90px] pt-1">
                      {{
                        item.Quote
                          ? getQuoteItem(item.Quote, 10, 'FRN', '3MLSpread')
                            ? '+' +
                              getQuoteItem(item.Quote, 10, 'FRN', '3MLSpread') +
                              'bp'
                            : ''
                          : ''
                      }}
                    </p>
                  </div>
                  <div class="w-[180px] text-black flex justify-around">
                    <p class="text-center w-[90px] pt-1">
                      {{
                        item.Quote
                          ? getQuoteItem(item.Quote, 40, 'FIX', '3MLSpread')
                            ? '+' +
                              getQuoteItem(item.Quote, 40, 'FIX', '3MLSpread') +
                              'bp'
                            : ''
                          : ''
                      }}
                    </p>
                    <p class="text-center w-[90px] pt-1">
                      {{
                        item.Quote
                          ? getQuoteItem(item.Quote, 40, 'FRN', '3MLSpread')
                            ? '+' +
                              getQuoteItem(item.Quote, 40, 'FRN', '3MLSpread') +
                              'bp'
                            : ''
                          : ''
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import moment from "moment"

import ButtonGroup from "../components/ButtonGroup.vue"
import TableHeader from '../components/TableHeader.vue'

export default {
  name: "Home",
  components: {
    ButtonGroup,
    TableHeader
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
        { id: "spread", name: "Spread" },
        { id: "yield", name: "Yield" },
        { id: "3mlspread", name: "3MLSpread" }
      ],
      params: {
        companyName: "",
        currency: "usd",
        years: ['5yrs', '10yrs', '40yrs'],
        display: "spread"
      },
      collapseIndex: "",
    }
  },
  computed: {
    ...mapGetters([
      'getData',
    ]),
  },
  methods: {
    ...mapActions(['fetchData']),
    convertDate (date) {
      if (!date) return
      const dateObj = moment(date, 'YYYY-MM-DD'); // create a moment object from the input date
      const formattedDate = dateObj.format('DD-MMM-YY').toUpperCase();

      return formattedDate
    },
    getQuoteItem (data, year, key1, key2) {
      const filteredByKey1 = Object.values(data).filter((item) => item.Years === year && item.CouponType === key1)[0]
      if (!filteredByKey1) return
      return filteredByKey1[key2]
    },
    changeCollapseIndex (index) {
      if (this.collapseIndex === index) this.collapseIndex = ""
      else this.collapseIndex = index
    }
  },
}
</script>

<style>
.animate-fade-in {
  animation: fadeIn 0.5s ease;
}

.animate-fade-out {
  animation: fadeOut 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
