<script setup></script>
<template>
  <div class="">
    <div class="h-screen bgImage relative">
      <img
        class="absolute bottom-0 opacity-10"
        src="../assets/images/left_shape.svg"
        alt=""
        srcset=""
      />
      <img
        class="absolute top-[40%] left-[100px]"
        src="../assets/images/circle.svg"
        alt=""
        srcset=""
      />
      <img
        class="absolute top-[110px] left-[15%]"
        src="../assets/images/cracked_circle.svg"
        alt=""
        srcset=""
      />
      <img
        class="absolute top-[150px] left-[40%] w-[60px]"
        src="../assets/images/radio_shape.svg"
        alt=""
        srcset=""
      />
      <NavBar />
      <HeroSection />
    </div>
    <InfluencerSection />
    <HowItWorksSection />
    <ExampleVideosSection></ExampleVideosSection>
  </div>
</template>
<style>
/* .bgImage {
  background-image: url("@/assets/images/hero-section-background.png");
  
} */
.bgImage::before {
  content: "";
  background-image: url("@/assets/images/hero-section-background.png");
  background-size: cover;
  background-position: center;
  opacity: 0.5; /* Adjust the opacity as needed */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensure it's behind the content */
}
.fade-bg {
  background: linear-gradient(transparent 0%, #000000 100%);
  height: 53px;
  @apply space-y-2;
  transition: height 500ms ease-in-out;
}

.fade-bg:hover {
  height: 120px; /* Final height on hover */
}

@keyframes expandHeight {
  from {
    height: 55px;
  }
  to {
    height: 0px; /* Final height */
  }
}
</style>
