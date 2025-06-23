<template>
  <div class="brand-top-visual" :class="{'visual-type2':type2}">
    <div v-background-image="{url:data.image_url, shading:true}"></div>
    <!-- eslint-disable -->
    <div class="info-cnt">
      <div class="tit" v-html="data.title"></div>
      <div v-if="data.desc" class="desc" v-html="data.desc"></div>
    </div>
    <!-- eslint-disable -->
  </div>
</template>

<script>
export default {
  components: {
    
  },
  props: {
    data: {
      type: Object,
      default: ()=>{ return {} }
    },
    type2 : {
      type : Boolean,
      default : false
    },
  },
  data: () => ({
    
  }),
  created(){
    
  },
  destroyed(){
    
  },
  methods: {
    
  },
}
</script>