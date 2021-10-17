<template>
<div class="">
    <canvas id="renderCanvas" touch-action="none"></canvas>
    </div>
</template>

<script>

export default {
  
  data() {
    return {
      canvas: null,
      engine: null,
      scene: null,
      camera: null
    }
  },
  mounted() {

      this.canvas = document.getElementById('renderCanvas');
      this.engine = new BABYLON.Engine(this.canvas, true);
      this.scene = new BABYLON.Scene(this.engine);
      this.camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0), this.scene);

      this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 0.0);

      // Create first emitter
      const particleImage = require('../../assets/images/flare.png');
      const particleEmitterOne = this.createParticleEmitter(this.scene, particleImage, new BABYLON.Color4(0.7, 0.8, 1.0, 1.0), new BABYLON.Color4(0.2, 0.5, 1.0, 1.0), .7)
      particleEmitterOne.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;

      particleEmitterOne.start()

      // Create first emitter
      const innerImage = require('../../assets/images/flare.png');
      const particleEmitterTwo = this.createParticleEmitter(this.scene, innerImage, new BABYLON.Color4(1, 0.2, .7, 1.0), new BABYLON.Color4(0.8, 0.2, 1.0, 1.0), .5)
      particleEmitterOne.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;

      particleEmitterTwo.start()

      // Render loop
      this.engine.runRenderLoop(() => {
        this.scene.render();
      });
      
    },
    methods:{
      createParticleEmitter(scene, particleImage, color1, color2, radius){
          let particleSystem = new BABYLON.ParticleSystem('particles', 100, scene)
          particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;

          particleSystem.particleTexture = new BABYLON.Texture(
            particleImage,
            scene
          )

          // Starting location
          particleSystem.emitter = BABYLON.Vector3.Zero()

          // Colors of all particles
          particleSystem.color1 = color1
          particleSystem.color2 = color2
          particleSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0)

          // Size of each particle (random between...
          particleSystem.minSize = .2
          particleSystem.maxSize = .6

          // Life time of each particle (random between...
          particleSystem.minLifeTime = 500
          particleSystem.maxLifeTime = 1000

          // Emission rate
          particleSystem.emitRate = 50
          particleSystem.preWarmStepOffset = 50
          particleSystem.preWarmCycles = 50

          /******* Emission Space ********/
          const sphereEmitter = particleSystem.createSphereEmitter(80)
          sphereEmitter.radiusRange = radius

          // Speed
          particleSystem.minEmitPower = 0
          particleSystem.maxEmitPower = 0.1
          particleSystem.updateSpeed = 5

          return particleSystem;
      }
    }

				// this.createScene();
}
</script>

<style lang="scss">
canvas {
  pointer-events: none;
  background: transparent;
  width: 100vw;
  height: 750px;
}
</style>
