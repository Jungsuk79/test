<template>
  <DialogBasic 
    class="popup-QnAList" 
    :class="{'none-list':!(QnAList && QnAList.length > 0)}"
    header-title="상품 Q&amp;A" 
    :width="880" 
    @hide="closeDialog"
  ><!-- 221207 qna : 리스트 없을 때 none-list 클래스 추가 -->
    <template #body>
        <!-- Q&A상단 -->
        <div>
            <div class="product-row-group line-type2">
                <v-layout align-center>
                <v-img src="https://img.thehandsome.com/md/publish/dummy/pc/004.jpg" alt="상품 이미지" class="product-img"></v-img>
                <div class="product-info">
                    <div class="product-brand">MINE</div>
                    <div class="product-name">컬러 블록 니트 가디건 컬러 니트</div>
                </div>
                <div>
                    <v-btn outlined block color="primary" @click="openDialogQnAWrite">상품 Q&amp;A 작성</v-btn>
                </div>
                </v-layout>
            </div>          
            <ul class="cmp-dotList pt-20 pb-20"><!-- 220915 qna : cmp-dotList 클래스 수정 -->
                <li>상품에 관한 배송, 교환, 취소 등의 자세한 문의사항은 <nuxt-link to="#n" class="line-txt">고객센터&gt;1:1 문의</nuxt-link>를 이용하여 주시기 바랍니다.</li><!-- 220915 qna : line-txt 클래스 수정 -->
            </ul>
        </div>
        <!-- // Q&A 상단 -->

        <!-- 리스트 있을 때  -->
        <template v-if="QnAList && QnAList.length > 0">
          <!-- Q&A 목록 -->
          <div class="acc-wrap full-width">
            <v-expansion-panels accordion class="cmp-acc acc-type2">
              <v-expansion-panel v-for="(item, index) in QnAList" :key="index">
                <!-- [퍼블수정]23.02.23 disabled 위치 수정 -->
                <v-expansion-panel-header :disabled="index === 0 || index === 2 || index === 4">
                  <div class="title-area">
                    <v-layout justify-space-between align-center>
                      <v-layout align-center>
                        <div class="cmp-labels mr-10">
                          <span v-if="item.inquiry_answer == null" class="label">답변대기</span>
                          <span v-else class="label c-blue">답변완료</span>
                        </div>
                        <p class="cnt-txt0"><!-- 220915 qna : 클래스 수정 -->
                          <span class="txt">{{item.inquiry_title}}</span><p class="cnt-txt0"><!-- 220915 qna : 클래스 txt 추가 -->
                          <i v-if="item.lock" class="cmp-icon i-locked cmp-icon-18">비밀글</i>
                        </p>
                      </v-layout>
                      <!-- 220915 qna : 마크업 변경 -->
                      <div class="cnt-txt1">
                        <p>{{item.writer}}</p>
                        <p>{{item.date}}</p>
                      </div>
                      <!-- //220915 qna : 마크업 변경 -->
                    </v-layout>
                  </div>
                  <template #actions>
                    <i v-cmp-icon="{ size: 12, name: 'down' }"
                    class="arrow-toggle">열기/닫기</i>
                  </template>
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                  <div class="contents-box">
                      <v-layout row align-center justify-space-between>
                          <div class="cmp-info QnA-title">
                              <p class="cmp-font fnt-18 bold">Q</p>
                          </div>
                              <div class="cmp-font-btnBox">
                              <button v-if="item.inquiry_answer == null" class="cmp-font fnt-13 button">수정</button>
                              <button class="cmp-font fnt-13 button">삭제</button>
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
        <CommonNoData v-else msg="상품 Q&amp;A 내역이 없습니다." />
        <!-- // 리스트 없을 때 (221207 qna : 추가) -->
        

        <!-- 상품 Q&A 작성 POPUP(221207 이중팝업 : 추가) -->
        <v-dialog
          v-model="DialogQnAWrite">
          <DialogQnAWrite @close="closeDialogQnAWrite" />
        </v-dialog>
        <!-- // 상품 Q&A 작성 POPUP -->
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
import DialogQnAWrite from '~/pages/POPUP/DialogQnAWrite.vue' // 221207 이중팝업 : 추가

export default {
  components: { 
    DialogBasic,
    DialogQnAWrite, // 221207 이중팝업 : 추가
  },
  data: () => ({
    // 팝업
    DialogBasic: false,
    QnAList: [ // 문의내역
      { 
        writer: 'hand****',
        date: '2022.03.11',
        inquiry_title: '사이키델릭 페이즐리 상품의 재입고 문의 드립니다.',
        inquiry: '실크소재인지 다른 소재인지 알수 있나요?',
        inquiry_answer: null,
        lock: true,
        attachFileList : [
          'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
          'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
        ],
      },
      {
        writer: 'hand****',
        date: '2022.03.12',
        inquiry_title: '배송 문의',
        inquiry: '실크소재인지 다른 소재인지 알수 있나요? 실크소재인지 다른 소재인지 알수 있나요?',
        inquiry_answer: null,
        lock: false,
        attachFileList: [],
      },
      {
        writer: 'aand****',
        date: '2022.03.13',
        inquiry_title: '소재가 바뀐건가요?',
        inquiry: '실크소재인지 다른 소재인지 알수 있나요?',
        inquiry_answer:'해당 상품은 실크 소재입니다. 단, 정확한 소재 특성은 상품이미지를 참고해 주세요.',
        lock: true,
        attachFileList : [
          'https://img.thehandsome.com/md/publish/dummy/attach-file-img1.png',
        ],
      },
      { 
        writer: 'aand****',
        date: '2022.03.14',
        inquiry_title: '재입고 일정문의 드립니다.',
        inquiry: '실크소재인지 다른 소재인지 알수 있나요?',
        inquiry_answer:'해당 상품은 실크 소재입니다. 단, 정확한 소재 특성은 상품이미지를 참고해 주세요.',
        lock: false,
        attachFileList: [],
      },
      {
        writer: 'nha****',
        date: '2022.03.15',
        inquiry_title: '상품 문의',
        inquiry: '실크소재인지 다른 소재인지 알수 있나요?',
        inquiry_answer:'해당 상품은 실크 소재입니다. 단, 정확한 소재 특성은 상품이미지를 참고해 주세요.',
        lock: true,
        attachFileList : [
          'https://img.thehandsome.com/md/publish/dummy/attach-file-img0.png',
        ],
      },
    ],
    DialogQnAWrite : false, // 221207 이중팝업 : 추가
  }),
  watch : {
    DialogQnAWrite(){ // 221207 이중팝업 : 추가
      const me = this
      me.preventPageScroll(me.DialogQnAWrite)
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    dominFieldSet(val) {
      if (val === 'direct') this.domainDirectFieldShow = true
      else this.domainDirectFieldShow = false
    },
    openDialogQnAWrite(){ // 221207 이중팝업 : 추가
      this.DialogQnAWrite = true
    },
    closeDialogQnAWrite(){ // 221207 이중팝업 : 추가
      this.DialogQnAWrite = false
    }
  },
}
</script>

<style lang="scss" scoped></style>
