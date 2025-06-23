<template>
  <v-footer class="ui-footer">
      <div v-if="langType === 'ko'" class="footer-wrap">
        <div class="footer-head">
          <div class="footer-notice">
            <h5>공지</h5>
            <nuxt-link :to="{}">[핸썸TV] 미리 공개하는 22 S/S "ICONIC OBZEE"</nuxt-link>
          </div>
          <div class="footer-stores">
            <nuxt-link :to="{}" class="fs-insta"><span class="invisible">인스타그램</span></nuxt-link>
            <nuxt-link :to="{}" class="fs-youtube"><span class="invisible">유튜브</span></nuxt-link>
            <nuxt-link :to="{}" class="fs-apple"><span class="invisible">애플스토어</span></nuxt-link>
            <nuxt-link :to="{}" class="fs-google"><span class="invisible">플레이스토어</span></nuxt-link>
          </div>
        </div>
        <div class="footer-body">
          <div class="footer-company-info">
            <div class="fci-logo"><span class="invisible">The Handsome</span></div>
            <div class="fci-text">
              <div><span>㈜한섬</span><span>대표이사: 김민덕</span><span>서울시 강남구 도산대로 523 한섬빌딩</span></div>
              <div><span>FAX  02-6078-2856</span><span>사업자등록번호  120-81-26337</span><span>통신판매업신고번호 강남 제 00826호</span></div>
              <div><span>개인정보관리책임자 : 이정득</span><span>호스팅서비스 : ㈜ 한섬</span></div>
              <div class="fci-copy">COPYRIGHT © 2022 HANDSOME. ALL RIGHT RESERVED.</div>
            </div>
          </div>
          <div class="footer-links">
            <ul class="fl-col">
              <li><nuxt-link :to="{}"><span>서비스이용약관</span><span>서비스이용약관</span></nuxt-link></li>
              <li><nuxt-link :to="{}" class="bold"><span>개인정보처리방침</span><span>개인정보처리방침</span></nuxt-link></li>
              <li><nuxt-link :to="{}"><span>통신사업자정보확인</span><span>통신사업자정보확인</span></nuxt-link></li>
              <li><nuxt-link :to="{}"><span>채무지급보증 가입 확인</span><span>채무지급보증 가입 확인</span></nuxt-link></li>
              <li><nuxt-link :to="{}"><span>애스크로서비스 가입 확인</span><span>애스크로서비스 가입 확인</span></nuxt-link></li>
            </ul>
            <ul class="fl-col">
              <li><nuxt-link :to="{}"><span>온라인 멤버십</span><span>온라인 멤버십</span></nuxt-link></li>
              <li><nuxt-link :to="{}"><span>한섬 VVIP 혜택</span><span>한섬 VVIP 혜택</span></nuxt-link></li>
              <li><nuxt-link :to="{}"><span>한섬마일리지 혜택</span><span>한섬마일리지 혜택</span></nuxt-link></li>
              <li><nuxt-link :to="{}"><span>쿠폰</span><span>쿠폰</span></nuxt-link></li>
              <li><nuxt-link :to="{}"><span>반품&amp;환불안내</span><span>반품&amp;환불안내</span></nuxt-link></li>
            </ul>
            <ul class="fl-col">
              <li><nuxt-link :to="{}"><span>고객센터</span><span>고객센터</span></nuxt-link></li>
              <li><nuxt-link :to="{}"><span>FAQ</span><span>FAQ</span></nuxt-link></li>
              <li><nuxt-link :to="{}"><span>수선진행조회</span><span>수선진행조회</span></nuxt-link></li>
              <li><nuxt-link :to="{}"><span>매장안내</span><span>매장안내</span></nuxt-link></li>
              <li><nuxt-link :to="{}"><span>고객리뷰</span><span>고객리뷰</span></nuxt-link></li>
            </ul>
            <ul class="fl-col">
              <li><nuxt-link :to="{}"><span>로그인</span><span>로그인</span></nuxt-link></li>
              <li><nuxt-link :to="{}"><span>주문배송조회</span><span>주문배송조회</span></nuxt-link></li>
              <li><nuxt-link :to="{}"><span>취소/환불</span><span>취소/환불</span></nuxt-link></li>
              <li><nuxt-link :to="{}"><span>위시리스트</span><span>위시리스트</span></nuxt-link></li>
            </ul>
            <ul class="fl-col">
              <li><nuxt-link :to="{}"><span>회사소개</span><span>회사소개</span></nuxt-link></li>
              <li><nuxt-link :to="{}"><span>브랜드 소개</span><span>브랜드 소개</span></nuxt-link></li>
              <li><nuxt-link :to="{}"><span>투자정보</span><span>투자정보</span></nuxt-link></li>
              <li><nuxt-link :to="{}"><span>채용정보</span><span>채용정보</span></nuxt-link></li>
              <li><nuxt-link :to="{}"><span>ESG</span><span>ESG</span></nuxt-link></li>
              <!-- ESG link : http://www.handsome.co.kr/ko/esg/esgMngmtGoal01.do -->
            </ul>
            <ul class="fl-col fl-customer">
              <li class="flc-phone"><nuxt-link :to="{}">고객센터 1800-5700 <em>유료</em></nuxt-link></li>
              <li class="flc-delivery"><nuxt-link :to="{}">한섬 딜리버리</nuxt-link></li>
              <div class="flc-links">
                <div class="flc-select flc-select-family" :class="{open:familyOpen}">
                  <button @click="toggleFamily">FAMILY SITE</button>
                  <ul>
                    <li class="flc-site">쇼핑몰 Site</li>
                    <li><nuxt-link :to="{}" target="_blank">더현대닷컴</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대백화점 면세점</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">e수퍼마켓</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대Hmall</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대리바트몰</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대렌탈케어</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">H패션몰</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">VR STATION</nuxt-link></li>
                    <li class="flc-site">관계사 Site</li>
                    <li><nuxt-link :to="{}" target="_blank">현대백화점그룹</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대백화점</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대그린푸드</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대홈쇼핑</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대리바트</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대렌탈케어</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대드림투어</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">에버다임</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">씨엔에스푸드시스템</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대캐터링시스템</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대IT&amp;E</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대L&amp;C</nuxt-link></li>
                  </ul>
                </div>
                <div class="flc-select flc-select-language" :class="{open:languageOpen}">
                  <button @click="toggleLanguage">LANGUAGE</button>
                  <ul>
                    <li><button>한국어</button></li>
                    <li><button>ENGLISH</button></li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <!-- 영문 풋터 -->
      <div v-if="langType === 'en'" class="footer-wrap">
        <div class="footer-body">
          <div class="footer-company-info">
            <div class="fci-logo"><span class="invisible">The Handsome</span></div>

            <div class="footer-menu">
              <ul><!-- [퍼블수정]23.01.20 over 시 볼드 처리 -->
                <li><nuxt-link to="{}"><span>Company</span><span>Company</span></nuxt-link></li>
                <li><nuxt-link to="{}"><span>Store info</span><span>Store info</span></nuxt-link></li>
                <li><nuxt-link to="{}"><span>Terms &amp; Conditions</span><span>Terms &amp; Conditions</span></nuxt-link></li>
                <li><nuxt-link to="{}"><span>Privacy Policy</span><span>Privacy Policy</span></nuxt-link></li>
                <li><nuxt-link to="{}"><span>Contact us</span><span>Contact us</span></nuxt-link></li>
                <li><nuxt-link to="{}"><span>Customer Service</span><span>Customer Service</span></nuxt-link></li>
              </ul>
            </div>
            <div class="fci-text">
              <div><span>HANDSOME Corp.</span><span>CEO:Kim Min Duk</span><span>HANDSOME B/D, 523, Dosan-daero, Gangnam-gu, Seoul, Korea</span></div>
              <div><span>TEL 1800-5700</span><span>FAX 02-6078-2856</span></div>
              <div class="fci-copy">COPYRIGHT © 2022 HANDSOME. ALL RIGHT RESERVED.</div>
            </div>
          </div>

          <div class="footer-right">
            <p>SHARE YOUR STYLE</p>
            <div class="footer-stores">
              <nuxt-link :to="{}" class="fs-insta"><span class="invisible">Instagram</span></nuxt-link>
              <nuxt-link :to="{}" class="fs-youtube"><span class="invisible">Youtube</span></nuxt-link>
            </div>
            
            <div class="flc-links">
                <div class="flc-select flc-select-family" :class="{open:familyOpen}">
                  <button @click="toggleFamily">FAMILY SITE</button>
                  <ul>
                    <li class="flc-site">쇼핑몰 Site</li>
                    <li><nuxt-link :to="{}" target="_blank">더현대닷컴</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대백화점 면세점</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">e수퍼마켓</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대Hmall</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대리바트몰</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대렌탈케어</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">H패션몰</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">VR STATION</nuxt-link></li>
                    <li class="flc-site">관계사 Site</li>
                    <li><nuxt-link :to="{}" target="_blank">현대백화점그룹</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대백화점</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대그린푸드</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대홈쇼핑</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대리바트</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대미디어</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대렌탈케어</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대드림투어</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">에버다임</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">씨엔에스푸드시스템</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대캐터링시스템</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대IT&amp;E</nuxt-link></li>
                    <li><nuxt-link :to="{}" target="_blank">현대L&amp;C</nuxt-link></li>
                  </ul>
                </div>
                <div class="flc-select flc-select-language" :class="{open:languageOpen}">
                  <button @click="toggleLanguage">LANGUAGE</button>
                  <ul>
                    <!-- 230131 푸터 : 문구수정 -->
                    <li><button>Korean</button></li>
                    <li><button>English</button></li>
                    <!-- // 230131 푸터 : 문구수정 -->
                  </ul>
                </div>
              </div>
          </div>
          
        </div>
      </div>
    <!--// 영문 풋터 -->
  </v-footer>
</template>

<script>
export default {
  components: {
  },
  props: {
    langType: {
      type: String,
      default: () => {
        return ""
      },
    },
  },
  data: () => ({
    languageOpen: false,
    familyOpen: false
  }),
  mounted() {
   
  },
  unmounted() {
   
  },
  methods: {
    toggleLanguage(){
      const me = this
      me.languageOpen = ! me.languageOpen
      document.removeEventListener("mousedown", me.closeSelect)
      if(me.languageOpen){
        document.addEventListener("mousedown", me.closeSelect)
      }
    },
    toggleFamily(){
      const me = this
      me.familyOpen = ! me.familyOpen
      document.removeEventListener("mousedown", me.closeSelect)
      if(me.familyOpen){
        document.addEventListener("mousedown", me.closeSelect)
      }
    },
    closeSelect(e){
      const me = this
      if(me.languageOpen || me.familyOpen){
        let sel
        if(me.languageOpen){
          sel = me.$el.querySelector(".flc-select-language")
        }
        if(me.familyOpen){
          sel = me.$el.querySelector(".flc-select-family")
        }
        if( ! ((sel === e.target) || sel.contains(e.target)) ){
          me.languageOpen = false
          me.familyOpen = false
        }
        document.removeEventListener("mousedown", me.closeSelect)
      }
    }
  },
}
</script>

<style lang="scss">
</style>
