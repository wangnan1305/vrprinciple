<template>
<div>
  <div style="width: 500px;height:500px;line-height:500px;background: rgba(0,0,0,0.1)">
    <img :src="src" alt="" srcset="" :class="{'type-h': typeH, 'type-w': typeW}">
  </div>
  <div style="width:300px;position: absolute;
    width: 300px;
    top: 50px;
    right: 0;">
    <img src="https://statich.yidianzixun.com/public/file/1551949794256/ohoneCenter.png@base@tag=imgscale&w=560&h=498&c=1&f=1&cox=50&coy=50" style="width:100%" alt="" srcset="">
  </div>
  <vue-cropper
    ref="cropper"
    :src="imgSrc"
    alt="Source Image"
    :cropmove="cropImage"
  >

  </vue-cropper>
</div>
</template>
<script>
import VueCropper from 'vue-cropperjs'
export default {
  data () {
    return {
      imgSrc: 'http://kss.ksyun.com/ks3/image_deal/suiyi.jpg',
      src: 'https://statich.yidianzixun.com/public/file/1551949794256/ohoneCenter.png',
      src: 'http://kss.ksyun.com/ks3/image_deal/suiyi.jpg',
      typeH: false,
      typeW: false
    }
  },
  components: {
    VueCropper
  },
  methods: {
    cropImage () {},
    getImgSize (url) {
      return new Promise((resolve) => {
        const i = new Image()
        i.src = url
        i.onload = () => {
          resolve({
            width: i.width,
            height: i.height
          })
        }
      })
    },
    async getSize (url) {
      const d = await this.getImgSize(url)
      if (d.width / d.height >= 1) {
        this.typeW = true
      } else {
        this.typeH = true
      }
      console.log(d)
    }
  },
  mounted () {
    this.getSize(this.src)
    // 直接读成blob文件对象
    const img = new Image()
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    function getImageBlob (url, cb) {
      var xhr = new XMLHttpRequest()
      xhr.open('get', url, true)
      xhr.responseType = 'blob'
      xhr.onload = function () {
        if (this.status === 200) {
          imgResponse = this.response
          // 这里面可以直接通过URL的api将其转换，然后赋值给img.src
          // 也可以使用下面的preView方法将其转换成base64之后再赋值
          img.src = URL.createObjectURL(this.response)
        }
      }
      xhr.send()
    }
    // 这里面将blob转换成base64
    function preView (url) {
      let reader = new FileReader()
      getImageBlob(url, function (blob) {
        reader.readAsDataURL(blob)
      })
      reader.onload = function (e) {
        console.log(e.loaded)
      }
    }
    img.onload = function () {
      canvas.width = img.width
      canvas.height = img.height + 200
      ctx.drawImage(img, 0, 0)
      document.getElementById('canvasImg').src = canvas.toDataURL('image/jpeg', 1)
    }
    var imgResponse = ''
    getImageBlob('http://wx.qlogo.cn/mmopen/vi_32/RnLIHfXibgFHlticiclzflpriaLsC3TS9b2Sbj05Wh3vGlhcFutt18dfkXGUt8x11e4q2KHlX4EHHaBb6XylLQW1kQ/0')
  }
}
</script>
<style scoped>
img {
  max-width: 100%; /* This rule is very important, please do not ignore this! */
}
.type-h{
  height: 100%;
}
.type-w{
  width: 100%;
  vertical-align: middle;
}
</style>
