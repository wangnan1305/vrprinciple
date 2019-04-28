<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <img id="img" src="" alt="" srcset="">
    <img id="img2" src="" alt="" srcset="">
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { setTimeout } from 'timers'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted () {
    const img = document.getElementById('img')

    img.setAttribute('crossOrigin', 'anonymous')
    img.src = 'https://avatars2.githubusercontent.com/u/15681693?s=460&v=4'
    const canvas = document.createElement('canvas')
    canvas.width = 300
    canvas.height = 500
    canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height)
    const src = canvas.toDataURL('image/png')
    setTimeout(() => {
      document.getElementById('img2').src = src
    }, 200)
    console.log(src)
  }
}
</script>
