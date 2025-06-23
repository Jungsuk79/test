<template>
  <v-layout class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'Customer Center'" :left-data="menuList" :pageClass="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="shopping-guide guide-duty">
            <div class="cmp-page-tit">
              <h2 class="tit">Shopping Guide</h2>
            </div>               
            <h3 class="page-title">Duty/Tax</h3>
            <div class="contents-wrapper">

              <div class="contents-line-box full fit pb-0">

                  <!-- 안내 -->
                  <ul class="cmp-dotList">
                    <li>Duty, Customs Tariffs and WAT are set by the local government and determined based on a combination of the destination of origin or manufacturing of the goods being purchased, and the classification of that merchandise in accordance with a harmonized system adopted and used by the local government.</li>
                    <li>If you want to check about an estimated imposed duties and taxes, please leave your query <nuxt-link to="" class="line-txt">my page>1:1 query</nuxt-link>.</li>
                    <li>A logistics company or customs office will contact you to guide on payment process of duties and taxes.</li>
                    <li>
                      Orders from UK must be over 135 GBP(approx.250,000 KRW). Ordered less than 135 GBP, the seller must charge VAT to customer at the time of payment and pay duties to HMRC directly.<br>
                      THE HANDSOME.COM is not registered with HMRC, we can not offer VAT payment service for customer ordered less than 135 GBP.
                    </li>
                  </ul>
                  <!-- //안내 -->

                  <!-- 셀렉트박스 -->
                  <CommonSelectBox id="selectId0" class="mt-34" title="Select destination" @submit="SelectDestination">
                    <template #optionList>
                      <option value="placeholder">Select destination</option>
                      <option value="0">Australia</option>
                      <option value="1">Canada</option>
                      <option value="2">China</option>
                      <option value="3">France</option>
                      <option value="4">Hong Kong</option>
                      <option value="5">Italy</option>
                      <option value="6">Japan</option>
                      <option value="7">New Zealand</option>
                      <option value="8">Philippines</option>
                      <option value="9">Saudi Arabia</option>
                      <option value="10">Singapore</option>
                      <option value="11">Taiwan</option>
                      <option value="12">United Arab Emirates</option>
                      <option value="13">United Kingdom</option>
                      <option value="14">United States</option>
                      <option value="15">Viet Nam</option>
                    </template>
                  </CommonSelectBox>   
                  <!-- //셀렉트박스 -->      

                  <!-- 테이블 -->
                  <div v-if="currentDestination !== 'placeholder'" class="table-wrap">
                    <p v-if="destination[currentDestination].guide" class="guide-text">{{destination[currentDestination].guide}}</p>
                    <table class="guide-table">
                      <colgroup>
                        <col width="*">
                        <col width="142px">
                        <col width="142px">
                      </colgroup>
                      <thead>
                        <tr>
                          <th class="text-center">Category</th>
                          <th class="text-center">Tariff rate (%)</th>
                          <th class="text-center">Surtax rate (%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(tableRow, index) in destination[currentDestination].contents" :key="index">
                          <td>{{tableRow.category}}</td>
                          <td class="text-center">{{tableRow.traff}}</td>
                          <td class="text-center">{{tableRow.surtax}}</td>
                        </tr>
                      </tbody>
                    </table>     
                  </div>         
                  <!-- //테이블 -->

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
  data: () => ({
    destination: [ // 국가별 안내사항
      { // Australia
        guide: 'The total purchase amount under 1,000 dollars will be exempted from tariffs.',
        contents: [
          {
            category: 'Bags/Wallets, Shoulder/Cross Bags, Mens Bags, Clutch Bags, Backpacks Womens/Mens Wallets, Card Holder, Keyring/Holder, Tech acc, Etc Shirts, Dress Shirts Blouse T-Shirts Knit Cardigan/Vest Coat Trench Jacket, Jumper Mini Dress, Midi Dress, Long Dress Pencil, Flare, Maxi/Long Formal, Denim Bags/Wallets, Shoulder/Cross Bags, Mens Bags, Clutch Bags, Backpacks Denim',
            traff: '5.0',
            surtax: '10.0',
          }
        ]
      },
      { // Canada
        guide: '',
        contents: [
          {
            category: 'Down Jumper Shoes, PLAT/LOAFER',
            traff: '0.0',
            surtax: '5.0',
          },
          {
            category: 'Trench, Coat Jacket, Jumper Shirts, Dress Shirts Blouse T-Shirts Knit Cardigan/Vest Coat Mini Dress, Midi Dress, Long Dress Pencil, Flare, Maxi/Long Casual Denim',
            traff: '18.0',
            surtax: '5.0',
          }
        ]
      },
      { // China
        guide: '',
        contents: [
          {
            category: 'Down Jumper',
            traff: '4.0',
            surtax: '17.0',
          },
          {
            category: 'T-Shirts Knit',
            traff: '5.6',
            surtax: '17.0',
          },
          {
            category: 'Casual',
            traff: '6.4',
            surtax: '17.0',
          },
          {
            category: 'Bags/Wallets, Shoulder/Cross Bags, Mens Bags, Clutch Bags, Backpacks Womens/Mens Wallets, Card Holder, Keyring/Holder, Tech acc, Etc Shoes, PLAT/LOAFER',
            traff: '7.0',
            surtax: '17.0',
          },
          {
            category: 'Cardigan/Vest Clothing Mini Pencil, Flare, Maxi/Long Scarf/muffler, ONLINE EXCLUSIVE',
            traff: '9.8',
            surtax: '17.0',
          },
          {
            category: 'Jacket, Jumper Shirts, Dress Shirts Shirts Blouse Coat Jacket, Jumper Mini Dress, Midi Dress, Long Dress Denim',
            traff: '11.2',
            surtax: '17.0',
          },
          {
            category: 'Trench, Coat',
            traff: '12.2',
            surtax: '17.0',
          },
        ]
      },
      { // France
        guide: '',
        contents: [
          {
            category: 'Cardigan/Vest Coat Jacket, Jumper Mini Shoes, PLAT/LOAFER',
            traff: '12.0',
            surtax: '20.0',
          }
        ]
      },      
      { // Hong Kong
        guide: '',
        contents: [
          {
            category: 'All Product',
            traff: 'duty-free',
            surtax: 'VAT-free',
          }
        ]
      },      
      { // Italy
        guide: '',
        contents: [
          {
            category: 'Coat',
            traff: '12.0',
            surtax: '22.0',
          }
        ]
      },      
      { // Japan
        guide: '',
        contents: [
          {
            category: 'Shirts T-Shirts Knit',
            traff: '10.9',
            surtax: '8.0',
          },
          {
            category: 'Jacket, Jumper Mini Dress, Midi Dress, Long Dress Pencil, Flare, Maxi/Long',
            traff: '16.0',
            surtax: '8.0',
          }
        ]
      },      
      { // New Zealand
        guide: '',
        contents: [
          {
            category: 'Bags/Wallets, Shoulder/Cross Bags, Mens Bags, Clutch Bags, Backpacks',
            traff: '5.0',
            surtax: '15.0',
          },
          {
            category: 'Jacket, Vest, Pants Knit Pencil, Flare, Maxi/Long Shoes, PLAT/LOAFER',
            traff: '10.0',
            surtax: '15.0',
          },
        ]
      },
      { // Philippines
        guide: '',
        contents: [
          {
            category: 'Shirts',
            traff: '15.0',
            surtax: '12.0',
          },
        ]
      },
      { // Saudi Arabia
        guide: '',
        contents: [
          {
            category: 'Knit Mini Dress, Midi Dress, Long Dress Scarf/muffler, ONLINE EXCLUSIVE',
            traff: '5.0',
            surtax: '5.0',
          },
        ]
      },
      { // Singapore
        guide: '',
        contents: [
          {
            category: 'Bags/Wallets, Shoulder/Cross Bags, Mens Bags, Clutch Bags, Backpacks',
            traff: '3.0',
            surtax: '20.0',
          },
          {
            category: 'Trench, Coat Jacket, Jumper Shirts, Dress Shirts Blouse T-Shirts Knit Coat Trench Mini Dress, Midi Dress, Long Dress Pencil, Flare, Maxi/Long Casual Denim',
            traff: '12.0',
            surtax: '20.0',
          },
        ]
      },
      { // Taiwan
        guide: '',
        contents: [
          {
            category: 'Shirts, Dress Shirts T-Shirts Coat',
            traff: '12.5',
            surtax: '10.0',
          },
          {
            category: 'Womens/Mens Wallets, Card Holder, Keyring/Holder, Tech acc, Etc Tech Acc.',
            traff: '15.0',
            surtax: '10.0',
          },
        ]
      },
      { // United Arab Emirates
        guide: '',
        contents: [
          {
            category: 'Mini Dress, Midi Dress, Long Dress',
            traff: '5.0',
            surtax: '5.0',
          }
        ]
      },
      { // United Kingdom
        guide: '',
        contents: [
          {
            category: 'Bags/Wallets, Shoulder/Cross Bags, Mens Bags, Clutch Bags, Backpacks',
            traff: '3.0',
            surtax: '20.0',
          },
          {
            category: 'Trench, Coat Jacket, Jumper Shirts, Dress Shirts Blouse T-Shirts Knit Coat Trench Mini Dress, Midi Dress, Long Dress Pencil, Flare, Maxi/Long Casual Denim',
            traff: '12.0',
            surtax: '20.0',
          },
        ]
      },
      { // United States
        guide: 'The total purchase amount under 800 dollars will be exempted from tariffs.',
        contents: [
          {
            category: 'Down Jumper Trench Formal, Denim Casual Shoes, PLAT/LOAFER',
            traff: '0.0',
            surtax: '0.0',
          },
          {
            category: 'Scarf/muffler, ONLINE EXCLUSIVE',
            traff: '1.2',
            surtax: '0.0',
          },
          {
            category: 'Cardigan/Vest',
            traff: '5.0',
            surtax: '0.0',
          },
          {
            category: 'Bags/Wallets, Shoulder/Cross Bags, Mens Bags, Clutch Bags, Backpacks Womens/Mens Wallets, Card Holder, Keyring/Holder, Tech acc, Etc',
            traff: '5.3',
            surtax: '0.0',
          },
          {
            category: 'Mini Dress, Midi Dress, Long Dress',
            traff: '6.9',
            surtax: '0.0',
          },
          {
            category: 'Jacket, Jumper',
            traff: '7.5',
            surtax: '0.0',
          },
          {
            category: 'Mini Pencil, Flare, Maxi/Long',
            traff: '11.3',
            surtax: '0.0',
          },
          {
            category: 'Denim',
            traff: '13.6',
            surtax: '0.0',
          },
          {
            category: 'Trench, Coat',
            traff: '15.9',
            surtax: '0.0',
          },
          {
            category: 'Knit',
            traff: '16.0',
            surtax: '0.0',
          },
          {
            category: 'T-Shirts',
            traff: '16.5',
            surtax: '0.0',
          },
          {
            category: 'Shirts, Dress Shirts Blouse Clothing',
            traff: '19.7',
            surtax: '0.0',
          },
        ]
      },
      { // Viet Nam
        guide: '',
        contents: [
          {
            category: 'Shirts, Dress Shirts Casual',
            traff: '20.0',
            surtax: '10.0',
          },
          {
            category: 'Shoes, PLAT/LOAFER',
            traff: '30.0',
            surtax: '10.0',
          },
        ]
      },
    ],
    currentDestination: 'placeholder',
  }),
  mounted(){
  },
  methods: {
    SelectDestination(val) {
      this.currentDestination = val;
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/en/en.scss';
</style>
