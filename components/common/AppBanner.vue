<template>
  <div v-if="visible" class="app-down-banner">
    <a href="#none">app down banner</a>
    <v-btn class="btn-close" absolute width="35" height="35" min-width="35" plain @click.stop="hideBanner">
      <span class="icon"></span><span class="ir">닫기</span>
    </v-btn>
  </div>
</template>

<script>
// import {mapMutations} from 'vuex'
import EventBus from '~/api/common/EventBus'

export default {
  props: {
    //
  },
  data: () => ({
    visible: false,
  }),

  mounted(){
    const me = this;
     me.visible = (localStorage.getItem("hideAppBanner") !== "Y");
  },

  methods: {
    hideBanner(){
      const me = this;
      me.visible = false;
      localStorage.setItem("hideAppBanner", "Y");
      EventBus.$emit("hideAppBanner")
    }
  },
}
</script>
