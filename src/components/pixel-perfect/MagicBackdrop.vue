<template>
  <Scene @complete="complete" v-model="scene">
    <property name="clearColor" :color="bgColor"></property>
    <Camera type="arcRotate" v-model="camera"></Camera>
    <HemisphericLight>
      <property name="intensity" :float="2"></property>
    </HemisphericLight>
    <Entity :scaling="[5, 5, 5]">
      <Animation
        property="rotation.y"
        :duration="5"
        :end="-Math.PI * 2"
      ></Animation>
      <Side></Side>
      <Entity :scaling="[-1, 1, 1]">
        <Side></Side>
      </Entity>
    </Entity>
  </Scene>
</template>

<script>
import Side from '~/components/pixel-perfect/Side'
import { BABYLON } from 'vue-babylonjs'

export default {
  components: {
    Side
  },
  data() {
    return {
      camera: null,
      scene: null,
      kernel: 32.0,
      bgColor: new BABYLON.Color4(0, 0, 0, 0)
    }
  },
  watch: {
    scene() {
      console.log(this.scene.getEngine().getRenderingCanvas())
    }
  },
  methods: {
    complete(event) {
      BABYLON.Effect.ShadersStore.julianVertexShader = `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 worldViewProjection;
        varying vec2 vUV;
        void main(){
            gl_Position=worldViewProjection*vec4(position,1.),
            vUV=uv;
        }`
      BABYLON.Effect.ShadersStore.julianPixelShader = `
        precision highp float;
        varying vec2 vUV;
        uniform sampler2D textureSampler;
        void main(){
            float pixel_w=10.,pixel_h=10.,rt_w=3000.,rt_h=3000.;
            vec3 tc=vec3(1.,0.,0.);
            float dx=pixel_w*(1./rt_w),dy=pixel_h*(1./rt_h);
            vec2 coord=vec2(dx*floor(vUV.x/dx),dy*floor(vUV.y/dy));
            tc=texture2D(textureSampler,coord).xyz;gl_FragColor=vec4(tc,1.);
        }`
      let julian = new BABYLON.PostProcess(
        'julian',
        'julian',
        null,
        null,
        1,
        this.camera
      )
      var processAlpha = new BABYLON.PassPostProcess('pass', 1.0, this.camera)
      processAlpha.alphaMode = BABYLON.Engine.ALPHA_ADD
      processAlpha.alphaConstants = new BABYLON.Color4(0.5, 0.5, 0.5, 0)
    }
  }
}
</script>

<style lang="scss">
canvas {
  background: transparent;
}
</style>
