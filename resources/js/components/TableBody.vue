<template>
  <div>
    <div v-for="(item, index) in data" :key="item.Company + index">
      <div
        :class="{
          'flex border-b border-1 border-b-gray-300': true,
          'border-0': index === data.length - 1
        }"
      >
        <div class="w-[170px] text-black flex justify-center items-center">
          <button
            v-if="item.Quote"
            @click="changeCollapseIndex(index)"
            class="bg-white text-black rounded pr-3"
          >
            {{ collapseIndex !== index ? '+' : '-' }}
          </button>
          <span>
            {{ convertDate(item.DateSent) }}
          </span>
        </div>
        <div class="w-[380px] text-gray-400 flex justify-start items-center">
          {{ item.Company }}
        </div>
        <div
          class="w-[180px] text-black flex justify-around"
          v-for="year in params.years"
          :key="year"
        >
          <p
            :class="{
              'text-center w-[90px]': true,
              'bg-yellow-100': isMin(
                getQuoteItem(item.Quote, year, 'FIX', params.display),
                year
              )
            }"
          >
            {{ getQuoteItem(item.Quote, year, 'FIX', params.display) }}
          </p>
          <p class="text-center w-[90px]">
            {{ getQuoteItem(item.Quote, year, 'FRN', params.display) }}
          </p>
        </div>
      </div>
      <transition
        enter-active-class="animate-fade-in"
        leave-active-class="animate-fade-out"
      >
        <div v-show="collapseIndex === index" class="flex flex-col">
          <div
            class="flex border-b border-1 border-b-gray-300"
            v-for="display in ['Spread', 'Yield', '3MLSpread'].filter(
              (item) => item !== params.display
            )"
            :key="display"
          >
            <div
              class="w-[170px] text-black flex justify-center items-center"
            ></div>
            <div
              class="w-[380px] text-gray-400 flex justify-start items-center"
            >
              {{ display }}
            </div>
            <div
              class="w-[180px] text-black flex justify-around"
              v-for="year in params.years"
              :key="year"
            >
              <p class="text-center w-[90px]">
                {{ getQuoteItem(item.Quote, year, 'FIX', display) }}
              </p>
              <p class="text-center w-[90px]">
                {{ getQuoteItem(item.Quote, year, 'FRN', display) }}
              </p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import moment from "moment"

export default {
  name: "TableBody",
  props: {
    data: Array,
    params: Object,
  },
  data () {
    return {
      collapseIndex: "",
    }
  },
  methods: {
    convertDate (date) {
      if (!date) return
      const dateObj = moment(date, 'YYYY-MM-DD');
      const formattedDate = dateObj.format('DD-MMM-YY').toUpperCase();

      return formattedDate
    },
    getQuoteItem (data, year, key1, key2) {
      if (!data) return ""
      const numberYear = Number(year.match(/\d+/)[0])
      const filteredByKey1 = Object.values(data).filter((item) => item.Years === numberYear && item.CouponType === key1)[0]

      if (!filteredByKey1 || !filteredByKey1[key2]) return ""
      switch (key2) {
        case "Spread":
          return "+" + filteredByKey1[key2] + "bp"
        case "3MLSpread":
          return "+" + filteredByKey1[key2] + "bp"
        case "Yield":
          return filteredByKey1[key2] + "%"
        default:
          return ""
      }
    },
    changeCollapseIndex (index) {
      if (this.collapseIndex === index) this.collapseIndex = ""
      else this.collapseIndex = index
    },
    isMin (val, year) {
      if (!val) return false
      let result = true;

      for (let item of this.data) {
        if (!item.Quote) continue
        for (let subItem of Object.values(item.Quote)) {
          if (
            subItem['CouponType'] === "FIX"
            && subItem[this.params.display] < Number(val.match(/\d+/)[0])
            && subItem['Years'] === Number(year.match(/\d+/)[0])
          ) {
            result = false;
            break
          }
        }
      }
      return result
    },
  }
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
