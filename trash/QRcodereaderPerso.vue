 <template>
    <client-only placeholder="loading..."> 
        <!-- <qrcode-stream @decode="onDecode"></qrcode-stream> -->
        <QrcodeStream />
    </client-only>

</template>

<script>
  import Vue from "vue";
  // import VueQrcodeReader from "vue-qrcode-reader";
  // import VueQrcodeReader from '~/plugins/vue-qrcode-reader/dist/VueQrcodeReader.common.js'
  // import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from '~/plugins/vue-qrcode-reader/dist/VueQrcodeReader.common.js'

  Vue.use(VueQrcodeReader);

  export default {
  components: {
      'vue-qrcode-reader': () => process.browser ? import('vue-qrcode-reader/dist/lib/VueQrcodeReader.umd.js') : null
    },
    methods: {
      onDecode (decodedString) {
        console.log(decodedString);
        this.res = decodedString
      }
    },
  }
</script>
