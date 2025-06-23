<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'Customer Center'" :left-data="menuList" :active="'/en/en/CS/csCenterNotice'" :pageClass="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="cs-board-detail">
            <div class="cmp-page-tit">
              <h2 class="tit">Notice</h2>
            </div>
            <div class="detail-header">
              <div class="cmp-sub-tit small">
                <h3 class="tit">Information on making consulting inquiries to the Handsome.com customer center for consulting (Temporary suspension of Honeytalk chatting consultation)</h3>
                <p class="date">26 Apr. 2022</p>
              </div>
            </div>
            <div class="detail-body">
              Greetings. This is the Handsome.com.<br />
              We apologize for the inconvenience as the connection to our customer center is being delayed due to a large amount of inquiries made to the Handsome.com.<br /><br />
              Currently, it is difficult for us to give you a response in real time. So if you can make an inquiry to [1:1 Query] in My Page, we will assist you as soon as possible.<br />
              Since phone connection is difficult, if you can prepare the details of [1:1 Query], we will check the details of your inquiry and reply as soon as possible.<br />
              ※ Honeytalk chatting consultation is temporarily suspended until the customer center is stabilized<br /><br />
              We sincerely apologize once again for the inconvenience.<br />
              We will do our best to quickly normalize the customer center.<br /><br />
              Thank you.
            </div>
            <div class="detail-footer">
              <v-btn outlined large color="primary">List</v-btn>
            </div>

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

  }),
  created() {
    const me = this
    const json = require('~/static/json/cs_left_menu_en.json')
    me.menuList = json.list
  },  
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/cs.scss';
</style>
