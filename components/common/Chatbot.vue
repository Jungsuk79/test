<template>
  <v-fab-transition>
    <v-btn
      v-scroll="scroll"
      :class="{ hide: hide }"
      color="primary"
      fab
      small
      rounded
      outlined
      class="btn-chatbot"
      @click="chatbot"
      @click.stop="scrollTop"
    >
      Chatbot
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  data: () => ({
    hide: true,
  }),
  mounted() {
    const me = this
    me.scroll()
    console.log('시작')
    window.Kakaoi.init({
      serviceName: 'haai_cbt',
    })
    this.chatbot()
  },
  methods: {
    chatbot() {
      window.Kakaoi.UI.createChat({
        title: '하이(HAAi)',
        subTitle: '봇과 대화중',
        profileName: '하이',
        profileImageUrl: '/images/haai_cbt_profile.png', // 프로필이미지 URL로 대체
        bubbleBackgroundColor: '#aabbcc',
        bubbleTextColor: '##aabbcc',
        activeKeyword: '시작',
        // blockButtonClickInterceptor: (buttonInfo) {
        // },
        // onChatSend: (text) {
        // },
        // onChatReceive: (payloads) {
        // },
        // closeButtonClickInterceptor: (e) {
        // },
        // floatingButtonClickInterceptor: (e) {
        // },
      })
    },
    scrollTop() {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      })
    },
    scroll() {
      const me = this
      me.hide = window.scrollY <= 100
    },
  },
}
</script>

<style lang="scss" scoped></style>
