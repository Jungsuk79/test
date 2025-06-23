<template>
  <DialogBasic
    class="popup-notice"
    :header-title="listData.title"
    :width="880"
    @hide="closeDialogNoticeList"
  >
    <template #body>
      <div class="inner">
        <ul class="cmp-dotList">
          <!-- eslint-disable -->
          <li v-for="(item, index) in listData.list" :key="index" v-html="newLine(item.text)" :class="[{line : item.lineType},{nodotType : item.dotType}]"></li>
          <!-- eslint-disable -->
        </ul>
      </div>
    </template>
  </DialogBasic>
</template>
<script>
/*
listData : {
  title : '타이틀',
  list : [
    {
      text : '',
      highlight : false,
    }
    {
      text : '',
      highlight : true,
    }
  ]
}
*/
import DialogBasic from '~/pages/POPUP/DialogBasic.vue'
export default {
  components: { DialogBasic },
  props: {
    listData: {
      type: Object,
      default: ()=>{ return null },
    },
  },
  data: () => ({
    
  }),
  methods: {
    closeDialogNoticeList() {
      this.$emit('close')
    },
    newLine(str) {
      return String(str).replace(/(?:\r\n|\r|\n)/g, '</span>','</br>')
    }

  },
}
</script>

<style lang="scss"></style>
