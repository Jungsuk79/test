<template>
  <div v-scroll="scroll" id="topButton" class="fixed-buttons" :class="{'fix-bottom':fixBottom, 'floating':floating===true}" :style="{transform:'translate(0, '+offset+'px)'}">
    <button v-if="visibility.top" type="button" class="top-button" :class="{ hide: hideTopBtn }" @click.stop="scrollTop"></button>
    <button v-if="visibility.timeline" type="button" class="timeline-button"></button>
    <!-- <button v-if="showBackBtn" type="button" class="back-button" @click.stop="goBack"></button> -->
  </div>
</template>

<script>
import EventBus from '~/api/common/EventBus'
export default {
  data: () => ({
    hideTopBtn: true,
    fixBottom: false,
    showBackBtn: false,
    replaceFunc: null, // document.querySelector("#topButton").__vue__.replaceFunc = function(){}
    floating: false,
    offset: 0,
    visibility : {
      top : true,
      timeline : true,
      share : false,
    }
  }),
  created(){
    const me = this
    EventBus.$on("setTopBtns", me.setTopBtns)
  },
  mounted() {
    const me = this
    me.scroll()

    const arr = [
      "DP\\/systemMain",
      "DP\\/timeMain"
    ]
    const reg = new RegExp(arr.join('|'))
    me.showBackBtn = (location.pathname.match(reg)!==null)
  },
  methods: {
    scrollTop() {
      const me = this

      window.scroll({
        top: 0,
        behavior: 'smooth',
      })

      if(typeof(me.replaceFunc) === "function"){
        me.replaceFunc()
      }
    },
    scroll() {
      const me = this
      me.hideTopBtn = window.scrollY <= 100

      let footer = document.querySelector(".v-application--wrap > footer")
      if(footer === null){
        footer = document.querySelector(".ui-layout-wrap > footer")
      }
      if(footer){
        const bt = window.scrollY + window.innerHeight
        const ot = me.offsetTop(footer)
        if(me.fixBottom === false && bt > ot){
          me.fixBottom = true
        }else if(me.fixBottom === true && bt < ot){
          me.fixBottom = false
        }
      }
    },
    goBack(){
      history.back()
    },
    setTopButton(vis){
      // document.querySelector("#topButton").__vue__.setTopButton( true | false )
      const me = this
      me.hideTopBtn = (vis !== true)
    },
    setFloating(offset){
      const me = this
      // me.floating = (vis === true)
      me.offset = offset
    },
    setTopBtns(data){
      const me = this
      const v = me.visibility
      v.top = (data.top !== false)
      v.chat = (data.timeline !== false)
      v.share = (data.share === true)
    },
  },
}
</script>

<style lang="scss" scoped></style>
