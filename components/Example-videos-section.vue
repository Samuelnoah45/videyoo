<script setup>
const value = ref("0");
</script>

<template>
  <div class="pb-24 space-y-10 font-poppins bg-[#FDFBF7] px-[250px] py-24">
    <div class="w-full flex gap-4 flex-col items-center">
      <p class="text-[40px] font-extrabold">
        Example <span class="text-primary-400">Videos </span>
      </p>
      <p class="text-xl">Check Out Some of Our Examples</p>
    </div>
    <Tabs
      class="w-full flex flex-col justify-center space-y-10"
      v-model:value="value"
    >
      <div class="w-full flex justify-center">
        <TabList class="" as="div">
          <Tab
            value="0"
            class="tabItemClass mr-[60px]"
            :class="
              value === '0' ? 'bg-primary-400 text-white' : 'text-[#555555]'
            "
            >Classic Examples</Tab
          >
          <Tab
            value="1"
            class="tabItemClass mr-[60px]"
            :class="
              value === '1' ? 'bg-primary-400 text-white' : 'text-[#555555]'
            "
            >TikTok Ad Examples</Tab
          >
          <Tab
            value="2"
            class="tabItemClass mr-[60px]"
            :class="
              value === '2' ? 'bg-primary-400 text-white' : 'text-[#555555]'
            "
            >Vertical Ad Examples</Tab
          >
          <Tab
            value="3"
            class="tabItemClass"
            :class="
              value === '3' ? 'bg-primary-400 text-white' : 'text-[#555555]'
            "
            >User Generated Ad Examples</Tab
          >
        </TabList>
      </div>

      <TabPanels>
        <TabPanel value="0">
          <div class="m-0 grid grid-cols-3 gap-6">
            <img
              class="rounded-md"
              src="../assets/images/video_two.png"
              alt=""
              srcset=""
            />
            <img
              class="rounded-md"
              src="../assets/images/video_one.png"
              alt=""
              srcset=""
            />

            <img
              class="rounded-md"
              src="../assets/images/video_three.png"
              alt=""
              srcset=""
            />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="m-0 grid grid-cols-3 gap-6">
            <img
              class="rounded-md"
              src="../assets/images/video_one.png"
              alt=""
              srcset=""
            />
            <img
              class="rounded-md"
              src="../assets/images/video_two.png"
              alt=""
              srcset=""
            />
            <img
              class="rounded-md"
              src="../assets/images/video_three.png"
              alt=""
              srcset=""
            />
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div class="m-0 grid grid-cols-3 gap-6">
            <img
              class="rounded-md"
              src="../assets/images/video_one.png"
              alt=""
              srcset=""
            />
            <img
              class="rounded-md"
              src="../assets/images/video_three.png"
              alt=""
              srcset=""
            />
            <img
              class="rounded-md"
              src="../assets/images/video_two.png"
              alt=""
              srcset=""
            />
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div class="m-0 grid grid-cols-3 gap-6">
            <img
              class="rounded-md"
              src="../assets/images/video_two.png"
              alt=""
              srcset=""
            />
            <img
              class="rounded-md"
              src="../assets/images/video_three.png"
              alt=""
              srcset=""
            />
            <img
              class="rounded-md"
              src="../assets/images/video_one.png"
              alt=""
              srcset=""
            />
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<style>
#process-card {
  /* transition: height 400ms ease-in-out; */
  transition: height 400ms ease-in-out, background-color 400ms ease-in-out,
    color 400ms ease-in-out;
}
.tabItemClass {
  @apply px-4 py-2 text-[16px]  font-poppins font-extrabold rounded-md;
  transition: background-color 100ms ease-in;
}
</style>
