<template>
  <div class="table-header flex border-b border-1 border-b-gray-400">
    <div class="w-[170px] text-gray-400 flex justify-center items-end">
      DATE SENT
      <div class="ml-2" @click="updateSort('dateSort')">
        <i
          v-if="sort.dateSort === 'desc'"
          class="fa-solid fa-chevron-down text-black"
        ></i>
        <i v-else class="fa-solid fa-chevron-up"></i>
      </div>
    </div>
    <div class="w-[380px] text-gray-400 flex justify-start items-end">
      COMPANY
      <div class="ml-2" @click="updateSort('companySort')">
        <i
          v-if="sort.companySort === 'desc'"
          class="fa-solid fa-chevron-down text-black"
        ></i>
        <i v-else class="fa-solid fa-chevron-up"></i>
      </div>
    </div>
    <div class="w-[180px] px-2" v-for="year in params.years" :key="year">
      <p class="text-center border-b border-1 border-b-gray-400 font-medium">
        {{ yearsObj[year] }}
      </p>
      <div class="flex justify-around text-gray-400">
        <p class="text-center w-[90px]">FIX</p>
        <p class="text-center w-[90px]">FRN</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableHeader",
  props: {
    params: Object,
    sort: Object,
  },
  data () {
    return {
      yearsObj: {
        "5yrs": "5 YRS",
        "10yrs": "10 YRS",
        "40yrs": "40 YRS",
      }
    }
  },
  methods: {
    updateSort (key) {
      this.$emit("updateSort", key)
    }
  }
}
</script>
