<script setup></script>
<template>
  <div class="flex items-center px-[200px] py-6">
    <div class="w-full">
      <img src="@/assets/images/Logo.png" alt="videyoo logo" />
    </div>
    <div
      class="flex w-full justify-end gap-10 text-xl font-medium text-[#707070] font-poppins"
    >
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">Examples</nuxt-link>
      <nuxt-link to="/about">Reviews</nuxt-link>
      <nuxt-link to="/contact">FAQ</nuxt-link>
    </div>
  </div>
</template>
