<template>
  <div id="actionbar" v-scroll="scroll" class="bottom-section" :class="{ hide: hide }">
    <ul class="menu-list">
      <li>
        <button class="btn-brand">
          <span>브랜드</span>
        </button>
      </li>
      <li>
        <button class="btn-stylelive">
          <span>스타일라이브</span>
        </button>
      </li>
      <li>
        <button class="btn-menu" @click.stop="showCategory">
          <span>전체메뉴</span>
        </button>
      </li>
      <li>
        <button class="btn-mypage">
          <span>마이페이지</span>
        </button>
      </li>
      <li>
        <button class="btn-timeline">
          <span>타임라인</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import EventBus from '~/api/common/EventBus'
export default {
  components: {
  },
  data: () => ({
    hide: false,
    scr: 0,
  }),

  methods: {
    scroll() {
      const me = this
      const scr = window.scrollY
      const dif = me.scr - scr
      const hide = me.hide

      if (dif < 0) {
        me.hide = true
      } else {
        me.hide = false
      }
      if (
        scr >=
        document.getElementById('__nuxt').clientHeight - window.innerHeight
      ) {
        me.hide = false
      }

      if(hide !== me.hide){
        EventBus.$emit("hideActionBar", me.hide)
      }

      me.scr = scr
    },
    setVisible(vis){
      const me = this
      const hide = (vis !== true)
      if(hide !== me.hide){
        EventBus.$emit("hideActionBar", hide)
        me.hide = hide
      }
    },
    showCategory() {
      EventBus.$emit('showCategory', true)
    },
  },
}
</script>

<style lang="scss" scoped></style>
