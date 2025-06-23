<template>
<v-navigation-drawer v-model="sortLayerVisible" touchless fixed bottom class="sort-layer">
    <button type="button" class="close-sort-btn" @click.stop="showSortLayer(false)"><span class="invisible">닫기</span></button>
    <ul>
      <li v-for="item, idx in sortList" :key="idx" :class="{on:sorting.code===item.code}" @click.stop="setSorting(item)">{{item.name}}</li>
    </ul>
  </v-navigation-drawer>
</template>

<script>
import EventBus from '~/api/common/EventBus'

export default {
  data: () => ({
    sortLayerVisible: false,
    sortList: [
      {
        name : "신상순",
        code : "new"
      },{
        name : "판매순",
        code : "sell"
      },{
        name : "고가순",
        code : "expensive"
      },{
        name : "저가순",
        code : "cheap"
      },{
        name : "리뷰순",
        code : "review"
      }
    ],
    sorting : {
      name : "신상순",
      code : "new"
    }
  }),
  created(){
    const me = this
    EventBus.$on("showSortLayer", me.showSortLayer)
  },
  methods:{
    showSortLayer(vis, sort){
      const me = this
      if(sort){
        me.sorting = sort
      }
      me.sortLayerVisible = vis
    },
    setSorting(item){
      const me = this
      me.sorting = item
      EventBus.$emit("sortChange", me.sorting)
      me.showSortLayer(false)
    },
  }// methods
}
</script>

<style lang="scss" scoped></style>
