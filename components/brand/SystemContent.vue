<template>
  <div class="system-unit-wrap">
    <BrandSlider :data="data.list" system/>
  </div>
</template>

<script>

export default {
  components: {
    
  },
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
    
  },
}
</script>