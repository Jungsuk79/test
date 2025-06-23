<template>
  <div 
    class="option-size-select" 
    :class="[{'valid' : error},{'open-up':openup}]"
  ><!-- 230112 옵션셀렉트 : openup 클래스 추가 -->
    <template v-if="data === null || data.list.length === 0">
      <button disabled class="selected-item">
        {{$t('components.optionSelect.soldOut')}}<!-- 글로벌 작업 : en 케이스 추가 -->
      </button>
    </template>
    <template v-else>
      <button class="selected-item" :class="{on:!show}" @click="open($event)">
        <span v-if="data.select_idx === 'undefined' || data.select_idx === null" class="select-item-placeholder">{{defaultText}}</span>
        <span v-else class="selected-item-text">
          <span v-if="data.list[data.select_idx].sold_out" class="select-item-del">
            <span class="select-item-en">{{data.list[data.select_idx].size_en}}</span>
            <span class="select-item-num">{{data.list[data.select_idx].size_num}}</span>
          </span>
          <span v-else class="selected-item-size">
            <span class="select-item-en">{{data.list[data.select_idx].size_en}}</span>
            <span class="select-item-num">{{data.list[data.select_idx].size_num}}</span>
          </span>
          <!-- 글로벌 작업 yjh : 상태값 표시 수정 -->
          <span class="select-item-state"><!-- 221201 옵션셀렉트 : <span class="select-item-state"> 추가 -->
            <template v-if="isNaN(data.list[data.select_idx].state_msg)===true">
              {{data.list[data.select_idx].state_msg}}
            </template>
            <template v-if="isNaN(data.list[data.select_idx].state_msg)===false && data.list[data.select_idx].state_msg.length > 0">
              {{data.list[data.select_idx].state_msg | number}}
            </template>
          </span>
          <!-- //글로벌 작업 yjh : 상태값 표시 수정 -->
        </span>
      </button>
      
      <div v-if="show" v-click-outside="close" class="size-select-list" :class="{on:show}">
        <button v-if="!openup" class="select-list-tit" @click="close">
          <span class="select-tit-placeholder">{{defaultText}}</span>
        </button>
        <ul class="select-list-cnt" :style="{'max-height':maxHeight+'px'}">
          <li v-for="(item, index) in data.list" :key="index" role="button" tabindex="0" @click="[sizeSelect(index, item.state_msg),$emit('submit',data.select_idx,data.list_idx)]">
            <span v-if="item.sold_out" class="select-item-del">
              <span class="select-item-en">{{item.size_en}}</span>
              <span class="select-item-num">{{item.size_num}}</span>
            </span>
            <span v-else class="select-list-size">
              <span class="select-item-en">{{item.size_en}}</span>
              <span class="select-item-num">{{item.size_num}}</span>
            </span>
            <!-- 글로벌 작업 yjh : 상태값 표시 수정 -->
            <span class="select-item-state"><!-- 221201 옵션셀렉트 : <span class="select-item-state"> 추가 -->
              <template v-if="isNaN(item.state_msg)===true">
                {{item.state_msg}}
              </template>
              <template v-if="isNaN(item.state_msg)===false && item.state_msg.length > 0">
                {{item.state_msg | number}}
              </template>
            </span>
            <!-- //글로벌 작업 yjh : 상태값 표시 수정 -->
          </li>
        </ul>
        <button v-if="openup" class="select-list-tit" @click="close">
          <span class="select-tit-placeholder">{{defaultText}}</span>
        </button>
      </div>

      <p v-if="error" class="validation-text">{{errorText}}</p>
    </template>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  props: {
    sizeData: {
      type: Object,
      default: () => {
        return null
      },
    },
    listIdx : {
      type : Number,
      default : 0,
    },
    disabled : {
      type : Boolean,
      default : false,
    },
    error : {
      type : Boolean,
      default : false,
    },
    errorText : {
      type : String,
      default : '',
    },
    maxHeight : {
      type : Number,
      default : 164, // 230112 옵션셀렉트 : 163 --> 164 수정
    },
    defaultText : {
      type : String,
      default : "사이즈 선택"
    },
    openCallback: {
      type: Boolean,
      default: false
    },
    openup : { // 230112 옵션셀렉트 : 추가
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    data : null,
    show : false,
  }),
  watch:{
    sizeData(){
      const me = this
      me.data = me.sizeData
    }
  },
  created(){
    const me = this
    me.data = me.sizeData
  },
  mounted(){
    
  },
  methods: {
    open(event){
      const me = this
      me.show = true
      me.$emit('openSelect')
    },
    close(){
      const me = this
      me.show = false
    },
    sizeSelect(idx, msg){
      const me = this
      me.data.select_idx = idx
      if(msg !== '품절' && msg !== 'Sold Out') me.close()
    }
  },
}
</script>
<style lang="scss" scoped>
</style>
