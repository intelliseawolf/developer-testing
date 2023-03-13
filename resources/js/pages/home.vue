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
    </div>
  </div>
</template>

<script>
import ButtonGroup from "../components/ButtonGroup.vue"

export default {
  name: "Home",
  components: {
    ButtonGroup
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
      ]
    }
  },
  mounted () {

  }
}
</script>
