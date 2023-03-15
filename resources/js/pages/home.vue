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
        <div class="table-header flex border-b border-1 border-b-gray-400">
          <div class="w-[170px] text-gray-400 flex justify-center items-end">
            DATE SENT
          </div>
          <div class="w-[380px] text-gray-400 flex justify-start items-end">
            COMPANY
          </div>
          <div class="w-[180px] px-2">
            <p
              class="text-center border-b border-1 border-b-gray-400 font-medium"
            >
              5 YRS
            </p>
            <div class="flex justify-around text-gray-400">
              <p class="text-center">FIX</p>
              <p class="text-center">FYN</p>
            </div>
          </div>
          <div class="w-[180px] px-2">
            <p
              class="text-center border-b border-1 border-b-gray-400 font-medium"
            >
              10 YRS
            </p>
            <div class="flex justify-around text-gray-400">
              <p class="text-center">FIX</p>
              <p class="text-center">FYN</p>
            </div>
          </div>
          <div class="w-[180px] px-2">
            <p
              class="text-center border-b border-1 border-b-gray-400 font-medium"
            >
              40 YRS
            </p>
            <div class="flex justify-around text-gray-400">
              <p class="text-center">FIX</p>
              <p class="text-center">FYN</p>
            </div>
          </div>
        </div>
        <div>
          <button
            @click="isCollapsed = !isCollapsed"
            class="bg-blue-500 text-white py-2 px-4 rounded"
          >
            {{ isCollapsed ? 'Expand' : 'Collapse' }}
          </button>

          <transition
            enter-active-class="animate-fade-in"
            leave-active-class="animate-fade-out"
          >
            <div v-show="!isCollapsed" class="bg-gray-100 p-4">
              <p>This is the content that will be collapsed/expanded.</p>
              <p>It can contain any HTML or Vue components.</p>
            </div>
          </transition>
        </div>
        <div>
          <button
            @click="isCollapsed = !isCollapsed"
            class="bg-blue-500 text-white py-2 px-4 rounded"
          >
            {{ isCollapsed ? 'Expand' : 'Collapse' }}
          </button>

          <transition
            enter-active-class="animate-fade-in"
            leave-active-class="animate-fade-out"
          >
            <div v-show="!isCollapsed" class="bg-gray-100 p-4">
              <p>This is the content that will be collapsed/expanded.</p>
              <p>It can contain any HTML or Vue components.</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

import ButtonGroup from "../components/ButtonGroup.vue"

export default {
  name: "Home",
  components: {
    ButtonGroup
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
      isCollapsed: true,
    }
  },
  computed: {
    ...mapGetters([
      'getData',
    ]),
    data () {
      return this.data;
    },
  },
  methods: {
    ...mapActions(['fetchData'])
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
