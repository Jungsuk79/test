<template>
    <div class="tpm-reward-popup" @drag="popupTouch">
        
        <div class="tpmr-title">
            <div v-if="msgType=='a'">한섬마일리지와<br/>사은품을 받았어요</div>
            <div v-if="msgType=='m'">한섬마일리지를 받았어요</div>
            <div v-if="msgType=='g'">사은품을 받았어요</div>
        </div>

        <div class="tpmr-center">
            <div class="particles"></div>
        </div>

        <div class="tpmr-reward">
            <div v-if="mileage" class="tpmr-item tpmr-mileage">
                <div class="tpmrr-icon"></div>
                <div class="tpmrr-desc">총 획득한 마일리지</div>
                <div class="tpmrr-text"><em>{{mileage}}</em>M</div>
            </div>
            <div v-if="coupon" class="tpmr-item tpmr-coupon">
                <div class="tpmrr-icon"></div>
                <div class="tpmrr-desc">사은품</div>
                <div class="tpmrr-text"><em>{{coupon}}</em> 쿠폰</div>
            </div>
            <div v-if="gift" class="tpmr-item tpmr-gift">
                <div class="tpmrr-icon"></div>
                <div class="tpmrr-desc">사은품</div>
                <div class="tpmrr-text"><em>{{gift}}</em></div>
            </div>
        </div>

        <div class="tpmr-text">
            <div>획득한 마일리지로 더한섬닷컴과 함께 하세요.</div>
            <div>
                플러스맵 첫 참여시 지급되는 웰컴 기프트는<br/>
                가입시 입력한 배송지로 배송되오니<br/>
                배송지를 확인해 주세요.
            </div>
            <div>
                <button @click="closePopup">리워드 확인하기</button>
            </div>
        </div>


        <button class="tpm-close" @click="closePopup"></button>
        
    </div>
</template>

<script>
import EventBus from '~/api/common/EventBus'

export default {
  props: {
    mileage: {
      type: String,
      default: () => {
        return ""
      },
    },
    gift: {
      type: String,
      default: () => {
        return ""
      },
    },
    coupon: {
      type: String,
      default: () => {
        return ""
      },
    }
  },
  data: () => ({
    msgType:"",

    si: -1,
    si2: -1,
    ms: 0,
    cl: null,

    fireworking: false
  }),

  created(){
    const me = this

    const m = me.mileage.length > 0
    const g = (me.gift + me.coupon).length > 0
    if(m && g){
        me.msgType = "a"
    }else if(m){
        me.msgType = "m"
    }else if(g){
        me.msgType = "g"
    }
  },

  mounted(){
    const me = this
    clearInterval(me.si)
    me.si = setTimeout(me.initFirework, 800)
  },

  methods: {
    popupTouch(e){
        e.preventDefault()
    },

    initFirework(){
        const me = this

        if(me.fireworking){ return }
        me.fireworking = true

        const pc = me.$el.querySelector(".tpmr-center")
        const cl = pc.classList
        cl.remove("up")
        me.$el.querySelectorAll(".particles > div").forEach((p)=>{
            p.remove()
        })
        const ps = me.$el.querySelector(".particles")
        const arr = []
        clearInterval(me.si2)

        // 파티클 생성
        let i, p, s, scl, rnd, clr
        for(i=0; i<50; i++){
            p = document.createElement("div")
            s = document.createElement("span")
            p.appendChild(s)
            p.classList.add((Math.random() < 0.5) ? "c" : "p")
            rnd = Math.random()
            if(rnd < 0.33){
                clr = "#5A8FF9"
            }else if(rnd < 0.66){
                clr = "#FF6868"
            }else{
                clr = "#AD7BB0"
            }

            scl = Math.random() / 2 + 0.5
            p.setAttribute("style", "--c:"+clr+";--s:"+scl+";")
            ps.appendChild(p)
            arr.push(p)
        }

        let x, y, dy, dx, r
        arr.forEach((p)=>{
            x = Math.round(Math.random() * 80 - 40)
            y = Math.round(Math.random() * -40 - 50)
            p.x = x
            p.dx = Math.round(Math.random() * 16 - 8)
            p.y = y
            p.dy = y / 4
            p.r = Math.round(Math.random() * 360)
            p.dr = x / 4
        })

        me.si2 = setInterval(()=>{
            let cnt = 0
            arr.forEach((p)=>{
                x = p.x
                y = p.y
                r = p.r
                if(y < 800){
                    dx = p.dx
                    dy = p.dy + 1
                    x = x + dx
                    y = y + dy
                    r = r + p.dr
                    p.x = x
                    p.y = y
                    p.dy = dy
                    p.r = r
                    p.style.left = x + "px"
                    p.style.top = y + "px"
                    p.style.transform = "rotate(" + r + "deg)"
                    cnt++
                }
            })
            if(!cl.contains("up") && p.dy > 0){
                cl.add("up")
            }
            if(cnt === 0){
                clearInterval(me.si2)
                me.fireworking = false
            }
        }, 20)
    },

    random(r, m){
        return Math.round(Math.random() * r + m)
    },

    
    closePopup(){
        const me = this
        clearInterval(me.si)
        clearInterval(me.si2)
        EventBus.$emit("closePlusMapReward")
    }
  },// methods
}
</script>

<style lang="scss"></style>
