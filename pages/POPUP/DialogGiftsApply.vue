<template>
  <DialogBasic class="popup-card-benefit" header-title="사은품 신청하기" :width="540" @hide="closeDialog">
    <template #body>  
      <div class="cmp-info info-type1">
        <p class="cmp-font">사은품은 실결제 금액 기준으로 신청 할 수 있습니다.</p>
      </div>
      <div class="mt-40">
        <div v-for="(item, index) in giftsData" :key="index" class="contents-line-box full">
          <!-- 250127 사은품신청하기 개선 -->
          <div class="order-gifts-cnt">
            <p class="tit">
              <!-- 사은품 있을 때 타이틀 -->
              <template v-if="item.gifts.length">
                사은행사명
                <!-- {{item.gifts[0].name}} -->
                <!-- <template v-if="item.gifts.length > 1">외 {{item.gifts.length}}건</template> -->
              </template>
              <!-- //사은품 있을 때 타이틀 -->
              <!-- 마일리지만 있을 때 -->
              <template v-if="!item.gifts.length && item.mileage!==null">
                마일리지 적립
              </template>
              <!-- //마일리지만 있을 때 -->
            </p>
            <p class="date">{{item.date}}</p>
            <p class="desc">{{item.desc}}</p>
            <ul class="gifts-list">
              <!-- 사은품 리스트 -->
              <template v-if="item.gifts.length">
                <li v-for="(item2, index2) in item.gifts" :key="index2">
                  <input :id="'giftsRadio'+index+index2" type="radio" :name="'giftsRadioName'+index">
                  <label :for="'giftsRadio'+index+index2">
                    <div class="img-cnt">
                      <v-img :src="item2.image" :alt="item2.name" aspect-ratio="1"></v-img>
                      <div class="selected"></div>
                    </div>
                    <template>
                      <div class="name">{{item2.name}}</div>
                      <div class="txt">{{item2.condition}}</div>
                    </template>
                  </label>
                </li>
              </template>
              <!-- 사은품 리스트 -->
              <!-- 마일리지 -->
              <template v-if="item.mileage!==null">
                <li>
                  <input :id="'mileageRadio'+index" type="radio" :name="'giftsRadioName'+index">
                  <label :for="'mileageRadio'+index" class="border-cnt">
                    <div class="txt">
                      <strong>{{item.mileage | number}}</strong>M<br>적립
                    </div>
                    <div class="selected"></div>
                  </label>
                </li>
              </template>
              <!-- //마일리지 -->
              <!-- 신청안함 -->
              <li>
                <input :id="'nonSelectRadio'+index" type="radio" :name="'giftsRadioName'+index">
                <label :for="'nonSelectRadio'+index" class="in-icon">
                  <!-- <div class="txt">사은품 신청안함</div> -->
                  <div class="img-cnt">
                    <div class="selected"></div>
                  </div>
                  <div class="name">사은품 신청안함</div>
                </label>
              </li>
              <!-- 신청안함 -->
            </ul>
          </div>
        </div>
        <!-- // 250127 사은품신청하기 개선 -->
      </div>
      <div class="popup-btn-box">
        <v-btn block large color="primary" :disabled="true">사은품 신청 및 결제하기</v-btn>
      </div>
    </template>
  </DialogBasic>
</template>
<script>
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: { DialogBasic },
  data: () => ({
    giftsData : [
      {
        date : '8월 27일 ~ 소진 시 까지',
        desc : '잡화 정상 30만원 이상 구매',
        gifts : [
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-0.png',
            name : '잡화 스페셜 기프트_타임 스카프',
            condition : '',
          },
        ],
        mileage : 100000,
      },
      {
        date : '4월 1일 ~ 5월 5일',
        desc : '핸썸TV 잡화 상품 10만원 이상 구매',
        gifts : [
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-1.png',
            name : 'IPANEMA 에코백',
            condition : '5만원 이상',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-2.png',
            name : '톰그레이 X 콤팩트레코드바 미니 에코백',
            condition : '10만원 이상',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-3.png',
            name : '폼더스토어 PAIRS양말',
            condition : '20만원 이상',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-4.png',
            name : 'SJ X 썬키스트 그립톡',
            condition : '30만원 이상',
          },
          {
            image : 'https://img.thehandsome.com/md/publish/dummy/pc/gifts-img-5.png',
            name : 'H:SCENE 에코 백',
            condition : '50만원 이상',
          },
        ],
        mileage : null,
      },
      {
        date : '4월 1일 ~ 5월 5일',
        desc : '핸썸TV 잡화 상품 10만원 이상 구매',
        gifts : [],
        mileage : 100000,
      }
    ],
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped></style>
