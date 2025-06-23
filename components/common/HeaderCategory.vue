<template>
  <div class="hb-layer" :class="['hb-layer-'+ data.menu_type, {'min-h':minHeight}]">
    <div class="hb-layer-inner">
      <!-- 메뉴 리스트가 9개이상일때 해당 메뉴가 한줄에 나오도록 수정 -->
      <ul class="hb-d1" :class="{'nowrap' : data.menu_list.length >= 9}">
        <li v-for="(item, idx) in data.menu_list" :key="idx">
          <nuxt-link v-if="item.d1.link_url" :to="{path:item.d1.link_url}">{{item.d1.menu_name}}</nuxt-link>
          <span v-else class="hb-d1-menu">{{item.d1.menu_name}}</span>
          <ul class="hb-d2">
            <li v-for="(item2, idx2) in item.d2" :key="idx2">
              <button 
                v-if="item2.zzim!==null&&item2.zzim!==undefined" 
                :class="{'on':item2.zzim}" @click="item2.zzim = !item2.zzim"
              >
                <span class="invisible">브랜드 즐겨찾기</span>
              </button>
              <nuxt-link :to="{path:item2.link_url}">{{item2.menu_name}}</nuxt-link>
              <span v-if="item2.flag" class="flag">{{item2.flag}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: ()=>{ 
        return {}
      }
    },
    minHeight: {
      type: Boolean,
      default: () => {
        return false
      },
    }
  },
  data: () => ({
    menuType : 'category',
    menuList : null,
  }),
  watch: {
    
  },
  created() {
    
  },
  mounted() {
    
  },
  destroyed(){

  },
  methods: {
    
  },// methods
}
</script>
<style lang="scss"></style>
