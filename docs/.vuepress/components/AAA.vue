<template>
    <kinesis-container :audio="audioUrl" :playAudio="true">
      <kinesis-audio :audioIndex="10">
        <kinesis-element :strength="10" type="depth"></kinesis-element>
      </kinesis-audio>
    </kinesis-container>
  </template>
  
  <script>
  import { KinesisContainer, KinesisAudio, KinesisElement } from 'vue-kinesis';
  
  export default {
    components: {
      KinesisContainer,
      KinesisAudio,
      KinesisElement
    },
    data() {
      return {
        audioUrl: 'https://www.cambridgeenglish.org/images/153149-movers-sample-listening-test-vol2.mp3' // 在这里替换为你的音频链接
      };
    }
  };
  </script>