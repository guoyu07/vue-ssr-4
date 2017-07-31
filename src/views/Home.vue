<template>
  <div>
    <h2 class="title">Home Page</h2>
     <div v-for="(index, item) in banner" :key="index + 1">
        <a :href="item.url">
          <img :src="item.imageUrl" alt="">
        </a>
      </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  mounted() {
    // if (this.banner.length === 0) {
    //   this.getBannerList()
    // }
  },
  computed: {
    ...mapGetters({
      banner: 'getBannerList'
    })
  },
  methods: {
    ...mapActions({
      getBannerList: 'getBannerList',
    })
  },
  async asyncData({store, route}) {
    await store.dispatch('getBannerList')
  }
}
</script>


