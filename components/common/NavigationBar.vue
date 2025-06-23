<template>
  <div class="navigation-bar">
    <!-- 펼침 메뉴 없을때 -->
    <template v-if="testType==='base'">
      <ul class="nav-menu">
        <li v-for="(item,index) in testMenu" :key="index" :class="{'on':item.selected}" @click="testClick"><!-- testClick 퍼블 화면 확인용 -->
          <nuxt-link :to="{paht:item.link_url}">
            {{item.name}}
          </nuxt-link>
        </li>
      </ul>
    </template>
    <!-- //펼침 메뉴 없을때 -->

    <template v-if="testType==='fold' || testType==='fold2'">
      <div class="nav-fold-menu">
        <ul v-click-outside="menuClose" class="fold-menu">
          <li v-for="(item,index) in testFoldMenu" :key="index">
            <button :class="{'open':selectMenu===index}" @click="menuOpen(index)">{{item.name}}</button>
            <ul>
              <li v-for="(item2,index2) in item.list" :key="index2" :class="{'on':item2.selected}">
                <nuxt-link :to="{path:item2.link_url}"><!-- [퍼블수정]22.12.28 수정 -->
                  <span>{{item2.name}}</span>  
                  <span class="hidden">{{item2.name}}</span>  
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="bottom-menu">
          <li v-for="(item,index) in testbottomMenu" :key="index" :class="{'on':item.selected}" @click="testClick2"><!-- testClick2 퍼블 화면 확인용 -->
            <nuxt-link :to="{path:item.link_url}"><!-- [퍼블수정]22.12.26 수정 -->
              <span>{{item.name}}</span>  
              <span class="hidden">{{item.name}}</span>  
            </nuxt-link>
          </li>
        </ul>
      </div>
    </template>
    <!-- 신규 케이스 - 퍼븛확인용 -->
    <template v-if="testType==='fold3'">
      <div class="nav-fold-menu">
        <ul v-click-outside="menuClose" class="fold-menu">
          <li v-for="(item,index) in testFoldMenu" :key="index">
            <button :class="{'open':selectMenu===index}" @click="menuOpen(index)">{{item.name}}</button>
            <ul>
              <li v-for="(item2,index2) in item.list" :key="index2" :class="{'on':item2.selected}">
                <nuxt-link :to="{path:item2.link_url}"><!-- [퍼블수정]22.12.28 수정 -->
                  <span>{{item2.name}}</span>  
                  <span class="hidden">{{item2.name}}</span>  
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="bottom-menu">
          <li v-for="(item,index) in testbottomMenu" :key="index" :class="{'on':item.selected}" @click="testClick3"><!-- testClick3 퍼블 화면 확인용 -->
            <nuxt-link :to="{path:item.link_url}"><!-- [퍼블수정]22.12.26 수정 -->
              <span>{{item.name}}</span>  
              <span class="hidden">{{item.name}}</span>  
            </nuxt-link>
          </li>
        </ul>
      </div>
    </template>
    <!-- //신규 케이스 - 퍼븛확인용 -->
  </div>
</template>

<script>
export default {
  props: {
    test : { // 퍼블화면 테스트용
      type : String,
      default : 'fold'
    }
  },
  data: () => ({
    selectMenu : null,
    // Start : test 퍼블 화면 확인 용
    testType : null,
    testMenu : [
      {
        name : 'ALL',
        link_url : '#n',
        selected : true
      },
      {
        name : '여성',
        link_url : '#n',
        selected : false
      },
      {
        name : '남성',
        link_url : '#n',
        selected : false
      },
      {
        name : '잡화',
        link_url : '#n',
        selected : false
      },
      {
        name : '뷰티',
        link_url : '#n',
        selected : false
      },
      {
        name : '라이프스타일',
        link_url : '#n',
        selected : false
      },
      {
        name : '키즈',
        link_url : '#n',
        selected : false
      },
      {
        name : '골프',
        link_url : '#n',
        selected : false
      },
    ],
    testFoldMenu : [],
    testFoldMenu2 : [
      {
        name : '여성',
        list : [
          {
            name : '여성',
            link_url : '#n',
            selected : true
          },
          {
            name : '남성',
            link_url : '#n',
            selected : false
          },
          {
            name : '잡화',
            link_url : '#n',
            selected : false
          },
          {
            name : '뷰티',
            link_url : '#n',
            selected : false
          },
          {
            name : '라이프스타일',
            link_url : '#n',
            selected : false
          }
        ]
      }
    ],
    testFoldMenu3 : [
      {
        name : '여성',
        list : [
          {
            name : '여성',
            link_url : '#n',
            selected : true
          },
          {
            name : '남성',
            link_url : '#n',
            selected : false
          },
          {
            name : '잡화',
            link_url : '#n',
            selected : false
          },
          {
            name : '뷰티',
            link_url : '#n',
            selected : false
          },
          {
            name : '라이프스타일',
            link_url : '#n',
            selected : false
          }
        ]
      },
      {
        name : '아우터',
        list : [
          {
            name : '여성ALL',
            link_url : '#n',
            selected : false
          },
          {
            name : '아우터',
            link_url : '#n',
            selected : true
          },
          {
            name : '탑',
            link_url : '#n',
            selected : false
          },
          {
            name : '드레스',
            link_url : '#n',
            selected : false
          },
          {
            name : '팬츠',
            link_url : '#n',
            selected : false
          },
          {
            name : '스커트',
            link_url : '#n',
            selected : false
          },
          {
            name : '캡슐 컬렉션*',
            link_url : '#n',
            selected : false
          }
        ]
      }
    ],
    testFoldMenucase2:[
      {
        name : '여성',
        list : [
          {
            name : '여성',
            link_url : '?TEST_TYPE=2',
            selected : true
          },
          {
            name : '남성',
            link_url : '?TEST_TYPE=2',
            selected : false
          },
          {
            name : '잡화',
            link_url : '?TEST_TYPE=2',
            selected : false
          },
          {
            name : '뷰티',
            link_url : '?TEST_TYPE=2',
            selected : false
          },
          {
            name : '라이프스타일',
            link_url : '?TEST_TYPE=2',
            selected : false
          }
        ]
      },
      {
        name : '캡슐 컬렉션*',
        list : [
          {
            name : '전체',
            link_url : '?TEST_TYPE=2',
            selected : false
          },
          {
            name : '아우터',
            link_url : '?TEST_TYPE=2',
            selected : false
          },
          {
            name : '탑',
            link_url : '?TEST_TYPE=2',
            selected : false
          },
          {
            name : '니트',
            link_url : '?TEST_TYPE=2',
            selected : false
          },
          {
            name : '캡슐 컬렉션*',
            link_url : '?TEST_TYPE=2',
            selected : true
          }
        ]
      },
    ],
    testFoldMenu4 : [
      {
        name : '여성',
        list : [
          {
            name : '여성',
            link_url : '?TEST_TYPE=2',
            selected : true
          },
          {
            name : '남성',
            link_url : '?TEST_TYPE=2',
            selected : false
          },
          {
            name : '잡화',
            link_url : '?TEST_TYPE=2',
            selected : false
          },
          {
            name : '뷰티',
            link_url : '?TEST_TYPE=2',
            selected : false
          },
          {
            name : '라이프스타일',
            link_url : '?TEST_TYPE=2',
            selected : false
          }
        ]
      },
      {
        name : '캡슐 컬렉션*',
        list : [
          {
            name : '전체',
            link_url : '?TEST_TYPE=2',
            selected : false
          },
          {
            name : '아우터',
            link_url : '?TEST_TYPE=2',
            selected : false
          },
          {
            name : '탑',
            link_url : '?TEST_TYPE=2',
            selected : false
          },
          {
            name : '니트',
            link_url : '?TEST_TYPE=2',
            selected : false
          },
          {
            name : '캡슐 컬렉션*',
            link_url : '?TEST_TYPE=2',
            selected : true
          }
        ]
      },
      {
        name : 'LÄTT',
        list : [
        {
          name : 'TIME',
          link_url : '?TEST_TYPE=2',
          selected : false
        },
        {
          name : 'SYSTEM',
          link_url : '?TEST_TYPE=2',
          selected : false
        },
        {
          name : "O'2nd",
          link_url : '?TEST_TYPE=2',
          selected : false
        },
        {
          name : 'LÄTT',
          link_url : '?TEST_TYPE=2',
          selected : true
        },
        {
          name : 'SJSJ',
          link_url : '?TEST_TYPE=2',
          selected : false
        },
        {
          name : 'MINE',
          link_url : '?TEST_TYPE=2',
          selected : false
        },
        {
          name : 'OBZEE',
          link_url : '?TEST_TYPE=2',
          selected : false
        },
        {
          name : 'the CASHMERE',
          link_url : '?TEST_TYPE=2',
          selected : false
        },
        ]
      }
    ],
    testbottomMenu : [],
    testbottomMenu2 : [
      {
        name : 'ALL',
        link_url : '#n',
        selected : true
      },
      {
        name : '아우터',
        link_url : '#n',
        selected : false
      },
      {
        name : '남성',
        link_url : '#n',
        selected : false
      },
      {
        name : '잡화',
        link_url : '#n',
        selected : false
      },
      {
        name : '뷰티',
        link_url : '#n',
        selected : false
      },
      {
        name : '라이프스타일',
        link_url : '#n',
        selected : false
      },
      {
        name : '키즈',
        link_url : '#n',
        selected : false
      },
      {
        name : '골프',
        link_url : '#n',
        selected : false
      },
    ],
    testbottomMenu3 : [
      {
        name : 'ALL',
        link_url : '#n',
        selected : true
      },
      {
        name : '재킷',
        link_url : '#n',
        selected : false
      },
      {
        name : '점프',
        link_url : '#n',
        selected : false
      },
      {
        name : '가디건/베스트',
        link_url : '#n',
        selected : false
      },
      {
        name : '트렌츠 코트',
        link_url : '#n',
        selected : false
      },
      {
        name : '코트',
        link_url : '#n',
        selected : false
      },
      {
        name : '다운/패딩',
        link_url : '#n',
        selected : false
      }
    ],
    testFoldMenucase2bottom : [
      {
        name : '전체',
        link_url : '#n',
        selected : true
      },
      {
        name : 'TIME',
        link_url : '?TEST_TYPE=2',
        selected : false
      },
      {
        name : 'SYSTEM',
        link_url : '?TEST_TYPE=2',
        selected : false
      },
      {
        name : "O'2nd",
        link_url : '?TEST_TYPE=2',
        selected : false
      },
      {
        name : 'LÄTT',
        link_url : '?TEST_TYPE=2',
        selected : false
      },
      {
        name : 'SJSJ',
        link_url : '?TEST_TYPE=2',
        selected : false
      },
      {
        name : 'MINE',
        link_url : '?TEST_TYPE=2',
        selected : false
      },
      {
        name : 'OBZEE',
        link_url : '?TEST_TYPE=2',
        selected : false
      },
      {
        name : 'the CASHMERE',
        link_url : '?TEST_TYPE=2',
        selected : false
      },
    ],
    testbottomMenu4 : [
      {
        name : 'LÄTT : 24FW THE FIRST',
        link_url : '?TEST_TYPE=2',
        selected : true
      },
      {
        name : 'LÄTT : 24FW CONTEMPORARY ESSENTIAL',
        link_url : '?TEST_TYPE=2',
        selected : false
      },
      {
        name : 'LÄTT : 24WI VISIONARY',
        link_url : '?TEST_TYPE=2',
        selected : false
      },
      {
        name : 'LÄTT : 24FA VISIONARY',
        link_url : '?TEST_TYPE=2',
        selected : false
      },
      {
        name : 'LÄTT : 24SUMMER RAIN DROP',
        link_url : '?TEST_TYPE=2',
        selected : false
      },
      {
        name : 'LÄTT : 24FW CONTEMPORARY ESSENTIAL',
        link_url : '?TEST_TYPE=2',
        selected : false
      },
      {
        name : 'LÄTT : 24WI VISIONARY',
        link_url : '?TEST_TYPE=2',
        selected : false
      },
      {
        name : 'LÄTT : 24WI VISIONARY',
        link_url : '?TEST_TYPE=2',
        selected : false
      },
    ],
    // End : test 퍼블 화면 확인 용
  }),
  created() { 
    // test 퍼블 화면 확인용
    const me = this
    me.testType = me.test
    if(me.testType==='base'){
      me.testFoldMenu = me.testFoldMenu2
      me.testbottomMenu = me.testbottomMenu2
    }else if(me.testType==='fold'){
      me.testFoldMenu = me.testFoldMenu3
      me.testbottomMenu = me.testbottomMenu2
    }else if(me.testType==='fold2'){
      me.testFoldMenu = me.testFoldMenu3
      me.testbottomMenu = me.testbottomMenu3
    }
  },
  mounted(){
    // 퍼블확인용
    const me = this
    if(location.search.includes("TEST_TYPE=2")){
      me.testType = me.test
      me.testType = 'fold3';
      me.testFoldMenu = me.testFoldMenucase2
      me.testbottomMenu = me.testFoldMenucase2bottom
    }
  },
  methods:{
    menuOpen(idx){
      const me = this
      if(me.selectMenu === idx) me.selectMenu = null
      else me.selectMenu = idx
    },
    menuClose(){
      const me = this
      me.selectMenu = null
    },
    testClick(){ // 퍼블 화면 확인용
      this.testType = 'fold'
    },
    testClick2(){ // 퍼블 화면 확인용
      const me = this
      me.testFoldMenu = me.testFoldMenu3
      me.testbottomMenu = me.testbottomMenu3
    },
    testClick3(){ // 퍼블 화면 확인용
      const me = this
      me.testFoldMenu = me.testFoldMenu4
      me.testbottomMenu = me.testbottomMenu4
    }
  }
}
</script>