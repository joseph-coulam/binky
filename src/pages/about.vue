<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <div>
      <div id="about" class="anchor"></div>
      <Splash />
    </div>
    
    <div class="gameplay relative py-20 px-6 sm:px-4 lg:px-8">
      <div id="gameplay" class="anchor"></div>
      <div class="w-100 max-w-2xl mx-auto">
        <Heading heading="Gameplay" textDirection="center" textSize="large" />
        <p class="text-xl text-center leading-relaxed text-white">
          In Pixel Perfect you take on the role of a God overlooking the
          universe of Pixia. As you expand a civilization through different ages
          you’ll meet challenges along the way; from building up an empire to
          fighting off hordes of enemies - how long do you think you can succeed
          as a God?
        </p>
      </div>

      <div class="max-w-6xl mx-auto">
        <Slider />
      </div>

      <!-- Gameplay Section -->
      <div class="max-w-4xl mx-auto">
        <GameplaySection icon="icon-pickaxe" image="temp">
          <Heading heading="Build" textDirection="left" />
          In Pixel Perfect you take on the role of a God overlooking the
          universe of Pixia. As you expand a civilization through different ages
          you’ll meet challenges along the way; from building up an empire to
          fighting off hordes of enemies - how long do you think you can succeed
          as a God?
        </GameplaySection>

        <GameplaySection icon="icon-sword" image="temp" direction="reverse">
          <Heading heading="Fight" textDirection="left" />
          In Pixel Perfect you take on the role of a God overlooking the
          universe of Pixia. As you expand a civilization through different ages
          you’ll meet challenges along the way; from building up an empire to
          fighting off hordes of enemies - how long do you think you can succeed
          as a God?
        </GameplaySection>

        <GameplaySection icon="icon-map" image="temp">
          <Heading heading="Explore" />
          In Pixel Perfect you take on the role of a God overlooking the
          universe of Pixia. As you expand a civilization through different ages
          you’ll meet challenges along the way; from building up an empire to
          fighting off hordes of enemies - how long do you think you can succeed
          as a God?
        </GameplaySection>
      </div>
    </div>

    <!-- List posts -->
    <div class="updates relative py-20">
      <div id="updates" class="anchor"></div>
      <div class="w-100 max-w-4xl px-6 mx-auto">
        <Heading heading="Updates" textDirection="center" textSize="large" />
        <p class="text-xl text-center leading-relaxed text-white">
          In Pixel Perfect you take on the role of a God overlooking the
          universe of Pixia. As you expand a civilization through different ages
          you’ll meet challenges along the way; from building up an empire to
          fighting off hordes of enemies - how long do you think you can succeed
          as a God?
        </p>
      </div>
      <div class="w-100 max-w-6xl mx-auto grid md:grid-cols-3 px-6 gap-6 py-16">
        <PostCard
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        ...on Post {
        id
        title
        path
        }
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Heading from '~/components/Heading.vue'
import Splash from '~/components/pixel-perfect/Splash.vue'
import GameplaySection from '~/components/pixel-perfect/GameplaySection.vue'
import Slider from '~/components/Slider.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Heading,
    Splash,
    Slider,
    PostCard,
    GameplaySection
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style lang="scss">
.anchor{
  @apply relative block h-0 w-0 -top-32;
}

.outlined {
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

.gameplay {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(31, 15, 31, 1) 0%,
    rgba(32, 25, 64, 1) 100%
  );
}

.updates {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(31, 15, 31, 1) 0%,
    rgba(32, 25, 64, 1) 100%
  );
}
</style>
