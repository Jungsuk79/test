<template>
  <DialogBasic class="popup-reviewBenefit" header-title="상품평 혜택" :width="540" @hide="closeDialog">
    <template #body>  
      <div class="inner">
        <div class="top-box">
          <dl class="item">
            <dt>상품평을 작성하시면, 마일리지 혜택을 드려요</dt>
            <dd>
              <!--20221229 추가-->
              <dl class="item-top">
                <dd>실결제금액 기준</dd>
              </dl>
              <!--//20221229 추가-->
              <dl class="cmp-item item-sub">
                <dt>정상 상품</dt>
                <dd>0.5% 적립</dd>
              </dl>
              <dl class="cmp-item item-sub">
                <dt>아울렛 상품</dt>
                <dd>0.1% 적립</dd>
              </dl>
            </dd>
          </dl>

          <dl class="item">
            <dt>포토/영상 첨부하면 혜택을 더 드려요</dt>
            <dd>
              <!--20221229 추가-->
              <dl class="item-top">
                <dd>온라인 구매 건</dd>
              </dl>
              <dl class="cmp-item item-sub">
                <dt>포토/영상</dt>
                <dd>1,000M</dd><!-- [퍼블수정]24.12.06 문구수정, 태그추가 -->
              </dl>
              <dl class="cmp-item item-sub">
                <dt>최초 등록 시</dt>
                <dd>2,000M</dd><!-- [퍼블수정]24.12.06 문구수정, 태그추가 -->
              </dl>
            </dd>
          </dl>

          <dl class="item">
            <dt>베스트 상품평 선정 시 추가 리워드를 드려요</dt><!-- [퍼블수정]24.12.06 문구수정, 태그추가 -->
            <dd>
              <dl class="cmp-item item-sub">
                <dt>온/오프라인 통합</dt>
                <dd>매월 100명 5,000M</dd><!-- [퍼블수정]24.12.06 문구수정, 태그추가 -->
              </dl>
            </dd>
          </dl>

          <dl class="item">
            <dt>다른 사람에게 도움이 되면 혜택을 드려요</dt>
            <dd>
              <dl class="cmp-item item-sub">
                <dt>도움이 되었어요</dt>
                <dd>100M(최대 3,000M)</dd>
              </dl>
            </dd>
          </dl>
        </div>

        <ul class="cmp-list list-dotType">
          <!-- [퍼블수정]24.12.06 문구수정, 태그추가 -->
          <li>상품평 작성은 더한섬닷컴에서 판매중이며 한섬 회원번호로 구매 정보가 조회되는 경우에 작성 가능합니다.</li>
          <li>판매 종료된 상품의 경우, 상품 상세페이지가 소멸되어 상품평 작성 및 마일리지 적립이 불가능합니다.</li>
          <li>작성된 상품평은 더한섬닷컴 마케팅 용도로 활용될 수 있으며, 작성 시 이를 동의한 것으로 간주합니다.</li>
          <li>
            상품평 작성 마일리지는<br>
            1) 온라인 구매 건에 대해서만 적립됩니다.<br/>
            2) 실 결제금액이 5,000원 이상인 상품에 한하여 적립됩니다.<br/>
            3) 배송완료일로부터 30일이 이내 작성된 건에 적립됩니다.<br/>
            4) 배송완료일로부터 10일 이후 자동 적립됩니다. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;배송완료일로부터 10일이 지난 후 작성 건은 작성일 익일 지급됩니다.<br/>
            5) 클래스 상품의 경우 클래스 종료 후 작성 가능하며, 작성일 익일 적립됩니다. 단, 클래스 종료 30일 이내 작성된 상품평에 한하여 적립됩니다.
          </li>
          <li>포토 또는 영상을 포함한 상품평은 1,000M가 적립되며, 상품 별로 최초의 포토 또는 영상 상품평만 2,000M가 적립됩니다.</li>
          <li>도움이 됐어요 리워드의 경우, 도움이 됐어요를 받은 일의 익일 지급되며 건당 100M씩 최대 3,000M(30건)까지 지급됩니다.</li>
          <li>베스트 리뷰 포상은 온/오프라인 구매 건의 상품평 전체를 통합하여 매월 100개를 선정하며, 선정일 익일 5,000M가 지급됩니다.<br>지급된 마일리지는 지급일로부터 2년간 사용 가능하며, 미 사용 시 별도 알림 없이 소멸될 수 있습니다.</li>
          <li>베스트 리뷰는 당사 운영팀에서 매일 상품평 확인 후 수시로 선정하며,당첨 시 앱 알림을 통해서만 안내되오니 앱 알림을 동의 부탁드립니다.</li>
          <li>베스트 리뷰는 해당 상품의 상품평 상단에 베스트 리뷰 탭에 노출되며, 더한섬닷컴의 마케팅 용도로 활용될 수 있습니다.</li>
          <li>
            아래와 같은 상품평은 사전 동의 없이 미게시로 전환될 수 있으며, 지급된 마일리지는 자동으로 회수됩니다.<br>
            1) 부당 상품평 (직접 촬영하지 않은 캡쳐 사진, 해석 및 식별이 불가능한 상품평, 타 상품에 대한 상품평, 제 3자 사진 도용 등)<br>
            2) 약관 및 법률 위배 (비속어, 허위사실 등)<br>
            3) 상기 내용에 준하는 사유라고 합리적으로 판단되는 경우
          </li>
          <!-- //[퍼블수정]24.12.06 문구수정, 태그추가 -->
        </ul>
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
    DialogBasic: false, // 팝업
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
