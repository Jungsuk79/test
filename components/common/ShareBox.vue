<template>
  <div v-click-outside="close" class="cmp-share-box" @focusin="open" @focusout="close" @mouseover="open" @mouseleave="close">
    <button class="cmp-icon i-share cmp-icon-24">공유</button>
    <transition name="tootip-fade">
      <div v-show="show" class="share-wrap" tabindex="0" >
        <button class="btn-fb"></button>
        <button class="btn-twit"></button>
        <button class="btn-pinter"></button>
        <button class="btn-url">URL</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  props: {     
    shareList: {
      type: Array,
      default: ()=>{ return [] }
    },
  },
  data: () => ({
    show : false,
  }),
  created(){
    
  },
  mounted(){
    
  },
  methods: {
    open(){
      const me = this
      if(!me.show){
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
