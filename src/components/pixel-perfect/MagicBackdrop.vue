<template>
    <canvas id="renderCanvas" touch-action="none"></canvas> <!-- touch-action="none" for best results from PEP -->
</template>

<script>
import * as BABYLON from '@babylonjs/core';

export default {
  
  data() {
    return {
      camera: null,
      bgColor: null,
    }
  },
  mounted() {
				this.createScene();
  },
  methods: {
    createScene() {
      	
        this.canvas = document.getElementById('renderCanvas');
        this.engine = new BABYLON.Engine(this.canvas, true);
        const scene = new BABYLON.Scene(this.engine);
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0), scene);
        camera.attachControl(this.canvas, true);

      // scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

      BABYLON.ParticleHelper.CreateFromSnippetAsync('2JRD1A#2', scene, false) // 2nd Particle Sytem - Core
      BABYLON.ParticleHelper.CreateFromSnippetAsync('EXUQ7M#5', scene, false) // 3rd Particle Sytem - Sparks

      let sphereSpark = BABYLON.MeshBuilder.CreateSphere(
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
      }) 
      
      //  4th Particle Sytem - Smoke
      let sphereSmoke = BABYLON.MeshBuilder.CreateSphere(
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

      let particleSystem = new BABYLON.ParticleSystem('particles', 500, scene)
      particleSystem.particleTexture = new BABYLON.Texture(
        require('../../assets/images/flare.png'),
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
      let sphereEmitter = particleSystem.createSphereEmitter(100)
      sphereEmitter.radiusRange = 0.7

      // Speed
      particleSystem.minEmitPower = 0
      particleSystem.maxEmitPower = 0.1
      particleSystem.updateSpeed = 5

      // Start the particle system
      particleSystem.start()


 // third pass: merge two previous passes
      BABYLON.Effect.ShadersStore.finalVertexShader = `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 worldViewProjection;
        varying vec2 vUV;
        void main(){
            gl_Position=worldViewProjection*vec4(position,1.),
            vUV=uv;
        }`
      BABYLON.Effect.ShadersStore.finalPixelShader = `
        precision highp float;
        varying vec2 vUV;
        uniform sampler2D textureSampler;
        void main(){
            float pixel_w=20.,pixel_h=20.,rt_w=3000.,rt_h=3000.;
            vec3 tc=vec3(1.,0.,0.);
            float dx=pixel_w*(1./rt_w),dy=pixel_h*(1./rt_h);
            vec2 coord=vec2(dx*floor(vUV.x/dx),dy*floor(vUV.y/dy));
            tc=texture2D(textureSampler,coord).xyz;gl_FragColor=vec4(tc,1.);
        }`
    // create the
    var finalPass = new BABYLON.PostProcess(
        'Final compose shader', 
        'final',  // shader
        null, // attributes
        null,
        1.0,  // options
        camera, // camera
    );


    this.engine.runRenderLoop(() => {
        scene.render();
      });
    },
  }
}
</script>

<style lang="scss">
canvas {
  background: transparent;
  width: 100vw;
  height: 750px;
}
</style>
