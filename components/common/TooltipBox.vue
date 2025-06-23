<template>
  <div ref="tooltipBox" class="cmp-tooltip-box"  :class="{'texttype': iconType==='text'}" @focusin="open" @focusout="close" @mouseenter="open" @mouseleave="close">
    <v-btn icon class="tooltip-btn">
      <span v-if="iconType==='question'" v-cmp-icon="{ size: 18, name: 'question' }">
        {{$t('components.tooltip.view')}}<!-- 글로벌 작업 : en 케이스 추가 -->
      </span>
      <span v-if="iconType==='info'" v-cmp-icon="{ size: 18, name: 'info' }">
        {{$t('components.tooltip.view')}}<!-- 글로벌 작업 : en 케이스 추가 -->
      </span>
      <!-- [퍼블수정]icon-type="text" 추가 -->
      <span v-if="iconType==='text'" class="cmp-font fnt-13 c-light-gray">
        <span class="line">{{tooltipText}}</span>
      </span>
    </v-btn>
    <transition name="tootip-fade">
      <div v-show="show" class="tooltip-cnt" tabindex="0" :style="[{left:boxLeft+'px'},{top:boxTop},{bottom:boxBottom},{width:width+'px'}]" :class="{'right':right}"><!-- 글로벌 작업 : style width 추가 -->
        <div class="l-cnt">
          <slot name="before"></slot><!-- 리스트 prepend -->
        </div>
        <div class="c-cnt">
          <slot name="content">
            <ul v-if="tooltipList.length > 0" class="tooltip-list">
              <!-- eslint-disable -->
              <li v-for="(item, index) in tooltipList" :key="index" v-html="item"></li>
              <!-- eslint-disable -->
            </ul>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  props: {     
    tooltipList: {
      type: Array,
      default: ()=>{ return [] }
    },
    iconType : {
      type : String,
      default : 'question'
    },
    right : {
      type : Boolean,
      default : false
    },
    bottom : {
      type : Boolean,
      default : false
    },
    width : { // 글로벌 작업 : 추가
      type : Number,
      default : 320
    },
    tooltipText:{
      type : String,
      default : '툴팁보기'
    },
  },
  data: () => ({
    show : false,
    boxLeft : null,
    boxTop : null,
    boxBottom : null,
  }),
  created(){
    
  },
  mounted(){
    
  },
  destroyed(){
    const me = this
    me.boxLeft = null
    me.boxTop = null
    me.boxBottom = null
  },
  methods: {
    open(){
      const me = this
      if(!me.show){
        const el = me.$refs.tooltipBox
        let clientRect
        if(!me.right) clientRect = el.getBoundingClientRect()
        const parentRect = el.parentNode.getBoundingClientRect()
        if(!me.right) {
          const left = clientRect.left
          const parentL = parentRect.left
          me.boxLeft= parentL - left;
        }
        const parentH = parentRect.height
        if(!me.bottom){
          me.boxTop = parentH + 6 - ((parentH - 18) / 2)+'px' // 6:top 공통 간격 / 18 : 아이콘버튼 height
          me.boxBottom = 'unset'
        }else{
          me.boxBottom = parentH + 6 - ((parentH - 18) / 2)+'px' // 6:top 공통 간격 / 18 : 아이콘버튼 height
          me.boxTop = 'unset'
        }
        me.show = true;        
      }
    },
    close(){
      const me = this
      me.show = false
    }
  },
}
</script>
<style lang="scss"></style>
