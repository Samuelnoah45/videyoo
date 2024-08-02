<template>
  <div class="flex px-[200px] items-center justify-center gap-x-10 h-[85%]">
    <div class="w-full space-y-8">
      <p
        class="text-black text-[65px] font-poppins mt-4 font-extrabold leading-normal"
      >
        Turn Videos Into Millions With Our Editing Magic
      </p>
      <p class="text-xl">
        We’ll help your products sell with our proven direct response video
        creatives
      </p>
      <div class="flex mt-8">
        <nuxt-link
          to="/about"
          class="bg-primary-400 font-bold text-lg text-white px-16 py-4 rounded-full font-poppins"
          >Hire Us!</nuxt-link
        >
      </div>
      <div class="h-[2px] w-full opacity-40 bg-[#707070]"></div>
      <div class="flex gap-4">
        <div class="space-y-2">
          <p class="text-xl w-[300px]">
            The #1st Video Service For Your E-commerce
          </p>
          <div class="flex gap-2">
            <Icon
              v-for="i in 5"
              :key="i"
              class="text-2xl text-[#E56A36]"
              name="material-symbols:star"
            ></Icon>
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-xl w-[300px]">Trusted by 4,500+ E-commerce brands</p>
          <div class="flex gap-2">
            <Icon
              v-for="i in 5"
              :key="i"
              class="text-2xl text-[#E56A36]"
              name="material-symbols:star"
            ></Icon>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-[80%] flex justify-center pt-16">
      <div>
        <img src="@/assets/images/mock_video.png" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>
