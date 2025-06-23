<template>
  <div>
    PC에서는 CommonBanner 새로 만들어서 사용할 것...
    <!-- <Swiper
      :options="swipeOption"
      class="mb-swiper"
    >
      <SwiperSlide v-for="item, idx in data.list" :key="idx" class="mb-slide">
        <div class="mb-wrapper" :type="item.type">
          <div class="mb-image">
            <img v-image-error :src="item.image_url" />
          </div>
          <div v-if="item.type !== 'image'" class="mb-text" :style="{'color':item.text_color}">
            <div v-if="item.brand" class="mb-brand">{{item.brand}}</div>
            <div class="mb-title" v-html="item.title"></div>
            <div v-if="item.desc" class="mb-desc" v-html="item.desc"></div>
            <div v-if="item.button" class="mb-button">
              <span :style="{'border-color':item.text_color}">{{item.button}}</span>
            </div>
          </div>
          <nuxt-link class="mb-link" :to="{path:item.link_url}"></nuxt-link>
        </div>
      </SwiperSlide>
      <div v-if="swipeEnabled" slot="pagination" class="swiper-pagination"></div>
    </Swiper> -->
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'


export default {
  components: {
    // Swiper, SwiperSlide
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
    usePaging: {
      type: Boolean,
      default: (v) => {
        return false
      }
    }
  },
  data: () => ({
    swipeEnabled: true,
    swipeOption: {
      nested: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: false,
        type: 'bullets'
      },
      allowTouchMove: true
    }
  }),
  created(){
    const me = this
    const so = me.swipeOption
    if(me.usePaging){
      const pg = so.pagination
      pg.renderFraction = me.renderFraction
      /* pg.renderFraction = function(currentClass, totalClass){
        return '<span class="' + currentClass + '"></span>/<span class="' + totalClass + '"></span>'
      } */
      pg.type = "fraction"
    }
    me.swipeEnabled = (me.data && me.data.list && me.data.list.length > 1)
    so.allowTouchMove = me.swipeEnabled
  },
  mounted(){
    const me = this
    if(me.swipeEnabled){
      me.$el.addEventListener("touchmove", function(e){
          e.stopPropagation()
      })
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped></style>
