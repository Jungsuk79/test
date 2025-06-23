<template>
  <div class="product-review" :class="{'review-detail' : !data.reviewType}">
    <div v-if="data.txtSamll" class="txt-samll">
      <span v-for="(txt, txtIdx) in data.txtSamll" :key="txtIdx">{{txt}}</span>
    </div>

    <div v-if="data.txtTop" class="txt-top" :class="{'txt-mileage': data.mileageSave != mileage}">
      <span v-for="(txt, txtIdx) in data.txtTop" :key="txtIdx" 
      :class="{'c-blue' : txtIdx == 1}">{{txt}}</span>
    </div>

    <v-rating class="cmp-rating rating-default">
      <v-icon>
        <i class="icon star">별점</i>
      </v-icon>
    </v-rating>
    
    <div class="data">{{data.data}}</div>

    <slot name="recommend"></slot>

    <div class="user-info">
      <p v-for="(info, infoIdx) in data.userInfo" :key="infoIdx">{{info}}</p>
    </div>

    <!--리스트 리뷰 -->
    <div v-if="data.reviewType" class="review-column">
      <slot name="reviewSwiper"></slot>

      <div class="review-txt">{{data.reviewTxt}}</div>

      <dl v-for="(scroe, scroeIdx) in data.reviewScore" :key="scroeIdx" class="review-score">
        <dt>{{scroe.name}}</dt>
        <dd><strong>{{scroe.text}}</strong></dd>
      </dl>
    </div>

    <!--상세 리뷰-->  
    <div v-else class="review-column">
      <div class="review-txt">{{data.reviewTxt}}</div>

      <div class="review-score">
        <span v-for="(scroe, scroeIdx) in data.reviewScore" :key="scroeIdx">{{scroe.name}}<strong>{{scroe.text}}</strong></span>
      </div>

      <slot name="reviewSwiper"></slot>
    </div> 
  </div>
</template>

<script>
export default {
    components: {
  },
  props: {
    reviewData: {
      type: Object,
      default: ()=>{ 
        return null 
      },
    },
  },
  data: () => ({
    data: null,
    mileage : false,
  }),
  created() {
   const me = this
   me.data = me.reviewData
  },
}
</script>