import Vue from 'vue'
import EventBus from '~/api/common/EventBus'

Vue.directive("cmpIcon", {
    bind: (el, binding, vnode) => {
        const cl = el.classList
        const op = binding.value
        switch(op.type){
        case "before":
            cl.add("cmp-icon-before")
            break;
        case "after":
            cl.add("cmp-icon-after")
            break;
        default:
            cl.add("cmp-icon")
            break;
        }
        cl.add("i-" + op.name, "cmp-icon-" + op.size)
        if(op.invert === 1){
            cl.add("invert")
        }
        switch(op.size){
        case 14:
            op.size = 18;
            break;
        case 16:
            op.size = 32;
            break;
        // no default
        }
    }
})

let customScrollingTimer
function customScrolling(e){
    clearTimeout(customScrollingTimer)

    const cl = e.target.classList
    cl.remove("hide-scrollbar")

    customScrollingTimer = setTimeout(function(){
        cl.add("hide-scrollbar")
    }, 3000)
}
Vue.directive("customScrollbar", {
    bind: (el, binding, vnode) => {
        el.classList.add("custom-scrollbar")
        el.removeEventListener("scroll", customScrolling)
        el.addEventListener("scroll", customScrolling)
        customScrolling({target:el})
    }
})

Vue.directive("preventParentSwiper", {
    bind: (el, binding, vnode) => {
        el.addEventListener("touchmove", function(e){
            e.stopPropagation()
        })
    }
})

function setNoBG(el, binding, vnode){
    const cl = el.classList
    const op = binding.value
    cl.add("common-background-image")
    let str = ''
    if(op.nobg){
        str = "background-image:url("+op.url+");"
    }else{
        str = "background-image:url("+op.url+"), url(/images/common/no-image-bg.svg);"
    }
    if(op.color){
        str += "background-color:" + op.color
    }
    el.setAttribute("style", str)
    if(op.shading === true){
        cl.add("shading")
    }else{
        cl.remove("shading")
    }

    // ///////////////////////////////////////////// grid layout dev code
    /* let dv = el.querySelector(".temp-image-size")
    if(dv === null){
        dv = document.createElement("div")
        dv.setAttribute("class", "temp-image-size")
        el.appendChild(dv)
    }

    window.addEventListener("resize", ()=>{
        setTimeout(()=>{
            const rect = el.getBoundingClientRect()
            const w = Math.round((rect.right - rect.left) * 100) / 100
            const h = Math.round((rect.bottom - rect.top) * 100) / 100
            dv.innerText = w + " * " + h
        }, 200)
    })
    
    setTimeout(()=>{
        let rect = el.getBoundingClientRect()
        let w = Math.round((rect.right - rect.left) * 100) / 100
        let h = Math.round((rect.bottom - rect.top) * 100) / 100
        dv.innerText = w + " * " + h
        
        let p = el.parentElement
        while(p){
            if(p.tagName === "BODY"){
                break
            }
            if(p.classList.contains("ui-popup")){
                setTimeout(()=>{
                    rect = el.getBoundingClientRect()
                    w = Math.round((rect.right - rect.left) * 100) / 100
                    h = Math.round((rect.bottom - rect.top) * 100) / 100
                    dv.innerText = w + " * " + h
                }, 1000)
                break
            }
            p = p.parentElement
        }
    }, 200) */
    // ///////////////////////////////////////////// grid layout dev code
}
Vue.directive("backgroundImage", {
    bind: setNoBG,
    update: setNoBG
})

function setNoImage(el, binding, vnode){
    const vue = vnode.context
    const errored = function(){
        const op = binding.value
        const type = (op && op.type) ? op.type : ""
        const path = "/images/common/"
        const cl = el.classList
        let file = ""
        switch(type){
        case "square":
            file = path + "no-image-square.png"
            break
        case "tall":
            file = path + "no-image-tall.png"
            break
        case "svg" : 
            file = path + "no-image-bg.svg"
            cl.add('img-error-svg')
            break
        case "product" : 
            file = path + "no-image-bg-product.svg"
            break
        default:
            file = path + "no-image-wide.png"
            break;
        }

        el.setAttribute("src", file)
        el.removeEventListener("error", errored)
    }
    const loaded = function(){
        vue.$nextTick(function(){
            const no = el.src.match(/no-image-.*.png/)
            if(no === null && el.naturalWidth === 1){
                errored()
            }
        })
    }
    el.removeEventListener("error", errored)
    el.removeEventListener("load", loaded)
    el.addEventListener("error", errored)
    el.addEventListener("load", loaded)
}
Vue.directive("imageError", {
    bind: setNoImage,
    update : setNoImage
})

Vue.directive("fixToTop", {
    bind: (el, binding, vnode) => {
        const vue = vnode.context
        const cl = el.classList
        const child = el.querySelector("div")
        let hh = 0
        let ty = 0
        let header, sy

        // const mobile = ! navigator.userAgent.includes("Windows NT")
        const scrollTarget = document.querySelector("body")// mobile ? window : document.querySelector("body")
        const scrollProp = "scrollTop"// mobile ? "scrollY" : "scrollTop"
        /* if(navigator.userAgent.includes("Firefox")){
            scrollTarget = (window === top) ? document.querySelector("body") : document.querySelector("html")
            scrollProp = "scrollTop"
        } */

        const scrollEvent = function(){
            header = document.querySelector("header")
            if(header){
                hh = header.offsetHeight
                ty = vue.getTranslateY(header)
            }

            sy = scrollTarget[scrollProp] + hh + ty
            if(sy >= vue.offsetTop(el)){
                cl.add("fixed")
                child.style.transform = "translateY(" + ty + "px)"
            }else{
                cl.remove("fixed")
                child.style.transform = "none"
            }
        }

        vue.$nextTick(function(){
            EventBus.$off("headerTranslateY")
            EventBus.$on("headerTranslateY", scrollEvent)
            scrollTarget.removeEventListener("scroll", scrollEvent)
            scrollTarget.addEventListener("scroll", scrollEvent)
        })
    }
})

Vue.directive("stickyTabs", {
    bind: (el, binding, vnode) => {
        const vue = vnode.context
        const cl = el.classList
        const child = el.querySelector("div")
        cl.add("sticky-tabs")
        
        // const mobile = ! navigator.userAgent.includes("Windows NT")
        let scrollTarget = window// document.querySelector("body")// mobile ? window : document.querySelector("html")
        let scrollProp = "scrollY"// "scrollTop"// mobile ? "scrollY" : "scrollTop"
        /* if(navigator.userAgent.includes("Firefox")){
            scrollTarget = (window === top) ? document.querySelector("body") : document.querySelector("html")
            scrollProp = "scrollTop"
        } */
        if(location.pathname.includes("/ko/guide/")){
            scrollTarget = document.querySelector("body")
            scrollProp = "scrollTop"
        }
        const list = []
        let count = 0
        let hh = 0
        let ty = 0
        let eh = 0
        let skipSwipe = false
        //  [퍼블수정]22.12.08
        let btn, targ, sy, index, swiper, timer, psy, left, right, trans, len, tabHeight

        let prop = {}
        if(typeof(binding.value) !== "undefined"){
            prop = binding.value
        }else if(typeof(binding.value) === "undefined"){
            prop.fixTop = false
        }
        // 스크롤 타겟 지정 옵션 2022-09-15-prd
        if(prop.target){
            scrollTarget = document.querySelector(prop.target)
            scrollProp = "scrollTop"
        }
        
        const isScrolling = function(){
            sy = scrollTarget[scrollProp]
            if(Math.abs(psy - sy) < 1){
                clearInterval(timer)
                skipSwipe = false
                scrollEvent()
            }
            psy = sy
        }

        const scrollEvent = function(){
            // const header = document.querySelector(".ui-header.fixed header")
            const header = document.querySelector("header")
            if(header && !prop.fixTop){
                hh = header.offsetHeight
                // ty = vue.getTranslateY(header)
                if(header.parentElement.classList.contains("fixed")){
                    ty = -74
                }else{
                    ty = 0
                }
            }
            
            if(prop.fixTop) sy = scrollTarget[scrollProp] + hh + 72
            else sy = scrollTarget[scrollProp] + hh + ty

            if(sy >= vue.offsetTop(el)){
                cl.add("fixed")
                if(!prop.noTranslate){
                    child.style.transform = "translateY(" + ty + "px)"
                }
                //  [퍼블수정]22.12.08
                if(prop.planDetail){
                    tabHeight = child.offsetHeight
                    if(el.nextElementSibling)   el.nextElementSibling.style.paddingTop = `${tabHeight}px`
                }
            }else{
                cl.remove("fixed")
                if(!prop.noTranslate){
                    child.style.transform = "none"
                }
                //  [퍼블수정]22.12.08
                if(prop.planDetail && el.nextElementSibling)   el.nextElementSibling.style.paddingTop = ''
            }

            // last
            len = list.length
            if(len > 0){
                targ = list[len - 1].target
                if(targ && vue.offsetTop(targ) + targ.clientHeight <= scrollTarget[scrollProp] + hh){
                    cl.add("out-of-bound")
                }else{
                    cl.remove("out-of-bound")
                }
            }

            if(skipSwipe === false && count > 0){
                if(prop.fixTop){
                    sy = scrollTarget[scrollProp] + (window.innerHeight * 0.2)
                }else{
                    sy = scrollTarget[scrollProp] + (window.innerHeight * 0.25)
                }
                index = 0
                list.forEach(function(obj, idx){
                    targ = obj.target
                    if(vue.offsetTop(targ) <= sy){
                        index = idx
                    }
                })

                list.forEach(function(obj, idx){
                    btn = obj.button
                    if(idx === index){
                        btn.classList.add("on")
                        if(swiper){
                            trans = swiper.getTranslate()
                            left = btn.parentElement.offsetLeft + trans
                            right = left + btn.clientWidth + trans
                            if(left < 0){
                                swiper.slideTo(index, 100) 
                            }else if(right > swiper.width){
                                swiper.slideTo(index, 100)
                            }
                        }
                    }else{
                        btn.classList.remove("on")
                    }
                })
            }
        }

        const tabClick = function(e){
            btn = e.currentTarget
            targ = document.querySelector("#" + btn.getAttribute("target"))
            eh = el.offsetHeight
            if(document.querySelector("#header") && document.querySelector("#header").classList.contains("fixed") && !prop.fixTop){
                ty = 72
            }//  [퍼블수정]22.12.28
            else{
                ty = 0
            }

            //  [퍼블수정]22.12.28
            if(prop.tabMove && document.querySelector(".sticky-tabs").classList.contains("fixed")){
                ty = 72
                hh = document.querySelector(".sticky-tabs .fixed-tabs").offsetHeight - 1
            }else if(prop.tabMove && !document.querySelector(".sticky-tabs").classList.contains("fixed")){
                ty = 72
                hh = document.querySelector("#header .header-body").offsetHeight - 1
            }else{
                ty = 0
                hh = 0
            }
            
            //  [퍼블수정]22.12.28
            if(prop.planDetail && document.querySelector(".sticky-tabs").classList.contains("fixed")){
                ty = 72
                hh = document.querySelector("#header").offsetHeight + document.querySelector(".sticky-tabs .fixed-tabsBox").offsetHeight - 1
            }else if(prop.planDetail && !document.querySelector(".sticky-tabs").classList.contains("fixed")){
                ty = 72
                hh = document.querySelector("#header").offsetHeight
            }else{
                ty = 0
            }
            
            clearInterval(timer)
            psy = scrollTarget[scrollProp]
            skipSwipe = true
            let topTo
            if(prop.fixTop) topTo = vue.offsetTop(targ) - hh - eh - 66
            else topTo = vue.offsetTop(targ) - hh - eh + ty
            
            scrollTarget.scroll({
                top: topTo,
                behavior: "smooth"
            })
            timer = setInterval(isScrolling, 100)
        }

        vue.$nextTick(function(){
            EventBus.$on("headerTranslateY", scrollEvent)

            el.querySelectorAll("*[target]").forEach(function(btn){
                list.push({
                    button: btn,
                    target: document.querySelector("#" + btn.getAttribute("target"))
                })
                btn.removeEventListener("click", tabClick)
                btn.addEventListener("click", tabClick)
            })
            count = list.length
            try{
                swiper = el.querySelector(".sticky-tab-swipe").swiper
            }catch(e){}
            // 스크롤 타겟 지정 옵션 2022-09-15-prd
            if(prop.target){
                scrollTarget = document.querySelector(prop.target)
                // console.log('=============== scrollTarget ')
                // console.log(scrollTarget)
            }
            scrollTarget.removeEventListener("scroll", scrollEvent)
            scrollTarget.addEventListener("scroll", scrollEvent)
        })
    }
})


function windowResizeListener(){
    const div = document.querySelector("#contentHeightCalc")
    if(div){
        const h = div.clientHeight
        contentHeightCalcList.forEach(function(item){
            item.el.style.height = h - item.offset + "px"
        })
    }
}
const contentHeightCalcList = []
Vue.directive("contentHeightCalc", {
    bind: (el, binding, vnode) => {
        let offset = 0
        if(binding.value && typeof(binding.value.offset)==="number"){
            offset = binding.value.offset
        }
        const obj = {}
        obj.el = el
        obj.offset = offset
        contentHeightCalcList.push(obj)
        let div = document.querySelector("#contentHeightCalc")
        if(div === null){
            div = document.createElement("div")
            div.setAttribute("id", "contentHeightCalc")
            div.setAttribute("style", "position:fixed;left:-10px;top:0;height:100%;width:0;pointer-events:none;")
            document.querySelector("body").appendChild(div)
        }
        window.removeEventListener("resize", windowResizeListener)
        window.addEventListener("resize", windowResizeListener)
        windowResizeListener()
    }
})

Vue.directive("prdDetailImg", {
    bind: (el, binding, vnode) => {
        const cl = el.classList
        el.onmouseover = function(){
            cl.add('prd-over')
        }
        el.onmouseleave = function(){
            cl.remove('prd-over')
        }
    }
})

Vue.directive("masonrySpan", {
    bind: (el, binding, vnode) => {
        function masonryItemResize(){
            const h = el.querySelector('.cmp-masonry-item').clientHeight
            const spanH = Math.round(h / 10)
            el.style.gridRowEnd = "span "+ spanH
        }
        
        window.removeEventListener("resize", masonryItemResize)
        window.addEventListener("resize", masonryItemResize)
        masonryItemResize()
    }
})
