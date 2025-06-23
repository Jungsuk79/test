<template>
    <div class="tpm-finish-popup" @drag="popupTouch">
        
        <div class="tpm-center-cnt">
            <div class="tpm-center" @click="initFirework">
                <div class="tpm-pie" style="--a:0"></div>
                <div class="particles"></div>
                <div class="tpm-circle"></div>
                <div class="tpm-check"></div>
            </div>
        </div>

        <div class="tpm-text">
            <div>플러스맵을 완주했어요.</div>
            <div>새로운 플러스맵에 도전해 보세요!</div>
            <div>
                <button @click="closePopup">새로운 프러스맵 보기</button>
            </div>
        </div>


        <button class="tpm-close" @click="closePopup"></button>
        
    </div>
</template>

<script>
import EventBus from '~/api/common/EventBus'

export default {
  props: {
  },
  data: () => ({
    si: -1,
    si2: -1,
    ms: 0,
    cl: null,

    fireworking: false
  }),

  mounted(){
    const me = this
    me.cl = me.$el.querySelector(".tpm-center").classList
    clearInterval(me.si)
    me.si = setInterval(me.tick, 100)
  },

  methods: {
    popupTouch(e){
        e.preventDefault()
    },

    tick(){
        const me = this
        me.ms++

        switch(me.ms){
        case 7:
            me.cl.add("check1")
            break
        case 8:
            me.cl.add("check2")
            break
        case 10:
            me.initPie()
            break
        case 14:
            me.initFirework()
            clearInterval(me.si)
            break
        // no default
        }
    },

    

    initPie(){
        const me = this
        clearInterval(me.si2)
        let a = 0
        const pie = me.$el.querySelector(".tpm-pie")
        me.si2 = setInterval(()=>{
            a += 20
            if(a >= 348){
                a = 348
                clearInterval(me.si2)
            }
            pie.setAttribute("style", "--a:"+a)
        }, 15)
    },

    initFirework(){
        const me = this

        if(me.fireworking){ return }
        me.fireworking = true

        const pc = me.$el.querySelector(".tpm-center")
        const cl = pc.classList
        // cl.remove("on")
        cl.remove("pulse")
        cl.remove("up")
        setTimeout(()=>{
            cl.add("pulse")
            cl.add("blowup")
        }, 10)
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
                cl.add("on")
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
        EventBus.$emit("closePlusMapFinish")
    }
  },// methods
}
</script>

<style lang="scss"></style>
