<template>
  <div class="cmp-form-select" :class="[{disabled:selectDisabled},{valid:selectError},{placeholder:placeholder}]" :style="{width:width+'px'}">
    <div class="select-cnt">
      <label :for="selectId">{{title}}</label>
      <select 
        :id="selectId"
        ref="selectEl"
        :title="selectTitle"
        :disabled="selectDisabled"
        @change="$emit('change', $event)"
        @input="[$emit('submit',$event.target.value),placeholderSet()]"
      >
        <slot name="optionList">
          <!--
          placeholder용 option : <option value="placeholder"></option>
          -->
        </slot>
      </select>
    </div>
    <transition name="valid-text-ani">
      <p v-if="selectError && selectErrorText!==null" class="validation-text">{{selectErrorText}}</p>
    </transition>
  </div><!-- End : select-box -->
</template>

<script>
export default {
  components: {
    
  },
  props: {     
    id: {
      type : String,
      default : null,
    },
    title : {
      type : String,
      default : null,
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
      default : null,
    },
    width : {
      type : Number,
      default : null
    }
  },
  data: () => ({
    placeholder : false,
    selectId : null,
    selectTitle : null,
    selectDisabled : null,
    selectError : null,
    selectErrorText : null,
  }),
  created(){
    const me = this
    if(me.id === null) me.selectId = 'selectId-'+Math.floor(Math.random() * 1000)
    else me.selectId = me.id
    me.selectTitle = me.title
    me.selectDisabled = me.disabled
    me.selectError = me.error
    me.selectErrorText = me.errorText
  },
  mounted(){
    const me = this
    me.placeholderSet();
  },
  destroyed(){
    const me = this
    me.selectId = null
    me.selectTitle = null
    me.selectDisabled = false
    me.selectError = false
    me.selectErrorText = null
  },
  methods: {
    placeholderSet(){
      const me = this;
      const select = me.$el.querySelector('select');
      if(select.options.selectedIndex === 0 && select.options[0].value==='placeholder'){
        me.placeholder = true;
      }else{
        me.placeholder = false;
      }
    }
  },
}
</script>
<style lang="scss" scoped></style>
