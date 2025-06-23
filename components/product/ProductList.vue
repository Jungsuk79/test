<template>
  <div>

    <ul v-if="$swipe !== true && unitType==='normal'" class="product-unit-list product-unit-list-normal"
      :class="[
        'product-list-layout-'+$layout,
        {'no-grid-fit':noGridFit===true}
      ]">
      <ProductUnit v-for="item, idx in $list" :key="idx" :unit-data="item" :layout="$layout"></ProductUnit>
    </ul>
    <!-- [퍼블작업] top100  -->
    <ul v-if="$swipe !== true && $unitType==='top100'" class="product-unit-list product-unit-list-top100"
      :class="[
        'product-list-layout-'+$layout,
        {'no-grid-fit':noGridFit===true}
      ]">
      <!-- [퍼블수정]24.09.13 카운트 데이터 추가 -->
      <ProductUnit v-for="item, idx2 in $list" :key="idx2" :unit-data="item" :index="idx2" :layout="$layout"></ProductUnit>
    </ul>
    <!-- // [퍼블작업] top100  -->

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
        loop : (loop && $list.length > $layout), // 230112 상품리스트 : loop 추가
        slidesPerView: $layout,
        slidesPerGroup: (group > 0 ? group : $layout),
        spaceBetween: space || 24,
        touchRatio: parseInt(tRatio, 10) || 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          init: swiperInit
        }
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
    space:{
      type: Number,
      default: ()=>{ return 24 }
    },
    tRatio:{
      type: String,
      default: ()=>{ return '1' }
    },
    loop : {  // 230112 상품리스트 : loop 추가
      type: Boolean,
      default: ()=>{ return false }
    }
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
    },
    tRatio(){
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
      case "top100":
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
        let tRatio = '1'
        switch(me.$layout){
        case 2:
          space = 16
          break
        case 5:
          space = 25
          break
        // no default
        }

        if(this.space){
          space = this.space
        }

        if(this.tRatio){
          tRatio = this.tRatio
        }

        if(sw.params.spaceBetween !== space){
          sw.params.spaceBetween = space
          update = true
        }

        if(sw.params.touchRatio !== parseInt(tRatio, 10)){
          sw.params.touchRatio = parseInt(tRatio, 10)
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
      this.$emit('setupSwiper')
    }

  }// methods
}
</script>