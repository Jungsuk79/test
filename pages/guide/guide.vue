<template>
  <div class="guide">
    <div class="section-guide">
      <h2 class="text-h2">icon</h2>
        <v-row>
            <v-col class="icons">
              <a href="javascript:;" class="icon arrow"></a>
              <button class="icon star"></button>
              <i class="icon heart-line"></i>
              <i class="icon heart"></i>
              <i class="icon heart-type"></i>
              <i class="icon refresh"></i>
              <i class="icon check"></i>
              <i class="icon plus"></i>
            </v-col>
        </v-row>
    </div>

   <div class="section-guide">
      <h1 class="text-h1">상품 유형</h1>
      <h2 class="text-h2"> 추천 레이아웃</h2>
      <v-container class="recom-visual">
        <v-row no-gutters>
          <v-col cols="8">
            <v-row no-gutters>
              <v-col>
                <v-card flat style="padding-top:150%;background:#69f;"></v-card>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="6">
                <v-card flat style="background:#9f6;"></v-card>
              </v-col>
              <v-col cols="6">
                <v-card flat style="background:#f69;"></v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-card flat style="background:#f96;"></v-card>
            <v-card flat style="background:#96f;"></v-card>
            <v-card flat style="padding-top:200%;background:#6f9;"></v-card>
          </v-col>
        </v-row>
      </v-container>

      <h2 class="text-h2"> 배너 + 상품형</h2>
      <v-container class="prd-type">
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-img height="100%" src="https://via.placeholder.com/345x345/999999/999999.png?text="></v-img>
            </v-card>
          </v-col>  
          <v-col cols="6">
            <v-card>
              <v-img height="100%" src="https://via.placeholder.com/168x168/999999/999999.png?text="></v-img>
              <v-card-title>브랜드명브랜드명브랜드명</v-card-title>
              <v-card-text>상품명상품명상품명상품명상품명상품명상품명</v-card-text>
            </v-card>
          </v-col> 
          <v-col cols="6">
            <v-card>
              <v-img src="https://via.placeholder.com/168x168/999999/999999.png?text="></v-img>
              <v-card-title>브랜드명브랜드명브랜드명</v-card-title>
              <v-card-text>상품명상품명상품명상품명상품명상품명상품명</v-card-text>
            </v-card>
          </v-col> 
        </v-row>
      </v-container>

      <h2 class="text-h2"> 3단 배너형</h2>
      <v-container class="prd-type">
      <v-row>
        <v-col v-for="n in 9" :key="n" cols="4">
          <v-card>
            <v-img src="https://via.placeholder.com/108x155/999999/999999.png?text="></v-img>
            <i class="icon heart"></i>
          </v-card>
        </v-col>    
      </v-row>
      </v-container>

     <h2 class="text-h2">1단 상품형</h2>
     <v-container class="prd-type">
        <v-row v-for="n in 4" :key="n" class="mb-4">
          <v-col cols="12">
            <v-card>
              <div class="d-flex flex-no-wrap">
                <v-img src="https://via.placeholder.com/115x150/999999/999999.png?text="></v-img>
                <div>
                  <v-card-title>브랜드명브랜드명브랜드명브랜드명브랜드명</v-card-title>
                  <v-card-text>상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명</v-card-text>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <h2 class="text-h2"> 2단 상품형</h2>
      <v-container class="prd-type">
        <v-row>
          <v-col v-for="n in 4" :key="n" cols="6" >
            <v-card>
              <v-img src="https://via.placeholder.com/168x254/999999/999999.png?text="></v-img>
              <v-card-title>브랜드명브랜드명</v-card-title>
              <v-card-text>상품명상품명상품명상품명상품명상품명</v-card-text>
            </v-card>
          </v-col>    
        </v-row>
      </v-container>

      <h2 class="text-h2">와이드 배너형</h2>
      <v-container class="prd-type">
      <v-row no-gutters>
        <v-col cols="11">
          <v-card>
            <v-img src="https://via.placeholder.com/345x259/999999/999999.png?text="></v-img>
            <v-card-title>타이틀타이틀타이틀타이틀타이틀타이틀타이틀</v-card-title>
            <v-card-text>텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'guide',
}
</script>

<style lang="scss" scoped>
.v-application {
  .text-h1,
  .text-h2,
  .text-h3 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 1.4rem !important;
    line-height: 1.8rem;
  }
  .text-h1 {
    padding-bottom: 10px;
    border-bottom: 2px solid #000;
  }
  .text-h2,
  .text-h3 {
    padding: 10px;
    background-color: #f7f7f7;
  }
  .desc-box {
    padding: 15px;
    border: 2px solid rgb(235, 235, 235);
    font-size: 1.2rem;
  }
}

.prd-type  {
  .v-card {
    border-radius: 0;
    box-shadow:none;
    position: relative;
  }
  .icon {
    position: absolute;
    top:7px;
    right: 7px;
  }
 }

 .recom-visual .v-card{
   opacity:0.4;
   border-radius: 0;
   padding-top: 100%;
 }
</style>
