<template>
  <DialogBasic class="popup-basic popup-onoToOne" header-title="1:1 Query" @hide="closeDialogFullPopup">
    <template #body>
      <div class="inner">
        <v-form ref="form" v-model="valid" class="cmp-form-boxGroup box-type1">
          <!-- 문의분류 -->
          <div class="cmp-form-box pt-0 required">
            <p class="form-tit">Inquiry Classification</p>
            <!-- 대분류 선택 -->
            <CommonSelectBox id="select00" title="Classification">
              <template #optionList>
                <option value="placeholder">Classification1</option>
                <option>Classification2</option>
                <option>Classification3</option>
              </template>
            </CommonSelectBox>
            <!-- //대분류 선택 -->

            <!-- 상품선택 -->
            <v-btn block large outlined disabled color="primary" class="btn-search-product">Product Search</v-btn>
            <p class="form-txt mt-8">Consulted product/order selection  You can select up to max. of 5.</p>
            <!-- //상품선택 -->

            <!-- 상품검색 선택 리스트 -->
            <template v-for="(item, index) in selectPrdList">
              <div v-if="item.list.length > 0" :key="index" class="pt-20">
                <!-- 나의 주문상품일 때만 '주문번호' 노출 -->
                <v-layout v-if="item.order_number" row justify-space-between class="pb-8">
                  <p class="cmp-font fnt-13">Order No. <span class="ml-4">{{item.order_number}}</span></p> <!-- 퍼블수정: 220509 주문번호 링크 빠짐 -->
                  <p class="cmp-font fnt-13">{{item.order_date}}</p>
                </v-layout>
                <!-- //나의 주문상품일 때만 '주문번호' 노출 -->

                <ul class="product-row-group line-type3"> <!-- 퍼블수정: 220509 클래스명 변경 line-type2->line-type3 -->
                  <li v-for="(item2, index2) in item.list" :key="index2">
                    <ProductRowUnit en-type :unit-data="item2" img-size="img-size2"> <!-- 퍼블수정: 220509 img-size="img-size2" 속성 추가 -->
                      <template #right>
                        <div class="a-btn-box">
                          <button class="del-btn2"><span class="cmp-icon cmp-icon-12 i-close">삭제</span></button>
                        </div>
                      </template>
                    </ProductRowUnit>
                  </li>
                </ul>
              </div>
            </template>
            <!-- //상품검색 선택 리스트 -->
          </div>
          <!-- //문의분류 -->
          
          <!-- 문의내용 -->
          <div class="cmp-form-box required">
            <h5 class="form-tit">Inquiry details</h5>
            <v-text-field type="text" outlined label="Please enter the subject." clearable class="cmp-form-input"></v-text-field>
            <v-textarea v-model="userText" outlined :no-resize="true" counter="1000" maxlength="1000" height="306" class="cmp-form-textarea counting" @keyup="textKeyUp">
              <template #label>
                <div class="mb-10">Please accurately enter the product name/product code/size/color of the product you wish to inquire about.</div>
                <div class="mb-10">If it is an ordered product, it is helpful for us to give you an accurate reply if you can specify what you are curious about along with the order number and product name/product code/size, and color you wish to inquire about.</div>
                <div>To apply for a return, you have to request a return by clicking “Request Return” in My Page Order Details.</div>
              </template>
            </v-textarea>

            <!-- 사진첨부 -->
            <ul v-if="attachFileList.length > 0" class="attach-file-list mt-16">
              <li v-for="(item, index) in attachFileList" :key="index" class="file-cnt">
                <div class="file">
                  <v-img :src="item" aspect-ratio="1" alt="첨부 파일"></v-img>
                  <v-btn icon>삭제</v-btn>
                </div>
              </li>
              <!-- 사진 5장 이상 첨부시 해당 버튼 미노출 -->
              <li v-if="attachFileList.length < 5" class="file-cnt">
                <div class="cmp-form-fileIcon">
                  <input id="fileUpload2" type="file" />
                  <label for="fileUpload2">Attach Photo</label>
                </div>
              </li>
              <!-- //사진 5장 이상 첨부시 해당 버튼 미노출 -->
            </ul>
            <div v-else class="cmp-form-file mt-16">
              <input id="fileUpload" type="file">
              <label for="fileUpload">Attach Photo</label>
            </div>            
            <p class="form-txt mt-8">jpg, gif, png file under 10 MB / Max. 5 files can be attached</p>
            <!-- //사진첨부 -->

          </div>
          <!-- //문의내용 -->


          <!-- 이메일 -->
          <div class="cmp-form-box required" :class="{ valid: emailErrorTest }">
            <p class="form-tit">Receive E-mail reply</p>
            <div class="cmp-form-emailBox">
              <v-layout row>
                <v-text-field label="이메일 입력" outlined clearable class="cmp-form-input label-hide" :error="emailErrorTest"></v-text-field>
                <div class="btw-txt">@</div>
                <CommonSelectBox id="selectId5" title="Direct entry" @submit="dominFieldSet">
                  <template #optionList>
                      <option value="placeholer">Direct entry</option>
                      <option value="naver.com">naver.com</option>
                      <option value="gmail.com">gmail.com</option>
                      <option value="daum.net">daum.net</option>
                      <option value="kakao.com">kakao.com</option>
                      <option value="nate.com">nate.com</option>
                      <option value="outlook.com">outlook.com</option>
                      <option value="hotmail.com">hotmail.com</option>
                      <option value="direct">Direct entry</option>
                  </template>
                </CommonSelectBox>
              </v-layout>
              <v-text-field v-if="domainDirectFieldShow" outlined label="Direct entry" clearable class="cmp-form-input" :error="emailErrorTest"></v-text-field>
            </div>
            <p class="validation-text">validation</p>
          </div>
          <!-- //이메일 -->

          <!-- 유의사항/버튼 -->
          <div class="pt-16">
            <ul class="cmp-dotList">
              <li>You can check the reply to your inquiry in your e-mail or at My Page > 1:1 Query details.</li>
            </ul>
            <div class="cmp-btnsArea mt-30">
              <v-btn type="submit" large color="primary" :disabled="valid" @submit.prevent="onSubmit">Register</v-btn>
            </div>
          </div>
          <!-- // 유의사항/버튼 -->
        </v-form><!-- .cmp-form-boxGroup End -->
      </div>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: { DialogBasic },
  data: () => ({
    // 팝업
    DialogFullPopup: false,
    // form
    valid: false,
    emailErrorTest : false, // 이메일폼 에러 확인 용
    domainDirectFieldShow : false, // 이메일 직접입력필드
    selectPrdList : [
      {
        order_date: '',
        order_number: '',
        order_link : '',
        list : [
          {
            images: [['https://img.thehandsome.com/md/publish/dummy/pc/001.jpg']],
            brand_name: 'LANVIN COLLECTION1',
            product_name: 'Double Breasted Cropped Jacket',
            sell_price: '1,450,000',
            sell_price_en : '199.83',             
          },
          {
            images: [['https://img.thehandsome.com/md/publish/dummy/pc/001.jpg']],
            brand_name: 'LANVIN COLLECTION2',
            product_name: 'one tuck wide pants',
            sell_price: '1,450,000',
            sell_price_en : '199.83',             
          },  
        ],
      },
      {
        order_date: '18 Apr. 2021 15:23',
        order_number: '300129491868',
        order_link : '#n',
        list: [
          {
            images: [['https://img.thehandsome.com/md/publish/dummy/pc/001.jpg']],
            brand_name: 'LANVIN COLLECTION3',
            product_name: 'Double Breasted Cropped Jacket',
            sell_price: '1,450,000',
            sell_price_en : '199.83',             
            options : ["BLACK","90","1"],
          },
        ],
      },
      {
        order_date: '18 Apr. 2021 15:23',
        order_number: '300129491868',
        order_link : '#n',
        list: [
          {
            images: [['https://img.thehandsome.com/md/publish/dummy/pc/001.jpg']],
            brand_name: 'LANVIN COLLECTION4',
            product_name: 'Double Breasted Cropped Jacket',
            sell_price: '1,450,000',
            sell_price_en : '199.83',             
            options : ["BLACK","90","1"],
          },
          {
            images: [['https://img.thehandsome.com/md/publish/dummy/pc/001.jpg']],
            brand_name: 'LANVIN COLLECTION5',
            product_name: 'one tuck wide pants',
            sell_price: '1,450,000',
            sell_price_en : '199.83',             
            options : ["BLACK","90","1"],
          },
          {
            images: [['https://img.thehandsome.com/md/publish/dummy/pc/001.jpg']],
            brand_name: 'LANVIN COLLECTION6',
            product_name: '니트 드레스',
            sell_price: '1,450,000',
            sell_price_en : '199.83',             
            options : ["BLACK","90","1"],
          },
        ],
      },
    ],
    attachFileList: [
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img2.png',
    ],
    userText:'',
  }),
  methods: {
    closeDialogFullPopup() {
      this.DialogFullPopup = false
      this.$emit('close')
    },
    dominFieldSet(val){ // 이메일 직접 입력필드
      if(val==='direct') this.domainDirectFieldShow = true;
      else this.domainDirectFieldShow = false;
    },
    onSubmit() {
      this.$refs.form.validate();
    },
    textKeyUp(){
      const me = this
      if(me.userText.length > 1000){
        me.userText = me.userText.substr(0, 1000)
      }
    },
  },
}
</script>

<style lang="scss">
</style>
