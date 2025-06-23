<template>
  <DialogBasic
   class="popup-recommedID" 
    header-title="" 
    @hide="closeDialog">
    <!-- [240115]제휴사 코드 입력 안내 추가-->
    <template #body>
      <div class="cmp-tabs tabs-contents mb-20">
        <v-tabs v-model="tab" fixed-tabs>
          <v-tab>추천인 ID 등록</v-tab>
          <v-tab>제휴사 코드 등록</v-tab>
        </v-tabs>
      </div>
      <div class="tab-content">
        <v-tabs-items v-model="tab" touchless>
          <v-tab-item :transition="false">
            <div class="inner">
              <p class="cmp-font fnt-18">추천인 ID를 등록해주세요!<br>고객님과 추천인 모두 5천원 쿠폰을 드립니다.</p>
              
              <ul class="cmp-list list-dotType pt-10">
                <li>H.Point 통합회원가입 고객 대상, 첫 로그인 후 7일 간 등록 가능</li>
                <li>등록자 및 추천인 모두 등록 즉시 쿠폰 지급</li>
              </ul>

              <div class="cmp-form-box mt-24">
                <p class="form-tit">추천인 ID</p>
                <v-text-field
                  v-model="model1"
                  :rules="model1Rule1"
                  outlined type="text"
                  label="추천인 ID를 입력해 주세요."
                  class="cmp-form-input"
                  clearable 
                  ></v-text-field>
              </div>

              <v-btn
                depressed
                tile
                large
                block
                disabled
                :ripple="false"
                color="primary"
                class="mt-34">
                등록하기
              </v-btn>
            </div>
          </v-tab-item>
          <v-tab-item :transition="false">
            <div class="inner">
              <p class="cmp-font fnt-18">제휴사 코드를 등록해주세요!<br>코드를 등록한 고객님께 특별한 혜택을 드립니다.</p>
              
              <ul class="cmp-list list-dotType pt-10">
                <li>H.Point 통합회원가입 고객 대상, 첫 로그인 후 7일 간 등록 가능</li>
                <li>등록 즉시 쿠폰 지급 (마이페이지 〉  헤택관리 〉 쿠폰함에서확인)</li>
              </ul>

              <div class="cmp-form-box mt-24">
                <p class="form-tit">제휴사 코드</p>
                <v-text-field
                  v-model="model2"
                  :rules="model1Rule2"
                  outlined type="text"
                  label="제휴사 코드를 입력해 주세요."
                  class="cmp-form-input"
                  clearable 
                  ></v-text-field>
              </div>

              <v-btn
                depressed
                tile
                large
                block
                disabled
                :ripple="false"
                color="primary"
                class="mt-34">
                등록하기
              </v-btn>
            </div>

          </v-tab-item>
        </v-tabs-items>
      </div>
      

    </template>
    
    <template #footer>
      <v-layout align-center justify-space-between>
        <v-checkbox label="오늘 하루 그만 보기" class="cmp-form-checkbox"></v-checkbox>
        <button @click="closeDialog">닫기</button>
      </v-layout>

    </template>
    <!-- //[240115]제휴사 코드 입력 안내 추가 -->
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
export default {
  components: {
    DialogBasic,
  },
  data: () => ({
    tab: null,
    DialogBasic: false, // 팝업
    model1: '',
    model2: '',
    model1Rule1: [(v) => !!v || '추천인 ID가 올바르지 않습니다.'],
    model1Rule2: [(v) => !!v || '제휴사 코드가 올바르지 않습니다.'],
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
</style>
