<template>
  <div class="main-celeb-pick">
    <!-- 메인 툴팁 추가 -->
    <v-layout justify-start align-center class="main-unit-title">
      <div v-html="data.title"></div>
      <CommonTooltipBox icon-type="info">
        <template #content>
          <p class="cmp-font fnt-14">스타일라이브 게시물에<br />최근 많이 태그 된 상품이에요</p>
        </template>
      </CommonTooltipBox>
    </v-layout>
    <!-- //메인 툴팁 추가 -->
    <div class="main-unit-cont">
      <ul class="celeb-pick-cover">
        <li v-for="item, idx in data.list" :key="idx" class="celeb-item">
          <ProductUnitMini :unit-data="item" :unit-type="'micro'" class="celeb-image"></ProductUnitMini>
          <div v-if="item.product_name" class="celeb-text">
            <div class="celeb-brand">{{item.brand_name}}</div>
            <div class="celeb-name">{{item.product_name}}</div>
            <div class="celeb-price">{{item.sell_price | number}}</div>
            <nuxt-link :to="{path:item.link_url}" class="celeb-link"></nuxt-link>
          </div>
          <nuxt-link :to="{path:item.link_url}" class="link-block"></nuxt-link>
        </li>
      </ul>
    </div>
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
  mounted(){
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped></style>
