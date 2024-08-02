<script setup>
const activeCard = ref(2);
</script>

<template>
  <div class="pb-24 space-y-10 font-poppins bg-[#FDFBF7]">
    <div class="w-full flex gap-4 flex-col items-center">
      <p class="text-[40px] font-extrabold">
        How Does It <span class="text-primary-400">Work? </span>
      </p>
      <p class="text-xl">Check Out Our Simple 3-Step Process</p>
    </div>
    <div
      @mouseleave="activeCard = 2"
      class="flex h-[400px] justify-center py-10 gap-4 items-center influencer-card"
    >
      <div
        id="process-card"
        @mouseover="activeCard = 1"
        class="rounded-md overflow-clip relative flex px-4 flex-col items-center gap-2 py-10 shadow-md w-[320px]"
        :class="
          activeCard === 1
            ? 'bg-primary-400  h-[400px] '
            : 'bg-white  h-[350px]'
        "
      >
        <img
          class="object-cover w-[60%] mx-auto"
          src="@/assets/images/ads_design.png"
          alt=""
          srcset=""
        />
        <div :class="activeCard == 1 ? 'space-y-6 text-white' : 'space-x-2'">
          <p class="font-black text-xl text-center">Choose Your Video Ad</p>
          <p class="text-center text-base">
            We’ll help your products sell with our proven direct response video
            creatives
          </p>
        </div>
      </div>
      <div
        id="process-card"
        @mouseover="activeCard = 2"
        class="rounded-md overflow-clip relative flex px-4 flex-col items-center gap-2 py-10 shadow-md w-[320px]"
        :class="
          activeCard === 2
            ? 'bg-primary-400  h-[400px] '
            : 'bg-white  h-[350px]'
        "
      >
        <img
          class="object-cover w-[60%] mx-auto"
          src="@/assets/images/questionnaire.png"
          alt=""
          srcset=""
        />
        <div :class="activeCard == 2 ? 'space-y-6 text-white' : 'space-x-2'">
          <p class="font-black text-xl text-center">Answer Questionnaire</p>
          <p class="text-center text-base">
            We’ll help your products sell with our proven direct response video
            creatives
          </p>
        </div>
      </div>
      <div
        id="process-card"
        @mouseover="activeCard = 3"
        class="rounded-md overflow-clip relative flex px-4 flex-col items-center gap-2 py-10 shadow-md w-[320px]"
        :class="
          activeCard === 3
            ? 'bg-primary-400  h-[400px] '
            : 'bg-white  h-[350px]'
        "
      >
        <img
          class="object-cover w-[60%] mx-auto"
          src="@/assets/images/video.png"
          alt=""
          srcset=""
        />
        <div :class="activeCard == 3 ? 'space-y-6 text-white' : 'space-x-2'">
          <p class="font-black text-xl text-center">Answer Questionnaire</p>
          <p class="text-center text-base">
            We’ll help your products sell with our proven direct response video
            creatives
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#process-card {
  /* transition: height 400ms ease-in-out; */
  transition: height 400ms ease-in-out, background-color 400ms ease-in-out,
    color 400ms ease-in-out;
}
</style>
