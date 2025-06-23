<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="store-infomation">
            <div class="cmp-page-tit">
              <h2 class="tit">매장안내</h2>
            </div>
            <div class="cmp-form-searchBox">
              <v-text-field label="브랜드명, 매장명 또는 주소를 입력해주세요" clearable class="cmp-form-input"></v-text-field>
              <v-btn icon>
                <i class="cmp-icon i-search">검색</i>
              </v-btn>
            </div>
            <div class="cmp-tabs tabs-contents">
              <v-tabs v-model="tabModel" fixed-tabs>
                <v-tab>브랜드</v-tab>
                <v-tab>아울렛</v-tab>
              </v-tabs>
            </div>
            <div class="sort-wrap">
              <CommonSelectBox id="selectId0" title="타이틀">
                <template #optionList>
                  <option value="all">브랜드 전체</option>
                  <option value="option1">브랜드1</option>
                  <option value="option2">브랜드2</option>
                  <option value="option3">브랜드3</option>
                  <option value="option4">브랜드4</option>
                </template>
              </CommonSelectBox>
              <CommonSelectBox id="selectId0" title="타이틀">
                <template #optionList>
                  <option value="all">지역 전체</option>
                  <option value="option1">지역1</option>
                  <option value="option2">지역2</option>
                  <option value="option3">지역3</option>
                  <option value="option4">지역4</option>
                </template>
              </CommonSelectBox>
            </div>     
            <div class="total-num">999건</div>     
            <table class="table-type1 info-table last-border">
              <thead>
                <tr>
                  <th class="pw-16">브랜드</th>
                  <th>지점</th>
                  <th>주소</th>
                  <th>전화번호</th>
                  <th class="pw-16"></th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td colspan="5">
                    <div class="panel-info">
                      <div class="info-item px-16">
                        <strong>TOMMY HILFIGER Footwear</strong>
                      </div>
                      <div class="info-item text-center px-24">杭州大厦<br />(Hangzhou<br />Department Store)</div>
                      <div class="info-item text-center px-24">Hangzhou Tower,Gongshu District, Hangzhou City, Zhejiang Province, China</div>
                      <div class="info-item text-center px-24">
                        <p>86-571-81990226</p>
                      </div>
                      <div class="info-item text-center px-16">
                        <v-btn-toggle dense borderless>
                          <v-btn icon outlined small color="primary" class="icon-location" @click="onAccordion($event)">
                            <i v-cmp-icon="{ name: 'locoff' }">지도보기 열기</i>
                            <i v-cmp-icon="{ name: 'locon' }">지도보기 닫기</i>
                          </v-btn>
                        </v-btn-toggle>
                      </div>
                    </div>
                    <div class="panel-content">
                      <div class="map"></div>
                    </div>
                  </td>
                </tr>
                <tr v-for="n in 19" :key="n">
                  <td colspan="5">
                    <div class="panel-info">
                      <div class="info-item px-16">
                        <strong>SYSTEM HOMME</strong>
                      </div>
                      <div class="info-item text-center px-24">갤러리아백화점 명품관<br />WEST</div>
                      <div class="info-item text-center px-24">서울특별시 강남구 압구정로 343</div>
                      <div class="info-item text-center px-24">
                        <p>02-1234-5678</p>
                      </div>
                      <div class="info-item text-center px-16">
                        <v-btn-toggle dense borderless>
                          <v-btn icon outlined small color="primary" class="icon-location" @click="onAccordion($event)">
                            <i v-cmp-icon="{ name: 'locoff' }">지도보기 열기</i>
                            <i v-cmp-icon="{ name: 'locon' }">지도보기 닫기</i>
                          </v-btn>
                        </v-btn-toggle>
                      </div>
                    </div>
                    <div class="panel-content">
                      <div class="map"></div>
                    </div>
                  </td>
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
    const json = require('~/static/json/cs_left_menu.json')
    me.menuList = json.list
  },
  methods: {
    onAccordion(e) {
      if(!e.target.closest('.v-item-group').classList.contains('on')) { // show
        e.target.closest('tbody').querySelectorAll('tr').forEach(element => {
          element.querySelector('.panel-content').style.display = 'none';
          element.querySelector('.v-item-group').classList.remove('on');
        });
        e.target.closest('td').querySelector('.panel-content').style.display = 'block';
        e.target.closest('td').querySelector('.v-item-group').classList.add('on');
      }else {
        e.target.closest('td').querySelector('.panel-content').style.display = 'none';
        e.target.closest('td').querySelector('.v-item-group').classList.remove('on');
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/cs.scss';
</style>
