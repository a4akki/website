<template>
    <div class="my-4">
      <div v-if="embedCode">
        <label class="block text-gray-700"></label>
        <div v-html="embedCode" class="mt-2"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const videoLinks = [
    'https://www.youtube.com/watch?v=Jt-_bO-KRiA',
    'https://www.youtube.com/watch?v=Wqja5SzMMuM&t=51s',
    'https://www.youtube.com/watch?v=U1uU0JGIVPc',
    'https://www.youtube.com/watch?v=WTIQwu7TfUc&t=380s'
    // Add more video links as needed
  ];
  
  const embedCode = ref('');
  
  function getRandomVideoLink(links) {
    const randomIndex = Math.floor(Math.random() * links.length);
    const videoId = getYouTubeVideoId(links[randomIndex]);
    return videoId || ''; // Return an empty string if the video ID extraction fails
  }
  
  function getYouTubeVideoId(url) {
    const videoIdRegex = /[?&]v=([^&]+)/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : null;
  }
  
  onMounted(() => {
    const randomVideoLink = getRandomVideoLink(videoLinks);
    embedCode.value = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${randomVideoLink}" frameborder="0" allowfullscreen></iframe>`;
  });
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  