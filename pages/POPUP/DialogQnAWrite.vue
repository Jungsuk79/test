<template>
  <DialogBasic class="popup-QnA" header-title="상품 Q&amp;A 작성" :width="540" @hide="closeDialog">
    <template #body>  
      <div class="cmp-form-box required">
        <p class="txt-required">표시는 필수 입력 항목입니다.</p>
        <p class="form-tit">문의내용</p>
        <v-text-field type="text" outlined label="제목을 입력해주세요" clearable class="cmp-form-input"></v-text-field>
        <div class="cmp-form-textareaBox">
          <!-- 
            220915 qna : cmp-form-textareaBox, count-txt 추가 / <v-textarea> 속성 counter, 클래스 counting 삭제
           -->
          <v-textarea outlined :no-resize="true" maxlength="1000" height="228" class="cmp-form-textarea">
            <template #label>
              <div class="mb-10">문의하실 상품의 상품명/제품코드/사이즈/컬러를 정확히 입력해주세요.</div>
              <div class="mb-10">주문하신 상품이라면 주문번호와 문의 하실 상품명/제품코드/사이즈/컬러와 함께 궁금하신 사항을 적어 주시면, 정확한 답변을 드리는데 도움이 됩니다.</div>
              <div>반품접수는 마이페이지 주문내역에서 “반품 신청” 버튼을 클릭하여 반품을 접수해주셔야 합니다.</div>
            </template>
          </v-textarea>
          <div class="count-txt">{{textareaModel.length | number}} / 1,000</div>
        </div>
      </div>

      <!--사진 1개일때 사진첨부 버튼 노출 CASE -->
      <div v-if="attachFileList < 0" class="mt-20">
        <div class="cmp-form-file">
          <input id="fileUpload" type="file">
          <label for="fileUpload">사진첨부</label>
        </div>
        <p class="form-txt mt-10">10MB 이하의 jpg, gif, png 파일 / 최대 5개 첨부가능</p>
      </div>
      <!--//사진 1개일때 사진첨부 버튼 노출 CASE--> 

      <!--사진첨부-->
      <div v-else class="mt-20">
        <ul class="attach-file-list">
          <li v-for="(item, index) in attachFileList" :key="index" class="file-cnt">
            <div class="file">
              <v-img :src="item" aspect-ratio="1" alt="첨부 파일"></v-img>
              <v-btn icon>삭제</v-btn>
            </div>
          </li>
          <!-- 사진 5장 이상 첨부시 해당 버튼 미노출 -->
          <li class="file-cnt">
            <div class="cmp-form-fileIcon">
              <input id="fileUpload2" type="file" />
              <label for="fileUpload2">사진첨부</label>
            </div>
          </li>
          <!-- //사진 5장 이상 첨부시 해당 버튼 미노출 -->
        </ul>
        <p class="form-txt mt-8">10MB 이하의 jpg, gif, png 파일 / 최대 5개 첨부가능</p>
      </div>
      <!--//사진첨부-->
      
      <!-- 230920 컬러/사이즈 상태값 추가 -->
      <!-- 컬러칩 -->
      <div class="cmp-form-box required mt-34">
        <p class="form-tit">컬러</p>
        <div class="cmp-form-check color-table">
          <ul class="color-chip-box size-type3">
            <template>
              <li v-for="(item, index) in prdData" :key="index" class="chip">
                <input 
                  :id="'colorChip'+index" type="radio" 
                  :checked="prdSelectIdx === item.prd_idx" 
                  :value="item.color_value" name="colorChip" 
                  :class="{soldout: index === 2}"
                  @input="colorChipChange(item.prd_idx)" 
                />
                <label :for="'colorChip'+index">
                  <span :style="{'background-image': 'url('+item.color_image+')'}">{{item.color_value}}</span>
                </label>
              </li>
            </template>
          </ul>
          <span class="color-name">{{colorVar}}</span>
        </div>
      </div>
      <!-- //컬러칩 -->

      <!-- 사이즈 -->
      <div class="cmp-form-box required mt-34">
        <p class="form-tit">사이즈</p>
        <div class="cmp-form-selectbox">
          <ProductOptionSelect :size-data="optionSizeData" @submit="sizeSelect"/>
        </div>
      </div>
      <!-- //사이즈 -->
      <!-- //230920 컬러/사이즈 상태값 추가 -->

      <!--SMS 알람받기-->
      <div class="cmp-form-box mt-34">
        <p class="form-tit">SMS 알림받기</p>
        <div class="cmp-form-colBox">
          <CommonSelectBox id="phoneSelect" title="앞자리 번호 선택">
            <template #optionList>
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="017">017</option>
              <option value="018">018</option>
              <option value="019">019</option>
            </template>
          </CommonSelectBox>
          <v-text-field type="text" outlined label="가운데 번호 입력" clearable class="cmp-form-input label-hide"></v-text-field>
          <v-text-field type="text" outlined label="뒷자리 번호 입력" clearable class="cmp-form-input label-hide"></v-text-field>
        </div>
        <v-checkbox label="카카오 알림톡/SMS 알림 동의" class="cmp-form-checkbox"></v-checkbox>
      </div>
      <!-- //SMS 알람받기-->

      <!--이메일-->
      <div class="cmp-form-box required mt-34">
        <p class="form-tit">E-mail 답변받기</p>
        <div class="cmp-form-emailBox">
          <div class="email-box">
            <v-text-field label="이메일 입력" outlined clearable class="cmp-form-input label-hide"></v-text-field>
            <div class="btw-txt">@</div>
            <CommonSelectBox id="selectId5" title="도메인 선택" @submit="dominFieldSet">
              <template #optionList>
                <option value="placeholder">선택해 주세요</option>
                <option value="naver.com">naver.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="daum.net">daum.net</option>
                <option value="kakao.com">kakao.com</option>
                <option value="nate.com">nate.com</option>
                <option value="outlook.com">outlook.com</option>
                <option value="hotmail.com">hotmail.com</option>
                <option value="direct">직접입력</option>
              </template>
            </CommonSelectBox>
          </div>
          <v-text-field outlined label="이메일을 입력해 주세요." clearable class="cmp-form-input"></v-text-field>
        </div>
      </div>
      <!--//이메일-->

      <div class="secret-box">
        <v-checkbox label="비밀글 설정" class="cmp-form-checkbox"></v-checkbox>
        <ul class="cmp-dotList">
          <li>상품에 관한 배송, 교환, 취소 등의 자세한 문의 사항은<br> 고객센터를 이용해 주시기 바랍니다.</li>
        </ul>
      </div>
    </template>
    <template #footer>
      <v-btn large block color="primary">등록</v-btn>
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
    prdData : [], // 상품 color data
    colorVar : null, // 컬러칩 value
    prdSelectIdx : 0, // 선택 index
    prdSizeData : [],

    optionSizeData : {
      select_idx : null,
      list : [
        {
          size_en : 'S',
          size_num : '82',
          state_msg : '소량재고',
          sold_out : false,
        },
        {
          size_en : 'M',
          size_num : '88',
          state_msg : '',
          sold_out : false,
        },
        {
          size_en : 'L',
          size_num : '94',
          state_msg : '',
          sold_out : false,
        },
        {
          size_en : 'XL',
          size_num : '100',
          state_msg : '재입고알림',
          sold_out : true,
        },
        {
          size_en : '2XL',
          size_num : '110',
          state_msg : '품절',
          sold_out : true,
        },
        {
          size_en : 'FREE',
          size_num : '',
          state_msg : '',
          sold_out : false,
        },
      ]
    },


    DialogBasic: false, // 팝업
    textareaModel : '', // 220915 qna : 추가
    attachFileList: [
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img2.png',
    ],
    valid: false,
  }),
  created() {
    const me = this
    const json = require('~/static/json/detail_product_list2.json')
    me.prdData = json.list
    for(let i=0;i<me.prdData.length;i++){
      me.prdData[i].prd_idx = i;
    }
  },
  mounted() {
    const me = this
    me.colorVar = me.prdData[0].color_value

  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    dominFieldSet(val) {
      if (val === 'direct') this.domainDirectFieldShow = true
      else this.domainDirectFieldShow = false
    },

    sizeSelect(val){
      const me = this
      const values = me.optionSizeData.list[val];
      const sizeData = {
        name: '플로럴 자수 칼라 프릴 탑',
        size: values.size_en + ' ' + values.size_num,
        color: me.colorVar,
        price: '556,500'
      }
      me.prdSizeData.push(sizeData)
    },
    sizeSelectClose(idx){
      const me = this
      me.prdSizeData.splice(idx, 1)
    },
    colorChipChange(idx){ // 컬러칩 선택
      const me = this

      me.prdSelectIdx = idx
      me.colorVar = me.prdData[me.prdSelectIdx].color_value;
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
