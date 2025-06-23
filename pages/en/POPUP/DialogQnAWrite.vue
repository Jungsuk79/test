<template>
  <DialogBasic class="popup-QnA" header-title="Write a Question" :width="540" @hide="closeDialog">
    <template #body>  
      <div class="cmp-form-box required">
        <p class="txt-required">Marks are required fields.</p>
        <p class="form-tit">Title</p>
        <v-text-field type="text" outlined label="Please enter the title." clearable class="cmp-form-input"></v-text-field>
        <div class="cmp-form-textareaBox">
          <v-textarea v-model="textareaModel" outlined :no-resize="true" maxlength="1000" height="210" class="cmp-form-textarea">
            <template #label>
              <div>Please accurately enter the product name/product code/size/color of the product you wish to inquire about.<br><br>If it is an ordered product, it is helpful for us to give you an accurate reply if you can specify what you are curious about along with the order number and product name/product code/size, and color you wish to inquire about.</div>
            </template>          
          </v-textarea>
          <div class="count-txt">{{textareaModel.length | number}} / 1,000</div>
        </div>
      </div>

      <!--사진 1개일때 사진첨부 버튼 노출 CASE -->
      <div v-if="attachFileList.length === 0" class="mt-20">
        <div class="cmp-form-file">
          <input id="fileUpload" type="file">
          <label for="fileUpload">Attach Image</label>
        </div>
        <p class="form-txt mt-10">jpg, gif, png file under 10 MB / Max. 5 files can be attached</p>
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
              <label for="fileUpload2">Attach Image</label>
            </div>
          </li>
          <!-- //사진 5장 이상 첨부시 해당 버튼 미노출 -->
        </ul>
        <p class="form-txt mt-8">jpg, gif, png file under 10 MB / Max. 5 files can be attached</p>
      </div>
      <!--//사진첨부-->

      <!--이메일-->
      <div class="cmp-form-box required mt-34">
        <p class="form-tit">E-mail Address for Reply</p>
        <div class="cmp-form-emailBox">
          <div class="email-box">
            <v-text-field label="" outlined clearable class="cmp-form-input label-hide"></v-text-field>
            <div class="btw-txt">@</div>
            <CommonSelectBox id="selectId5" title="" @submit="dominFieldSet">
              <template #optionList>
                <option value="placeholder">Please select</option>
                <option value="gmail.com">gmail.com</option>
                <option value="outlook.com">outlook.com</option>
                <option value="direct">Direct Entry</option>
              </template>
            </CommonSelectBox>
          </div>
          <v-text-field v-if="domainDirectFieldShow" outlined label="Please enter your e-mail" clearable class="cmp-form-input label-hide"></v-text-field>
        </div>
      </div>
      <!--//이메일-->

      <div class="secret-box">
        <v-checkbox label="Secret Setting" class="cmp-form-checkbox"></v-checkbox>
        <ul class="cmp-dotList">
          <li>For detailed inquiries about product delivery, returns, cancellation, etc., please use the customer center.</li>
        </ul>
      </div>
    </template>
    <template #footer>
      <v-btn large block color="primary">Register</v-btn>
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
    textareaModel : '',
    attachFileList: [
      /* 'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
      'https://img.thehandsome.com/md/publish/dummy/attach-file-img2.png', */
    ],
    domainDirectFieldShow : false,
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    dominFieldSet(val) {
      if (val === 'direct') this.domainDirectFieldShow = true
      else this.domainDirectFieldShow = false
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
