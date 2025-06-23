<template>
  <div class="guide">
    <!-- eslint-disable -->
    <div
      v-sticky-tabs
      class="tabs-actionTop"
      style="height: 60px; margin: 0px -20px 0"
    >
      <div class="inner">
        <swiper
          :options="{
            slidesPerView: 'auto',
            spaceBetween: 5,
          }"
          class="sticky-tab-swipe swiper-visible"
        >
          <swiper-slide><button target="directive">디렉티브</button></swiper-slide>
          <swiper-slide><button target="filter">필터</button></swiper-slide>
          <swiper-slide><button target="globalFunc">전역함수</button></swiper-slide>
          <swiper-slide><button target="scssMixin">SCSS 믹스인</button></swiper-slide>
          <swiper-slide><button target="eventBus">EventBus</button></swiper-slide>
        </swiper>
      </div>
    </div>


    <div id="directive" class="block">
      <h2 class="mb-2">디렉티브<span>directives.js</span></h2>

      <div class="boxColor">
        <h3>v-cmp-icon</h3>
        <div>공통 아이콘 디렉티브</div>
        <div>
          <dl>
            <dt>size</dt>
            <dd>{Number} 아이콘 크기. (24 , 18, 12)</dd>
          </dl>
          <dl>
            <dt>name</dt>
            <dd>
              {String} 아이콘 클래스명. (brand, stylelive, ......)<br/>
              mixin.scss의 $icon-list 리스트 참조
            </dd>
          </dl>
          <dl>
            <dt>type</dt>
            <dd>
              {String} 아이콘 :before, :after에 적용 여부. (before, after)
            </dd>
          </dl>
          <dl>
            <dt>invert</dt>
            <dd>
              {Number} 흰색 아이콘 사용. (1)
            </dd>
          </dl>
        </div>
<pre>
&lt;button&gt;&lt;span v-cmp-icon="{size : 24, name : 'heartoff'}"&gt;&lt;/span&gt;찜하기&lt;/button&gt;
&lt;a v-cmp-icon="{size : 18, name : 'refresh', type : 'after'}"&gt;다시보기&lt;/a&gt;
&lt;a v-cmp-icon="{size : 12, name : 'alarm', invert : 1}"&gt;흰색아이콘&lt;/a&gt;
</pre>
      </div>

      <div class="boxColor">
        <h3>v-prevent-parent-swiper</h3>
        <div>중첩 스와이퍼에서 터치 시에 부모 스와이퍼가 같이 움직이지 않도록 이벤트 버블링 방지</div>
<pre>&lt;Swiper&gt;
  &lt;SwiperSlide&gt;
    &lt;div v-prevent-parent-swiper&gt;
      &lt;Swiper&gt; ...... &lt;/Swiper&gt;
    &lt;/div&gt;
  &lt;SwiperSlide&gt;
&lt;Swiper&gt;</pre>
      </div>

      <div class="boxColor">
        <h3>v-background-image</h3>
        <div>배경 이미지 사용 시 no-image 처리</div>
        <div>
          <dl>
            <dt>url</dt>
            <dd>{String} 이미지 경로</dd>
          </dl>
          <dl>
            <dt>shading</dt>
            <dd>{Boolean} 쉐이드 효과 여부</dd>
          </dl>
        </div>
<pre>&lt;div v-background-image="{url : item.image_url}"&gt;&lt;/div&gt;
&lt;div v-background-image="{url : item.image_url, shading : true}"&gt;&lt;/div&gt;
</pre>
      </div>

      <div class="boxColor">
        <h3>v-image-error</h3>
        <div>이미지 사용 시 no-image 처리</div>
        <div>
          <dl>
            <dt>type</dt>
            <dd>{String} 이미지 비율. (wide, tall, square)</dd>
          </dl>
        </div>
<pre>&lt;img v-image-error :src="item.image_url" /&gt;
&lt;img v-image-error="{type:'tall'}" :src="item.image_url" /&gt;
&lt;img v-image-error="{type:'square'}" :src="item.image_url" /&gt;</pre>
      </div>

      <div class="boxColor">
        <h3>v-fix-to-top</h3>
        <div>
          <div>스크롤 시 헤더 아래 고정</div>
          <div>화면 상단으로 스크롤하면 fixed 클래스가 추가됨.</div>
          <div>fixed 레이어를 고정시키면 좌표가 고정되어 해제할 수 없으므로, 반듯이 자식 레이어를 고정하도록 CSS를 짜야함.</div>
        </div>
<pre>
&lt;div v-fix-to-top&gt;
  &lt;div&gt;상단에 고정 시킬 레이어&lt;/div&gt;
&lt;/div&gt;
</pre>
      </div>

      <div class="boxColor">
        <h3>v-sticky-tab</h3>
        <div>
          <div>스크롤 시 헤더 아래 고정 탭</div>
          <div>화면 상단으로 스크롤하면 fixed 클래스가 추가됨.</div>
          <div>fixed 레이어를 고정시키면 좌표가 고정되어 해제할 수 없으므로, 반듯이 자식 레이어를 고정하도록 CSS를 짜야함.</div>
          <div>탭 버튼 클릭시 target으로 지정된 ID의 레이어로 스크롤 됨.</div>
          <div>태그 관계없이 target 속성을 가진 태그( *[name] )에 클릭 이벤트 지정함.</div>
        </div>
<pre>
&lt;div v-sticky-tabs&gt;
  &lt;div&gt;
    &lt;swiper&gt;
      &lt;swiper-slide&gt;
        &lt;button target="id_of_target_div"&gt;TIME&lt;/button&gt;
      &lt;/swiper-slide&gt;
    &lt;swiper&gt;
  &lt;div&gt;
&lt;/div&gt;
</pre>
      </div>

      <div class="boxColor deprecated">
        <h3>v-swiper</h3>
        <div>
          <div>스와이퍼 초기화 디렉티브.</div>
          <div>사용안함.</div>
          <div>대신 &lt;swiper&gt;, &lt;swiper-slide&gt; (vue-awesome-swiper)를 사용할 것.</div>
        </div>
      </div>
    </div>


    <div id="filter" class="block">
      <h2 class="mb-2">필터<span>filters.js</span></h2>

      <div class="boxColor">
        <h3>number</h3>
        <div>숫자 천단위 콤마 추가</div>
<pre>
&lt;span&gt;<span v-html="'{{price | number}}'"></span>&lt;/span&gt;

const me = this
const string = me.$root.$options.filters.number(me.price) + "원"
</pre>
      </div>

      <div class="boxColor">
        <h3>time</h3>
        <div>시간을 mm:ss 형식으로 표기</div>
<pre>
&lt;span&gt;<span v-html="'{{curtime | time}}'"></span>&lt;/span&gt;
</pre>
      </div>

      <div class="boxColor">
        <h3>kebabCase</h3>
        <div>카멜케이스를 케밥케이스로 변경</div>
<pre>
&lt;span :class="unit.unitName | kebabCase"&gt;&lt;/span&gt;
</pre>
      </div>
    </div>


    <div id="globalFunc" class="block">
      <h2 class="mb-2">전역함수<span>mixins.js</span></h2>

      <div class="boxColor">
        <h3>vue.offsetTop(el)</h3>
        <div>객체의 offsetTop 값 구하기.</div>
        <div>
          <dl>
            <dt>el</dt>
            <dd>{HTMLElement} offsetTop값을 구할 객체</dd>
          </dl>
        </div>
<pre>
const me = this
const ot = me.offsetTop(me.$el)
</pre>
      </div>

      <div class="boxColor">
        <h3>vue.setTitle(title, [option])</h3>
        <div>헤더 타이틀 변경하기</div>
        <div class="wide">
          <dl>
            <dt>title</dt>
            <dd>{String} 타이틀</dd>
          </dl>
          <dl>
            <dt>option</dt>
            <dd>{Object} 추가 옵션</dd>
          </dl>
          <dl class="two-depth">
            <dt>type</dt>
            <dd>{String} 헤더 타입 설정 (brand, outlet, handsomeTV, cart, orderComplete, styleLive)</dd>
          </dl>
          <dl class="two-depth">
            <dt>brand</dt>
            <dd>{String} 브랜드 메인 타입 (time, system)</dd>
          </dl>
          <dl class="two-depth">
            <dt>transparent</dt>
            <dd>{Boolean} 헤더 배경 투명 설정</dd>
          </dl>
          <dl class="two-depth">
            <dt>invert</dt>
            <dd>{Boolean} 헤더 아이콘 흰색 설정</dd>
          </dl>
        </div>
<pre>
const me = this
me.setTitle('서비스이용약관')
me.setTitle('주문완료',{type : "orderComplete"})
me.setTitle("핸썸TV", {type:"handsomeTV"})
me.setTitle("", {type:"brand", brand:"time", transparent: true, invert: true})
</pre>
      </div>

      <div class="boxColor">
        <h3>vue.setHeaderTransparent(flag)</h3>
        <div>헤더 배경 투명 설정하기</div>
        <div>
          <dl>
            <dt>flag</dt>
            <dd>{Boolean} 투명 설정</dd>
          </dl>
        </div>
<pre>
const me = this
me.setHeaderTransparent(true)
</pre>
      </div>

      <div class="boxColor">
        <h3>vue.setHeaderInvert(flag)</h3>
        <div>헤더 아이콘 흰색 설정하기</div>
        <div>
          <dl>
            <dt>flag</dt>
            <dd>{Boolean} 흰색 설정</dd>
          </dl>
        </div>
<pre>
const me = this
me.setHeaderInvert(true)
</pre>
      </div>

      <div class="boxColor">
        <h3>vue.checkDevMode()</h3>
        <div>
          <div>개발 테스트 모드 세팅.</div>
          <div>URL에 파라메터가 DEV_MODE=Y이면 개발모드 적용, DEV_MODE=N이면 개발모드 해제</div>
          <div>Layout 에서 호출하므로, 각 페이지마다 실행할 필요 없음.</div>
        </div>
<pre>
const me = this
me.checkDevMode()
</pre>
      </div>

    </div>


    <div id="scssMixin" class="block">
      <h2 class="mb-2">SCSS 믹스인<span>mixin.scss</span></h2>

      <div class="boxColor">
        <h3>webkit($args...)</h3>
        <div>
          <div>CSS속성에 -webkit- 접두어 추가</div>
        </div>
<pre>
@include webkit($transition: transform 300ms);
@include webkit($transform: translate(0, 2px));
@include webkit($transform: rotate(-90deg), $transform-origin: left);
@include webkit($transition: (opacity 0.3s, left 0.3s));
</pre>
      </div>

      <div class="boxColor">
        <h3>lineClamp($line:2)</h3>
        <div>
          <div>여러 줄 ... 말줄임 처리</div>
        </div>
        <div>
          <dl>
            <dt>$line</dt>
            <dd>{Number} 텍스트 줄 수. (기본값 2)</dd>
          </dl>
        </div>
<pre>
@include lineClamp();
@include lineClamp(4);
</pre>
      </div>

      <div class="boxColor">
        <h3>lineCrop($line: 2, $line-height: 22px)</h3>
        <div>
          <div>말줄임 없이 텍스트 줄 수 제한</div>
        </div>
        <div class="wide">
          <dl>
            <dt>$line</dt>
            <dd>{Number} 텍스트 줄 수. (기본값 2)</dd>
          </dl>
          <dl>
            <dt>$line-height</dt>
            <dd>{String} 줄간격. (기본값 22px)</dd>
          </dl>
        </div>
<pre>
@include lineCrop();
@include lineCrop(3);
@include lineCrop(2, 30px);
</pre>
      </div>

      <div class="boxColor deprecated">
        <h3>imgSprite()</h3>
        <div>
          <div>이미지 스프라이트.</div>
          <div>사용안함.</div>
        </div>
      </div>

      <div class="boxColor">
        <h3>paddingSpace()</h3>
        <div>
          <div>
            padding class 추가<br>
            $tops, $bottoms, $horizontals에 필요한 여백 숫자 입력<br>
            $tops : pt-숫자<br>
            $bottoms : pb-숫자<br>
            $horizontals : pw-숫자, pl-숫자, pr-숫자 변환
            ※참고 : pt-,pb-,pw-,pl-,pr- 각 0~16은 vuetify에 있음
          </div>
        </div>
      </div>

      <div class="boxColor">
        <h3>marginSpace()</h3>
        <div>
          <div>
            margin class 추가<br>
            $tops, $bottoms, $horizontals에 필요한 여백 숫자 입력<br>
            $tops : mt-숫자 / mt-n숫자 [음수]<br>
            $bottoms : mb-숫자 / mb-n숫자 [음수]<br>
            $horizontals : mw-숫자, ml-숫자, mr-숫자 변환
            ※참고 : mt-,mt-n,mb-,mb-n,mw-,ml-,mr- 각 0~16은 vuetify에 있음
          </div>
        </div>
      </div>      

      <div class="boxColor">
        <h3>fontStyle($size, $args...)</h3>
        <div>
          <div>폰트스타일 설정 (font-size, line-height)</div>
        </div>
        <div>
          <dl>
            <dt>$size</dt>
            <dd>{Number} 폰트 크기. (10, 11, 12, 14, ..., 38)</dd>
          </dl>
          <dl>
            <dt>$args</dt>
            <dd>추가 폰트 스타일</dd>
          </dl>
        </div>
<pre>
@include fontStyle(22);
@include fontStyle(12, $line-height: 2rem);
@include fontStyle(14, $line-height: 34px, $font-weight: 700, $color: #fff);
</pre>
      </div>

      <div class="boxColor">
        <h3>contentHidden</h3>
        <div>
          <div>컨텐츠 숨김<br>클래스 .ir과 같은 기능</div>
        </div>
      </div>
    </div>


    <div id="eventBus" class="block">
      <h2 class="mb-2">EventBus</h2>

      <div class="boxColor">
        <h3>
          hideActionBar
          <span>ActionBar.vue</span>
        </h3>
        <div>
          <div>액션바 show/hide 이벤트.</div>
        </div>
<pre>
EventBus.$on("hideActionBar", this.hideActionBar)

hideActionBar(vis){
  const me = this
  me.actionBarVisible = vis
}
</pre>
      </div>

      <div class="boxColor">
        <h3>
          showCategory
          <span>Gnb.vue</span>
        </h3>
        <div>
          <div>Gnb 카테고리 레이어 show/hide.</div>
        </div>
<pre>
EventBus.$emit('showCategory', true)
EventBus.$emit('showCategory', false)
</pre>
      </div>

      <div class="boxColor">
        <h3>
          setLayout
          <span>LayoutBasics.vue</span>
        </h3>
        <div>
          <div>개별 페이지에서 필터, 액션바, GNB, 푸터 사용 여부 설정.</div>
        </div>
        <div class="wide">
          <dl>
            <dt>filter</dt>
            <dd>{Boolean} 필터 레이어 사용 설정 (기본값 false)</dd>
          </dl>
          <dl>
            <dt>actionbar</dt>
            <dd>{Boolean} 액션바 사용 설정 (기본값 true)</dd>
          </dl>
          <dl>
            <dt>topbutton</dt>
            <dd>{Boolean} Top버튼 사용 설정 (기본값 true)</dd>
          </dl>
          <dl>
            <dt>gnb</dt>
            <dd>{Boolean} GNB 레이어 사용 설정 (기본값 true)</dd>
          </dl>
          <dl>
            <dt>header</dt>
            <dd>{Boolean} 헤더 사용 설정 (기본값 true)</dd>
          </dl>
          <dl>
            <dt>footer</dt>
            <dd>{Boolean} 푸터 사용 설정 (기본값 true)</dd>
          </dl>
        </div>
<pre>
EventBus.$emit("setLayout", {filter:true})
EventBus.$emit("setLayout", {filter:true, actionbar:false, gnb:false})
EventBus.$emit("setLayout", {footer:false})
</pre>
      </div>

      <div class="boxColor">
        <h3>
          showFilterLayer
          <span>FilterLayer.vue</span>
        </h3>
        <div>
          <div>필터 레이어 show/hide.</div>
        </div>
<pre>
EventBus.$emit("showFilterLayer", true)
EventBus.$emit("showFilterLayer", false)
</pre>
      </div>

      <div class="boxColor">
        <h3>
          setHeader
          <span>Header.vue</span>
        </h3>
        <div>
          <div>헤더 타입 설정</div>
        </div>
        <div class="wide">
          <dl>
            <dt>static</dt>
            <dd>{Boolean} 스크롤시 헤더 메뉴 애니메이션 사용 설정 (기본값 false)</dd>
          </dl>
          <dl>
            <dt>type</dt>
            <dd>{String} 헤더 스타일 설정 (기본값 '')</dd>
          </dl>
          <dl>
            <dt>transparent</dt>
            <dd>{Boolean} 헤더 배경색 투명 사용 설정 (기본값 false)</dd>
          </dl>
          <dl>
            <dt>brand</dt>
            <dd>{String} 브랜드 페이지의 경우 브랜드명 설정 (기본값 '')</dd>
          </dl>
          <dl>
            <dt>brand_image</dt>
            <dd>{String} 브랜드 페이지의 경우 브랜드 로고 이미지 설정 (기본값 null)</dd>
          </dl>
          <dl>
            <dt>zeroHeight</dt>
            <dd>{Boolean} 헤더 가리기 설정 (기본값 false)</dd>
          </dl>
        </div>
<pre>
EventBus.$emit("setHeader", {static: false, type: "normal", transparent: false})
EventBus.$emit("setHeader", {static: true, type: "editshopMain", transparent: true})
EventBus.$emit("setHeader", {static: true, type: "editshopSub", brand: "SAINT JAMES"})
EventBus.$emit("setHeader", {static: true, type: "brand", brand: "SYSTEM", brand_image : "https://img.thehandsome.com/md/publish/dummy/pc/brand-logo-system.png"})
</pre>
      </div>

    </div>

  <!-- eslint-disable -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  layout: 'guide',
  data: () => ({
    // [스와이퍼]옵션설정
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      cardsEffect: {},
      // effect: 'cards',
      grabCursor: 'true',
    },
  })
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';

.guide p {
  margin-bottom:0
}
.guide h2 {
  font-weight: normal;
  font-size: 20px;
  border-bottom: 1px solid #000;
  margin-top: 50px;
  position: relative;
  padding-left: 10px;
  text-align: left;
  span{margin-left:10px;font-size:16px;color:#666;}
}
.guide h2::before {
  content: '';
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: #000;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.guide h2:first-child {
  margin-top: 0;
}
.boxColor {
  background-color:#f6f6f6;
  padding: 10px;
  min-width: 1150px;
  margin-top:20px;
  >div, >pre{margin-top:10px;}
  pre{border:1px solid #ccc;padding:10px;background-color:#fafafa;font-size:13px;line-height:18px;}
  &.deprecated{opacity:0.5;color:grey;}
  h3 span{font-weight:300;margin-left:6px;font-size:14px;color:#666;}
}
dl{
  display:block;position:relative;
  dt{display:block;position:absolute;left:0;top:0;font-size:16px;height:22px;line-height:20px;font-weight:500;}
  dd{display:block;margin-left:70px;font-size:13px;line-height:22px;position:relative;}
  dd:before{content:"";display:inline-block;position:absolute;left:-16px;top:10px;height:2px;width:8px;background-color:#999;}
  &.two-depth{margin-left:91px;}
  ~ dl{margin-top:5px;}
}
.wide dl dd{margin-left:110px;}
.block ~ .block{margin-top:50px;}

.tabs-actionTop .inner {
  position: fixed;
  left: 256px;
  right: 0;
  top: 56px;
  height: 50px;
  background-color: #fff;
  z-index: 10;
  padding: 0 10px;
  overflow: hidden;
  border-bottom: 1px solid lightgrey;
  @include webkit($transition: left 200ms);
  .swiper-slide {
    width: auto;
    padding-top: 10px;
  }
  button {
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 12px;
    &.on {
      background-color: #ddd;
    }
  }
}
.v-navigation-drawer.v-navigation-drawer--open
  ~ .v-main
  .tabs-actionTop
  .inner {
  left: 256px;
}
.v-navigation-drawer.v-navigation-drawer--close
  ~ .v-main
  .tabs-actionTop
  .inner {
  left: 0;
}
</style>
