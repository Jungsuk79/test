<template>
  <div class="brand-slider" :class="[{'size-type2':size2},{'system-type':system},{'alone':listLength===1}]" @mousedown="touchS($event)" @mousemove="touchM()" @mouseup="touchE($event)" @dragstart.prevent.self>
    <div class="slider-cnt">
      <div v-for="(item,index) in data" :key="index" class="slider-item" :class="[{'init':baseIdx===index && initComplete===false},{'base':baseIdx===index && initComplete===true},{'active':activeIdx===index && activeIdx !== baseIdx}]">
        <div v-background-image="{url:item.image_url, shading:true}"></div>
        <!-- [개발 확인] eslint-disable -->
        <div class="info-cnt ani-box">
          <div v-if="item.tags" class="tags ani-cnt">
            <span v-for="(item2, index2) in item.tags" :key="index2" class="ani-txt">{{item2}}</span>
          </div>
          <div v-if="item.desc&&system" class="desc ani-cnt"><div class="ani-txt" v-html="item.desc"></div></div>
          <div class="tit ani-cnt"><div class="ani-txt" v-html="item.title"></div></div>
          <div v-if="item.desc&&!system" class="desc ani-cnt"><div class="ani-txt" v-html="item.desc"></div></div>
        </div>
        <!-- eslint-disable -->
        <!-- <div role="link" tabindex="0" class="link-box" @click="goToLink(item.link_url)"></div> -->
        <a v-if="item.link_url" class="link-block" href="javascript:;" @click="goRouteLink('/ko/DP/main')"></a>
      </div>
    </div>
    <template v-if="listLength > 1">
      <button class="slider-prev-btn" @click="slidePrev()">이전</button>
      <button class="slider-next-btn" @click="slideNext()">다음</button>
      <div v-if="!system" class="slider-pagination">
        <span v-for="(pagination, idx) in listLength" :class="{'active':idx===activeIdx}"><em>{{idx + 1}}</em></span>
      </div>
      <div v-if="system" class="slider-paing-num">{{activeIdx+1}}/{{listLength}}</div>
    </template>
  </div>
</template>
<script>

export default {
  components: {
    
  },
  props: {
    data: {
      type: Array,
      default: ()=>{ return [] }
    },
    size2 : {
      type: Boolean,
      default : false
    },
    system : {
      type : Boolean,
      default : false,
    }
  },
  data: () => ({
    initComplete : null,
    listLength : null,
    baseIdx:0,
    activeIdx:0,
    slideInterval : null,
    intervalTime : 5000,
    enableLink : false,
    touch : {
      ing : false,
      x1 : null,
      x2 : null,
      y1 : null,
      y2 : null,
    },
    animation : {
      ing : false,
      time : 3500, // 애니메이션 총 시간(이미지 opcity 애니 시간 + 마지막 텍스트 딜레이 시간+애니시간 )
    }
  }),
  created(){
    const me = this
    me.listLength = me.data.length
  },
  mounted(){
    const me = this
    me.slideInit()
  },
  destroyed(){
    
  },
  methods: {
    goToLink(url){
      const me = this
      if(!me.touch.ing){console.log("링크 이동하기", url)}
    },
    touchS(e){
      const me = this
      me.touch.x1 = e.clientX
      me.touch.y1 = e.clientY
    },
    touchM(){
      const me = this
      me.touch.ing = true
    },
    touchE(e){
      const me = this
      if(me.touch.x1 === e.clientX && me.touch.y1 === e.clientY){
        me.enableLink = true
        return
      }else{
        me.enableLink = false
      }
      me.touch.x2 = e.clientX
      me.touch.y2 = e.clientY
      const gapX = me.touch.x2 - me.touch.x1
      const gapY = me.touch.y2 - me.touch.y1

      if(Math.abs(gapX) > Math.abs(gapY)*1.8){
        if(gapX > 0) me.slidePrev()
        else if(gapX < 0) me.slideNext()
      }

      setTimeout(()=>{me.touch.ing = false},200)
    },
    slideInit(){
      const me = this
      me.animation.ing = true
      setTimeout(()=>{
        me.initComplete = false
        if(me.listLength > 1){
          me.slideInterval = setInterval(()=>{
            me.slide('next')
          },me.intervalTime)
        }

        //    [퍼블수정]23.02.23 모션수정
        if(me.data[me.activeIdx].tags) me.animation.time = 1400
        else me.animation.time = 1000

        console.log(me.animation.time)

        setTimeout(()=>{
          me.initComplete = true
          me.animation.ing = false
        },me.animation.time)
      },500)
    },
    slide(direction){
      const me = this
      if(!me.animation.ing){
        me.animation.ing = true

        if(direction==='prev'){
          if(me.activeIdx===0) me.activeIdx = me.listLength - 1
          else me.activeIdx--;
        }else if(direction==='next'){
          if(me.activeIdx===me.listLength-1) me.activeIdx = 0
          else me.activeIdx++;
        }

        //    [퍼블수정]23.02.23 모션수정
        if(me.data[me.activeIdx].tags) me.animation.time = 1400
        else me.animation.time = 1000

        setTimeout(()=>{
          me.baseIdx = me.activeIdx
          me.animation.ing = false
        },me.animation.time)
      }
    },
    slidePrev(){
      const me = this
      me.slide('prev')
      if(me.listLength > 1) clearInterval(me.slideInterval)
    },
    slideNext(){
      const me = this
      me.slide('next')
      if(me.listLength > 1) clearInterval(me.slideInterval)
    },
    goRouteLink(path){
      if(!this.enableLink){
        return
      }
      this.$router.push(path)
    }
  },
}
</script>