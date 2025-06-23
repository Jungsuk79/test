<template>
  <div class="contents contents-type2">
    <div class="content-wrap">
      <div class="contents-layout">
        <CommonContentsLeftMenu :title="'마이페이지'" :url="'/json/cl_left_menu.json'" :active="'/ko/CL/codiBook'" />
        <div class="contents-r-layout">
          <div class="codibook-edit-wrap">
            <div class="cmp-page-tit">
              <h2 class="tit">코디하기</h2>
            </div>

            <div class="codibook-hr"></div>
            <div class="codibook-editor">
              <div>
                <v-text-field v-model="title" outlined type="text" label="코디 제목을 입력하세요." clearable class="cmp-form-input"></v-text-field>
              </div>

              <div class="codibook-edit" :class="{'before-edit':beforeEditing}">
                <CodibookLayout id="codibookLayout" :data="layout" :editing="true" />
                <div v-if="beforeEditing" class="select-first-prod">
                  <div>
                    나의 옷장에서 상품을 선택해 보세요.
                  </div>
                  <button class="select-first-prod-btn" @click="showProdLayer()">상품 선택하기</button>
                </div>
              </div>

              <div class="codibook-button-layer" :class="{'before-edit':beforeEditing}">
                <div class="edit-btns">
                  <button v-for="idx in 8" :key="idx" class="codibook-icon" :class="['edit-btn-'+idx, {on:activeButton===idx}]" @click="selectButton(idx)"></button><!-- 드래그 2022-10-05 -->
                  <div class="history-btns">
                    <button class="backward" :class="{active : history.index > 0}" @click="historyGo(-1)"><span class="invisible">되돌리기</span></button>
                    <button class="forward" :class="{active : history.index < history.count-1}" @click="historyGo(1)"><span class="invisible">원복하기</span></button>
                  </div>
                </div>
                <!-- 레이아웃 -->
                <div v-if="activeButton===1" class="edit-sub-btns edit-sub-layout _edit-sub-swipe">
                  <button v-for="idx in 10" :key="idx" class="codibook-icon" :class="['layout-'+idx, {on:idx===layout.type}]" @click="selectLayout(idx)"></button>
                </div>
                <!-- 레이아웃 -->
                <!-- 이동 -->
                <div v-if="activeButton===2" class="edit-sub-btns edit-sub-btns-space edit-sub-move">
                  <button class="codibook-icon move-left" :class="{disabled:!buttonEnabled}" @click="changeProp('move', 'left')"></button>
                  <button class="codibook-icon move-up" :class="{disabled:!buttonEnabled}" @click="changeProp('move', 'up')"></button>
                  <button class="codibook-icon move-right" :class="{disabled:!buttonEnabled}" @click="changeProp('move', 'right')"></button>
                  <button class="codibook-icon move-down" :class="{disabled:!buttonEnabled}" @click="changeProp('move', 'down')"></button>
                </div>
                <!-- 이동 -->
                <!-- 회전 -->
                <div v-if="activeButton===3" class="edit-sub-btns edit-sub-btns-space edit-sub-rotate">
                  <button :class="{disabled:!buttonEnabled}" @click="changeProp('rotate', 0)">0˚</button>
                  <button :class="{disabled:!buttonEnabled}" @click="changeProp('rotate', 90)">90˚</button>
                  <button :class="{disabled:!buttonEnabled}" @click="changeProp('rotate', 180)">180˚</button>
                  <button :class="{disabled:!buttonEnabled}" @click="changeProp('rotate', 270)">270˚</button>
                </div>
                <!-- 회전 -->
                <!-- 반전 -->
                <div v-if="activeButton===4" class="edit-sub-btns edit-sub-btns-space edit-sub-flip">
                  <button class="codibook-icon flip-h" :class="{disabled:!buttonEnabled}" @click="changeProp('flip', 'h')"></button>
                  <button class="codibook-icon flip-v" :class="{disabled:!buttonEnabled}" @click="changeProp('flip', 'v')"></button>
                </div>
                <!-- 반전 -->
                <!-- 줌 -->
                <div v-if="activeButton===5" class="edit-sub-btns edit-sub-btns-space edit-sub-zoom">
                  <button class="codibook-icon zoom-in" :class="{disabled:!buttonEnabled}" @click="changeProp('zoom', 'in')"></button>
                  <button class="codibook-icon zoom-out" :class="{disabled:!buttonEnabled}" @click="changeProp('zoom', 'out')"></button>
                </div>
                <!-- 줌 -->
                <!-- 그리기 -->
                <div v-if="activeButton===6" class="edit-sub-btns edit-sub-draw _edit-sub-swipe">
                  <button v-for="c, idx in colors" :key="idx" :class="{on:selectedColor===c}" @click="selectColor(c)">
                    <span :style="{'background-color':c}"></span>
                  </button>
                </div>
                <!-- 그리기 -->
                <!-- 배경색 -->
                <div v-if="activeButton===7" class="edit-sub-btns edit-sub-bg _edit-sub-swipe">
                  <button v-for="idx in 10" :key="idx" :class="['bgc-'+idx, {on:layout.border===idx}]" @click="selectBg(idx)">
                    <span></span>
                  </button>
                </div>
                <!-- 배경색 -->
                <!-- 드래그 2022-10-05-->
                <div v-if="activeButton === 8" class="edit-sub-btns edit-sub-drag">
                  <button class="codibook-icon drag"></button>
                </div>
                <!-- 드래그 끝 -->
                <div class="save-btns">
                  <button @click="resetAll">초기화</button>
                  <button @click="saveCodibook">저장하기</button>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
    <CodibookLayer />
  </div>
</template>

<script>
import CodibookLayout from "~/components/mypage/CodibookLayout.vue"
import CodibookLayer from "~/components/mypage/CodibookLayer.vue"
import EventBus from "~/api/common/EventBus"

export default {
  components: {
    CodibookLayout,
    CodibookLayer
  },
  layout: 'LayoutBasics',
  data: () => ({
    editor: null,
    title: "",
    layout : {
      type : 0,
      border : 1,
      list : []
    },
    activeButton: 1,
    selectedColor : "#000",
    colors: [
      "#000",
      "#F77568",
      "#F4955B",
      "#EFB94C",
      "#F4E973",
      "#A7D954",
      "#40C9F5",
      "#5599FC",
      "#ED4B97",
      "#D854F8"
    ],
    history: {
      list : [],
      index: -1,
      count: -1
    },
    imageAddIndex: 0,
    selectedItem: null,
    selectedBox: null,
    buttonEnabled: false,
    beforeEditing: true
  }),
  created() {
  },
  mounted(){
    const me = this
    const param = me.getParameter()
    me.editor = me.$el.querySelector("#codibookLayout").__vue__
    let layout = parseInt(param.layout, 10)
    if(isNaN(layout) || layout < 1 | layout > 10){
      layout = 1
    }
    me.selectLayout(layout, "default")



    // me.$nextTick(me.showProdLayer)
  },
  methods:{
    // 하단 버튼 클릭
    selectButton(idx){
      const me = this
      if(me.activeButton === idx){
        me.activeButton = 0
      }else{
        me.activeButton = idx
      }

      if(me.activeButton === 6){
        me.editor.setDrawing(true, me.selectedColor)
      }else{
        me.editor.setDrawing(false)
      }
    },

    getDefaultData(){
      return {
        "image_url" : "",
        "x" : 50,
        "y" : 50,
        "zoom" : {
          "min" : 0.2,
          "max" : 2, 
          "tick" : 0.05,
          "zoom" : 1
        },
        "rotate" : 0,
        "flipH" : false,
        "flipV" : false,
        "product_cd" : ""
      }
    },

    // 레이아웃 변경
    selectLayout(idx, type){
      const me = this
      const lo = me.layout
      if(lo.type === idx){ return }

      lo.type = idx

      let len = 2
      switch(idx){
        case 3:
        case 4:
          len = 3
          break
        case 5:
        case 6:
          len = 4
          break
        case 7:
        case 8:
          len = 5
          break
        case 9:
        case 10:
          len = 6
          break
        // no default
      }

      const list = lo.list
      if(list.length > len){
        list.length = len
      }else if(list.length < len){
        let i
        const cnt = len - list.length
        for(i=0; i<cnt; i++){
          list.push(me.getDefaultData())
        }
      }

      if(type !== "default"){
        type = "layout"
      }

      me.historyChanged(type)
    },// selectLayout

    // 그리기 색상 변경
    selectColor(c){
      const me = this
      me.selectedColor = c
      me.editor.setDrawing(true, me.selectedColor)
    },

    // 배경색 변경
    selectBg(idx){
      const me = this
      me.layout.border = idx
      me.historyChanged("bg")
    },

    // 회전, 이동, 줌, 반전
    changeProp(prop, val){
      const me = this
      const item = me.selectedItem
      const z = item.zoom
      const box = me.selectedBox
      if(item && box){
        switch(prop){
          case "rotate":
            item.rotate = val
            break

          case "flip":
            if(val === "h"){
              item.flipH = ! item.flipH
            }else{
              item.flipV = ! item.flipV
            }
            box.update()
            break

          case "move":
            switch(val){
              case "left":
                item.x -= 5
                break
              case "right":
                item.x += 5
                break
              case "up":
                item.y -= 5
                break
              case "down":
                item.y += 5
                break
              // no default
            }
            break

          case "zoom":
            if(val === "in"){
              z.zoom += z.tick
              if(z.zoom > z.max){
                z.zoom = z.max
              }
            }else{
              z.zoom -= z.tick
              if(z.zoom < z.min){
                z.zoom = z.min
              }
            }
            box.update()
            break
          // no default
        }
      }
      me.historyChanged(prop)
    },

    // 상품 활성화
    selectItem(item, box){
      const me = this
      if(me.selectedItem === item){
        me.selectedItem = null
        me.selectedBox = null
      }else{
        me.selectedItem = item
        me.selectedBox = box
      }
      me.checkButtonEnable()
    },

    checkButtonEnable(){
      const me = this
      me.buttonEnabled = (me.selectedItem !== null && (me.selectedItem.image_url && me.selectedItem.image_url.length > 0) )
    },
    
    // 상품선택 레이어 열기
    showProdLayer(item){
      const me = this
      const arr = []
      let itm

    me.layout.list.forEach(function(obj){
      if(obj.product_cd && obj.product_cd !== ""){
        itm = {
          product_cd : obj.product_cd,
          image_url : obj.image_url
        }
      }else{
        itm = {
          product_cd : "",
          image_url : ""
        }
      }
      arr.push(itm)
    })
    EventBus.$emit("showCodiProdLayer", arr)

      /* const list = me.layout.list
      const len = list.length
      let cnt = 0
      let required = true
      me.imageAddIndex = 0
      list.forEach(function(obj, idx){
        if(item === obj){
          me.imageAddIndex = idx
        }
        if(obj.product_cd && obj.product_cd !== ""){
          cnt++
          if(idx === 0){
            required = false
          }
        }
      })

      EventBus.$emit("showCodiProdLayer", len - cnt, required) */
    },

    addImages(objs){
      const me = this
      const list = me.layout.list
      let item
      objs.forEach(function(obj, idx){
        item = list[idx]
        item.product_cd = obj.product_cd
        item.image_url = obj.image_url
      })
      /* const len = list.length
      let i, n, item
      objs.forEach(function(obj){
        for(i=0;i<len; i++){
          n = (i + me.imageAddIndex) % len
          item = list[n]
          if(item.product_cd === undefined || item.product_cd === ""){
            item.product_cd = obj.product_cd
            item.image_url = obj.image_url
            break
          }
        }
      }) */
      me.$forceUpdate()
      me.historyChanged("image")
      me.checkButtonEnable()
      me.beforeEditing = false
    },

    // 이미지 삭제
    deleteImage(item){
      const me = this
      const obj = me.getDefaultData()
      let key
      for(key in obj){
        item[key] = obj[key]
      }
      me.historyChanged()
      me.checkButtonEnable()
    },

    // 이미지 로드 후에 zoom 등 데이터 업데이트
    imageInited(){
      const me = this
      const h = me.history
      h.list[h.index].data = JSON.stringify(me.layout)
    },

    // 히스토리 이전/다음
    historyGo(flag){
      const me = this
      const h = me.history

      if( (flag < 0 && h.index <= 0) || (flag > 0 && h.index >= h.count - 1) ){ return }

      h.index += flag
      const obj = JSON.parse( h.list[h.index].data )
      let key, from, to, k
      for(key in obj){
        if(key === "list"){
          if(me.layout.list.length !== obj.list.length){
            me.layout.list.length = obj.list.length
          }
          obj.list.forEach(function(itm, idx){
            from = obj.list[idx]
            to = me.layout.list[idx]
            
            if(to === undefined){
              to = me.getDefaultData()
              me.layout.list[idx] = to
            }

            for(k in from){
              to[k] = from[k]
            }
          })
        }else{
          me.layout[key] = obj[key]
        }
      }

      me.editor.setDrawingData(h.list[h.index].drawing)

      me.$el.querySelectorAll(".codibook-layout-box").forEach(function(box){
        box.__vue__.update(true)
      })
    },

    // 히스토리 변경
    historyChanged(type){
      const me = this
      const h = me.history
      let adding = true
      let obj

      if(h.count > 0){
        obj = h.list[h.count - 1]
        adding = obj.type !== type
      }

      if(h.index + 1 < h.count){
        h.list.length = h.index + 1
        adding = true
      }

      if(! ["move", "zoom", "draw"].includes(type)){
        adding = true
      }
      if(h.index + 1 < h.count){
        h.list.length = h.index + 1
      }

      if(adding){
        obj = {}
      }else{
        obj = h.list[h.count - 1]
      }
      // const obj = {}
      obj.type = type
      obj.data = JSON.stringify(me.layout)
      obj.drawing = me.editor.getDrawingData()
      if(adding){
        h.list.push(obj)
      }
      h.count = h.list.length
      h.index = h.count - 1
    },

    // 초기화
    resetAll(){
      const me = this
      const h = me.history

      if(h.count <= 1){ return }

      h.list.length = 1;
      h.index = 0
      h.count = 1
      me.layout = JSON.parse(h.list[0].data)
      me.editor.setDrawingData(h.list[0].drawing)
    },// resetAll

    // 이미지 저장
    saveCodibook(){
      const me = this

      const len = me.layout.list.length
      let cnt = 0
      let cd
      me.layout.list.forEach(function(item){
        cd = item.product_cd
        if(cd && cd !== ""){
          cnt++
        }
      })

      if(cnt < len){
        me.showToast("코디 상품을 추가해 주세요.", "top", {offset:56})
      }else{
        const img = me.editor.getResultImage()
        // //////////////////////////// 서버에 이미지 저장하기 /////////////////////////////////
        sessionStorage.setItem("codiResultImage", img)
        // //////////////////////////// 서버에 이미지 저장하기 /////////////////////////////////
        location.href = "./codiComplete"
      }
    },
  }// methods
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/closet.scss';
</style>
