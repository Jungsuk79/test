<template>
  <DialogBasic
   class="popup-review-enter" 
    header-title="상품평 등록&수정" 
    :width="540"
    @hide="closeDialog">
    <template #body>
      <div class="inner">
        <!-- [퍼블수정]22.12.12 -->
        <div class="cmp-info info-type1 mb-30">
          <p class="cmp-font">배송완료부터 30일이 경과되어 마일리지 적립은 불가합니다.</p>
        </div>
        <!-- //[퍼블수정]22.12.12 -->
        <div class="product-row-group line-type2">
          <ProductRowUnit :unit-data="itgbData">
          </ProductRowUnit>
        </div>
        <div class="cmp-form-boxGroup box-type1">
          <!-- 별점 -->
          <div class="cmp-form-box">
            <p class="form-tit">상품은 어땠어요?</p>
            <div class="text-center pt-12">
              <v-rating :value="5" class="cmp-rating rating-xlarge">
                <v-icon><i class="icon star">별점</i></v-icon>
              </v-rating>
            </div>
          </div>
          <!-- //별점 -->

          <!--20221007 상/하의 의류 CASE-->
          <div v-if="isItgb" class="review-info-box">
            <div class="cmp-form-box">
            <p class="form-tit">사용자 정보</p>
            <v-layout row align-center class="user-info">
              <v-text-field type="text" outlined label="키 입력" clearable class="cmp-form-input"></v-text-field>
              <div class="btw-txt">cm</div>
              <v-text-field type="text" outlined label="몸무게 입력" clearable class="cmp-form-input"></v-text-field>
              <div class="btw-txt">kg</div>
            </v-layout>
            </div>
            
            <div class="cmp-form-box">
              <p class="form-tit">체형</p>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="bodySelect0" type="radio" name="bodySelect" />
                  <label for="bodySelect0">마른</label>
                </div>
                <div class="radio-item">
                  <input id="bodySelect1" type="radio" name="bodySelect" />
                  <label for="bodySelect1">보통</label>
                </div>
                <div class="radio-item">
                  <input id="bodySelect2" type="radio" name="bodySelect" />
                  <label for="bodySelect2">통통한</label>
                </div>
              </div>
            </div>
          
            <div class="cmp-form-box required">
              <p class="form-tit">사이즈</p>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="sizeSelect0" type="radio" name="sizeSelect" />
                  <label for="sizeSelect0">타이트한</label>
                </div>
                <div class="radio-item">
                  <input id="sizeSelect1" type="radio" name="sizeSelect" />
                  <label for="sizeSelect1">적당한</label>
                </div>
                <div class="radio-item">
                  <input id="sizeSelect2" type="radio" name="sizeSelect" />
                  <label for="sizeSelect2">여유있는</label>
                </div>
              </div>
            </div>
            
            <div class="cmp-form-box required">
              <p class="form-tit">디자인</p>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="designSelect0" type="radio" name="designSelect" />
                  <label for="designSelect0">무난한</label>
                </div>
                <div class="radio-item">
                  <input id="designSelect1" type="radio" name="designSelect" />
                  <label for="designSelect1">화면과 같은</label>
                </div>
                <div class="radio-item">
                  <input id="designSelect2" type="radio" name="designSelect" />
                  <label for="designSelect2">추천하고 싶은</label>
                </div>
              </div>
            </div>
          
            <div class="cmp-form-box required">
              <p class="form-tit">컬러</p>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="colorSelect0" type="radio" name="colorSelect" />
                  <label for="colorSelect0">어두운</label>
                </div>
                <div class="radio-item">
                  <input id="colorSelect1" type="radio" name="colorSelect" />
                  <label for="colorSelect1">화면과 같은</label>
                </div>
                <div class="radio-item">
                  <input id="colorSelect2" type="radio" name="colorSelect" />
                  <label for="colorSelect2">밝은</label>
                </div>
              </div>
            </div>
          </div>
          <!--//상/하의 의류 CASE-->

          <!--20221007 신발 CASE-->
          <div v-if="isItgb" class="review-info-box">
            <div class="cmp-form-box">
              <p class="form-tit">발 사이즈</p>
              <v-layout row align-center class="user-info">
                <v-text-field type="text" outlined label="발 사이즈 입력" clearable class="cmp-form-input"></v-text-field>
                <div class="btw-txt">cm</div>
              </v-layout>
            </div>

            <div class="cmp-form-box">
              <p class="form-tit">발 타입</p>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="shoesTypeSelect0" type="radio" name="shoesTypeSelect" />
                  <label for="shoesTypeSelect0">칼발</label>
                </div>
                <div class="radio-item">
                  <input id="shoesTypeSelect1" type="radio" name="shoesTypeSelect" />
                  <label for="shoesTypeSelect1">표준</label>
                </div>
                <div class="radio-item">
                  <input id="shoesTypeSelect2" type="radio" name="shoesTypeSelect" />
                  <label for="shoesTypeSelect2">넓은</label>
                </div>
              </div>
            </div>

            <div class="cmp-form-box required">
              <p class="form-tit">사이즈</p>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="shoesSizeSelect0" type="radio" name="shoesSizeSelect" />
                  <label for="shoesSizeSelect0">타이트한</label>
                </div>
                <div class="radio-item">
                  <input id="shoesSizeSelect1" type="radio" name="shoesSizeSelect" />
                  <label for="shoesSizeSelect1">적당한</label>
                </div>
                <div class="radio-item">
                  <input id="shoesSizeSelect2" type="radio" name="shoesSizeSelect" />
                  <label for="shoesSizeSelect2">여유있는</label>
                </div>
              </div>
            </div>

            <div class="cmp-form-box required">
              <p class="form-tit">디자인</p>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="shoesDesignSelect0" type="radio" name="shoesDesignSelect" />
                  <label for="shoesDesignSelect0">무난한</label>
                </div>
                <div class="radio-item">
                  <input id="shoesDesignSelect1" type="radio" name="shoesDesignSelect" />
                  <label for="shoesDesignSelect1">화면과 같은</label>
                </div>
                <div class="radio-item">
                  <input id="shoesDesignSelect2" type="radio" name="shoesDesignSelect" />
                  <label for="shoesDesignSelect2">추천하고 싶은</label>
                </div>
              </div>
            </div>

            <div class="cmp-form-box required">
              <p class="form-tit">컬러</p>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="shoesColorSelect0" type="radio" name="shoesColorSelect" />
                  <label for="shoesColorSelect0">어두운</label>
                </div>
                <div class="radio-item">
                  <input id="shoesColorSelect1" type="radio" name="shoesColorSelect" />
                  <label for="shoesColorSelect1">화면과 같은</label>
                </div>
                <div class="radio-item">
                  <input id="shoesColorSelect2" type="radio" name="shoesColorSelect" />
                  <label for="shoesColorSelect2">밝은</label>
                </div>
              </div>
            </div>
          </div>
          <!--//신발 CASE-->

          <!--20221007 가방,잡화,악세사리 CASE-->
          <div v-if="isItgb" class="review-info-box">
            <div class="cmp-form-box required">
              <p class="form-tit">사이즈</p>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="etcSizeSelect0" type="radio" name="etcSizeSelect" />
                  <label for="etcSizeSelect0">타이트한</label>
                </div>
                <div class="radio-item">
                  <input id="etcSizeSelect1" type="radio" name="etcSizeSelect" />
                  <label for="etcSizeSelect1">적당한</label>
                </div>
                <div class="radio-item">
                  <input id="etcSizeSelect2" type="radio" name="etcSizeSelect" />
                  <label for="etcSizeSelect2">여유있는</label>
                </div>
              </div>
            </div>

            <div class="cmp-form-box required">
              <p class="form-tit">디자인</p>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="etcDesignSelect0" type="radio" name="etcDesignSelect" />
                  <label for="etcDesignSelect0">무난한</label>
                </div>
                <div class="radio-item">
                  <input id="etcDesignSelect1" type="radio" name="etcDesignSelect" />
                  <label for="etcDesignSelect1">화면과 같은</label>
                </div>
                <div class="radio-item">
                  <input id="etcDesignSelect2" type="radio" name="etcDesignSelect" />
                  <label for="etcDesignSelect2">추천하고 싶은</label>
                </div>
              </div>
            </div>

            <div class="cmp-form-box required">
              <p class="form-tit">컬러</p>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="etcColorSelect0" type="radio" name="etcColorSelect" />
                  <label for="etcColorSelect0">어두운</label>
                </div>
                <div class="radio-item">
                  <input id="etcColorSelect1" type="radio" name="etcColorSelect" />
                  <label for="etcColorSelect1">화면과 같은</label>
                </div>
                <div class="radio-item">
                  <input id="etcColorSelect2" type="radio" name="etcColorSelect" />
                  <label for="etcColorSelect2">밝은</label>
                </div>
              </div>
            </div>
          </div>
          <!--//가방,잡화,악세사리 CASE-->

          <!--20221007 화장품 CASE-->
          <div v-if="isItgb" class="review-info-box">
            <div class="cmp-form-box">
              <p class="form-tit">피부</p>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="skinSelect0" type="radio" name="skinSelect" />
                  <label for="skinSelect0">건성</label>
                </div>
                <div class="radio-item">
                  <input id="skinSelect1" type="radio" name="skinSelect" />
                  <label for="skinSelect1">지성</label>
                </div>
              </div>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="skinSelect2" type="radio" name="skinSelect" />
                  <label for="skinSelect2">복합성</label>
                </div>
                <div class="radio-item">
                  <input id="skinSelect3" type="radio" name="skinSelect" />
                  <label for="skinSelect3">민감성</label>
                </div>
              </div>
            </div>

            <div class="cmp-form-box required">
              <p class="form-tit">보습력</p>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="skinDesignSelect0" type="radio" name="skinDesignSelect" />
                  <label for="skinDesignSelect0">조금 건조한</label>
                </div>
                <div class="radio-item">
                  <input id="skinDesignSelect1" type="radio" name="skinDesignSelect" />
                  <label for="skinDesignSelect1">적당한</label>
                </div>
                <div class="radio-item">
                  <input id="skinDesignSelect2" type="radio" name="skinDesignSelect" />
                  <label for="skinDesignSelect2">촉촉한</label>
                </div>
              </div>
            </div>

            <div class="cmp-form-box required">
              <p class="form-tit">발림성</p>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="skinSpreadSelect0" type="radio" name="skinSpreadSelect" />
                  <label for="skinSpreadSelect0">조금 뻑뻑한</label>
                </div>
                <div class="radio-item">
                  <input id="skinSpreadSelect1" type="radio" name="skinSpreadSelect" />
                  <label for="skinSpreadSelect1">적당한</label>
                </div>
                <div class="radio-item">
                  <input id="skinSpreadSelect2" type="radio" name="skinSpreadSelect" />
                  <label for="skinSpreadSelect2">부드러운</label>
                </div>
              </div>
            </div>

            <div class="cmp-form-box required">
              <p class="form-tit">향</p>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="skinScentSelect0" type="radio" name="skinScentSelect" />
                  <label for="skinScentSelect0">조금 아쉬운</label>
                </div>
                <div class="radio-item">
                  <input id="skinScentSelect1" type="radio" name="skinScentSelect" />
                  <label for="skinScentSelect1">적당한</label>
                </div>
                <div class="radio-item">
                  <input id="skinScentSelect2" type="radio" name="skinScentSelect" />
                  <label for="skinScentSelect2">좋은</label>
                </div>
              </div>
            </div>
          </div>
          <!--//화장품 CASE-->

          <!--20221007 향수 CASE-->
          <div v-if="isItgb" class="review-info-box">
            <div class="cmp-form-box required">
              <p class="form-tit">향</p>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="perfumScentSelect0" type="radio" name="perfumScentSelect" />
                  <label for="perfumScentSelect0">조금 아쉬운</label>
                </div>
                <div class="radio-item">
                  <input id="perfumScentSelect1" type="radio" name="perfumScentSelect" />
                  <label for="perfumScentSelect1">적당한</label>
                </div>
                <div class="radio-item">
                  <input id="perfumScentSelect2" type="radio" name="perfumScentSelect" />
                  <label for="perfumScentSelect2">좋은</label>
                </div>
              </div>
            </div>

            <div class="cmp-form-box required">
              <p class="form-tit">지속성</p>
              <div class="cmp-line-radio">
                <div class="radio-item">
                  <input id="perfumDesignSelect0" type="radio" name="perfumDesignSelect" />
                  <label for="perfumDesignSelectt0">조금 짧은</label>
                </div>
                <div class="radio-item">
                  <input id="perfumDesignSelect1" type="radio" name="perfumDesignSelect" />
                  <label for="perfumDesignSelect1">적당한</label>
                </div>
                <div class="radio-item">
                  <input id="perfumDesignSelect2" type="radio" name="perfumDesignSelect" />
                  <label for="perfumDesignSelect2">오래 유지되는</label>
                </div>
              </div>
            </div>
          </div>
          <!--//향수 CASE-->
          
          
          



          <!-- 구매후기 -->
          <div class="cmp-form-box required">
            <p class="form-tit">구매후기</p>
            <v-textarea 
              outlined :no-resize="true" 
              height="199" counter="1000" maxlength="1000" 
              label="1,000자 이내 작성해주세요."
              class="cmp-form-textarea counting">
            </v-textarea>
          </div>
          <!-- //구매후기 -->

          <!-- 포토/동영상 선택 -->
          <div class="file-btns">
            <div class="cmp-form-file">
              <input id="fileUpload" type="file" />
              <label for="fileUpload">사진 선택</label>
            </div>
            <div class="cmp-form-file">
              <input id="fileUpload" type="file" />
              <label for="fileUpload">동영상 선택</label>
            </div>
          </div> 
          <!-- //포토/동영상 선택 -->
          <!-- 포토/동영상 리스트 -->
          <div class="attach-wrap" :class="{'edit-focused': editFocused}">
            <div class="change-info">
              <p class="text">순서변경을 누르면 사진순서를 변경할 수 있습니다.</p>
              <button type="button" class="btn-change" @click="onEditFocused">
                <template v-if="editFocused">변경완료</template>
                <template v-else>순서변경</template>
              </button>
            </div>
            <div class="attach-wrap">
              <ul class="attach-file-list mt-16">
                <li v-for="(item, index) in attachFileList" 
                  :key="index" class="file-cnt draggable-attach"
                  @mousedown.stop="onTouchstart"
                  @mouseup.stop="onTouchend(index)"
                  @mousemove.stop="onTouchMove"
                >
                  <div class="file-wrapper">
                    <div class="file">
                      <!-- 영상일 때 -->
                      <template v-if="item.path">
                        <v-img :src="item.poster" aspect-ratio="1" alt="첨부 파일" class="vod"></v-img>
                      </template>
                      <!-- 사진일 때 -->
                      <template v-else>
                        <v-img :src="item" aspect-ratio="1" alt="첨부 파일"></v-img>
                      </template>

                      <v-btn v-if="!editFocused" icon>삭제</v-btn>
                    </div>
                  </div>
                </li>
                <li v-if="attachFileList.length < 6" class="file-cnt">
                  <div class="cmp-form-fileIcon">
                    <input id="fileUpload2" type="file" />
                    <label for="fileUpload2">사진첨부</label>
                  </div>
                </li>
              </ul>
              <div class="popup-toast" :class="{'show': editFocused&&timer}">사진을 드래그해서 순서를 변경할 수 있습니다.</div>
            </div>
          </div>
          <!-- //포토/동영상 리스트 -->
        </div>
        <!-- 유의사항 -->
        <ul class="cmp-list list-dotType mt-24"><!-- [퍼블수정]23.01.10 -->
          <li>사진은 10MB 이하의 jpg, gif, png 파일을 6개까지 첨부하실 수 있습니다.</li>
          <li>동영상은 100MB 이하의 mp4, m4v, mov, wav, avi, 3gp, 3g2 파일을 1개만 첨부하실 수 있습니다.</li>
          <li>순서변경을 클릭 후 이미지를 드래그하여 순서를 조정할 수 있습니다.</li>
          <li>순서변경이 완료되면 순서변경 완료를 클릭해 주세요.</li>
          <li>등록이 완료된 후에는 이미지나 동영상을 수정할 수 없습니다.</li>
        </ul>
        <div class="border-box">
          <ul class="cmp-list list-dotType">
            <li class="highlight">상품평과 무관한 내용이거나 상품 재판매, 광고, 동일 문자의 반복 및 기타 불법적인 내용은 통보없이 삭제되며, 해당 글 작성자 ID는 글쓰기 권한이 제한됩니다.</li>
            <li>반품, 취소 등의 CS 관련 글은 <nuxt-link to="#n" class="line">고객센터&gt;1:1 문의</nuxt-link>로 이동될 수 있습니다.</li>

            <li>더한섬닷컴에서 구매한 상품의 상품평을 배송완료 30일 이내 작성 시, 추가 마일리지를 지급합니다.</li>
            <li>마일리지 지급에 대한 상세 내용은 <nuxt-link to="#n" class="line">마이페이지&gt;구매후기</nuxt-link>에서 확인 부탁드립니다.<br>(마일리지 적립은 오프라인 구매 및 간편회원 제외)</li>
            <!-- [무형상품] 추가 및 삭제 -->
            <li>클래스 종료 후 작성 시, 상품평 작성일 익일 적립됩니다.</li>
            <li>클래스 종료 30일 이내 작성된 상품평에 한하여 적립됩니다.</li>
            <li>판매 종료 상품의 경우, 상품 상세 페이지가 소멸되어 상품평 작성 및 마일리지 적립이 불가능합니다.</li>
          </ul>
        </div>
        <!-- //유의사항 -->
        <v-btn large block color="primary" @click="dialogVideoCheck = true">등록</v-btn><!-- 필수필드 입력전까지 disable 속성 사용 -->
      </div>

      <!--동영상 설정확인-->
      <v-dialog
        v-model="dialogVideoCheck"
        max-width="380"
        content-class="cmp-alert"
        :persistent="true">
        <DialogBasic class="popup-message" @hide="dialogVideoCheck = false">
          <template #body>
            <div class="inner">
              <div slot="contents">
                <p class="txt">동영상 설정 확인</p>
                <v-radio-group
                  v-model="videoDirection"
                  column
                  class="cmp-form-radioGroup mt-18">
                  <v-radio
                    label="가로형"
                    class="cmp-form-radio"
                    value="10"></v-radio> 
                    <v-radio
                    label="세로형"
                    class="cmp-form-radio"
                    value="20"></v-radio>
                </v-radio-group>
              </div>
            </div>
            <div class="popup-btn-box">
              <v-btn large color="primary" @click="dialogVideoCheck = false">확인</v-btn>
            </div>
          </template>
        </DialogBasic>
      </v-dialog>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
export default {
  components: {
    DialogBasic,
  },
  data: () => ({
    DialogBasic: false, // 팝업
    isItgb: false, // 무형상품 제외
    itgbData : {
      "brand_name": "MOMENT",
      "product_name": "퍼스널 컬러부터 한 번에 알려드리는 퍼스널 컬러부터 한 번에 알려드리는 퍼스널 컬러부터 한 번에 알려드리는",
      "links": ['#n'],
      "sold_out" : false,
      "options" : ["12:30"],
      "images": [["https://img.thehandsome.com/md/publish/dummy/pc/pc-itgb-0001.jpg"]],
    },
    attachFileList : [
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
      {
        path: "https://img.thehandsome.com/md/publish/dummy/pc/video.mp4",
        poster: "https://img.thehandsome.com/md/publish/dummy/pc/video.jpg",
        youtube: false,
        loop: true,
        time: 0, // 총 영상시간
      },
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img2.png',
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img3.png',
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img4.png',
      'https://img.thehandsome.com/md/publish/dummy/pc/search-magazine-thumb0.png',
    ],
    drag: false,
    timer: false,
    editFocused: false, // 순서변경 활성화 여부
    touchEndEl: null, // 도착지
    touchStartEl: null, // 시작지
    touchShadowEl: null, // 그림자
    touchFromPoint: null, // 타겟영역
    mouseDragged: false, // 드래그 여부
    dialogVideoCheck : false
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    onEditFocused() {
      this.editFocused = !this.editFocused;
      this.timer = true;
      setTimeout(() => {
        this.timer = false;
      }, 2500);
    },
    onTouchstart(e) {
      if(this.editFocused) {

        // 토스트팝업 제거
        this.timer = false;
        this.mouseDragged = true;

        // 처음 선택한 요소
        this.touchStartEl = e.target.closest('.draggable-attach');

        // 그림자 생성
        this.touchShadowEl = this.touchStartEl.cloneNode(true);
        this.touchShadowEl.classList.add('shadow');
        document.querySelector(".attach-file-list").append(this.touchShadowEl);
        // 그림자 style
        this.touchShadowEl.style.transform = 'translate(0, 0)';
        this.touchShadowEl.style.left = this.touchStartEl.getBoundingClientRect().left+'px';
        this.touchShadowEl.style.top = this.touchStartEl.getBoundingClientRect().top+'px';
        this.touchShadowEl.style.width = this.touchStartEl.getBoundingClientRect().width+'px';
        this.touchShadowEl.style.paddingBottom = this.touchStartEl.getBoundingClientRect().height+'px';

        this.touchStartEl.classList.add('selected');
      }
    },
    onTouchend() {

      if(this.editFocused) {
        if(this.mouseDragged) {

          // 그림자 노드 삭제
          this.touchShadowEl.remove(); 
    
          // switch 요소 index
          const attachlist = document.querySelector(".attach-file-list").children;
          const startIndex = Array.from(attachlist).indexOf(this.touchStartEl); // switch start 요소 index
          const endIndex = Array.from(attachlist).indexOf(this.touchEndEl); // switch end 요소 index
          console.log('onTouchend index: ', startIndex, endIndex)
    
          // 데이터 switch
          const tmpStart = this.attachFileList[startIndex];
          const tmpEnd = this.attachFileList[endIndex];
          this.attachFileList.splice(endIndex, 1, tmpStart);
          this.attachFileList.splice(startIndex, 1, tmpEnd);
    
          // 선택 비활성화
          Array.prototype.forEach.call(document.querySelectorAll(".draggable-attach"), function(el) {
            if(el.classList.contains('target')) {
              el.classList.remove('target')
            }
            if(el.classList.contains('selected')) {
              el.classList.remove('selected')
            }
          });
          this.mouseDragged = false;
        }else { // cancel
          this.touchStartEl.classList.remove('selected');
          this.touchShadowEl.remove(); 
        }
      }
    },
    onTouchMove(e) {

      if(this.editFocused) {

        if(this.mouseDragged){
          if(e.clientX > 0 && e.clientX < screen.width && e.clientY > 0 && e.clientY < screen.height) {// 영역안에 있을 떄
            // switch end 요소 세팅
            this.touchFromPoint = document.elementFromPoint(e.clientX, e.clientY); 
            this.touchEndEl = this.touchFromPoint.closest('.draggable-attach');
            
            if(this.touchEndEl !== null && this.touchFromPoint !== null) {
              Array.prototype.forEach.call(document.querySelectorAll(".draggable-attach"), (el) => {
                el.classList.remove('target')
              });  
              this.touchEndEl.classList.add('target');
              // switch shadow css
              this.touchShadowEl.style.left = e.clientX+'px';
              this.touchShadowEl.style.top = e.clientY+'px';
              this.touchShadowEl.style.transform = 'translate(-50%, -50%)';
            }else { 
              this.touchEndEl = this.touchStartEl; // 영역 밖으로 나가면 그냥 원래 자리로 감
              return;
            }
          }else {
            this.touchEndEl = this.touchStartEl;
          }
        }

      }
      if (e.cancelable && this.editFocused) e.preventDefault();

    },
  },
}
</script>

<style lang="scss">
</style>
