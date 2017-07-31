<template>
  <div>
    <h2 class="title">Home Page
      <span v-text="title"></span>
    </h2>
    <div v-for="(item, index) in banner" :key="item.id">
      <a :href="item.url">
        <img :src="item.imageUrl" alt="">
      </a>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Loading from '../components/common/Loading.vue'
export default {
  components: {
    Loading
  },
  mounted() {

    if (this.banner.length === 0) {
      this.getBannerList()
    }
    if (this.nowplay.length === 0) {
      this.getNowPlaying()
    }
    if (this.coming.length === 0) {
      this.getComingSoon()
    }
    // this.setTitle('日报表')
    this.comConf({ title: '我是第二次修改名称' })
    this.$nextTick(function () {
    })
  },
  computed: {
    ...mapGetters({
      loading: 'loading',
      title: 'title',
      banner: 'getBannerList',
      nowplay: 'getNowPlaying',
      coming: 'getComingSoon'
    })
  },
  methods: {
    ...mapActions({
      getBannerList: 'getBannerList',
      getNowPlaying: 'getNowPlaying',
      getComingSoon: 'getComingSoon',
      setTitle: 'setTitle',
      comConf: 'comConf'
    })
  },
  async asyncData({ store, route }) {
    await store.dispatch('getBannerList')
    // await store.dispatch('setTitle', {
    //   title: '吃饭啦'
    // })
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  color: #333;
}
</style>

