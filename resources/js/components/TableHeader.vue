<template>
  <div class="table-header flex border-b border-1 border-b-gray-400">
    <div class="w-[170px] text-gray-400 flex justify-center items-end">
      DATE SENT
    </div>
    <div class="w-[380px] text-gray-400 flex justify-start items-end">
      COMPANY
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
    params: Object
  },
  data () {
    return {
      yearsObj: {
        "5yrs": "5 YRS",
        "10yrs": "10 YRS",
        "40yrs": "40 YRS",
      }
    }
  }
}
</script>
