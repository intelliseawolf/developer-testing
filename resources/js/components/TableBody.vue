<template>
  <div>
    <div v-for="(item, index) in data" :key="item.Company + index">
      <div class="flex py-1 border-b border-1 border-b-gray-300">
        <div class="w-[170px] text-black flex justify-center items-center">
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
        <div class="w-[380px] text-gray-400 flex justify-start items-center">
          {{ item.Company }}
        </div>
        <div class="w-[180px] text-black flex justify-around">
          <p class="text-center w-[90px] pt-1">
            {{
              item.Quote
                ? getQuoteItem(item.Quote, 5, 'FIX', 'Spread')
                  ? '+' + getQuoteItem(item.Quote, 5, 'FIX', 'Spread') + 'bp'
                  : ''
                : ''
            }}
          </p>
          <p class="text-center w-[90px] pt-1">
            {{
              item.Quote
                ? getQuoteItem(item.Quote, 5, 'FRN', 'Spread')
                  ? '+' + getQuoteItem(item.Quote, 5, 'FRN', 'Spread') + 'bp'
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
                  ? '+' + getQuoteItem(item.Quote, 10, 'FIX', 'Spread') + 'bp'
                  : ''
                : ''
            }}
          </p>
          <p class="text-center w-[90px] pt-1">
            {{
              item.Quote
                ? getQuoteItem(item.Quote, 10, 'FRN', 'Spread')
                  ? '+' + getQuoteItem(item.Quote, 10, 'FRN', 'Spread') + 'bp'
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
                  ? '+' + getQuoteItem(item.Quote, 40, 'FIX', 'Spread') + 'bp'
                  : ''
                : ''
            }}
          </p>
          <p class="text-center w-[90px] pt-1">
            {{
              item.Quote
                ? getQuoteItem(item.Quote, 40, 'FRN', 'Spread')
                  ? '+' + getQuoteItem(item.Quote, 40, 'FRN', 'Spread') + 'bp'
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
</template>

<script>
export default {
  name: "TableBody",
  props: {
    data: Array
  },
  data () {
    return {
      collapseIndex: "",
    }
  },
  methods: {
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
