<template>
    <div>
        <ClientOnly>
            <kinesis-container :audio="audio" :playAudio="true">
              <kinesis-audio 
                :audioIndex="10">
                  <kinesis-element 
                    :strength="10" 
                    type="depth">
                  ...
                </kinesis-element>
                </kinesis-audio>
              ...
          </kinesis-container>
            
        </ClientOnly>
    </div>
</template>
<script>
import { KinesisContainer, KinesisElement, KinesisAudio} from "vue-kinesis"
export default{
    components: {
    KinesisContainer,
    KinesisElement,
    KinesisAudio
  },
    data() {
      return {
        audio: 'https://www.cambridgeenglish.org/images/153149-movers-sample-listening-test-vol2.mp3' // 在这里替换为你的音频链接
      };
    }
}
</script>
