<template>
  <v-navigation-drawer
      v-model="timeMenuVisible"
      touchless fixed
      left="false"
      width="100vw"
      class="time-menu-layer"
    >
      <div class="time-menu-layer-cont">
        <ul>
          <li :class="{on:currentPage==='main'}">
            <nuxt-link :to="{path:'timeMain'}">메인</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{}">소개</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{}">샵</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{}">스페셜샵</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{}">룩북</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{}">캠페인</nuxt-link>
          </li>
        </ul>
      </div>
    </v-navigation-drawer>
</template>

<script>
import EventBus from '~/api/common/EventBus'

export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data: () => ({
    timeMenuVisible: false,
    currentPage: ""
  }),
  watch: {
    timeMenuVisible(vis) {
      if(vis === false){
        EventBus.$emit("showTimeMenu", false)
      }
    },
  },
  created(){
    const me = this
    EventBus.$on("showTimeMenu", me.showTimeMenu)
  },
  mounted(){
    const me = this
    const arr = location.href.split("/")
    switch(arr[arr.length - 1]){
      case "timeMain":
        me.currentPage = "main"
        break
      default:
        break
    }
  },
  methods: {
    showTimeMenu(vis){
      const me = this
      me.timeMenuVisible = vis
    }
  },
}
</script>

<style lang="scss" scoped></style>
