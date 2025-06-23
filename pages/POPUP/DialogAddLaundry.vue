<template>
  <DialogBasic
    :width="880"
    class="popup-addLaundry" 
    header-title="상품 선택하기" 
    @hide="closeDialog"
  >
    <template #body>
      <div>
        <!-- 상단알림 -->
        <div class="cmp-info info-type1">
          <!-- [퍼블수정]24.01.09 세탁 서비스 안내문구 수정 -->
          <p class="cmp-font">3년 이내 온/오프라인으로 구매한 한섬 자사 브랜드 상품만 신청 가능합니다. (3년 초과 시 신청 불가)</p>
        </div>

        <!-- 탭메뉴상단 -->
        <div class="cmp-tabs tabs-actionTop mt-40">
          <v-tabs v-model="addLaundryTab" fixed-tabs>
            <v-tab>온라인 주문</v-tab>
            <v-tab>오프라인 주문</v-tab>
            <v-tab>직접선택</v-tab>
          </v-tabs>
        </div>

        <!-- 탭메뉴 내용 -->
        <div class="tab-content">
          <v-tabs-items v-model="addLaundryTab" touchless>
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


              <!-- 조회내역O -->              
              <div v-for="(item,index) in onlineList" :key="index" class="add-list">
                <div class="order-number-box no-line mt-24 pb-0"><!-- [퍼블수정]22.12.29 -->
                  <div class="line-box">
                    <p class="cmp-font">주문번호<span class="ml-10">{{item.order_num}}</span></p>
                    <p class="cmp-font fnt-14">{{item.order_date}}</p>
                  </div>
                </div>
                <div v-for="(prdItem, prdIdx) in item.list" :key="prdIdx" class="add-list-item pt-24 pb-24">
                  <ProductRowUnit :unit-data="prdItem.prd_data" won-hidden>
                    <template #left>
                      <div class="l-chk-box">
                        <v-checkbox label="상품 선택" class="cmp-form-checkbox label-hide"></v-checkbox>
                      </div>
                      </template>
                    <template #right>
                      <ProductOptionSelect 
                        :size-data="prdItem.option_data" 
                        :default-text="'가격표 선택'" 
                        class="priedSelect" 
                      />
                    </template>
                  </ProductRowUnit>
                </div>
              </div>
              
              <v-container fluid class="mt-13">
                <ProductListPaging />
              </v-container>
              <!-- 조회내역O -->

              <!-- [s] 20221031 세탁 : 조회내역 없을 경우 내용 수정 -->
              <CommonNoData v-if="false" msg="기간내에 주문하신 상품이 없습니다."></CommonNoData>
              <CommonNoData v-if="false" msg="검색결과가 없습니다."></CommonNoData>
              <CommonNoData v-if="false" msg="일치하는 상품이 없습니다."></CommonNoData>
              <!-- [e] 조회내역 없을 경우 -->
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

              <!-- 조회내역O -->  
              <div v-for="(item, index) in offProdList" :key="index" class="add-list">
                <div class="order-number-box no-line mt-24 pb-0"><!-- [퍼블수정]22.12.29 -->
                  <div class="line-box">
                    <p class="cmp-font">주문번호<span class="ml-10">{{item.order_num}}</span></p>
                    <p class="cmp-font fnt-14">{{item.order_date}}</p>
                  </div>
                </div>
                <div v-for="(prdItem, prdIdx) in item.list" :key="prdIdx" class="add-list-item pt-24 pb-24">
                  <ProductRowUnit :unit-data="prdItem.prd_data" won-hidden>
                    <template #left>
                        <div class="l-chk-box">
                          <v-checkbox label="상품 선택" class="cmp-form-checkbox label-hide"></v-checkbox>
                        </div>
                      </template>
                    <template #right>
                      <ProductOptionSelect 
                        :size-data="prdItem.option_data" 
                        :default-text="'가격표 선택'" 
                        class="priedSelect" 
                      />
                    </template>
                  </ProductRowUnit>
                </div>
              </div> 

              <v-container fluid class="mt-13">
                <ProductListPaging />
              </v-container>
              <!-- 조회내역O -->

              <!-- [s] 20221031 세탁 : 조회내역 없을 경우 내용 수정 -->
              <CommonNoData v-if="false" msg="기간내에 주문하신 상품이 없습니다."></CommonNoData>
              <CommonNoData v-if="false" msg="검색결과가 없습니다."></CommonNoData>
              <CommonNoData v-if="false" msg="일치하는 상품이 없습니다."></CommonNoData>
              <!-- [e] 조회내역 없을 경우 -->

            </div>

            </v-tab-item>
            <!-- [e] 오프라인 주문 내용 -->

            <!-- [s] 직접선택 내용 -->
            <v-tab-item :transition="false"> 
              <div class="custumBox pt-30">
                  <CommonSelectBox id="selectId0" class="brandSelect" title="브랜드 선택">
                    <template #optionList>
                      <option value="placeholder">브랜드 선택</option>
                      <option value="option1">옵션1</option>
                      <option value="option2">옵션2</option>
                      <option value="option3">옵션3</option>
                      <option value="option4">옵션4</option>
                    </template>
                  </CommonSelectBox>
                  <ul class="customList mt-24">
                    <li v-for="item, idx in customList" :key="idx" class="customList-item">
                      <div class="customNameBox">
                        <v-checkbox v-model="item.checked" label="상품 선택" class="cmp-form-checkbox label-hide"></v-checkbox>
                        <div class="customItem">
                          <p class="cmp-font fnt-14">{{item.product_name}}</p><!-- [퍼블수정]22.12.29 -->
                          <p class="product_price">{{ item.product_price | number}} 원</p>
                        </div>
                      </div>
                      <CommonCountingBox max="100"></CommonCountingBox>
                    </li>
                  </ul>
              </div>
            </v-tab-item>
            <!-- [e] 직접선택 내용 -->
          </v-tabs-items>
        </div>
      </div>

    </template>

    <template #footer>
       <div class="totalbtn">
          <v-btn depressed tile large :ripple="false" color="primary" :disabled="selectedTotal === 0">
            <span>총 <em>{{selectedTotal}}</em> 개</span><span>선택완료</span>
          </v-btn>
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
    addLaundryTab: null,
    selectedTotal : 0,

    // 온라인list
    onlineList : [
      {
        "order_num" : "211222P12345678",
        "order_date" : "2021.12.22 13:00",
        "list" : [
          {
            "prd_data" : {
              "brand_name": "TIME",
              "product_name": "스티치 구스 다운 점퍼 & 파우치",
              "options" : ["BLACK","90"],
              "links": ["#none"],
              "images": [
                  ["https://img.thehandsome.com/md/publish/dummy/pc/002.jpg"]
              ],
            },
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
            "prd_data" : {
              "brand_name": "TIME",
              "product_name": "[CALZE GENNY] 아일렛 스타킹",
              "options" : ["BLACK","CHARCOAL","90"],
              "links": ["#none"],
              "images": [
                  ["https://img.thehandsome.com/md/publish/dummy/pc/003.jpg"]
              ],
            },
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
                {
                  "size_en" : "오리털 코트",
                  "state_msg" : '54000',
                },{
                  "size_en" : "아일렛 스타킹",
                  "state_msg" : '50000',
                },
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
            "prd_data" : {
              "brand_name": "TIME",
              "product_name": "아일렛 스타킹",
              "options" : ["BLACK","90"],
              "links": ["#none"],
              "images": [
                  ["https://img.thehandsome.com/md/publish/dummy/pc/004.jpg"]
              ],
            },
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
                {
                  "size_en" : "오리털 코트",
                  "state_msg" : '54000',
                },{
                  "size_en" : "아일렛 스타킹",
                  "state_msg" : '50000',
                  
                },
                {
                  "size_en" : "오리털 코트",
                  "state_msg" : '54000',
                },{
                  "size_en" : "아일렛 스타킹",
                  "state_msg" : '50000',
                  
                },
              ]
            }
          }
        ]
      },
      {
        "order_num" : "211222P12345678",
        "order_date" : "2021.12.22 13:00",
        "list" : [
          {
            "prd_data" : {
              "brand_name": "TIME",
              "product_name": "[CALZE GENNY] 아일렛 스타킹",
              "options" : ["BLACK","CHARCOAL","90"],
              "links": ["#none"],
              "images": [
                  ["https://img.thehandsome.com/md/publish/dummy/pc/003.jpg"]
              ],
            },
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
                {
                  "size_en" : "오리털 코트",
                  "state_msg" : '54000',
                },{
                  "size_en" : "아일렛 스타킹",
                  "state_msg" : '50000',
                },
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
        ]
      },
      {
        "order_num" : "211222P12345678",
        "order_date" : "2021.12.22 13:00",
        "list" : [
          {
            "prd_data" : {
              "brand_name": "TIME",
              "product_name": "아일렛 스타킹",
              "options" : ["BLACK","90"],
              "links": ["#none"],
              "images": [
                  ["https://img.thehandsome.com/md/publish/dummy/pc/004.jpg"]
              ],
            },
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
                {
                  "size_en" : "오리털 코트",
                  "state_msg" : '54000',
                },{
                  "size_en" : "아일렛 스타킹",
                  "state_msg" : '50000',
                  
                },
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
            "prd_data" : {
              "brand_name": "TIME",
              "product_name": "스티치 구스 다운 점퍼 & 파우치",
              "options" : ["BLACK","90"],
              "links": ["#none"],
              "images": [
                  ["https://img.thehandsome.com/md/publish/dummy/pc/002.jpg"]
              ],
            },
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
        ]
      },
    ],
    // 오프라인 리스트
    offProdList : [
      {
        "order_num" : "211222P12345678",
        "order_date" : "2021.12.22 13:00",
        "list" : [
          {
            "prd_data" : {
              "brand_name": "TIME",
              "product_name": "아일렛 스타킹",
              "options" : ["BLACK","90"],
              "links": ["#none"],
              "images": [
                  ["https://img.thehandsome.com/md/publish/dummy/pc/004.jpg"]
              ],
            },
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
                {
                  "size_en" : "오리털 코트",
                  "state_msg" : '54000',
                },{
                  "size_en" : "아일렛 스타킹",
                  "state_msg" : '50000',
                  
                },
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
            "prd_data" : {
              "brand_name": "TIME",
              "product_name": "스티치 구스 다운 점퍼 & 파우치",
              "options" : ["BLACK","90"],
              "links": ["#none"],
              "images": [
                  ["https://img.thehandsome.com/md/publish/dummy/pc/002.jpg"]
              ],
            },
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
        ]
      },
    ],
    // 직접입력 리스트
    customList: [
      {
        product_name: "오리털코트",
        product_price: "1540000",
      },
      {
        product_name: "코트, 바바리, 패딩코트",
        product_price: "30000",
      },
      {
        product_name: "침구류",
        product_price: "36000",
      },
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
