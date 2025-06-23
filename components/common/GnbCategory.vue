<template>
  <div class="gnb-category">
    <!-- 1 depth -->
      <ul>
        <li v-for="d1, idx1 in list" :key="idx1" class="depth1"
          :class="[
            {
              'opened' : d1.open,
              'has-children' : d1.hasChildren
            }
          ]"
        >
          <button @click.stop="selectFilter(d1)">
            <span class="label">{{d1.label}}</span>
          </button>
          <!-- 2 depth -->
          <ul v-if="d1.hasChildren">
            <li v-for="d2, idx2 in d1.list" :key="idx2" class="depth2 children"
              :class="{
                'opened' : d2.open,
                'has-children' : d2.hasChildren
              }"
            >
              <button @click.stop="selectFilter(d2)">
                <span class="label">
                  {{d2.label}}
                  <em v-if="d2.count > 0" class="count">{{d2.count}}</em>
                </span>
              </button>
              <!-- 3 depth -->
              <ul v-if="d2.hasChildren">
                <li v-for="d3, idx3 in d2.list" :key="idx3" class="depth3 children"
                  :class="{
                    'opened' : d3.open===true,
                    'has-children' : d3.hasChildren
                  }"
                >
                  <button @click.stop="selectFilter(d3)">
                    <span class="label">{{d3.label}}</span>
                  </button>
                </li>
              </ul>
              <!-- 3 depth -->
            </li>
          </ul>
          <!-- 2 depth -->
        </li>

      </ul>
      <!-- 1 depth -->
  </div>
</template>

<script>
// import EventBus from '~/api/common/EventBus'
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data: () => ({
  }),
  mounted(){
  },
  methods:{
    selectFilter(item){
      if(item.hasChildren){
        item.open = ! item.open
      }else{
        console.log("링크 이동하기", item.label, item.link_url)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>