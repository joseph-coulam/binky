<template>
  <Scene @complete="complete" @scene="onScene">
    <property name="clearColor" :color="bgColor"></property>
    <Camera type="arcRotate" v-model="camera" radius="5"></Camera>
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
      kernel: 32.0,
      bgColor: new BABYLON.Color4(0, 0, 0, 0)
    }
  },
  methods: {
    onScene(scene) {
      BABYLON.ParticleHelper.CreateFromSnippetAsync('2JRD1A#2', scene, false) // 2nd Particle Sytem - Core
      BABYLON.ParticleHelper.CreateFromSnippetAsync('EXUQ7M#5', scene, false) // 3rd Particle Sytem - Sparks
      var sphereSpark = BABYLON.MeshBuilder.CreateSphere(
        'sphereSpark',
        { diameter: 0.4, segments: 32 },
        scene
      )
      sphereSpark.isVisible = false
      BABYLON.ParticleHelper.CreateFromSnippetAsync(
        'UY098C#3',
        scene,
        false
      ).then((system) => {
        system.emitter = sphereSpark
      }) // 4th Particle Sytem - Smoke
      var sphereSmoke = BABYLON.MeshBuilder.CreateSphere(
        'sphereSmoke',
        { diameter: 1.9, segments: 32 },
        scene
      )
      sphereSmoke.isVisible = false
      BABYLON.ParticleHelper.CreateFromSnippetAsync(
        'UY098C#6',
        scene,
        false
      ).then((system) => {
        system.emitter = sphereSmoke
      })

      var particleSystem = new BABYLON.ParticleSystem('particles', 500, scene)
      particleSystem.particleTexture = new BABYLON.Texture(
        'textures/flare.png',
        scene
      )

      // Where the particles come from
      particleSystem.emitter = BABYLON.Vector3.Zero() // the starting location

      // Colors of all particles
      particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0)
      particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0)
      particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0)

      // Size of each particle (random between...
      particleSystem.minSize = 0.4
      particleSystem.maxSize = 0.4

      // Life time of each particle (random between...
      particleSystem.minLifeTime = 500
      particleSystem.maxLifeTime = 2000

      // Emission rate
      particleSystem.emitRate = 50
      particleSystem.preWarmStepOffset = 50
      particleSystem.preWarmCycles = 50

      /******* Emission Space ********/
      var sphereEmitter = particleSystem.createSphereEmitter(100)
      sphereEmitter.radiusRange = 0.7

      // Speed
      particleSystem.minEmitPower = 0
      particleSystem.maxEmitPower = 0.1
      particleSystem.updateSpeed = 5

      // Start the particle system
      particleSystem.start()
    },
    complete(e) {
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
            float pixel_w=15.,pixel_h=15.,rt_w=3000.,rt_h=3000.;
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
