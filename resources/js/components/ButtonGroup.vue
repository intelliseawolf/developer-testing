<template>
  <div class="inline-flex items-center rounded-md shadow-sm">
    <button
      v-for="(button, index) in buttonList"
      :key="button.id"
      :class="{
        'text-sm border-[#527094] font-medium px-4 py-2 inline-flex space-x-1 items-center border': true,
        'rounded-l-lg border-r-0': index === 0,
        'rounded-r-lg border-l-0': index === buttonList.length - 1,
        'text-white bg-[#527094]': selectedButton.includes(button.id),
        'text-[#527094] hover:text-blue-600 bg-white hover:bg-slate-100':
          !selectedButton.includes(button.id),
        'border-x-white': selectedButton.includes(button.id) && isMedium(index)
      }"
      @click="changeSelected(button.id)"
    >
      {{ button.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonGroup",
  props: {
    buttons: Array,
    selected: Array,
    canSelectOne: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      buttonList: this.buttons,
      selectedButton: this.selected
    }
  },
  methods: {
    isMedium (index) {
      return (0 < index) && (index < this.buttonList.length - 1)
    },
    changeSelected (id) {
      let updated = null;

      if (this.canSelectOne) {
        updated = id
      } else {
        if (this.selectedButton.includes(id)) {
          updated = [...this.selectedButton];
          const index = updated.indexOf(id);
          updated.splice(index, 1);
        }
        else updated = [...this.selectedButton, id]
      }

      this.$emit("changeSelected", updated)
    }
  },
  watch: {
    selected (newVal) {
      this.selectedButton = newVal
    },
  }
}
</script>
