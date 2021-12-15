<template>
  <v-row>
    <v-col class="text-center">
      <div>

        <QrcodeHugo ref="qrcode"/>
        <p>{{res}}</p>
        <v-btn @click="donwloadQrcode"> Downlaod </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  
  import Vue from 'vue'
  import JSZip from 'jszip'
  // import { saveAs } from 'file-saver';

  Vue.use(JSZip)

  export default {
    name: 'InspirePage',
    data() {
      return {
        res: ""
      }
    },
    methods : {
      donwloadQrcode () {

        var canvas = this.$refs.qrcode.$el.getElementsByTagName('canvas')[0]
        var dataImage = canvas.toDataURL("image/png");
        // dataImage = dataImage.replace("image/png", "image/octet-stream");

        var canvBase64 = dataImage.replace(/^data:image\/(png|jpg);base64,/, "");

        var zip = new JSZip();
        // var zip = zip.file("Hello.txt", "Hello World\n");
        // var img = zip.folder("images");
        zip.file("image.png", canvBase64, {base64: true});
        zip.generateAsync({type:"base64"}).then(function(content) {
          // saveAs(content, "archive.zip");
          location.href="data:application/zip;base64," + content;
        });
      }
    }
  }
</script>
