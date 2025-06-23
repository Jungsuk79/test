<template>
    <div class="codibook-layout"
        :class="[
            'codibook-layout-' + data.type,
            'codibook-border-' + data.border,
            {
              'drawing' : drawingBoard.active
            }
        ]"
    >
        <div class="codibook-layout-content">
            <CodibookItem v-for="item, idx in data.list" :key="idx" :data="item" :index="idx+1" :class="{on:selectedItem===item, editing:editing===true}" />
        </div>
        <div class="codibook-layout-border">
            <div class="clb clb1"></div>
            <div class="clb clb2"></div>
            <div class="clb clb3"></div>
            <div class="clb clb4"></div>
        </div>
        <canvas class="drawing-pad" @mousedown="startDraw"></canvas>
        <canvas class="result-canvas"></canvas>
    </div>
</template>

<script>
import CodibookItem from '~/components/mypage/CodibookItem'

export default {
  components: {
    CodibookItem
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
    // 편집 가능 / 단순 디스플레이 상태 구분
    editing: {
      type: Boolean,
      default: () => {
        return false
      },
    },
  },
  data: () => ({
    selectedItem: null,
    drawingBoard: {
      el: null,
      active: false,
      color: "#000",
      dummy: null,
      x:0,
      y:0
    }
  }),

  created(){
  },

  mounted(){
    const me = this
    const el = me.$el
    const w = el.clientWidth
    const h = el.clientHeight
    me.drawingBoard.el = el.querySelector(".drawing-pad")
    me.drawingBoard.el.setAttribute("width", w)
    me.drawingBoard.el.setAttribute("height", h)
    const ctx = me.drawingBoard.el.getContext("2d")
    ctx.imageSmoothingEnabled = true
    me.drawingBoard.dummy = new Image()
    me.drawingBoard.dummy.addEventListener("load", me.updateDrawing)
  },

  methods: {
    selectItem(item, box){
      const me = this
      if(me.editing !== true){ return }

      if(me.selectedItem === item){
        me.selectedItem = null
      }else{
        me.selectedItem = item
      }
      me.$parent.selectItem(item, box)
    },
    setDrawing(active, color){
      const me = this
      me.drawingBoard.active = active
      me.drawingBoard.color = color
    },

    startDraw(e){
      e.preventDefault()
      // if(e.touches && e.touches.length > 0){
        const me = this
        const cvs = me.drawingBoard.el
        const ctx = cvs.getContext("2d")
        const t = e// e.touches[0]
        const x = t.clientX - me.offsetLeft(cvs)
        const y = t.clientY - me.offsetTop(cvs) + window.scrollY

        me.drawingBoard.x = x
        me.drawingBoard.y = y

        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.strokeStyle = me.drawingBoard.color
        ctx.lineWidth = 2
        ctx.lineCap = "round"
        ctx.lineJoin = "round"
        ctx.lineTo(x, y)
        ctx.stroke()

        document.addEventListener("mousemove", me.drawing)
        document.addEventListener("mouseup", me.endDraw)
      // }
    },
    drawing(e){
      // if(e.touches && e.touches.length > 0){
        const me = this
        const cvs = me.drawingBoard.el
        const ctx = cvs.getContext("2d")
        const t = e// e.touches[0]
        const x = t.clientX - me.offsetLeft(cvs)
        const y = t.clientY - me.offsetTop(cvs) + window.scrollY

        const dx = me.drawingBoard.x - x
        const dy = me.drawingBoard.y - y
        const d = Math.sqrt(dx * dx +  dy * dy)
        if(d > 5){
          ctx.lineTo(x, y)
          ctx.stroke()

          me.drawingBoard.x = x
          me.drawingBoard.y = y
        }
      // }
    },
    endDraw(e){
      const me = this
      document.removeEventListener("mousemove", me.drawing)
      document.removeEventListener("mouseup", me.endDraw)
      me.$parent.historyChanged("draw")
    },

    getDrawingData(){
      const me = this
      const cvs = me.drawingBoard.el
      return cvs.toDataURL("image/png")
    },
    setDrawingData(drawing){
      const me = this
      me.drawingBoard.dummy.setAttribute("src", drawing)
    },
    updateDrawing(){
      const me = this
      const cvs = me.drawingBoard.el
      const cw = cvs.width
      const ch = cvs.height
      const ctx = cvs.getContext("2d")
      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(me.drawingBoard.dummy, 0, 0)
    },

    getResultImage(){
      const me = this
      const el = me.$el
      const cvs = el.querySelector(".result-canvas")
      const ctx = cvs.getContext("2d")
      const cw = el.clientWidth
      const ch = el.clientHeight
      cvs.setAttribute("width", cw)
      cvs.setAttribute("height", ch)

      let color = "#fff"
      let offset = 0
      let x, y, w, h, img

      // 배경색
      if(me.data.border > 1){
        color = window.getComputedStyle(el, null).getPropertyValue("background-color")
        offset = 5
      }
      ctx.fillStyle = color
      ctx.fillRect(0, 0, cw, ch)

      // 박스
      el.querySelectorAll(".codibook-layout-box").forEach(function(box){
        x = box.offsetLeft + offset
        y = box.offsetTop + offset
        ctx.fillStyle = "#fff"
        ctx.fillRect(x, y, box.clientWidth, box.clientHeight)

        if(box.__vue__){
          img = box.__vue__.getImage()
          if(img){
            ctx.drawImage(img, x, y)
          }
        }
      })

      // 경계선
      el.querySelectorAll(".clb").forEach(function(line){
        x = line.offsetLeft + offset
        y = line.offsetTop + offset
        w = line.clientWidth
        h = line.clientHeight

        if(w === 0 || h === 0){ return }

        ctx.beginPath()
        ctx.moveTo(x, y)
        if(w === 1){
          ctx.lineTo(x, y + h)
        }else{
          ctx.lineTo(x + w, y)
        }
        ctx.strokeStyle = color
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // 그리기
      ctx.drawImage(me.drawingBoard.el, 0, 0)

      // 데이터 추출
      return cvs.toDataURL("image/png")
    },// getResultImage
  },// methods
}
</script>

<style lang="scss" scoped></style>
