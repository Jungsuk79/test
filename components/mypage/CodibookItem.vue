<template>
    <div class="codibook-layout-box" :class="['codibook-layout-box-'+index, {'has-image':data.image_url, 'img-loaded':loaded}]" @click="selectItem">
      <div class="clb-wrap">
        <div class="clb-center" :style="{left:data.x+'%', top:data.y+'%'}">
            <div class="clb-transform" :style="{transform:'rotate('+data.rotate+'deg) scaleX('+scaleX+') scaleY('+scaleY+')'}">
                <img :src="data.image_url" @load="imgLoaded" />
            </div>
        </div>
        <button class="del-btn" @click="deleteImage"></button>
        <button class="add-btn" @click="addImage"></button>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
    index: {
      type: Number,
      default: () => {
        return 0
      },
    },
    click: {
      type: Function,
      default: () => {
        return function(){}
      },
    }
  },
  data: () => ({
    el: null,
    img: null,
    scaleX: 1,
    scaleY: 1,
    loaded: false,
    canvas: null,
    skip: false
  }),

  created(){
    // const me = this
    // me.update()
  },
  mounted(){
    const me = this
    me.canvas = document.createElement("canvas")
    me.update()
    /* if(me.index === 1 && me.$el.classList.contains("editing")){
      me.showToast("여기를 눌러 추가하세요", me.$el.querySelector(".add-btn"))
    } */
  },
  methods: {
    imgLoaded(){
      const me = this
      const el = me.$el
      const img = me.$el.querySelector("img")
      const style = img.style
      me.el = el
      me.img = img

      const w = el.clientWidth
      const h = el.clientHeight
      const iw = img.clientWidth
      const ih = img.clientHeight
      const rw = w / iw
      const rh = h / ih

      const z = me.data.zoom
      z.zoom = Math.max(rw, rh)
      const zz = z.zoom
      z.min = zz * 0.2
      z.max = zz * 2
      z.tick = zz * 0.05
      me.update()

      style.left = -Math.round(iw / 2) + "px"
      style.top = -Math.round(ih / 2) + "px"

      me.$parent.$parent.imageInited()

      me.loaded = true
    },
    update(update){
      const me = this
      const d = me.data
      if(d.zoom === undefined){ return }// '코디 레이아웃 선택' 페이지에서 실행 안 함
      const zoom = d.zoom.zoom

      if(d.flipH){
          me.scaleX = -zoom
      }else{
          me.scaleX = zoom
      }
      if(d.flipV){
          me.scaleY = -zoom
      }else{
          me.scaleY = zoom
      }

      if(update === true){
        me.$forceUpdate()
      }
    },
    selectItem(e){
      const me = this
      if( !(me.skip && me.$el.classList.contains("on")) ){
        me.$parent.selectItem(me.data, me)
      }
      me.skip = false
    },
    deleteImage(){
      const me = this
      me.loaded = false
      me.skip = true
      me.$parent.$parent.deleteImage(me.data)
    },
    addImage(){
      const me = this
      me.skip = true
      me.$parent.$parent.showProdLayer(me.data)
    },
    getImage(){
      const me = this
      if(me.loaded){
        const el = me.$el
        const img = el.querySelector("img")
        const cvs = me.canvas// el.querySelector("canvas")
        const ctx = cvs.getContext("2d")
        const d = me.data
        const w = el.clientWidth
        const h = el.clientHeight
        const hw = w / 2
        const hh = h / 2
        const z = d.zoom.zoom
        const x = img.offsetLeft * z + hw
        const y = img.offsetTop * z + hh
        const iw = img.naturalWidth * z
        const ih = img.naturalHeight * z
        // move
        let ox = (d.x - 50) * w / 100
        let oy = (d.y - 50) * h / 100
        // canvas translate
        let temp

        cvs.setAttribute("width", w)
        cvs.setAttribute("height", h)

        // rotate
        if(me.data.rotate !== 0){
          ctx.translate(hw, hh)
          ctx.rotate( me.data.rotate / 180 * Math.PI )
          ctx.translate(-hw, -hh)
        }
        switch(me.data.rotate){
          case 90:
            temp = ox
            ox = oy
            oy = -temp
            break
          case 180:
            ox = -ox
            oy = -oy
            break
          case 270:
            temp = ox
            ox = -oy
            oy = temp
            break
          // no default
        }
        
        // flip
        if(d.flipH){
          ctx.translate(w, 0)
          ctx.scale(-1, 1)
          ox = -ox
        }
        if(d.flipV){
          ctx.translate(0, h)
          ctx.scale(1, -1)
          oy = -oy
        }

        ctx.drawImage(img, x + ox, y + oy, iw, ih)
        return cvs
      }
      
      return null
    }
  },
}
</script>

<style lang="scss" scoped></style>
