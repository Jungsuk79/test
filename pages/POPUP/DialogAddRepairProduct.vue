<template>
  <DialogBasic
    :width="880"
    class="popup-addRepair" 
    header-title="상품 선택하기" 
    @hide="closeDialog">
    <template #body>
      <div>
        <!-- 상단알림 -->
        <div class="cmp-info info-type1">
          <p class="cmp-font">수선상품은 최근 3년 이내의 더한섬닷컴 자사 브랜드만 선택 가능 합니다.</p>
        </div>

        <!-- 탭메뉴상단 -->
        <div class="cmp-tabs tabs-actionTop mt-40">
          <v-tabs v-model="addRepairTab" fixed-tabs>
            <v-tab>온라인 주문</v-tab>
            <v-tab>오프라인 주문</v-tab>
            <v-tab>품번선택</v-tab>
          </v-tabs>
        </div>

        <!-- 탭메뉴 내용 -->
        <div class="tab-content">
          <v-tabs-items v-model="addRepairTab" touchless>
            <!-- [s] 온라인 주문 내용 -->
            <v-tab-item :transition="false"> 
            <div class="onlineBox pt-30">
              <!-- 기간조회 -->
              <v-layout row align-center justify-space-between>
                <div class="cmp-line-radio">
                  <div class="radio-item">
                    <input id="dateRadio0" type="radio" name="dateRadio" checked />
                    <label for="dateRadio0">1주일</label>
                  </div>
                  <div class="radio-item">
                    <input id="dateRadio1" type="radio" name="dateRadio" />
                    <label for="dateRadio1">1개월</label>
                  </div>
                  <div class="radio-item">
                    <input id="dateRadio2" type="radio" name="dateRadio" />
                    <label for="dateRadio2">3개월</label>
                  </div>
                </div>
                <CommonCalendarBox />
              </v-layout>
              <!-- 기간조회 -->

              <!-- 조회내역x -->
              <CommonNoData v-if="false" msg="기간 이내 주문하신 상품이 없습니다."></CommonNoData>
              <!-- 조회내역x -->
             
              <!-- 조회내역O -->
              <v-radio-group v-model="rodioModel0" column class="cmp-form-radioGroup">
                <div class="add-list">
                  <div v-for="i, index in 2" :key="index" class="add-list radio-list pt-0">
                    <div class="order-number-box no-line mt-24">
                      <div class="line-box">
                        <p class="cmp-font">주문번호<span class="ml-10">211222P12345678</span></p>
                        <p class="cmp-font fnt-14">2021.12.22 13:00</p><!-- [퍼블수정]23.01.19 -->
                      </div>
                    </div>
                    <div v-for="item, idx in prodList" :key="idx" class="add-list-item pt-24 pb-24">
                      <ProductRowUnit :unit-data="item" won-hidden>
                        <template #left>
                          <div class="l-chk-box">
                            <v-radio label="상품 선택" class="cmp-form-radio label-hide" :value="i.idx" ></v-radio>
                          </div>
                        </template>
                      </ProductRowUnit>
                    </div>
                  </div>
                </div>
              </v-radio-group>
              <v-container fluid class="mt-13">
                <ProductListPaging />
              </v-container>
              <!-- 조회내역O -->
            </div>
            </v-tab-item>
            <!-- [e] 온라인 주문 내용 -->

            <!-- [s] 오프라인 주문 내용 -->
            <v-tab-item :transition="false"> 
            <div class="offlineBox pt-30">
              <!-- 기간조회 -->
              <v-layout row align-center justify-space-between>
                <div class="cmp-line-radio">
                  <div class="radio-item">
                    <input id="dateRadio0" type="radio" name="dateRadio" checked />
                    <label for="dateRadio0">1주일</label>
                  </div>
                  <div class="radio-item">
                    <input id="dateRadio1" type="radio" name="dateRadio" />
                    <label for="dateRadio1">1개월</label>
                  </div>
                  <div class="radio-item">
                    <input id="dateRadio2" type="radio" name="dateRadio" />
                    <label for="dateRadio2">3개월</label>
                  </div>
                </div>
                <CommonCalendarBox />
              </v-layout>
              <!-- 기간조회 -->

              <!-- 조회내역x -->
              <CommonNoData v-if="false" msg="기간 이내 주문하신 상품이 없습니다."></CommonNoData>
              <!-- 조회내역x -->

              <!-- 조회내역O -->  
              <v-radio-group v-model="rodioModel1" column class="cmp-form-radioGroup">
                <div class="add-list">
                  <div v-for="i, index in 2" :key="index" class="add-list radio-list pt-0">
                    <div class="order-number-box no-line mt-24">
                      <div class="line-box">
                        <p class="cmp-font">주문번호<span class="ml-10">211222P12345678</span></p>
                        <p class="cmp-font fnt-14">2021.12.22 13:00</p><!-- [퍼블수정]23.01.19 -->
                      </div>
                    </div>
                    <div v-for="item, idx in prodList2" :key="idx" class="add-list-item pt-24 pb-24">
                      <ProductRowUnit :unit-data="item" won-hidden>
                        <template #left>
                          <div class="l-chk-box">
                            <v-radio label="상품 선택" class="cmp-form-radio label-hide" :value="i.idx" ></v-radio>
                          </div>
                        </template>
                      </ProductRowUnit>
                    </div>
                  </div>
                </div>
              </v-radio-group>

              <v-container fluid class="mt-13">
                <ProductListPaging />
              </v-container>
              <!-- 조회내역O -->
            </div>

            </v-tab-item>
            <!-- [e] 오프라인 주문 내용 -->

            <!-- [s] 품번선택 내용 -->
            <v-tab-item :transition="false"> 
            <div class="custumBox pt-30">
                <div class="cmp-form-searchBox">
                    <v-text-field label="품번 입력 (최소 8자리 이상)" clearable class="cmp-form-input"></v-text-field>
                    <v-btn icon>
                        <i class="cmp-icon i-search">검색</i>
                    </v-btn>
                </div>
                <v-radio-group v-model="rodioModel2" column class="cmp-form-radioGroup mt-22 mb-20"><!-- [퍼블수정]22.12.29 -->
                  <ul class="customList">
                    <li v-for="item, idx in customList" :key="idx" class="customList-item pt-12 pb-12">
                    <v-radio :label="`${item.product_num}`" class="cmp-form-radio mb-0" :value="idx" ></v-radio>
                    </li>
                  </ul>
                </v-radio-group>
            </div>
            <!-- 조회내역x -->
            <CommonNoData v-if="false" msg="검색결과가 없습니다"></CommonNoData>
            <!-- 조회내역x -->
            <v-container fluid class="mt-18 mb-10"><!-- [퍼블수정]22.12.29 -->
              <ProductListPaging />
            </v-container>
            </v-tab-item>
            <!-- [e] 품번선택 내용 -->

          </v-tabs-items>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="totalbtn">
        <v-btn depressed tile large :ripple="false" color="primary"><span>선택완료</span></v-btn>
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
    addRepairTab: null,
    onlineCount : 0,
    offlineCount:0,
    rodioModel0: '1',
    rodioModel1: '1',
    rodioModel2: '1',

    // 온라인list
    prodList : [
      {
        "brand_name": "TIME",
        "product_name": "스티치 구스 다운 점퍼 & 파우치",
        "options" : ["BLACK","90"],
        "images": [
            ["https://img.thehandsome.com/md/publish/dummy/pc/002.jpg"]
        ],
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/002.jpg",
        "comment": 99,
        "option_data": {
            "select_idx" : null,
            "list" : [
              {
                "size_en" : "오리털 코트",
                "state_msg" : '54000',
              },{
                "size_en" : "아일렛 스타킹",
                "state_msg" : '50000',
              },
            ]
        }
      },
      {
        "brand_name": "TIME",
        "product_name": "[CALZE GENNY] 아일렛 스타킹",
        "options" : ["BLACK","CHARCOAL","90"],
        "links": [
            "#none"
        ],
        "images": [
            ["https://img.thehandsome.com/md/publish/dummy/pc/003.jpg"]
        ],
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg",
        "link_url" : "#none",
        "flags": [
            "NEW"
        ],
        "delivery": true,
        "comment": 0,
        "option_data": {
            "select_idx" : null,
            "list" : [
              {
                "size_en" : "오리털 코트",
                "state_msg" : '54000',
              },{
                "size_en" : "아일렛 스타킹",
                "state_msg" : '50000',
                
              },
            ]
        }
      },
    ],
    prodList2 : [
      {
        "brand_name": "TIME",
        "product_name": "TM2C0QOT003W_BK_C01",
        "options" : ["BLACK","CHARCOAL","90"],
        "links": [
            "#none"
        ],
        "images": [
            ["https://img.thehandsome.com/md/publish/dummy/pc/003.jpg"]
        ],
        "image_url": "https://img.thehandsome.com/md/publish/dummy/pc/003.jpg",
        "link_url" : "#none",
        "flags": [
            "NEW"
        ],
        "delivery": true,
        "comment": 0,
        "option_data": {
            "select_idx" : null,
            "list" : [
              {
                "size_en" : "오리털 코트",
                "state_msg" : '54000',
              },{
                "size_en" : "아일렛 스타킹",
                "state_msg" : '50000',
              },{
                "size_en" : "아일렛 스타킹",
                "state_msg" : '50000',
              },
            ]
        }
      },
    ],
    customList: [
      {product_num: "TM2C0WPC804W"},
      {product_num: "TM2C0QOT003W_BK_C01"},
      {product_num: "TM2C0QOT003W_C01"},

    ]

  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
</style>
