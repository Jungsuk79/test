<template>
  <DialogBasic class="popup-productFitGuide" header-title="핏가이드" :width="540" @hide="closeDialog">
    <template #body>  
      <div class="tab-content">
        <div class="swiper-group">
          <v-tabs-items v-model="tabFitGuide" touchless>
            <!-- 174cm, 67kg -->
            <v-tab-item class="tab-fit" transition="fade-transition">
              <dl class="fit-title">
                <dt>&quot;작은 키에 보통 체형&quot;</dt>
                <dd>하체가 긴 타입</dd>
              </dl>
              <div class="fit-swiper">
                <swiper
                  :options="fitGuide"
                  class="cmp-swiper swiper-fitGuide"
                >
                  <!-- 정면 -->
                  <swiper-slide>
                    <ul class="fit-list">
                      <li>
                        <v-img
                          src="/images/product/fit1.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 정면 78 정사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">정면</dt>
                          <dd>78</dd>
                          <dd>정사이즈</dd>
                        </dl>
                      </li>
                      <li>
                        <v-img
                          src="/images/product/fit1.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 정면 82 오버사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">정면</dt>
                          <dd>82</dd>
                          <dd>오버사이즈</dd>
                        </dl>
                      </li>
                    </ul>
                  </swiper-slide>
                  <!--// 정면 -->
                  <!-- 측면 -->
                  <swiper-slide>
                    <ul class="fit-list">
                      <li>
                        <v-img
                          src="/images/product/fit2.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 측면 78 정사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">측면</dt>
                          <dd>78</dd>
                          <dd>정사이즈</dd>
                        </dl>
                      </li>
                      <li>
                        <v-img
                          src="/images/product/fit2.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 측면 82 오버사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">측면</dt>
                          <dd>82</dd>
                          <dd>오버사이즈</dd>
                        </dl>
                      </li>
                    </ul>
                  </swiper-slide>
                  <!--// 측면 -->
                  <!-- 후면 -->
                  <swiper-slide>
                    <ul class="fit-list">
                      <li>
                        <v-img
                          src="/images/product/fit3.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 후면 78 정사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">후면</dt>
                          <dd>78</dd>
                          <dd>정사이즈</dd>
                        </dl>
                      </li>
                      <li>
                        <v-img
                          src="/images/product/fit3.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 측면 82 오버사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">측면</dt>
                          <dd>82</dd>
                          <dd>오버사이즈</dd>
                        </dl>
                      </li>
                    </ul>
                  </swiper-slide>
                  <!--// 후면 -->
                  <div
                    slot="pagination"
                    class="swiper-pagination pagination-text"
                  ></div>
                  <v-btn slot="button-prev" icon class="swiper-button-prev"
                    ><span class="ir">이전</span></v-btn
                  >
                  <v-btn slot="button-next" icon class="swiper-button-next"
                    ><span class="ir">다음</span></v-btn
                  >
                </swiper>
              </div>
            </v-tab-item>
            <!--// 174cm, 67kg -->
            <!-- 171cm, 71kg -->
            <v-tab-item class="tab-fit" transition="fade-transition">
              <dl class="fit-title">
                <dt>&quot;작은 키에 하체 발달형&quot;</dt>
                <dd>하체가 발달한 타입</dd>
              </dl>
              <div class="fit-swiper">
                <swiper
                  :options="fitGuide"
                  class="cmp-swiper swiper-fitGuide"
                >
                  <!-- 정면 -->
                  <swiper-slide>
                    <ul class="fit-list">
                      <li>
                        <v-img
                          src="/images/product/fit1.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 정면 78 정사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">정면</dt>
                          <dd>78</dd>
                          <dd>정사이즈</dd>
                        </dl>
                      </li>
                      <li>
                        <v-img
                          src="/images/product/fit1.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 정면 82 오버사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">정면</dt>
                          <dd>82</dd>
                          <dd>오버사이즈</dd>
                        </dl>
                      </li>
                    </ul>
                  </swiper-slide>
                  <!--// 정면 -->
                  <!-- 측면 -->
                  <swiper-slide>
                    <ul class="fit-list">
                      <li>
                        <v-img
                          src="/images/product/fit2.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 측면 78 정사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">측면</dt>
                          <dd>78</dd>
                          <dd>정사이즈</dd>
                        </dl>
                      </li>
                      <li>
                        <v-img
                          src="/images/product/fit2.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 측면 82 오버사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">측면</dt>
                          <dd>82</dd>
                          <dd>오버사이즈</dd>
                        </dl>
                      </li>
                    </ul>
                  </swiper-slide>
                  <!--// 측면 -->
                  <!-- 후면 -->
                  <swiper-slide>
                    <ul class="fit-list">
                      <li>
                        <v-img
                          src="/images/product/fit3.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 후면 78 정사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">후면</dt>
                          <dd>78</dd>
                          <dd>정사이즈</dd>
                        </dl>
                      </li>
                      <li>
                        <v-img
                          src="/images/product/fit3.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 측면 82 오버사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">측면</dt>
                          <dd>82</dd>
                          <dd>오버사이즈</dd>
                        </dl>
                      </li>
                    </ul>
                  </swiper-slide>
                  <!--// 후면 -->
                  <div
                    slot="pagination"
                    class="swiper-pagination pagination-text"
                  ></div>
                  <v-btn slot="button-prev" icon class="swiper-button-prev"
                    ><span class="ir">이전</span></v-btn
                  >
                  <v-btn slot="button-next" icon class="swiper-button-next"
                    ><span class="ir">다음</span></v-btn
                  >
                </swiper>
              </div>
            </v-tab-item>
            <!--// 171cm, 71kg -->
            <!-- 177cm, 72kg -->
            <v-tab-item class="tab-fit" transition="fade-transition">
              <dl class="fit-title">
                <dt>&quot;작은 키에 하체 발달형&quot;</dt>
                <dd>하체가 발달한 타입</dd>
              </dl>
              <div class="fit-swiper">
                <swiper
                  :options="fitGuide"
                  class="cmp-swiper swiper-fitGuide"
                >
                  <!-- 정면 -->
                  <swiper-slide>
                    <ul class="fit-list">
                      <li>
                        <v-img
                          src="/images/product/fit1.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 정면 78 정사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">정면</dt>
                          <dd>78</dd>
                          <dd>정사이즈</dd>
                        </dl>
                      </li>
                      <li>
                        <v-img
                          src="/images/product/fit1.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 정면 82 오버사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">정면</dt>
                          <dd>82</dd>
                          <dd>오버사이즈</dd>
                        </dl>
                      </li>
                    </ul>
                  </swiper-slide>
                  <!--// 정면 -->
                  <!-- 측면 -->
                  <swiper-slide>
                    <ul class="fit-list">
                      <li>
                        <v-img
                          src="/images/product/fit2.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 측면 78 정사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">측면</dt>
                          <dd>78</dd>
                          <dd>정사이즈</dd>
                        </dl>
                      </li>
                      <li>
                        <v-img
                          src="/images/product/fit2.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 측면 82 오버사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">측면</dt>
                          <dd>82</dd>
                          <dd>오버사이즈</dd>
                        </dl>
                      </li>
                    </ul>
                  </swiper-slide>
                  <!--// 측면 -->
                  <!-- 후면 -->
                  <swiper-slide>
                    <ul class="fit-list">
                      <li>
                        <v-img
                          src="/images/product/fit3.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 후면 78 정사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">후면</dt>
                          <dd>78</dd>
                          <dd>정사이즈</dd>
                        </dl>
                      </li>
                      <li>
                        <v-img
                          src="/images/product/fit3.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 측면 82 오버사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">측면</dt>
                          <dd>82</dd>
                          <dd>오버사이즈</dd>
                        </dl>
                      </li>
                    </ul>
                  </swiper-slide>
                  <!--// 후면 -->
                  <div
                    slot="pagination"
                    class="swiper-pagination pagination-text"
                  ></div>
                  <v-btn slot="button-prev" icon class="swiper-button-prev"
                    ><span class="ir">이전</span></v-btn
                  >
                  <v-btn slot="button-next" icon class="swiper-button-next"
                    ><span class="ir">다음</span></v-btn
                  >
                </swiper>
              </div>
            </v-tab-item>
            <!--// 174cm, 67kg -->
            <!-- 179cm, 83kg -->
            <v-tab-item class="tab-fit" transition="fade-transition">
              <dl class="fit-title">
                <dt>&quot;작은 키에 하체 발달형&quot;</dt>
                <dd>하체가 발달한 타입</dd>
              </dl>
              <div class="fit-swiper">
                <swiper
                  :options="fitGuide"
                  class="cmp-swiper swiper-fitGuide"
                >
                  <!-- 정면 -->
                  <swiper-slide>
                    <ul class="fit-list">
                      <li>
                        <v-img
                          src="/images/product/fit1.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 정면 78 정사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">정면</dt>
                          <dd>78</dd>
                          <dd>정사이즈</dd>
                        </dl>
                      </li>
                      <li>
                        <v-img
                          src="/images/product/fit1.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 정면 82 오버사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">정면</dt>
                          <dd>82</dd>
                          <dd>오버사이즈</dd>
                        </dl>
                      </li>
                    </ul>
                  </swiper-slide>
                  <!--// 정면 -->
                  <!-- 측면 -->
                  <swiper-slide>
                    <ul class="fit-list">
                      <li>
                        <v-img
                          src="/images/product/fit2.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 측면 78 정사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">측면</dt>
                          <dd>78</dd>
                          <dd>정사이즈</dd>
                        </dl>
                      </li>
                      <li>
                        <v-img
                          src="/images/product/fit2.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 측면 82 오버사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">측면</dt>
                          <dd>82</dd>
                          <dd>오버사이즈</dd>
                        </dl>
                      </li>
                    </ul>
                  </swiper-slide>
                  <!--// 측면 -->
                  <!-- 후면 -->
                  <swiper-slide>
                    <ul class="fit-list">
                      <li>
                        <v-img
                          src="/images/product/fit3.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 후면 78 정사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">후면</dt>
                          <dd>78</dd>
                          <dd>정사이즈</dd>
                        </dl>
                      </li>
                      <li>
                        <v-img
                          src="/images/product/fit3.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 측면 82 오버사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">측면</dt>
                          <dd>82</dd>
                          <dd>오버사이즈</dd>
                        </dl>
                      </li>
                    </ul>
                  </swiper-slide>
                  <!--// 후면 -->
                  <div
                    slot="pagination"
                    class="swiper-pagination pagination-text"
                  ></div>
                  <v-btn slot="button-prev" icon class="swiper-button-prev"
                    ><span class="ir">이전</span></v-btn
                  >
                  <v-btn slot="button-next" icon class="swiper-button-next"
                    ><span class="ir">다음</span></v-btn
                  >
                </swiper>
              </div>
            </v-tab-item>
            <!--// 179cm, 83kg -->
            <!-- 179cm, 83kg -->
            <v-tab-item class="tab-fit" transition="fade-transition">
              <dl class="fit-title">
                <dt>&quot;작은 키에 하체 발달형&quot;</dt>
                <dd>하체가 발달한 타입</dd>
              </dl>
              <div class="fit-swiper">
                <swiper
                  :options="fitGuide"
                  class="cmp-swiper swiper-fitGuide"
                >
                  <!-- 정면 -->
                  <swiper-slide>
                    <ul class="fit-list">
                      <li>
                        <v-img
                          src="/images/product/fit1.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 정면 78 정사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">정면</dt>
                          <dd>78</dd>
                          <dd>정사이즈</dd>
                        </dl>
                      </li>
                      <li>
                        <v-img
                          src="/images/product/fit1.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 정면 82 오버사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">정면</dt>
                          <dd>82</dd>
                          <dd>오버사이즈</dd>
                        </dl>
                      </li>
                    </ul>
                  </swiper-slide>
                  <!--// 정면 -->
                  <!-- 측면 -->
                  <swiper-slide>
                    <ul class="fit-list">
                      <li>
                        <v-img
                          src="/images/product/fit2.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 측면 78 정사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">측면</dt>
                          <dd>78</dd>
                          <dd>정사이즈</dd>
                        </dl>
                      </li>
                      <li>
                        <v-img
                          src="/images/product/fit2.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 측면 82 오버사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">측면</dt>
                          <dd>82</dd>
                          <dd>오버사이즈</dd>
                        </dl>
                      </li>
                    </ul>
                  </swiper-slide>
                  <!--// 측면 -->
                  <!-- 후면 -->
                  <swiper-slide>
                    <ul class="fit-list">
                      <li>
                        <v-img
                          src="/images/product/fit3.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 후면 78 정사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">후면</dt>
                          <dd>78</dd>
                          <dd>정사이즈</dd>
                        </dl>
                      </li>
                      <li>
                        <v-img
                          src="/images/product/fit3.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 측면 82 오버사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">측면</dt>
                          <dd>82</dd>
                          <dd>오버사이즈</dd>
                        </dl>
                      </li>
                    </ul>
                  </swiper-slide>
                  <!--// 후면 -->
                  <div
                    slot="pagination"
                    class="swiper-pagination pagination-text"
                  ></div>
                  <v-btn slot="button-prev" icon class="swiper-button-prev"
                    ><span class="ir">이전</span></v-btn
                  >
                  <v-btn slot="button-next" icon class="swiper-button-next"
                    ><span class="ir">다음</span></v-btn
                  >
                </swiper>
              </div>
            </v-tab-item>
            <!--// 179cm, 83kg -->
            <!-- 179cm, 83kg -->
            <v-tab-item class="tab-fit" transition="fade-transition">
              <dl class="fit-title">
                <dt>&quot;작은 키에 하체 발달형&quot;</dt>
                <dd>하체가 발달한 타입</dd>
              </dl>
              <div class="fit-swiper">
                <swiper
                  :options="fitGuide"
                  class="cmp-swiper swiper-fitGuide"
                >
                  <!-- 정면 -->
                  <swiper-slide>
                    <ul class="fit-list">
                      <li>
                        <v-img
                          src="/images/product/fit1.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 정면 78 정사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">정면</dt>
                          <dd>78</dd>
                          <dd>정사이즈</dd>
                        </dl>
                      </li>
                      <li>
                        <v-img
                          src="/images/product/fit1.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 정면 82 오버사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">정면</dt>
                          <dd>82</dd>
                          <dd>오버사이즈</dd>
                        </dl>
                      </li>
                    </ul>
                  </swiper-slide>
                  <!--// 정면 -->
                  <!-- 측면 -->
                  <swiper-slide>
                    <ul class="fit-list">
                      <li>
                        <v-img
                          src="/images/product/fit2.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 측면 78 정사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">측면</dt>
                          <dd>78</dd>
                          <dd>정사이즈</dd>
                        </dl>
                      </li>
                      <li>
                        <v-img
                          src="/images/product/fit2.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 측면 82 오버사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">측면</dt>
                          <dd>82</dd>
                          <dd>오버사이즈</dd>
                        </dl>
                      </li>
                    </ul>
                  </swiper-slide>
                  <!--// 측면 -->
                  <!-- 후면 -->
                  <swiper-slide>
                    <ul class="fit-list">
                      <li>
                        <v-img
                          src="/images/product/fit3.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 후면 78 정사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">후면</dt>
                          <dd>78</dd>
                          <dd>정사이즈</dd>
                        </dl>
                      </li>
                      <li>
                        <v-img
                          src="/images/product/fit3.jpg"
                          :aspect-ratio="310 / 480"
                          alt="핏가이드 측면 82 오버사이즈"
                        ></v-img>
                        <dl class="item">
                          <dt class="ir">측면</dt>
                          <dd>82</dd>
                          <dd>오버사이즈</dd>
                        </dl>
                      </li>
                    </ul>
                  </swiper-slide>
                  <!--// 후면 -->
                  <div
                    slot="pagination"
                    class="swiper-pagination pagination-text"
                  ></div>
                  <v-btn slot="button-prev" icon class="swiper-button-prev"
                    ><span class="ir">이전</span></v-btn
                  >
                  <v-btn slot="button-next" icon class="swiper-button-next"
                    ><span class="ir">다음</span></v-btn
                  >
                </swiper>
              </div>
            </v-tab-item>
            <!--// 179cm, 83kg -->
          </v-tabs-items>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="area-fit">
        <div class="cmp-tabs tab-head">
          <v-tabs v-model="tabFitGuide" fixed-tabs>
            <v-tab><span>174cm</span><span>67kg</span></v-tab>
            <v-tab><span>171cm</span><span>71kg</span></v-tab>
            <v-tab><span>177cm</span><span>72kg</span></v-tab>
            <v-tab><span>179cm</span><span>83kg</span></v-tab>
            <v-tab><span>179cm</span><span>83kg</span></v-tab>
            <v-tab><span>179cm</span><span>83kg</span></v-tab>
          </v-tabs>
        </div>
      </div>
    </template>


  </DialogBasic>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'

export default {
  components: {
    DialogBasic,
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    DialogBasic: false, // 팝업
    tabFitGuide: null,
    fitGuide: {
      slidesPerView: 1,
      spaceBetween: 1,
      slidesPerGroup: 1,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
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
