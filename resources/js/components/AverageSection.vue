<template>
  <div class="table-header flex border border-1 border-black py-2">
    <div class="w-[170px] text-gray-400 flex justify-center"></div>
    <div class="w-[380px] text-black flex justify-start">
      Average by {{ params.display }}
    </div>
    <div
      class="w-[180px] flex justify-around text-gray-400 px-2"
      v-for="year in params.years"
      :key="year"
    >
      <p class="text-center w-[90px]">
        {{ getAverage('FIX', year) }}
      </p>
      <p class="text-center w-[90px]">
        {{ getAverage('FRN', year) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AverageSection",
  props: {
    params: Object,
    data: Array
  },
  methods: {
    getAverage (key, year) {
      let sum = 0;
      let count = 0;
      if (!this.data) return
      for (let item of this.data) {
        if (!item.Quote) continue
        for (let subItem of Object.values(item.Quote)) {
          if (
            subItem['CouponType'] === key
            && subItem['Years'] === Number(year.match(/\d+/)[0])
            && subItem[this.params.display]
          ) {
            count++
            sum += subItem[this.params.display]
          }
        }
      }
      if (!sum || !count) return ""
      const result = (sum / count).toFixed(2);

      switch (this.params.display) {
        case "Spread":
          return "+" + result + "bp"
        case "3MLSpread":
          return "+" + result + "bp"
        case "Yield":
          return result + "%"
        default:
          return ""
      }
    }
  }
}
</script>
