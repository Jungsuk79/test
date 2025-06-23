<template>
  <ul class="editshop-link-box" :style="{'height':height+'px'}">
    <li>
      <nuxt-link to="#n">샵 바로가기</nuxt-link>
    </li>
    <li>
      <nuxt-link to="#n">SPECIAL SHOP</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  components: {
  },
  props: {
    height : {
      type : Number,
      default : 60
    }
  },
  data: () => ({
    
  }),
  created(){
    
  },
  methods: {
    
  },
}
</script>