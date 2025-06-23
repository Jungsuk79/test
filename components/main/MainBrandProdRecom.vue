<template>
  <div class="main-brand-prod-recom">
    <div class="main-unit-title">{{data.title}}</div>
    <div class="main-unit-cont">

      <div class="mbpr-left">
        <div id="mbprImg" v-background-image="{url:data.image_url}"></div>
      </div>
      <div class="mbpr-right">
        <ProductListScroll :list="data.list" :layout="4" :unit-type="'mini'" :swipe="data.list.length > 4" :no-grid-fit="true" :swiper-height="sHeight" @swiperInit="handleResize"/>
      </div>
      

    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data: () => ({
    currentItem: null,
    sHeight: 0,
  }),
  created(){
    const me = this
    try{
      me.currentItem = me.data.list[0]
    }catch(e){}
  },
  mounted(){
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestory(){
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    selectCate(item){
      const me = this
      if(me.currentItem !== item){
        me.currentItem = item
      }
    },
    handleResize(){
      if(!document.getElementById('mbprImg') || !this.$el.querySelector('.mbpr-right .swiper-wrapper')){
        return
      }
      const height = document.getElementById('mbprImg').offsetHeight
      this.$el.querySelector('.mbpr-right .swiper-wrapper').style.height = height + 'px'
      const itemHeight = this.$el.querySelector('.product-image').offsetHeight
      this.$el.querySelector('.swiper-button-prev').style.top = (itemHeight / 2 - 30) + 'px'
      this.$el.querySelector('.swiper-button-next').style.top = (itemHeight / 2 - 30) + 'px'
    }
  },
}
</script>

<style lang="scss" scoped></style>
