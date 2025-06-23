<template>
  <DialogBasic
   class="popup-search-favorite" 
    header-title="즐겨찾는 검색어" 
    @hide="closeDialog">
    <template #body>
      <div class="inner">

        <ul class="cmp-dotList">
          <li>즐겨찾는 검색어를 관리해보세요.</li>
          <li>앱푸시 온,오프 설정은 모바일에서만 가능합니다.</li>
        </ul>

        <div class="all-chk-wrap">
          <div class="chk-box">
            <v-checkbox
              v-model="allChkBox" label="전체" 
              class="cmp-form-checkbox"
              @change="selectAllList($event)"
            ></v-checkbox>
            <span class="num">{{ checkedNum }}</span>
          </div>
          <v-btn text class="cmp-font fnt-13 button"><span class="line">선택삭제</span></v-btn>
        </div>

        <ul v-if="itemListsData.length >= 1" class="items-list">
          <li v-for="(item, index) in itemListsData" :key="`item-${index}`" class="item">
            <div class="item-chk-wrap">
              <v-checkbox
                v-model="item.isChecked" 
                class="cmp-form-checkbox"
                @change="selectList($event, index)"
              ></v-checkbox>
              <div class="item-img-wrap">
                <!-- <v-img v-if="item.imageUrl !== ''" :src="item.imageUrl" alt=""></v-img>
                <v-img v-else :src="`/images/common/no-image-bg.svg`" alt=""></v-img> -->
                <div v-background-image="{'url' : item.imageUrl}" class="background-image thumb-img"></div>
                <div class="txt-wrap">
                  <span class="tit">{{ item.searchItemTitle }}</span>
                  <div v-if="item.searchItemText.length >= 1" class="types">
                    <span v-for="(type, idx) in item.searchItemText" :key="`type-${idx}`" class="text">{{ type }}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- 모바일 전용  -->
            <!-- <v-switch v-model="item.isAlarm" inset :ripple="false" class="cmp-form-switch" @change="alarmCheck"></v-switch> -->
          </li>
        </ul>

        <div v-else class="no-search-data">
          <p class="txt">즐겨찾는 검색어가 없습니다.<br />검색어를 즐겨찾기하고<br />알림을 받아보세요!</p>
        </div>
        </div>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
export default {
  components: {
    DialogBasic,
  },
  data: () => ({
    allChkBox: false,

    checkedNum: 0,
    itemListsData: [
      {
        isChecked: false,
        imageUrl: '',
        searchItemTitle : '와이드 데님',
        searchItemText : ['카테고리'],
        isAlarm: true
      },
      {
        isChecked: false,
        imageUrl: 'https://cdn-img.thehandsome.com/md/publish/dummy/mo/item-search-img.jpg',
        searchItemTitle : '와이드 데님',
        searchItemText : ['카테고리', '브랜드', '카테고리', '브랜드'],
        isAlarm: false
      },
      {
        isChecked: false,
        imageUrl: 'https://cdn-img.thehandsome.com/md/publish/dummy/mo/item-search-img.jpg',
        searchItemTitle : '여름용 와이드 데님 여름용 와이드 데님 여름용 와이드 데님',
        searchItemText : [],
        isAlarm: false
      },
    ]
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    selectAllList(e) {
      const me = this
      me.checkedNum = 0
      me.itemListsData.forEach((item) => {
        item.isChecked = e

        if(item.isChecked) me.checkedNum++
      })
    },
    selectList(e) {
      const me = this
      let checkedCount = 0      

      e ? me.checkedNum++ : me.checkedNum--

      me.itemListsData.forEach((item) => {
        item.isChecked ? checkedCount++ : checkedCount--
        checkedCount === me.checkedNum ? me.allChkBox = true : me.allChkBox = false
      })

    },

    // 모바일 전용
    // alarmCheck(e) {
    //   const me = this

    //   if(e){
    //     me.showToast("상품이 등록되면 앱푸시로 알려드려요.","bottom", {offset:60 })
    //   }
    //   else {
    //     me.showToast("앱푸시가 해제되었어요.","bottom", {offset:60 })

    //   }
    // }
  },
}
</script>

<style lang="scss">
</style>
