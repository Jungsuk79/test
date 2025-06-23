<template>
  <div class="cmp-alert-layout">
    <!--
      - 버튼명 변경 가능 : alertConfirmBtnText(확인), alertCancelBtnText(취소)
      - 컨텐츠 영역 slot #contents 로 커스텀 가능
      - 버튼영역 내부 버튼 slot #button 으로 커스텀 가능
    -->
    <slot name="contents">
      <!-- 컨텐츠 영역 slot #contents 로 커스텀 가능 -->
      <div class="cmp-alert-cont">
        <!-- eslint-disable -->
        <p
          v-if="alertText !== '' && alertText !== null"
          class="txt"
          v-html="alertText"
        ></p>
        <p
          v-if="alertSubText !== '' && alertSubText !== null"
          class="sub-txt"
          v-html="alertSubText"
        ></p>
        <u
          v-if="addButton !== '' && addButton !== null"
          class="sub-txt"
          @click="buttonEvent"
          v-html="addButton"
        ></u>
        <!-- eslint-disable -->
      </div>
    </slot>
    <div class="cmp-btnsArea">
      <slot name="button">
        <!-- 버튼영역 내부 버튼 slot #button 으로 커스텀 가능 -->
        <template v-if="alertType === 'confirm'">
          <v-btn outlined large color="primary" @click="$emit('hide')">{{
            alertCancelBtnText
          }}</v-btn>
          <v-btn large color="primary" @click="$emit('submit')">{{
            alertConfirmBtnText
          }}</v-btn>
        </template>
        <template v-else>
          <v-btn large color="primary" @click="$emit('submit')">{{
            alertConfirmBtnText
          }}</v-btn>
        </template>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DialogAlert',
  props: {
    alertType: {
      // type : 'alert', 'confirm'
      type: String,
      default: 'alert',
    },
    alertText: {
      // br태그 사용 가능
      type: String,
      default: '',
    },
    alertSubText: {
      // br태그 사용 가능
      type: String,
      default: '',
    },
    alertConfirmBtnText: {
      // 확인 버튼명 변경 가능
      type: String,
      default: '확인',
    },
    alertCancelBtnText: {
      // 취소 버튼명 변경 가능
      type: String,
      default: '취소',
    },
    addButton: {
      // 버튼 용 text
      type: String,
      default: '',
    },
  },
  methods: {
   
  },
}
</script>

<style lang="scss" scoped></style>
