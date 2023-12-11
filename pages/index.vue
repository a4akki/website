<template>
  <div class="bg-black text-white">
    <div class="m-auto p-6">
      <section class="overflow-hidden">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap mt-6 -mx-4">
            <div class="w-full lg:w-1/2 p-4 mt-20">
              <span
                class="text-5xl text-orange-500 lg:text-6xl font-semibold py-8 mb-6 max-w-sm lg:max-w-md mt-14"
                >BROKE
              </span>
              <span
                class="text-5xl text-white lg:text-6xl font-semibold py-8 mb-6 max-w-sm lg:max-w-md mt-14"
                >INDIAN</span
              >
              <p class="text-white text-lg mt-10 max-w-lg">
                Ek YouTube Channel, Jahan Dikhte Hain Hindustani Ladkon Ki
                Zindagi Ke Rangeen Rang. Dekhiye, Haste-Haste, Rote-Rote, Aur
                Jite-Ji! Humari Aapke Sath Kahani!
              </p>
              <div class="mt-10">
                <div class="relative inline-block">
                  <Sbut
                    textinput="Twitter"
                    link="https://twitter.com/brokindian"
                  />
                </div>
                <div class="relative inline-block">
                  <Sbrt
                    textinput="Youtube"
                    link="https://www.youtube.com/channel/UCJ2MvjDWZNfmgtNWVNtVLtg"
                  />
                </div>
                <div class="relative inline-block">
                  <Sbft
                    textinput="Facebook"
                    link="https://facebook.com/thebrokeindian"
                  />
                </div>
              </div>
            </div>

            <div class="w-full lg:w-1/2 p-4">
              <Youtube class="mt-20 mb-20" loc="./main.json" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <Events />
  <Foot />
</template>
