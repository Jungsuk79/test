<template>
  <div v-if="topNotice" class="cmp-info top-notice noti-box" :class="{'single-line' : isSingleLine}">
    <p class="txt noti-text" :class="{'more' : isMore}">{{ notiTextData }}</p>
    <v-btn v-if="!isSingleLine" icon small class="arrow-toggle" @click="isArrowToggle">
      <i :class="`cmp-icon i-${isUpDown ? 'up' : 'down'} cmp-icon-18 invert`">{{ isUpDown ? '열기' : '닫기' }}</i>
    </v-btn>
    <v-btn v-if="isMutiLine" icon small class="del" @click="topNotice = false">
      <span v-cmp-icon="{ size: 18, name: 'close', invert: 1 }">닫기</span>
    </v-btn>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  props: {
    notiTextData : {
      type: String,
      default: () => {return ''}
    }
  },
  data: () => ({
    topNotice: true,
    isMore: false,
    isUpDown: false,
    isSingleLine: false,
    isMutiLine: false
  }),
  watch:{
  },
  created(){
  },
  mounted(){
    this.$nextTick(() => {
      this.checkTextBoxHeight()
    })
  },
  destroyed(){
  },
  methods: {
    checkTextBoxHeight () {
      const me = this
      const notiText = me.$el.querySelector('.noti-text')
console.log('>>>', notiText.scrollHeight)
      if (notiText.scrollHeight <= 24) {
        me.isSingleLine = true
        me.isMutiLine = true
      }
      else {
        me.isMutiLine = false
      }

    },
    isArrowToggle () {
      const me = this

      me.isUpDown = !me.isUpDown

      if(me.isUpDown) {
        me.isMutiLine = true
        me.isMore = true
      }
      else {
        me.isMutiLine = false
        me.isMore = false
      }
    }
  }
    
}
</script>
<style lang="scss"></style>
