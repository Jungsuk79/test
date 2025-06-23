<template>
  <div class="contents contents-type2">
    <div class="content-wrap content-cs">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'고객센터'" :left-data="menuList" :active="'/ko/CS/oneToOneList'" :page-class="'cs-menu'"></CommonContentsLeftMenu>
        <div class="contents-r-layout">
          <div class="cs-board-detail onetoone-detail">
            <div class="cmp-page-tit">
              <h2 class="tit">1:1 문의</h2>
            </div>
            <div class="detail-header">
              <div class="cmp-sub-tit small">
                <!-- [개발확인]22.12.23 아래 타이틀 수정 내용 확인 부탁드립니다. -->
                <!-- [퍼블수정]22.12.01 타이틀 수정 -->
                <h3 class="tit">
                  <div class="cmp-labels">
                    <div class="label black">환불</div>
                    <div class="label">접수완료</div>
                    <!-- <div class="label">답변완료</div>
                    <div class="label c-blue">처리중</div> -->
                  </div>
                  <p class="title-clamp">사이즈 교환 문의합니다.사이즈 교환 문의합니다.사이즈 교환 문의합니다.사이즈 교환 문의합니다.사이즈 교환 문의합니다.사이즈 교환 문의합니다.사이즈 교환 문의합니다.사이즈 교환 문의합니다.사이즈 교환 문의합니다.사이즈 교환 문의합니다.사이즈 교환 문의합니다.사이즈 교환 문의합니다.사이즈 교환 문의합니다.사이즈 교환 문의합니다.사이즈 교환 문의합니다.사이즈 교환 문의합니다.사이즈 교환 문의합니다.</p>
                </h3>
                <!-- //[퍼블수정]22.12.01 타이틀 수정 -->
                <!-- //[개발확인]22.12.23 아래 타이틀 수정 내용 확인 부탁드립니다. -->
                <p class="date">2021.05.16</p>
              </div>
            </div>
            <div class="detail-body">
              <div class="btn-items text-right">
                <button type="button" class="btn">수정</button>
                <button type="button" class="btn">삭제</button>
              </div>
              
              <!-- 질문 -->
              <div class="qa-box question pt-0">
                <div class="box-title">
                  <div class="cmp-info info-type2">
                    <p class="cmp-font fnt-20 bold">Q</p>
                  </div>
                </div>
                <div class="box-content">
                  키가 큰 편이라 L샀는데 생각보다 코트 사이즈가 크네요. M사이즈로 교환 신청합니다. 키가 큰 편이라 L샀는데 생각보다 코트 사이즈가 크네요. M사이즈로 교환 신청합니다. 키가 큰 편이라 L샀는데 생각보다 코트 사이즈가 크네요. M사이즈로 교환 신청합니다. 키가 큰 편이라 L샀는데 생각보다 코트 사이즈가 크네요. M사이즈로 교환 신청합니다.
                </div>
                <div class="items">
                  <div class="product-table-wrap">
                    <div class="order-number-box no-line">
                      <div class="line-box">
                        <p class="cmp-font fnt-14">주문번호<span class="ml-10">211222P12345678</span></p>
                        <p class="cmp-font fnt-14">2021.10.30 13:00</p><!-- 230109 1:1상세 : 시,분 추가 -->
                      </div>
                    </div>
                    <div class="product-row-table">
                      <table>
                        <caption>상품리스트</caption>
                        <colgroup>
                          <col style="width:50%;"/>
                          <col style="width:50%;"/>
                        </colgroup>
                        <thead>
                          <tr>
                            <th>상품정보</th>
                            <th>상품금액</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in prdData" :key="index">
                            <td>
                              <div class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                                <div class="product-image" :class="{'sold-out':item.sold_out}">
                                  <v-img :src="item.image" :alt="item.product_name" />
                                  <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                                </div>
                                <div class="product-info-cnt">
                                  <div class="product-brand">{{item.brand_name}}</div>
                                  <div class="product-name">{{item.product_name}}</div>
                                  <div v-if="item.options" class="product-option">
                                    <span v-for="(item2,index2) in item.options" :key="index2" class="option">{{item2}}</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="product-row-unitPrice">
                                <div class="product-sellprice"><strong>{{item.sell_price | number}}</strong></div>
                                <div v-if="item.price || item.discount" class="product-price-cnt">
                                  <del class="product-price-origin">{{item.price | number}}</del>
                                  <!-- eslint-disable -->
                                  <span class="product-discount">{{item.discount}}<em>%</em></span>
                                  <!-- eslint-disable -->
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="product-table-wrap">
                    <div class="order-number-box no-line">
                      <div class="line-box">
                        <p class="cmp-font fnt-14">주문번호<span class="ml-10">211222P12345678</span></p>
                        <p class="cmp-font fnt-14">2021.10.30 13:00</p><!-- 230109 1:1상세 : 시,분 추가 -->
                      </div>
                    </div>
                    <div class="product-row-table">
                      <table>
                        <caption>상품리스트</caption>
                        <colgroup>
                          <col style="width:50%;"/>
                          <col style="width:50%;"/>
                        </colgroup>
                        <thead>
                          <tr>
                            <th>상품정보</th>
                            <th>상품금액</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in prdData" :key="index">
                            <td>
                              <div class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                                <div class="product-image" :class="{'sold-out':item.sold_out}">
                                  <v-img :src="item.image" :alt="item.product_name" />
                                  <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                                </div>
                                <div class="product-info-cnt">
                                  <div class="product-brand">{{item.brand_name}}</div>
                                  <div class="product-name">{{item.product_name}}</div>
                                  <div v-if="item.options" class="product-option">
                                    <span v-for="(item2,index2) in item.options" :key="index2" class="option">{{item2}}</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="product-row-unitPrice">
                                <div class="product-sellprice"><strong>{{item.sell_price | number}}</strong></div>
                                <div v-if="item.price || item.discount" class="product-price-cnt">
                                  <del class="product-price-origin">{{item.price | number}}</del>
                                  <!-- eslint-disable -->
                                  <span class="product-discount">{{item.discount}}<em>%</em></span>
                                  <!-- eslint-disable -->
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr v-for="(item, index) in prdData" :key="index">
                            <td>
                              <div class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                                <div class="product-image" :class="{'sold-out':item.sold_out}">
                                  <v-img :src="item.image" :alt="item.product_name" />
                                  <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                                </div>
                                <div class="product-info-cnt">
                                  <div class="product-brand">{{item.brand_name}}</div>
                                  <div class="product-name">{{item.product_name}}</div>
                                  <div v-if="item.options" class="product-option">
                                    <span v-for="(item2,index2) in item.options" :key="index2" class="option">{{item2}}</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="product-row-unitPrice">
                                <div class="product-sellprice"><strong>{{item.sell_price | number}}</strong></div>
                                <div v-if="item.price || item.discount" class="product-price-cnt">
                                  <del class="product-price-origin">{{item.price | number}}</del>
                                  <!-- eslint-disable -->
                                  <span class="product-discount">{{item.discount}}<em>%</em></span>
                                  <!-- eslint-disable -->
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>   
                  <div class="product-table-wrap">
                    <div class="product-row-table">
                      <table>
                        <caption>상품리스트</caption>
                        <colgroup>
                          <col style="width:50%;"/>
                          <col style="width:50%;"/>
                        </colgroup>
                        <thead>
                          <tr>
                            <th>상품정보</th>
                            <th>상품금액</th>
                          </tr>
                        </thead>
                        <tbody>
                          <template>
                            <tr v-for="(item, index) in prdData" :key="index">
                              <td>
                                <div class="product-row-unitInfo or-prd-type"><!-- [퍼블수정]23.01.19 상품이미지 : or-prd-type 클래스 추가 -->
                                  <div class="product-image" :class="{'sold-out':item.sold_out}">
                                    <v-img :src="item.image" :alt="item.product_name" />
                                    <div v-if="item.sold_out" class="sold-out-txt">SOLD OUT</div>
                                  </div>
                                  <div class="product-info-cnt">
                                    <div class="product-brand">{{item.brand_name}}</div>
                                    <div class="product-name">{{item.product_name}}</div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div class="product-row-unitPrice">
                                  <div class="product-sellprice"><strong>{{item.sell_price | number}}</strong></div>
                                  <div v-if="item.price || item.discount" class="product-price-cnt">
                                    <del class="product-price-origin">{{item.price | number}}</del>
                                    <!-- eslint-disable -->
                                    <span class="product-discount">{{item.discount}}<em>%</em></span>
                                    <!-- eslint-disable -->
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </template>
                        </tbody>
                      </table>
                    </div>
                  </div>   
                </div>
                <ul v-if="attachFileList.length > 0" class="attach-file-list mt-44"><!-- [퍼블수정]22.12.23 조건문 추가  -->
                  <li v-for="(item, index) in attachFileList" :key="index" class="file-cnt" @click="showPopup">
                    <div class="file">
                      <v-img  :src="item" aspect-ratio="1" :transition="false" alt="첨부 파일"></v-img>
                    </div>
                  </li>
                </ul>  
              </div> 
              <!-- //질문 -->

              <!-- 답변 -->
              <div class="qa-box answer"><!-- [퍼블수정]22.12.01 타이틀 수정 -->
                <div class="box-title">
                  <div class="cmp-info info-type2">
                    <p class="cmp-font fnt-20 bold">A</p>
                  </div>
                </div>
                <div class="box-content">
                  키가 큰 편이라 L샀는데 생각보다 코트 사이즈가 크네요. M사이즈로 교환 신청합니다. 키가 큰 편이라 L샀는데 생각보다 코트 사이즈가 크네요. M사이즈로 교환 신청합니다. 키가 큰 편이라 L샀는데 생각보다 코트 사이즈가 크네요. M사이즈로 교환 신청합니다. 키가 큰 편이라 L샀는데 생각보다 코트 사이즈가 크네요. M사이즈로 교환 신청합니다.
                </div>
                <div class="cmp-font fnt-14 mt-10">2021.06.15</div><!-- 230109 1:1상세 : 답변 날짜 추가 -->
              </div>  
              <!-- //답변 -->               

              <!-- 상담만족도 조사 -->
              <div class="cs-research-wrap">
                <dl class="inner">
                  <dt class="tit">고객님의 문의는 잘 해결 되셨나요? </dt>
                  <dd class="txt">더 좋은 서비스로 보답하고자 이용 중 느낀 고객님의 소중한의견을 듣고자 합니다. <br />만족도 조사 버튼을 통해 참여해 주세요.</dd>
                </dl>
                <v-btn color="primary">만족도 조사</v-btn>  
              </div>
              <!-- //상담만족도 조사 -->
              
            </div>
            <div class="detail-footer">
              <v-btn outlined large color="primary">목록</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="popup-img-detail" :class="{'show': popupToggle}">
      <div class="img-wrapper">
        <div class="img-inner">
          <ul class="img-list">
            <li v-for="(img, index) in attachFileList" :key="index">
              <img :src="img" alt="">
            </li>
          </ul>
          <button type="button" class="btn-close" @click="popupToggle = false">
            <img src="/images/cs/ico-32-close.png" alt="닫기">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'LayoutBasics',
  data: () => ({
    popupToggle: false,
    prdData: [
      // 택배 리스트
      {
        brand_name: 'FOURM MEN’S LOUNGE',
        product_name: '[BEARBRICK] 사이키델릭 페이즐리',
        image: 'https://img.thehandsome.com/md/publish/dummy/pc/shopping-bag-img1.png',
        options: ['CHARCOAL GRAY', '90', '1개'],
        sell_price: '355000',
        discount: null,
        price: null,
        link: '#n',
        gift: false,
        sold_out: false,
        zzim : false,
      }
    ],
    attachFileList : [
      'https://img.thehandsome.com/md/publish/dummy/pc/temp.png',
      'https://img.thehandsome.com/md/publish/dummy/pc/temp.png',
      'https://img.thehandsome.com/md/publish/dummy/pc/temp.png',
      'https://img.thehandsome.com/md/publish/dummy/pc/temp.png',
      'https://img.thehandsome.com/md/publish/dummy/pc/temp.png',
    ],    
  }),
  created() {
    const me = this
    const json = require('~/static/json/cs_left_menu.json')
    me.menuList = json.list
  },
  methods: {
    showPopup() {
      this.popupToggle = true;
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/cs.scss';
</style>
