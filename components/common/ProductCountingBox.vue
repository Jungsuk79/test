<template>
  <div class="cmp-form-counting" :class="{ 'disabled': disabled }">
    <v-btn icon :disabled="disabled" class="minus" :class="{'deactive': minusDisabled}" @click="minus">
      <div class="bar">{{$t('components.counting.minus')}}</div><!-- 글로벌 작업 : en 언어 추가 -->
    </v-btn>
    <v-text-field v-model="nowCount" :readonly="readonly" :disabled="disabled" height="40" type="text" class="cmp-form-input label-hide">
      <template>
        <div>{{$t('components.counting.quantity')}}</div><!-- 글로벌 작업 : en 언어 추가 -->
      </template>
    </v-text-field>
    <v-btn icon :disabled="disabled" class="plus" :class="{'deactive': plusDisabled}" @click="plus">
      <div class="bar">{{$t('components.counting.plus')}}</div><!-- 글로벌 작업 : en 언어 추가 -->
    </v-btn>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    count : {
      type: String,
      default: ()=>{ return '1' },
    },
    min : {
      type: String,
      default: ()=>{ return '1' },
    },
    max : {
      type: String,
      default: ()=>{ return null },
    },
    readonly : {
      type: Boolean,
      default: ()=>{ return true },
    },
    disabled : {
      type: Boolean,
      default: ()=>{ return false },
    },
    width : {
      type : String,
      default: ()=>{ return null },
    },
  },
  data: () => ({
    nowCount : null,
    maxCount : null,
    minCount : null,
    plusDisabled : false,
    minusDisabled : false,
  }),
  created(){
    const me = this
    me.nowCount = Number(me.count)
    me.minCount = Number(me.min)
    if(me.max !== null) me.maxCount = Number(me.max)
    me.buttonDisabledSet()
  },
  mounted(){
    
  },
  methods: {
    buttonDisabledSet(){
      const me = this
      if(me.nowCount === me.minCount) me.minusDisabled = true
      else me.minusDisabled = false

      if(me.nowCount === me.maxCount || me.maxCount===1) me.plusDisabled = true
      else me.plusDisabled = false
    },
    minus(){
      const me = this
      if(me.nowCount > me.minCount) me.nowCount--
      me.buttonDisabledSet()
    },
    plus(){
      const me = this
      if(me.maxCount === null || (me.maxCount !== null && me.nowCount < me.maxCount)) me.nowCount++
      me.buttonDisabledSet()
    }
  },
}
</script>
<style lang="scss" scoped></style>
