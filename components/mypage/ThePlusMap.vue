<template>
    <div class="the-plus-map" :class="{inited:inited}">
        <div class="tpm-title">
            <div>플러스맵 이용권<em>{{drawCount}}</em></div>
            <div>볼을 {{drawCount}}번 뽑으실 수 있어요!</div>
            <div>
                더한섬닷컴 주문 시 이용권이 지급 됩니다.<button class="tpm-guide" @mouseover="tpmGuidePopup=true"></button>
                <div v-if="tpmGuidePopup" class="tmp-guide-popup" @mouseleave="tpmGuidePopup=false">
                    <ul>
                        <li>플러스맵 이용권은 배송완료 10일 후, 주문단위로 지급 됩니다.</li>
                        <li>주문금액이 클 수록 플러스볼 의 숫자가 높아져요.</li>
                        <li>플러스맵 이용권은 지급 후 6개월 유효하며, 이후 소멸 됩니다.</li>
                    </ul>
                </div>
            </div>
            <button class="tpm-start" @click="showPopup">START</button>

        </div>
        <Swiper
            :options="{
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            }"
            class="tpm-swiper"
        >
            <SwiperSlide v-for="group, gdx in groupList" :key="gdx" :class="'tpm-slide-'+(gdx + 1)">
                <div class="tpm-bg" :class="'tpm-bg-'+(gdx + 1)" :style="{'background-image' : 'url('+bg+')'}"></div>
                <div class="tpm-items">
                    <div v-for="item, idx in group" :key="idx" class="tpm-item" :class="['tpm-item-'+(idx + 1), 'tpm-' + item.type]" :index="gdx * 10 + (idx + 1)">
                        <div v-if="item.open" :class="'ani-' + item.ani"><span>{{item.reward}}</span></div>
                    </div>
                </div>
            </SwiperSlide>
            <div slot="pagination" class="swiper-pagination"></div>
            <button slot="button-prev" class="swiper-button-prev">PREV</button>
            <button slot="button-next" class="swiper-button-next">NEXT</button>
        </Swiper>


        <!-- 플러스맵 애니메이션 팝업 -->
        <ThePlusMapPopup v-if="tpmMotionPopup" />

        <!-- 플러스맵 완주 시 팝업 -->
        <ThePlusMapFinish v-if="tpmFinishPopup" />


        <!-- 더플러스맵 리워드 획득 팝업 -->
        <ThePlusMapReward v-if="tpmResultPopup" :mileage="rewardMileage" :gift="rewardGift" :coupon="rewardCoupon" />


    </div>
</template>

<script>
import axios from 'axios'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import ThePlusMapPopup from "~/components/mypage/ThePlusMapPopup"
import ThePlusMapFinish from "~/components/mypage/ThePlusMapFinish"
import ThePlusMapReward from "~/components/mypage/ThePlusMapReward"
import EventBus from '~/api/common/EventBus'
// import DialogThePlusEarnRewardsBoth from '~/pages/POPUP/DialogThePlusEarnRewardsBoth.vue'
// import DialogThePlusEarnRewardsFinish from '~/pages/POPUP/DialogThePlusEarnRewardsFinish.vue'

export default {
  components: {
    Swiper, SwiperSlide,
    ThePlusMapPopup,
    ThePlusMapFinish,
    ThePlusMapReward,
    // DialogThePlusEarnRewardsBoth,
    // DialogThePlusEarnRewardsFinish
  },
  props: {
  },
  data: () => ({
    inited: false,// UI 초기화중 깜빡임 방지
    drawCount: 3,// 이용권수
    bg : "",
    itemList : [],
    groupList : [],
    opened : -1,// 마지막 활성화된 아이템 위치
    remainCount: 0,// 회차 완료 후 잔여 칸수
    swiper : null,
    
    buttonEnabled: false,// 애니메이션 중 stat 버튼 비활성
    tpmGuidePopup: false,// 이용권 안내 툴팁
    tpmMotionPopup: false,// 플러스맵 모션 팝업
    tpmResultPopup: false,// 리워드 결과 팝업
    tpmFinishPopup: false,// 완주 팝업

    rewardMileage: "",// 획득 마일리지 합산
    rewardGift: "",// 획득 사은품
    rewardCoupon: "",// 획득 사은품 (쿠폰)

    // 테스트용 모션 단축
    SKIP_MOTION: false
  }),

  created(){
    const me = this
    // 모션 팝업
    EventBus.$off("plusMapShowResult")
    EventBus.$on("plusMapShowResult", me.showResult)
    // 리워드 결과 팝업
    EventBus.$off("closePlusMapReward")
    EventBus.$on("closePlusMapReward", ()=>{
        me.tpmResultPopup = false
        me.scrollHidden(false)
    })
    // 완주 팝업
    EventBus.$off("closePlusMapFinish")
    EventBus.$on("closePlusMapFinish", me.closeFinishPopup)
  },

  mounted(){
    const me = this

    // 테스트용 모션 단축
    me.SKIP_MOTION = location.search.includes("SKIP_MOTION=Y")

    me.loadMapData()
  },

  methods: {
    loadMapData(){
        const me = this
        if(me.SKIP_MOTION){
            console.log("------------------------------ SKIP_MOTION")
        }
        axios.get("/json/thePlusMap.json")
        .then(function(res){
            const d = res.data
            me.inited = true

            // ///////////////////////////////////////////// 퍼블 확인용 코드
            // 플러스맵 1~4 전환
            switch(me.bg){
            case "https://img.thehandsome.com/md/publish/dummy/pc/theplus-map-1.png":
                d.image_url = "https://img.thehandsome.com/md/publish/dummy/pc/theplus-map-2.png"
                break
            case "https://img.thehandsome.com/md/publish/dummy/pc/theplus-map-2.png":
                d.image_url = "https://img.thehandsome.com/md/publish/dummy/pc/theplus-map-3.png"
                break
            case "https://img.thehandsome.com/md/publish/dummy/pc/theplus-map-3.png":
                d.image_url = "https://img.thehandsome.com/md/publish/dummy/pc/theplus-map-4.png"
                break
            default:
                d.image_url = "https://img.thehandsome.com/md/publish/dummy/pc/theplus-map-1.png"
                break
            }
            // ///////////////////////////////////////////// 퍼블 확인용 코드

            me.bg = d.image_url
            me.groupList.length = 0
            me.opened = -1

            // 리스트 16개/17개/17개 그룹핑
            let arr = []
            d.list.forEach((item, idx)=>{
                item.ani = false
                if(item.open === true){
                    me.opened = idx// 마지막 활성 아이템 체크
                }
                arr.push(item)

                if(idx === 15 || idx === 32 || idx === 49){
                    me.groupList.push(arr)
                    console.log(me.groupList)
                    arr = []
                }
            })
            me.itemList = d.list

            let page
            if(me.opened < 16) page = 0
            else if(me.opened >= 16 && me.opened < 33)  page = 1
            else if(me.opened >= 33)  page = 2
            
            setTimeout(()=>{
                // 마지막 활성 페이지로 이동
                me.swiper = me.$el.querySelector(".tpm-swiper").swiper
                me.slideTo(page)

                // 남은 이동횟수 있으면 이어서 진행
                if(me.remainCount > 0){
                    me.showResult(me.remainCount)
                    me.remainCount = 0
                }
                me.buttonEnabled = true
            }, 100)

        })
        .catch(function(e){
            console.log(e)
        })
    },

    showPopup(){
        const me = this
        if(!me.buttonEnabled){ return }
        // me.tpmFinishPopup = true
        if(me.SKIP_MOTION){
            me.showResult(Math.round(Math.random() * 5 + 5))
        }else{
            me.tpmMotionPopup = true
            me.scrollHidden(true)
        }
    },
    showResult(count){
        const me = this
        me.tpmMotionPopup = false
        me.scrollHidden(false)

        if(me.SKIP_MOTION){
            console.log("-------", count)
        }
        // ///////////////////////////////////////////// 퍼블 확인용 코드
        // 디자인에서 처음에는 4칸만 이동하도록 요청
        /* if( (me.opened < 0) && (me.bg === "https://img.thehandsome.com/md/publish/dummy/pc/theplus-map-1.png") ){
            count = 4
        } */
        // ///////////////////////////////////////////// 퍼블 확인용 코드

        me.buttonEnabled = false
        let interval = 800
        if(me.SKIP_MOTION){
            interval = 200
        }
        let i = 1
        let item
        let mileage = 0
        let coupon = ""
        let gift = ""
        // 0.8초 간격으로 다음 아이템 활성화
        const si = setInterval(()=>{
            let p
            if(me.opened < 16) p = 0
            else if(me.opened >= 16 && me.opened < 33)  p = 1
            else if(me.opened >= 33)  p = 2

            if(me.swiper.realIndex !== p){
                me.slideTo(p)
            }else{
                i++
                me.opened++
                item = me.itemList[me.opened]
                if(me.opened >= 49 || i > count){
                    item.ani = 2
                }else{
                    item.ani = 1
                }
                item.open = true

                // 리워드 합산
                if(me.opened === 0){
                    // 첫번째는 항상 웰컴기프트
                    gift = "웰컴기프트"
                }
                switch(item.type){
                case "mileage":
                    mileage += item.data
                    break
                case "coupon":
                    coupon = item.data
                    gift = ""
                    break
                case "gift":
                    gift = item.data
                    coupon = ""
                    break
                // no default
                }
            }

            if(i > count || me.opened >= 49){
                clearInterval(si)
                me.buttonEnabled = true
            }

            if(me.opened >= 49){
                // 마지막 아이템이면 남은 횟수 체크하여 다음 플러스맵 로드
                // 마지막 완주하면 완주 팝업
                me.buttonEnabled = false
                setTimeout(()=>{
                    me.remainCount = count - i + 1
                    // me.loadMapData()
                    me.tpmFinishPopup = true
                    me.scrollHidden(true)
                }, 1000)
            }else if(i > count){
                // 모션 끝나면 결과 팝업
                setTimeout(()=>{
                    // 획득한 리워드 취합
                    me.rewardMileage = me.$options.filters.number(mileage)
                    me.rewardGift = gift
                    me.rewardCoupon = coupon
                    // 리워드 팝업 열기
                    me.tpmResultPopup = true
                    me.scrollHidden(true)
                }, 1000)
            }
        }, interval)
    },
    slideTo(p){
        const me = this
        if(me.swiper.realIndex !== p){
            me.swiper.slideTo(p)
        }
    },

    closeFinishPopup(){
        const me = this
        me.tpmFinishPopup = false
        me.scrollHidden(false)
        setTimeout(()=>{
            me.loadMapData()
        }, 1000)
    },

    scrollHidden(hidden){
        if(hidden) document.querySelector('html').classList.add('overflow-y-h')
        else document.querySelector('html').classList.remove('overflow-y-h')
    }
  },// methods
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/theplusmap.scss';
</style>
