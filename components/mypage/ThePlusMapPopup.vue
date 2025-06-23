<template>
    <div class="tpm-popup" @drag="popupTouch" :status="status" :phase="phase">

        <div v-if="phase===1" class="epic-center orbit-center">
            <div class="orbit"><div class="sphere circle"><span></span></div></div>
            <div class="orbit"><div class="sphere circle"><span></span></div></div>
            <div class="orbit"><div class="sphere plus"><span></span></div></div>
            <div class="orbit"><div class="sphere plus"><span></span></div></div>
        </div>

        <div v-if="phase===2" class="epic-center ripple-center">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="text"><em>메인 볼</em>은<br/><em>몇칸 이동</em>이 나올까요?</div>
        </div>

        <div v-if="phase===3" class="epic-center main-center main-center-1">
            <div class="circle"></div>
            <div class="text">{{n1}}</div>
        </div>

        <div v-if="phase===4" class="epic-center main-center main-center-2">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="text text-1">{{n1}}</div>
            <div class="text text-2">이번에 나올 <em>플러스 볼</em>은?</div>
        </div>

        <div v-if="phase===5" class="epic-center main-center plus-center-1">
            <div class="plus"><span></span></div>
        </div>

        <div v-if="phase===6" class="epic-center main-center plus-center-2">
            <div class="plus" style="--p:0;--a:270;--r:0;--o:1;--op:0;"><span></span></div>
        </div>

        <div v-if="phase===7" class="epic-center main-center plus-center-3">
            <div class="circle"></div>
            <div class="text">{{n2}}</div>
        </div>

        <div v-if="phase===8" class="epic-center split-center">
            <div class="circle circle-1"><span>{{n1}}</span></div>
            <div class="circle circle-2" style="--r:35deg"><span>{{n2}}</span></div>
            <div class="text end-text">
                <div>플러스 맵에서</div>
                <div>
                    <div class="bold">총 <span class="text-1"><em>{{n1}}</em><em>+</em><em>{{n2}}</em></span>칸</div>을 이동해요
                </div>
            </div>
        </div>

        <div v-if="phase===9" class="epic-center pulse-center">
            <div class="particles"></div>
            <div class="circle" @click="toggleText"><span>{{n1 + n2}}</span></div>
            <div class="text end-text">
                <div>플러스 맵에서</div>
                <div>
                    <div class="bold">총 <span class="text-1"><em>{{n1}}</em><em>+</em><em>{{n2}}</em><em>{{n1+n2}}</em></span><span class="text-2">{{n1+n2}}</span>칸</div>을 이동해요
                </div>
            </div>
            <button @click="closePopup">플러스맵 보기</button>
        </div>

        <button class="tpm-close" @click="closePopup"></button>
        
    </div>
</template>

<script>
import EventBus from '~/api/common/EventBus'
import Animator from '~/api/common/Animator'

export default {
  props: {
  },
  data: () => ({
    phase: 1,// 모션 진행 단계
    si: -1,// 전체 모션 타이머
    ms: 0,// 전체 모션 진행 시간 (100밀리세컨드)
    si2: -1,// 세부 모션 타이머
    animator : new Animator(),

    n1: 0,// 메인 볼 숫자
    n2: 0,// 플러스 볼 숫자

    // 궤도모션 원 2개, 플러스 2개 제어
    sphere: [
        {x:0, dx:10, r:0, dr:0},
        {x:0, dx:10, r:0, dr:0},
        {x:0, dx:10, r:0, dr:0},
        {x:0, dx:10, r:0, dr:0}
    ],

    fireworking: false,

    status: "orbit"

  }),

  mounted(){
    const me = this
    me.loadData()
  },

  methods: {
    popupTouch(e){
        e.preventDefault()
    },

    loadData(){
        const me = this

        // //////////////// 데이터 연동 할 것
        me.n1 = Math.ceil(Math.random() * 3)
        me.n2 = Math.ceil(Math.random() * 3)
        // //////////////// 데이터 연동 할 것

        // orbit
        me.$nextTick(me.initOrbit)
    },

    startTimer(){
        const me = this
        clearInterval(me.si)
        me.si = setInterval(me.tick, 100)
    },
    stopTimer(){
        const me = this
        clearInterval(me.si)
    },

    initOrbit(){
        const me = this

        const spheres = me.$el.querySelectorAll(".sphere")
        // const orbits = me.$el.querySelectorAll(".orbit")
        const rad = Math.PI / 180
        const R = 140
        const S = 0.75
        let radius = R
        let i, s, d, r, sst, scale, ratio
        // let z, o, ost

        for(i=0; i<4; i++){
            // o = orbits[i]
            r = Math.round(Math.random() * 360)
            // o.style.transform = "rotate(" + r + "deg)"

            s = me.sphere[i]
            if(i === 0){
                s.x = 300
                s.dx = 10
                s.dr = 2
            }else{
                s.x = Math.round(Math.random() * 360)
                s.dx = Math.round(Math.random() * 5) + 5
                s.dr = -10// Math.ceil(Math.random() * 2) * (Math.random() < 0.5 ? 1 : -1)
            }
            s.rad = 20 + Math.round(Math.random() * 60)
            s.r = r
        }

        let count = 0
        clearInterval(me.si2)
        me.si2 = setInterval(()=>{
            for(i=0; i<4; i++){
                s = me.sphere[i]
                d = spheres[i]
                // o = orbits[i]
                sst = d.style
                // ost = o.style
                
                s.r = (s.r + s.dr + 360) % 360

                s.x += s.dx
                if(s.x >= 360){
                    s.x = 0
                    if(i === 0){
                        count++
                        if(count === 1){
                            me.$el.querySelector(".orbit-center").classList.add("hide")
                        }
                        if(count === 2){
                            clearInterval(me.si2)
                            me.startTimer()
                            me.nextPhase("ripple")
                        }
                    }
                }
                radius = R
                scale = S
                if(i === 0){
                    if(count === 1 && s.x >= 270){
                        ratio = (360 - s.x) / 90
                        radius = Math.round(R * ratio)
                        scale = S + 0.25 * (1 - ratio)
                    }else if(count >= 2){
                        radius = 0
                        scale = 1
                    }
                }
                // z = Math.cos(s.x * rad) / 4 + 0.75

                // ost.zIndex = Math.round(z * 100)
                // ost.transform = "rotate(" + s.r + "deg)"
                sst.left = Math.sin(s.x * rad) * radius + "px"
                sst.top = Math.cos(s.x * rad) * radius + "px"
                sst.transform = "scale("+scale+", "+scale+") rotate(-" + s.r + "deg)"
                // sst.transform = "scale(" + z + ", " + z + ") rotate(-" + s.r + "deg)"
            }
        }, 20)

        me.$nextTick(()=>{
            me.$el.querySelector(".orbit-center").classList.add("show")
        })
    },

    initPie(){
        const me = this
        me.$nextTick(()=>{
            const targ = me.$el.querySelector(".plus-center-2 .plus")
            
            let p = 0
            let a, r, o, x
            me.animator.start(0, 360, 500, function(v){
                p = Math.round(v)
                // a = Math.round(270 - p / 2)
                // r = Math.round(p / 4)
                // o = (300 - p) / 300
                a = p
                r = Math.round(p / 2)
                x = 360 - p
                o = (x > 180 ? 1 : x / 180)
                // if(o < 0){ o = 0 }
                targ.setAttribute("style", "--p:" + p + ";--a:" + a + ";--r:" + r + ";--o:" + o + ";--op:" + (1-o))
            })
        })
    },

    initRotate(){
        const me = this
        clearInterval(me.si2)
        const pi = Math.PI / 180
        const c1 = me.$el.querySelector(".split-center .circle-1")
        const c2 = me.$el.querySelector(".split-center .circle-2")
        // me.$el.querySelector(".split-center").style.top = "50%"
        let a = 0
        let v = 1
        let o = 1
        let r = 105
        let x, y
        me.si2 = setInterval(()=>{
            if(a < 720){
                a = a + v
                v += o
                if(v >= 30){
                    o = -1
                }
                
                if(a < 200){
                    r -= 2
                }else if(a < 400){
                    r -= 3
                }else if(a < 600){
                    r -= 4
                }else{
                    r -= 5
                }
                if(r < 0){ r = 0 }
                r = 120
                r = Math.floor((720 - a) / 720 * 120)
                x = Math.round(Math.cos((a - 90) * pi) * r)
                y = Math.round(Math.sin((a - 90) * pi) * r)
                c1.style.left = x + "px"
                c1.style.top = y + "px"
                x = Math.round(Math.cos((a + 90) * pi) * r)
                y = Math.round(Math.sin((a + 90) * pi) * r)
                c2.setAttribute("style", "left:"+x+"px;top:"+y+"px;--r:"+(a + 35)+"deg")
            }else{
                c1.style.left = "0"
                c1.style.top = "0"
                a += 30
                if(a > 1045){
                    a = 1045
                    clearInterval(me.si2)
                }
                c2.setAttribute("style", "left:0;top:0;--r:"+(a + 35)+"deg")
            }

        }, 10)
    },

    initFirework(){
        const me = this

        if(me.fireworking){ return }
        me.fireworking = true

        const pc = me.$el.querySelector(".pulse-center")
        const cl = pc.classList
        // cl.remove("on")
        cl.remove("pulse")
        cl.remove("up")
        setTimeout(()=>{
            cl.add("pulse")
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
                if(!cl.contains("on")){
                    cl.add("on")
                    me.combineText()
                }
            }
            if(cnt === 0){
                clearInterval(me.si2)
                me.fireworking = false
            }
        }, 20)
    },
    combineText(){
        const me = this
        const t1 = me.$el.querySelector(".text.end-text .text-1")
        const ts = t1.style
        let ml = ""
        let mr = ""
        let w, w1, w2
        t1.querySelectorAll("em").forEach((em, idx)=>{
            switch(idx){
            case 0:
                w = em.clientWidth
                ml = w + "px"
                ts.marginLeft = ml
                em.style.position = "absolute"
                em.style.top = 0
                em.style.left = -w + "px"
                break
            case 1:
                w1 = em.clientWidth + "px"
                ts.width = w1
                break
            case 3:
                w2 = em.clientWidth + "px"
                break
            case 2:
                mr = em.clientWidth + "px"
                ts.marginRight = mr
                em.style.position = "absolute"
                em.style.top = 0
                em.style.left = "100%"
                break
            // no default
            }
        })

        t1.animate(
            [
                {
                    marginLeft: ml,
                    marginRight: mr,
                    width: w1
                },{
                    marginLeft: "0px",
                    marginRight: "0px",
                    width: w2
                }
            ],
            {
                duration: 300,
                fill: "forwards"
            }
        )
        t1.querySelector("em:nth-child(1)").animate(
            [
                {
                    transform: "scale(1, 1)",
                    opacity: 1
                },{
                    transform: "scale(0, 0)",
                    opacity: 0
                }
            ],
            {
                duration: 300,
                fill: "forwards"
            }
        )
        t1.querySelector("em:nth-child(3)").animate(
            [
                {
                    transform: "scale(1, 1)",
                    opacity: 1
                },{
                    transform: "scale(0, 0)",
                    opacity: 0
                }
            ],
            {
                duration: 300,
                fill: "forwards"
            }
        )

        t1.querySelector("em:nth-child(2)").animate(
            [
                {
                    transform: "scale(1, 1)",
                    opacity: 1
                },{
                    transform: "scale(5, 5)",
                    opacity: 1
                },{
                    transform: "scale(1, 1)",
                    opacity: 0
                }
            ],
            {
                duration: 500,
                fill: "forwards"
            }
        )
        t1.querySelector("em:nth-child(4)").animate(
            [
                {
                    transform: "scale(5, 5)",
                    opacity: 0
                },{
                    transform: "scale(5, 5)",
                    opacity: 0
                },{
                    transform: "scale(1, 1)",
                    opacity: 1
                }
            ],
            {
                duration: 500,
                fill: "forwards"
            }
        )
    },
    toggleText(){
        const me = this

        /* const cl = me.$el.querySelector(".epic-center.pulse-center").classList
        if(cl.contains("colored")){
            cl.remove("colored")
        }else{
            cl.add("colored")
        } */

        me.initFirework()
    },

    nextPhase(st){
        const me = this
        me.phase++

        if(st){
            me.status = st
        }
    },

    tick(){
        const me = this
        me.ms ++

        switch(me.ms){
        case 10:// 12:
            me.nextPhase("main ball")
            break
        case 22:// 32:
            me.nextPhase("ripple")
            break
        case 33:// 43:
            me.nextPhase("plus")
            break
        case 38:// 53:
            me.nextPhase("pie")
            me.initPie()
            break
        case 45:// 60:
            me.nextPhase("plus ball")
            break
        case 55:// 70:
            me.nextPhase("split")
            break
        case 60:// 75:// 80:
            me.initRotate("rotate")
            break
        case 69:// 84:// 92:// 97:
            me.nextPhase("firework")
            me.stopTimer()
            me.$nextTick(me.initFirework)
            break
        // no default
        }
    },

    closePopup(){
        const me = this
        clearInterval(me.si2)
        me.stopTimer()
        me.animator.stop()
        EventBus.$emit("plusMapShowResult", me.n1 + me.n2)
    }
  },// methods
}
</script>

<style lang="scss"></style>
