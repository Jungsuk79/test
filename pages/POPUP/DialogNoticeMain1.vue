<template>
  <DialogNoticeBasic
    :width="380"
    @hide="closeDialog"
  >
    <template #body>
      <div class="common-banner-unit">
        <Swiper
          :options="{
            loop:true,
            navigation: {
              prevEl: '.popup-banner-prev',
              nextEl: '.popup-banner-next',
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: false,
              type: 'bullets'
            },
            observer: true, 
            observeParents: true,
          }"
          class="common-banner-swiper"
          :class="{'swiper-no-swiping' : !(bannerpopup.list && bannerpopup.list.length > 1)}"
        >
          <SwiperSlide v-for="item, idx in bannerpopup.list" :key="idx" class="common-banner-slide">
            <div :style="{'background-image':'url('+item.image_url+')', 'color':item.text_color}" class="cbs-item" :class="'banner-type-'+item.type">
              <div v-if="item.desc" class="cbs-desc"><p v-html="item.desc"></p></div>
              <div v-if="item.title" class="cbs-title">{{item.title}}</div>
              <div v-if="item.subtitle" class="cbs-sub" :style="{'border-color':item.text_color}">{{item.subtitle}}</div>
              <nuxt-link :to="{path:item.link_url}" class="link-block"></nuxt-link>
            </div>
          </SwiperSlide>
          <div slot="button-prev" class="swiper-button-prev popup-banner-prev"><span class="ir">이전</span></div>
          <div slot="button-next" class="swiper-button-next popup-banner-next"><span class="ir">다음</span></div>
          <div slot="pagination" class="swiper-pagination"></div>
        </Swiper>
        
      </div>
    </template>
  </DialogNoticeBasic>
</template>
<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import DialogNoticeBasic from '~/pages/POPUP/DialogNoticeBasic.vue'

export default {
  components: { 
    DialogNoticeBasic,
    Swiper, SwiperSlide
  },
  data: () => ({
    bannerpopup : {
      list : [
        {
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/mainnotice-banner.png",
            "text_color": "#000",
            "link_url": "#none",
            "type": 3,
            "desc": "Delightful<br />LÄTT with MINA",
            "title": "래트&신민아의 딜라이트풀한 만남",
            "subtitle": "자세히 보기"
        },
        {
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/mainnotice-banner.png",
            "text_color": "#000",
            "link_url": "#none",
            "type": 3,
            "desc": "Delightful<br />LÄTT with MINA",
            "title": "래트&신민아의 딜라이트풀한 만남",
            "subtitle": "자세히 보기"
        },
        {
            "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/mainnotice-banner.png",
            "text_color": "#000",
            "link_url": "#none",
            "type": 3,
            "desc": "Delightful LÄTT with MINA",
            "title": "래트&신민아의 딜라이트풀한 만남",
            "subtitle": "자세히 보기"
        },
      ]
    },
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss"></style>
