<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'Customer Center'" :left-data="menuList" :pageClass="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="store-infomation">
            <div class="cmp-page-tit">
              <h2 class="tit">Store Information</h2>
            </div>
            <div class="cmp-form-searchBox">
              <v-text-field label="Please enter brand, store, or address." clearable class="cmp-form-input"></v-text-field>
              <v-btn icon>
                <i class="cmp-icon i-search">search</i>
              </v-btn>
            </div>
            <div class="cmp-tabs tabs-contents">
              <v-tabs v-model="tabModel" fixed-tabs>
                <v-tab>Brand</v-tab>
                <v-tab>Outlet</v-tab>
              </v-tabs>
            </div>
            <div class="sort-wrap">
              <CommonSelectBox id="selectId0" title="brand select">
                <template #optionList>
                  <option value="option">All brands</option>
                  <option value="option1">brand</option>
                  <option value="option2">brand</option>
                  <option value="option3">brand</option>
                  <option value="option4">brand</option>
                </template>
              </CommonSelectBox>
              <CommonSelectBox id="selectId0" title="regions select">
                <template #optionList>
                  <option value="option">All regions</option>
                  <option value="option1">regions</option>
                  <option value="option2">regions</option>
                  <option value="option3">regions</option>
                  <option value="option4">regions</option>
                </template>
              </CommonSelectBox>
            </div>     
            <div class="total-num">999 cases</div>     
            <table class="table-type1 info-table last-border">
              <colgroup>
                <col width="258px" />
                <col width="216px" />
                <col width="312px" />
                <col width="*" />
              </colgroup>
              <thead>
                <tr>
                  <th class="pw-16">Brand</th>
                  <th>Store</th>
                  <th>Address</th>
                  <th>Phone number</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="n in 20" :key="n">
                  <td>
                    <strong>
                      <!-- if문 -> 디자인확인용 -->
                      <template v-if="n===2">TOMMY HILFIGER Footweard</template>
                      <template v-else-if="n===3">SYSTEM HMME SYSTE HMME</template>
                      <template v-else>SYSTEM HOMME</template>
                    </strong>
                  </td>
                  <td class="text-center">
                    <!-- if문 -> 디자인확인용 -->
                    <template v-if="n===1">杭州大厦<br />(Hangzhou Department Store)</template>
                    <template v-else-if="n===2">Chungdam Avenue</template>
                    <template v-else>F/X Dachi</template>
                  </td>
                  <td class="text-center">529, Dogok-ro, Gangnam-gu, Seoul</td>
                  <td class="text-center">02-1234-5678</td>
                </tr>
              </tbody>
            </table>
            <ProductListPaging />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'LayoutBasics',
  data: () => ({
    tabModel: null,
  }),
  created() {
    const me = this
    const json = require('~/static/json/cs_left_menu_en.json')
    me.menuList = json.list
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/en/en.scss';
</style>
