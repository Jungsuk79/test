<template>
  <DialogBasic 
    class="popup-QnAList" 
    :class="{'none-list':!(QnAList && QnAList.length > 0)}"
    header-title="Product Q&amp;A" 
    :width="880" 
    @hide="closeDialog"
  ><!-- 221207 qna : 리스트 없을 때 none-list 클래스 추가 -->
    <template #body>
        <!-- Q&A상단 -->
        <div>
          <div class="product-row-group line-type2">
            <v-layout align-center>
              <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/004.jpg" alt="product image" class="product-img"></v-img>
              <div class="product-info">
                <div class="product-brand">MINE</div>
                <div class="product-name">Lettering printing &amp; embroidery T-shirt</div>
              </div>
              <div>
                <v-btn outlined block color="primary">Write a Question</v-btn>
              </div>
            </v-layout>
          </div>          
          <ul class="cmp-dotList pt-20 pb-20">
            <li>For more detailed inquiries about product delivery, cancellation, etc., please use <nuxt-link to="#n" class="line-txt">Customer Center > 1:1 inquiry.</nuxt-link></li>
          </ul>
        </div>
        <!-- // Q&A 상단 -->

        <!-- 리스트 있을 때  -->
        <template v-if="QnAList && QnAList.length > 0">
          <!-- Q&A 목록 -->
          <div class="acc-wrap full-width">
            <v-expansion-panels accordion class="cmp-acc acc-type2">
              <v-expansion-panel v-for="(item, index) in QnAList" :key="index">
                <v-expansion-panel-header>
                  <div class="title-area">
                    <v-layout justify-space-between align-center>
                      <v-layout align-center>
                        <div class="cmp-labels mr-10">
                          <span v-if="item.inquiry_answer == null" class="label">Standby for reply</span>
                          <span v-else class="label c-blue">Replied</span>
                        </div>
                        <p class="cnt-txt0">
                          <span class="txt">{{item.inquiry_title}}</span>
                          <i v-if="item.lock" class="cmp-icon i-locked cmp-icon-18">Secret</i>
                        </p>
                      </v-layout>
                      <div class="cnt-txt1">
                        <p>{{item.writer}}</p>
                        <p>{{item.date}}</p>
                      </div>
                    </v-layout>
                  </div>
                  <template #actions>
                    <i v-cmp-icon="{ size: 12, name: 'down' }" class="arrow-toggle">open/close</i>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="contents-box">
                    <v-layout row align-center justify-space-between>
                      <div class="cmp-info QnA-title">
                        <p class="cmp-font fnt-18 bold">Q</p>
                      </div>
                      <div class="cmp-font-btnBox">
                        <button v-if="item.inquiry_answer == null" class="cmp-font fnt-13 button">modify</button>
                        <button class="cmp-font fnt-13 button">delete</button>
                      </div>
                    </v-layout>
                    <p class="cmp-font pt-10">{{ item.inquiry }}</p>
                    <ul class="attach-file-list">
                      <li v-for="(item2, index2) in item.attachFileList" :key="index2" class="file-cnt">
                          <div class="file">
                              <v-img  :src="item2" aspect-ratio="1" alt="첨부 파일"></v-img>
                          </div>
                      </li>
                    </ul>
                  </div>
                  <div v-if="item.inquiry_answer !== null" class="contents-box" >
                    <div class="cmp-info QnA-title">
                      <p class="cmp-font fnt-18 bold">A</p>
                    </div>
                    <p class="cmp-font pt-8">{{ item.inquiry_answer }}</p>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
          <!-- // Q&A 목록 -->
          <ProductListPaging />
        </template>
        <!-- // 리스트 있을 때  -->

        <!-- 리스트 없을 때 (221207 qna : 추가) -->
        <CommonNoData v-else msg="There are no product Q&amp;A" />
        <!-- // 리스트 없을 때 (221207 qna : 추가) -->
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: { 
    DialogBasic
  },
  data: () => ({
    // 팝업
    DialogBasic: false,
      QnAList: [ // 문의내역
        { 
          writer: 'hand****',
          date: '07 Nov. 2022',
          inquiry_title: 'I would like to inquire about the re-warehousing',
          inquiry: 'I would like to inquire about the re-warehousing I would like to inqurinqurinqur',
          inquiry_answer: null,
          lock: true,
          attachFileList : [
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
          ],
        },
        {
          writer: 'hand****',
          date: '07 Nov. 2022',
          inquiry_title: 'I would like to inquire ',
          inquiry: "I'm inquiring about the reorder.",
          inquiry_answer: null,
          lock: false,
          attachFileList: [],
        },
        {
          writer: 'aand****',
          date: '07 Nov. 2022',
          inquiry_title: 'I would like to inquire ',
          inquiry: 'I wear dress 55-66, how many sizes should I order for the waist of the pants?',
          inquiry_answer:'You can order the regular size you used to wear. I recommend about 27~28 You can order the regular size you used to wear. I recommend about 27~28',
          lock: true,
          attachFileList : [
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
          ],
        },
        { 
          writer: 'aand****',
          date: '07 Nov. 2022',
          inquiry_title: 'I would like to inquire ',
          inquiry: 'I wear dress 55-66, how many sizes should I order for the waist of the pants?',
          inquiry_answer:'You can order the regular size you used to wear. I recommend about 27~28 You can order the regular size you used to wear. I recommend about 27~28',
          lock: false,
          attachFileList: [],
        },
        {
          writer: 'nha****',
          date: '07 Nov. 2022',
          inquiry_title: 'I would like to inquire ',
          inquiry: 'I wear dress 55-66, how many sizes should I order for the waist of the pants?',
          inquiry_answer:'You can order the regular size you used to wear. I recommend about 27~28 You can order the regular size you used to wear. I recommend about 27~28',
          lock: true,
          attachFileList : [
            'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
          ],
        },
      ],
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

<style lang="scss" scoped></style>
