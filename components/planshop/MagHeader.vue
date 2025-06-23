<template>
        <div class="magHeader">
          <div class="muh-title">{{data.title}}</div>
          <div class="muh-date mt-24 mb-20">
              <div class="muh-txt">
                  <div class="muh-subTitle">{{data.subTitle}}</div>
                  <div class="muh-date">{{data.date}}</div>
              </div>
              <div class="muh-button">
                  <button>
                    <i v-cmp-icon="{ size: 24, name: 'listDot' }">목록보기</i>
                  </button>
                  <button class="zzim-btn" @click="zzimBtn">
                    <span class="ir">찜</span>
                  </button>
              </div>
          </div>
        </div>
</template>

<script>
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
  }),
  created(){
  },
  methods: {
    zzimBtn(e){
      const cl = e.currentTarget.classList
      if(cl.contains("on")){
        cl.remove("on")
      }else{
        cl.add("on")
      }
    }
  },
}
</script>

<style lang="scss"></style>
