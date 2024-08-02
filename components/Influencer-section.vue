<template>
  <div class="py-24 font-poppins bg-[#FDFBF7]">
    <div class="w-full flex gap-2 flex-col items-center">
      <p class="text-[40px] font-extrabold">
        Hire Our Brand <span class="text-primary-400">Influencers</span>
      </p>
      <p class="text-xl">
        We’ll help your products sell with our top influencers
      </p>
    </div>
    <div class="flex justify-center py-10 gap-4 influencer-card">
      <div
        ref="influencer-card"
        class="rounded-md overflow-clip relative w-[320px] h-[410px]"
      >
        <img
          class="object-cover w-full h-full"
          src="@/assets/images/sample_one.png"
          alt=""
          srcset=""
        />
        <div
          class="absolute overflow-clip bottom-0 w-full p-4 fade-bg bg-black text-white"
        >
          <div class="flex items-center gap-[10px]">
            <p class="text-[18px] font-extrabold">Samuel Noah</p>
            <Icon
              class="text-primary-400 text-xl"
              name="material-symbols:verified"
            ></Icon>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="flex items-center gap-2">
              <Icon
                class="text-white text-xl"
                name="octicon:location-24"
              ></Icon>
              <p class="text-[16px]">Addis Ababa</p>
            </div>
            <div class="flex items-center gap-2">
              <Icon
                class="text-white text-xl"
                name="hugeicons:instagram"
              ></Icon>
              <p class="text-[16px]">30k followers</p>
            </div>
            <div class="flex items-center gap-2">
              <Icon class="text-white text-xl" name="ic:outline-tiktok"></Icon>
              <p class="text-[16px]">20k followers</p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref="influencer-card"
        class="rounded-md overflow-clip relative w-[320px] h-[410px]"
      >
        <img
          class="object-cover w-full h-full"
          src="@/assets/images/sample_four.png"
          alt=""
          srcset=""
        />
        <div
          class="absolute overflow-clip bottom-0 w-full p-4 fade-bg bg-black text-white"
        >
          <div class="flex items-center gap-[10px]">
            <p class="text-[18px] font-extrabold">Samuel Noah</p>
            <Icon
              class="text-primary-400 text-xl"
              name="material-symbols:verified"
            ></Icon>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="flex items-center gap-2">
              <Icon
                class="text-white text-xl"
                name="octicon:location-24"
              ></Icon>
              <p class="text-[16px]">Addis Ababa</p>
            </div>
            <div class="flex items-center gap-2">
              <Icon
                class="text-white text-xl"
                name="hugeicons:instagram"
              ></Icon>
              <p class="text-[16px]">30k followers</p>
            </div>
            <div class="flex items-center gap-2">
              <Icon class="text-white text-xl" name="ic:outline-tiktok"></Icon>
              <p class="text-[16px]">20k followers</p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref="influencer-card"
        class="rounded-md overflow-clip relative w-[320px] h-[410px]"
      >
        <img
          class="object-cover w-full h-full"
          src="@/assets/images/sample_two.png"
          alt=""
          srcset=""
        />
        <div
          class="absolute overflow-clip bottom-0 w-full p-4 fade-bg bg-black text-white"
        >
          <div class="flex items-center gap-[10px]">
            <p class="text-[18px] font-extrabold">Samuel Noah</p>
            <Icon
              class="text-primary-400 text-xl"
              name="material-symbols:verified"
            ></Icon>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="flex items-center gap-2">
              <Icon
                class="text-white text-xl"
                name="octicon:location-24"
              ></Icon>
              <p class="text-[16px]">Addis Ababa</p>
            </div>
            <div class="flex items-center gap-2">
              <Icon
                class="text-white text-xl"
                name="hugeicons:instagram"
              ></Icon>
              <p class="text-[16px]">30k followers</p>
            </div>
            <div class="flex items-center gap-2">
              <Icon class="text-white text-xl" name="ic:outline-tiktok"></Icon>
              <p class="text-[16px]">20k followers</p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref="influencer-card"
        class="rounded-md overflow-clip relative w-[320px] h-[410px]"
      >
        <img
          class="object-cover w-full h-full"
          src="@/assets/images/sample_three.png"
          alt=""
          srcset=""
        />
        <div
          class="absolute overflow-clip bottom-0 w-full p-4 fade-bg bg-black text-white"
        >
          <div class="flex items-center gap-[10px]">
            <p class="text-[18px] font-extrabold">Samuel Noah</p>
            <Icon
              class="text-primary-400 text-xl"
              name="material-symbols:verified"
            ></Icon>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="flex items-center gap-2">
              <Icon
                class="text-white text-xl"
                name="octicon:location-24"
              ></Icon>
              <p class="text-[16px]">Addis Ababa</p>
            </div>
            <div class="flex items-center gap-2">
              <Icon
                class="text-white text-xl"
                name="hugeicons:instagram"
              ></Icon>
              <p class="text-[16px]">30k followers</p>
            </div>
            <div class="flex items-center gap-2">
              <Icon class="text-white text-xl" name="ic:outline-tiktok"></Icon>
              <p class="text-[16px]">20k followers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex mt-8 justify-center">
      <nuxt-link
        to="/about"
        class="bg-primary-400 gap-2 flex items-center font-bold text-lg text-white px-8 py-4 rounded-full font-poppins"
      >
        <p>Load More</p>
        <Icon
          class="text-white rotate-45 text-2xl"
          name="mingcute:arrow-up-line"
        ></Icon>
      </nuxt-link>
    </div>
  </div>
</template>
