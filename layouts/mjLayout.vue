<template>
  <v-app dark>
    <!-- <v-navigation-drawer app>
    </v-navigation-drawer> -->

    <v-card class="overflow-hidden">
      <v-main id="scroll-target" style="min-height: 100%;">
        <v-app-bar 
          fixed
          color="white"
          elevate-on-scroll>
          <v-btn h class="ma-2" style="width:200px;" text icon to="/">
          <img src="../assets/Hlogo.png"/>
          </v-btn>
          <v-spacer />
          <v-row>
            <!-- <v-text-field v-model="searchInput" @keyup.enter="onSearchEnter(searchInput)" flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="검색할 태그를 입력해주세요" class="hidden-sm-and-down" clearable>
            </v-text-field> -->
            <!-- <nav v-on:click.prevent>
                <NuxtLink to="/contents/brandA"> Brand A </NuxtLink>
                <p v-show="active">Show</p>
                <NuxtLink to="/contents/brandB"> Brand B </NuxtLink>
                <NuxtLink to="/Error">Error</NuxtLink>
                <div @mouseover="mouseOver">Hover over me!</div>


            </nav> -->
            <ul class="menu">
              <li @mouseover="listOne = true" @mouseleave="listOne = false">
                <a href="#">Brand</a>
                <transition name="fade">
                  <ul v-if="listOne" @click="listOne = false">
                    <li><a href="/mjkang/contents/brandA">Product List</a></li>
                    <li><a href="/mjkang/contents/brandB">Infinite Scroll</a></li>
                  </ul>
                </transition>
              </li>
              <li @mouseover="listTwo = true" @mouseleave="listTwo = false">
                <a href="#">Menu Item</a>
                <transition name="fade">
                  <ul v-if="listTwo" @click="listTwo = false">
                    <li><a href="#">Sub Menu Item</a></li>
                    <li><a href="#">Sub Menu Item</a></li>
                    <li><a href="#">Sub Menu Item</a></li>
                  </ul>
                </transition>
              </li>
              <li @mouseover="listThree = true" @mouseleave="listThree = false">
                <a href="#">Menu Item</a>
                <transition name="fade">
                  <ul v-if="listThree" @click="listThree = false">
                    <li><a href="#">Sub Menu Item</a></li>
                    <li><a href="#">Sub Menu Item</a></li>
                    <li><a href="#">Sub Menu Item</a></li>
                  </ul>
                </transition>
              </li>
              <li @mouseover="listFour = true" @mouseleave="listFour = false">
                <a href="#">Menu Item</a>
                <transition name="fade">
                  <ul v-if="listFour" @click="listFour = false">
                    <li><a href="#">Sub Menu Item</a></li>
                    <li><a href="#">Sub Menu Item</a></li>
                    <li><a href="#">Sub Menu Item</a></li>
                  </ul>
                </transition>
              </li>
            </ul>
          </v-row>
          <v-spacer />
          <v-spacer />
          <!-- <v-btn v-if="isLogin" to="/user/favorite" class="ma-2" text icon><v-icon>mdi-heart</v-icon></v-btn>
          <v-btn v-if="isLogin" to="/user/cart" class="ma-2" text icon><v-icon>mdi-cart</v-icon></v-btn>
          <v-btn v-if="isLogin" to="/user/purchase/list" class="ma-2" text icon><v-icon>mdi-clipboard-text</v-icon></v-btn>
          <v-btn v-if="!isLogin" to="/user/login">로그인</v-btn>
          <v-btn v-if="isLogin" @click="logoutSubmit">로그아웃</v-btn>
          <v-btn v-if="isLogin" to="/user/mypage" class="ma-2" text icon><v-icon>mdi-account</v-icon></v-btn> -->
        </v-app-bar>
    	  <v-container style="max-height: 100%" class="overflow-y-auto">
          <v-row justify="center">
            <nuxt />
          </v-row>
        </v-container>
        <v-btn
            v-show="scroll>0"
            fab
            fixed
            dark
            bottom        
            v-scroll="onScroll"    
            @click="goTop"
        >
          <v-icon>mdi-menu-up</v-icon>
        </v-btn>
        <!-- <v-container class="overflow-y-auto" id="scroll-target" style="max-height: 100%;">
          <nuxt />
        </v-container> -->
      </v-main>
    </v-card>

  </v-app>
</template>
<script>
// if (typeof window !== 'undefined') { alert("default") }
// import VueCookies from "vue-cookie";

// Vue.use(VueCookies);
// Vue.$cookies.config("7d");
// this.$cookies.set(test, "testValue");

// const cookie = this.$cookies.get(test);
// console.log(cookie); //testValue
// this.$cookies.remove("test");
// //특정 쿠키가 있는지 확인
// this.$cookies.isKey("test");

// //모든 쿠키 키 가져오기
// this.$cookies.keys().join("\n");

// //모든 쿠키 다 지우기
// this.$cookies.keys().forEach(cookie => this.$cookies.remove(cookie));
import { mapGetters} from 'vuex'
export default {
  data () {
    return {
      searchInput: '',
      mountains: [],
      listOne:   false,
      listTwo:   false,
      listThree: false,
      listFour:  false,
    	scroll: 0,
      scrollTarget: null
    }
  },

  computed: {
    ...mapGetters([
      'isLogin',
    ])
  },

  mounted() {
    // goTop을 위해 mount 시 element 설정
    console.log(document.getElementById('scroll-target'));
    this.scrollTarget = document.getElementById('scroll-target');
  },

  methods: {
    onScroll(e) {
    	// 스크롤 움직일 때 마다 호출됨
      console.log(e);
    	this.scroll = window.scrollY;
    },
	  goTop() {
      window.scrollY = 0;
      console.log(this.scrollTarget.scrollTop);
      if (this.scrollTarget) {
        this.scrollTarget.scrollTop = 0;
      }
    },
    
    
  }
}
</script>

<style>
:root {
  --primary-color: #00c58e;
  /* overflow-y: hidden; */
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
nav a:hover {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

main {
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 1rem;
  max-width: 1280px;
  text-align: center;
}

/* ul {
  list-style-type: none;
  padding: 0;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
} */

nav {
  padding: 0 1rem;
}

.menu {  
  font: 14px/1.5 'Open Sans', sans-serif;
  font-weight: 600;
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu a {
  display: block;
  padding: 20px;
  color: #000;
  text-decoration: none;
}

.menu li {
  display:block;
  float: left;
  position: relative;
  /* background: #222; */
  color: #fff;
  min-width: 180px;
}

.menu li ul {
  position: absolute;
  left: 0;
  top: 61px;
  margin: 0;
  padding: 0;
}

.menu li ul li {
  background: #fff;
  transition: background .2s;
}

.menu li ul li:hover {
  background: #444;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

</style>