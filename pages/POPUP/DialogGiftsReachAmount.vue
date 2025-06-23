<template>
  <DialogBasic header-title="확인해 보셨어요?" :width="540" class="btmfull-ver" @hide="closeDialog"><!-- 220913 쇼핑백 : btmfull-ver 클래스 추가 -->
    <template #body>
      <div class="cmp-info info-type1"><!-- 221219 사은품 라벨 : mb-16 클래스 삭제 -->
        <p class="cmp-font">주문서에서 할인/쿠폰 적용시 실결제 금액 기준으로 사은품이 변경될 수 있습니다.</p>
      </div>
      
      <div v-for="(item, index) in giftsData" :key="index" class="contents-line-box">
        <div class="order-gifts-cnt">
          <p class="label"><span>{{item.label}}</span></p><!-- 221219 사은품 라벨 : 추가 -->
          <p class="tit">
            {{item.gifts[0].name}}
            <template v-if="item.gifts.length > 1">외 {{item.gifts.length - 1}}건</template>
          </p>
          <p class="date">{{item.date}}</p>
          <p class="desc">{{item.desc}}</p>
          <ul class="gifts-list">
            <li v-for="(item2, index2) in item.gifts" :key="index2">
              <v-img :src="item2.image" :alt="item2.name" aspect-ratio="1"></v-img>
              <template v-if="item.gifts.length > 1">
                <div class="name">{{item2.name}}</div>
                <div class="txt">{{item2.condition}}</div>
              </template>
              <div v-if="item2.give" class="tag">증정대상</div>
            </li>
          </ul>
        </div>
      </div>
    </template>
    <template #footer>
      <v-btn outlined large color="primary" class="gray-outlined">상품 더 담기</v-btn><!-- 220913 쇼핑백 : 마크업 수정 -->
      <v-btn large block color="primary">선물하기</v-btn>
      <v-btn large block color="primary">주문하기</v-btn>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: { DialogBasic},
  props: {
    
  },
  data: () => ({
    giftsData : [
      // 221219 사은품 라벨 : label 항목 추가
      {
        date : '8월 27일 ~ 소진 시 까지',
        desc : '잡화 정상 30만원 이상 구매',
        label : '사은품',
        gifts : [
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-0.png',
            name : '잡화 스페셜 기프트_타임 스카프',
            condition : '',
            give : false,
          },
        ]
      },
      {
        date : '4월 1일 ~ 5월 5일',
        desc : '핸썸TV 잡화 상품 10만원 이상 구매',
        label : '자동응모 사은품',
        gifts : [
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-1.png',
            name : 'IPANEMA 에코백',
            condition : '5만원 이상',
            give : true,
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-2.png',
            name : '톰그레이 X 콤팩트레코드바 미니 에코백',
            condition : '10만원 이상',
            give : false,
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-3.png',
            name : '폼더스토어 PAIRS양말',
            condition : '20만원 이상',
            give : false,
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-4.png',
            name : 'SJ X 썬키스트 그립톡',
            condition : '30만원 이상',
            give : false,
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-5.png',
            name : 'H:SCENE 에코 백',
            condition : '50만원 이상',
            give : false,
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-1.png',
            name : 'IPANEMA 에코백',
            condition : '5만원 이상',
            give : false,
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-2.png',
            name : '톰그레이 X 콤팩트레코드바 미니 에코백',
            condition : '10만원 이상',
            give : false,
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-1.png',
            name : 'IPANEMA 에코백',
            condition : '5만원 이상',
            give : true,
          },
        ]
      },
    ],
  }),
  mounted() {
    
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped></style>
