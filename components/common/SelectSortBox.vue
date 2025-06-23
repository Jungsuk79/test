<template>
  <div class="cmp-form-sort" :class="[{disabled:disabled}]">  
    <label :for="selectId" :class="[labelClass,{'c-gray':placeholder}]">
      <template v-if="labelFixText!=null">{{labelFixText}}</template>
      <template v-else>{{labelText}}</template>
      <i v-if="labelText!==null" class="cmp-icon i-down" :class="iconClass"></i>
    </label>
    <select 
      :id="selectId"
      :disabled="disabled"
      @change="$emit('change', $event)"
      @input="[$emit('submit',$event.target.value),optionSet()]"
    >
      <slot name="optionList">
        <!--
        placeholder용 option : <option value="placeholder"></option>
        -->
      </slot>
    </select>
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
    disabled : {
      type : Boolean,
      default : false,
    },
    labelClass : {
      type : String,
      default : 'cmp-font fnt-16',
    },
    iconClass : {
      type : String,
      default : 'cmp-icon-16',
    },
    labelFixText : {
      type : String,
      default : null,
    }
  },
  data: () => ({
    placeholder : false,
    labelText : null,
    selectId : null,
    selectDisabled : null,
  }),
  created(){
    const me = this
    if(me.id === null) me.selectId = 'selectId-'+Math.floor(Math.random() * 1000)
    else me.selectId = me.id
    me.selectDisabled = me.disabled
  },
  mounted(){
    const me = this
    me.optionSet();
  },
  destroyed(){
    const me = this
    me.selectId = null
    me.selectDisabled = false
  },
  methods: {
    optionSet(){
      const me = this;
      const select = me.$el.querySelector('select')
      
      me.labelText = select.options[select.options.selectedIndex].label
      if(select.options.selectedIndex === 0 && select.options[0].value==='placeholder'){
        me.placeholder = true;
      }else{
        me.placeholder = false;
      }
    }
  },
}
</script>
<style lang="scss" scoped>
</style>
