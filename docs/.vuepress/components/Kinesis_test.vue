<template>
    <div>
        <ClientOnly>
          <kinesis-container>
              Here, you can put
              <kinesis-element :strength="20">
                whatever
              </kinesis-element>
              <kinesis-element :strength="50">
                content!
              </kinesis-element>
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
