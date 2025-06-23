<template>
  <div>

    <ul v-if="$swipe !== true && $unitType==='normal'" class="product-unit-list product-unit-list-normal"
      :class="[
        'product-list-layout-'+$layout,
        {'no-grid-fit':noGridFit===true}
      ]">
      <ProductUnit v-for="item, idx in $list" :key="idx" :unit-data="item" :layout="$layout"></ProductUnit>
    </ul>

    <ul v-if="$swipe !== true && ($unitType==='mini' || $unitType==='micro')" class="product-unit-list"
      :class="[
        'product-unit-list-'+$unitType,
        'product-list-layout-'+$layout,
        {'no-grid-fit':noGridFit===true}
      ]">
      <ProductUnitMini v-for="item, idx in $list" :key="idx" :unit-data="item" :unit-type="$unitType"></ProductUnitMini>
    </ul>

    <Swiper v-if="$swipe === true" class="product-unit-list product-unit-list-swipe"
      :options="{
        slidesPerView: $layout,
        slidesPerGroup: (group > 0 ? group : $layout),
        spaceBetween: 24,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: false,
        },
        on:{
          init: swiperInit
        },
      }"
      :class="[
        'product-unit-list-'+$unitType,
        'product-list-layout-'+$layout,
        {
          'swiper-no-swiping': $list.length <= $layout,
          'no-grid-fit' : noGridFit===true
        }
      ]"
    >
      <SwiperSlide v-for="item, idx in $list" :key="idx">
        <ProductUnitMini :unit-data="item" :unit-type="$unitType"></ProductUnitMini>
      </SwiperSlide>
      <button slot="button-prev" class="swiper-button-prev"></button>
      <button slot="button-next" class="swiper-button-next"></button>
      <div slot="scrollbar" class="swiper-scrollbar"></div>
    </Swiper>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'


export default {
  components: {
    Swiper, SwiperSlide
  },
  props: {
    list: {
      type: Array,
      default: ()=>{ return [] }
    },
    layout: {
      type: Number,
      default: ()=>{ return 4 }
    },
    unitType: {
      type: String,
      default: ()=>{ return "normal" }
    },
    swipe:{
      type: Boolean,
      default: ()=>{ return false }
    },
    group:{
      type: Number,
      default: ()=>{ return 0 }
    },
    noGridFit:{
      type: Boolean,
      default: ()=>{ return false }
    },
    swiperHeight:{
      type: Number,
      default: ()=>{ return 0 }
    },
  },
  data: () => ({
    $list: [],
    $layout: 4,
    $unitType: "normal",
    $swipe: false,
  }),
  watch: {
    list() {
      const me = this
      me.updateList()
    },
    layout() {
      const me = this
      me.checkListType()  
    },
    unitType() {
      const me = this
      me.checkListType()  
    },
    swipe(){
      const me = this
      me.checkListType()  
    }
  },
  created() {
    const me = this
    me.updateList()
    me.checkListType()
  },
  mounted(){
    const me = this
    me.$nextTick( me.updateSwiper )
  },

  methods:{
    updateList(){
      const me = this
      me.$list = me.list
      me.$forceUpdate()
      
      try{
        const sw = me.$el.querySelector(".product-unit-list-swipe").swiper
        sw.slideTo(0, 0)
      }catch(e){}
    },
    checkListType(){
      const me = this
      switch(me.layout){
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        me.$layout = me.layout
        break
      default:
        me.$layout = 4
        break
      }

      me.$swipe = me.swipe

      switch(me.unitType){
      case "normal":
      case "mini":
      case "micro":
        me.$unitType = me.unitType
        break
      case "swipe":
        me.$unitType = "mini"
        me.$swipe = true
        break
      default:
        me.$unitType = "normal"
        break
      }

      if(me.$swipe && me.$unitType === "normal"){
        me.$unitType = "mini"
      }

      me.$forceUpdate()
      me.$nextTick( me.updateSwiper )
    },

    updateSwiper(){
      const me = this
      try{
        const sw = me.$el.querySelector(".product-unit-list-swipe").swiper
        let update = false

        let space = 24
        switch(me.$layout){
        case 2:
          space = 16
          break
        case 5:
          space = 25
          break
        // no default
        }

        if(sw.params.spaceBetween !== space){
          sw.params.spaceBetween = space
          update = true
        }

        if(sw.params.slidesPerView !== me.$layout){
          sw.params.slidesPerView = me.$layout
          // sw.params.slidesPerGroup = me.$layout
          update = true
        }

        if(update){
          sw.update()
        }
      }catch(e){}
    },
    swiperInit(){
      this.$emit('swiperInit')
    }

  }// methods
}
</script>