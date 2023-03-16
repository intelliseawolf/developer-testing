<template>
  <div class="table-header flex border-b border-1 border-b-gray-400">
    <div class="w-[170px] text-gray-400 flex justify-center items-end">
      DATE SENT
    </div>
    <div class="w-[380px] text-gray-400 flex justify-start items-end">
      COMPANY
    </div>
    <div class="w-[180px] px-2">
      <p class="text-center border-b border-1 border-b-gray-400 font-medium">
        5 YRS
      </p>
      <div class="flex justify-around text-gray-400">
        <p class="text-center w-[90px]">FIX</p>
        <p class="text-center w-[90px]">FRN</p>
      </div>
    </div>
    <div class="w-[180px] px-2">
      <p class="text-center border-b border-1 border-b-gray-400 font-medium">
        10 YRS
      </p>
      <div class="flex justify-around text-gray-400">
        <p class="text-center w-[90px]">FIX</p>
        <p class="text-center w-[90px]">FRN</p>
      </div>
    </div>
    <div class="w-[180px] px-2">
      <p class="text-center border-b border-1 border-b-gray-400 font-medium">
        40 YRS
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
  name: "TableHeader"
}
</script>
