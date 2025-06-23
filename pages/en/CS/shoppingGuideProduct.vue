<template>
  <v-layout class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'Customer Center'" :left-data="menuList" :pageClass="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="shopping-guide guide-order">
            <div class="cmp-page-tit">
              <h2 class="tit">Shopping Guide</h2>
            </div>            
            <h3 class="page-title">Product</h3>

            <div class="contents-wrapper">
              <div class="item-list">
                <ul class="cmp-dotList">
                  <li>Click to “Actual size” for a more detailed size info on a product page.</li>
                  <li>According to the method of measurement, errors less than 1-2cm may occur.</li>
                  <li>All Items are to be sold in both offline and online stores, so some items could be out of stock in real time. Sold-out items are fully refundable.</li>
                  <li>The time of restock is not determined, however, if you leave your inquiries on <nuxt-link to="" class="line-txt">my page>1:1 query</nuxt-link>, we try our best to get back to you soon by checking an estimated time.</li>
                  <li>Our sale may start without any notices. We do not make price match or free return due to the fact that item is on sale.</li>
                  <li>Please leave your other inquiries on <nuxt-link to="" class="line-txt">my page>1:1 query</nuxt-link>.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </v-layout>
</template>

<script>
export default {
  layout: 'LayoutBasics',
  created() {
    const me = this
    const json = require('~/static/json/cs_left_menu_en.json')
    me.menuList = json.list
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/en/en.scss';
</style>
