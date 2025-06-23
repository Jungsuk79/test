<template>
  <v-app class="ui-wrap">
    <v-app-bar app>
      <button class="g-nav-icon" @click="drawer = !drawer">
        <span>메뉴</span>
      </button>
      <div class="g-tit">퍼블리싱 가이드 FO</div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <ul class="guideList">
        <li v-for="(item, idx) in guideList" :key="idx">
          <nuxt-link :to="{ path: item.url }">{{ item.name }}</nuxt-link>
        </li>
      </ul>
    </v-navigation-drawer>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      drawer: null,
      guideList: [
        {
          url: '/ko/guide/path',
          name: '퍼블리싱 화면 경로(KO)',
        },
        {
          url: '/ko/guide/pathEn',
          name: '퍼블리싱 화면 경로(EN)',
        },
        {
          url: '/ko/guide/path2',
          name: 'PO 퍼블리싱 화면 경로',
        },
        {
          url: '/ko/guide/css',
          name: 'CSS 작업규칙',
        },
        {
          url: '/ko/guide/naming',
          name: '파일 / 폴더명',
        },
        {
          url: '/ko/guide/Structure',
          name: '레이아웃 구조',
        },
        {
          url: '/ko/guide/library',
          name: '라이브러리 작업규칙',
        },
        {
          url: '/ko/guide/api',
          name: 'API',
        },
      ],
    }
  },
  mounted(){
    const me = this
    me.checkDevMode()
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.v-main {
  margin-top: 0;
}
a {
  color: #444;
  outline: none;
}
a:link,
a:active,
a:visited,
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
  color: #727272;
}
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
button {
  overflow: hidden;
  background-color: transparent;
  cursor: pointer;
}
.g-nav-icon {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0px;
  width: 50px;
  height: 100%;
  color: transparent;
  vertical-align: middle;
}
.g-nav-icon:before,
.g-nav-icon:after {
  content: '';
}
.g-nav-icon:before,
.g-nav-icon:after,
.g-nav-icon span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 2px;
  overflow: hidden;
  background-color: #000;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}
.g-nav-icon:before {
  margin-top: -6px;
}
.g-nav-icon:after {
  margin-top: 6px;
}
.g-nav-icon span {
  text-indent: -9999px;
}
.g-tit {
  font-size: 17px;
  margin-left:30px;
}
.guide {
  margin: 50px;
  text-align: left;
}
.guideList {
  padding: 25px 0;
  padding-right: 30px;
}
.guideList li {
  padding-bottom: 10px;
}
.guideList li a {
  display: block;
  color: #777 !important;
  font-size: 15px;
  position: relative;
}

.guideList .nuxt-link-active {
  color: #000 !important;
}
.guideList .nuxt-link-active:after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -1px;
  width: 6px;
  height: 6px;
  border: 1px solid #777;
  border-width: 1px 1px 0 0;
  transform: rotate(45deg) translate(0, -50%);
}
</style>
