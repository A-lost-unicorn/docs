<template>
  <div>
    <kinesis-container ref="containerRef" :audio="$withBase(audio)" :playAudio="true" >
      <kinesis-audio :audioIndex="10" axis="y" :originX="10" :maxX="10">
        <kinesis-element :strength="10" type="depth_inv" :originX="10" :maxX="10">
          <!-- <audio :src="audio" controls></audio> -->
          <img class="custom" :src="$withBase('images/icons/icon-72x72.png')" alt="icon.png" >
        </kinesis-element>
        <kinesis-element :strength="100" type="depth_inv" :originX="10" :maxX="10">
          <!-- <audio :src="audio" controls></audio> -->
          🎉🎊
        </kinesis-element>
      </kinesis-audio>
    </kinesis-container>
    <button @click="play()">播放</button>
    <button @click="stop()">停止</button>
    <!-- {{ audio }} -->
  </div>
  </template>
  
  <script>
  import { KinesisContainer, KinesisAudio, KinesisElement } from 'vue-kinesis';
  
  export default {
    components: {
      KinesisContainer,
      KinesisAudio,
      KinesisElement
    },
    methods: {
      play() {
        this.$refs.containerRef.play()
        
      },
      stop() {
        this.$refs.containerRef.stop()
        
      }
    },
    data() {
      return {
        audio:'audio/我是愤怒.mp3'  // 在这里替换为你的音频链接
      };
    }
  };
  </script>