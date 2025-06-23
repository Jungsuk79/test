import Vue from 'vue'

Vue.mixin({
    methods: {
        offsetTop(el) {
            let ot = 0
            while(el){
                ot += el.offsetTop
                el = el.offsetParent
            }
            return ot
        },
        offsetLeft(el) {
            let ot = 0
            while(el){
                ot += el.offsetLeft
                el = el.offsetParent
            }
            return ot
        },

        getHeader(){
            let header = this.header
            let hd
            if(header){
                return header
            }

            if(this.$root.$el && this.$root.$el.querySelector("#header")){
                header = this.$root.$el.querySelector("#header").__vue__
            }else{
                let el
                this.$root.$children.forEach(function(itm){
                    el = itm.$el
                    if(typeof(el) !== "undefined"){
                        if(el.id === "app"){
                            hd = itm.$el.querySelector("#header")
                            if(hd){
                                header = hd.__vue__
                            }
                        }
                    }
                })
            }

            this.header = header
            return header
        },
        setTitle(str, option){
            const header = this.getHeader()
            if(header){
                header.setHeaderTitle(str, option)
            }
        },
        setHeaderTransparent(transparent){
            const header = this.getHeader()
            if(header){
                header.setBGTransparent(transparent)
            }
        },
        setHeaderInvert(invert){
            const header = this.getHeader()
            if(header){
                header.setInvert(invert)
            }
        },

        getActionBar(){
            let actionbar = this.actionbar
            if(actionbar){
                return actionbar
            }

            if(this.$root.$el && this.$root.$el.querySelector("#actionbar")){
                actionbar = this.$root.$el.querySelector("#actionbar").__vue__
            }else{
                let el
                this.$root.$children.forEach(function(itm){
                    el = itm.$el
                    if(typeof(el) !== "undefined"){
                        if(el.id === "app"){
                            actionbar = itm.$el.querySelector("#actionbar").__vue__
                        }
                    }
                })
            }

            this.actionbar = actionbar
            return actionbar
        },
        setActionBar(vis){
            const ab = this.getActionBar()
            if(ab){
                ab.setVisible(vis)
            }
        },

        getDate(){
            const now = new Date()
            const m = now.getMonth() + 1
            const d = now.getDate()
            return "" + now.getFullYear() + (m < 10 ? "0"+m : m) + (d < 10 ? "0"+d : d)
        },

        checkDevMode(){
            if(location.search.includes("DEV_MODE=Y")){
                localStorage.setItem("DEV_MODE", "Y")
            }else if(location.search.includes("DEV_MODE=N")){
                localStorage.setItem("DEV_MODE", "")
            }

            if(localStorage.getItem("DEV_MODE") === "Y"){
                this.$el.classList.add("dev-mode")
            }
        },
        getTranslateY(el) {
            try{
                const style = window.getComputedStyle(el)
                const matrix = style.transform || style.webkitTransform || style.mozTransform
          
                if (matrix === 'none' || typeof matrix === 'undefined') {
                  return 0
                }
          
                const matrixType = matrix.includes('3d') ? '3d' : '2d'
                const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')
          
                if (matrixType === '2d') {
                  return  Number(matrixValues[5])
                }
          
                if (matrixType === '3d') {
                  return Number(matrixValues[13])
                }
            }catch(e){
                return 0
            }
        },

        getParameter(){
            const replaceMap = { '"': '\\"', '&': '","', '=': '":"' }
            const repRegExp = new RegExp(Object.keys(replaceMap).join('|'), 'gi')
            let param = {}
            const replaceFunc = function(str) {
                return replaceMap[str]
            }

            if (decodeURI(location.search.substring(1)).length > 0) {
                param = JSON.parse(
                    '{"' +
                    decodeURI(location.search.substring(1)).replace(
                        repRegExp,
                        replaceFunc
                    ) +
                    '"}'
                )
            }

            return param
        },

        /* 스와이퍼 페이징 1/5 렌더링 */
        renderFraction(currentClass, totalClass){
            return '<span class="' + currentClass + '"></span>/<span class="' + totalClass + '"></span>'
        },

        /* 콘텐츠 영역 내의 레이어팝업 등을 상위 컨테이너로 이동 */
        appendToApp(el){
            document.querySelector("#app .v-application--wrap").appendChild(el)
        },

        // 토스트 팝업 보기
        showToast(text, target, prop){
            const me = this
            let toast = document.querySelector("#toastPopup")
            if(toast === null){
                toast = document.createElement("div")
                toast.setAttribute("id", "toastPopup")
                toast.innerHTML = '<div class="toast-text"></div>'
                me.appendToApp(toast)
            }

            const cl = toast.classList
            const style = toast.style
            const tt = toast.querySelector(".toast-text")

            tt.innerHTML = text
            const w = tt.clientWidth
            tt.style.width = w + "px"
            const ww = window.innerWidth
            let x, y, tx
            let offset = 0
            if(prop && typeof(prop.offset) === "number"){
                offset = prop.offset
            }
            
            if(target){
                cl.remove("bottom", "top")
                switch(target){
                case "top":
                    cl.add("bottom")
                    x = 12
                    tx = 0
                    
                    style.position = "fixed"
                    style.left = x + "px"
                    style.right = x + "px"
                    style.top = (x + offset) + "px"
                    style.bottom = "auto"
                    tt.style.width = "100%"
                    break
                case "bottom":
                    cl.add("bottom")
                    x = 12
                    tx = 0
                    
                    style.position = "fixed"
                    style.left = x + "px"
                    style.right = x + "px"
                    style.top = "auto"
                    style.bottom = (x + offset) + "px"
                    tt.style.width = "100%"
                    break
                default:
                    x = Math.round(me.offsetLeft(target) + target.clientWidth / 2)
                    y = me.offsetTop(target) + target.clientHeight + 10

                    tx = - Math.round(tt.clientWidth / 2)
                    if( (x + tx) < 10){
                        tx = 10 - x
                    }
                    if( (x + tx + w) > ww - 10){
                        tx = ww - 10 - x - w
                    }

                    style.position = "absolute"
                    style.left = x + "px"
                    style.right = "auto"
                    style.top = y + "px"
                    style.bottom = "auto"
                    break
                }

                tt.style.transform = "translate(" + tx + "px, 0)"
                
                const prop = {
                    duration: 300,
                    iterations: 1,
                    easing: "ease-out",
                    fill: "forwards"
                }
    
                clearTimeout(toast.timer)
                clearTimeout(toast.timer2)
                if(toast.ani){
                    toast.ani.pause()
                }
    
                toast.ani = toast.animate(
                    [
                        { transform: "translate(0, 15px)", opacity: 0 },
                        { transform: "translate(0, 0)", opacity: 1 }
                    ],
                    prop
                )
                toast.timer = setTimeout(function(){
                    toast.ani2 = toast.animate(
                        [
                            { transform: "translate(0, 0)", opacity: 1 },
                            { transform: "translate(0, 15px)", opacity: 0 }
                        ],
                        prop
                    )
                }, 2000)
                toast.timer2 = setTimeout(function(){
                    style.left = "-100vw"
                    style.right = "auto"
                }, 2500)
            }
        },// showToast

        showAlert(msg){
            window.alert(msg)
        },

        // 이중팝업 체크 
        preventPageScroll(open){ // 221201 HPointPay : 추가
            const htmlClass = document.querySelector('html').classList
            if(open && htmlClass.contains('overflow-y-hidden')){
                htmlClass.add('overflow-y-h')
            }else if(!open && htmlClass.contains('overflow-y-h')){
                setTimeout(()=>{htmlClass.add('overflow-y-hidden')},10)
                setTimeout(()=>{htmlClass.remove('overflow-y-h')},100)
            }
        },

        // OS 확인
        getDeviceOS() {
            const ua = navigator.userAgent;
            if (ua.match(/Mac|PPC/)) {
                return 'mac'
            }
            return null
        },

        // styled console
        trace(title, data, color = 'green', fontcolor = 'white'){
            console.log(`%c ${title}                            `, `color:${fontcolor};background-color:${color}; border-radius:2px;`)
            console.dir(data)
        },

        // html OS 클래스 추가
        htmlOsClassSet(){
            const os = this.getDeviceOS()
            if(os === null) return
            document.querySelector('html').classList.add('os-' + os)
        },

        // 페이지 진입시 setHeader 하고 있는 페이지 구분하기 위해 사용
        hasHeaderType(path){
            const arrHeaderTypePage = [
                '/DP/',
            ];
            let flag = false
            arrHeaderTypePage.forEach((str) => {
                if(path.includes(str)){
                    flag = true
                    return false
                }
            })
            return flag
        }
    },
})