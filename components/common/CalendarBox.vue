<template>
  <div class="cmp-form-calendarBox">
    <div class="calendar-box">
      <v-menu ref="dateDialog" v-model="dateModal" :flat="true" :close-on-content-click="false" offset-y content-class="cmp-calendar-layer">
        <template #activator="{ on, attrs }">
          <v-text-field v-model="dates" outlined readonly class="cmp-form-input label-hide" v-bind="attrs" v-on="on">
            <div>{{$t('components.calendar.select')}}</div>
          </v-text-field>
          <div class="calendar-cnt">
            <div class="cnt"><span>{{dates_c[0]}}</span></div>
            <div class="bar">-</div>
            <div class="cnt"><span>{{dates_c[1]}}</span></div>
          </div>
        </template>
        <template v-if="langType==='ko'">
          <v-date-picker v-model="dates" no-title range :flat="true" scrollable class="cmp-form-calendar" :day-format="getDate" @input="dateSelect"></v-date-picker>
        </template>
        <template v-if="langType==='en'">
          <v-date-picker v-model="dates" locale="en" no-title range :flat="true" scrollable class="cmp-form-calendar" @input="dateSelect"></v-date-picker>
        </template>
      </v-menu>
    </div>
    <v-btn outlined color="normal">{{$t('components.calendar.search')}}</v-btn>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  props: {
    lang : {
      type: String,
      default: () => {
        return "ko"
      },
    },
    d1: {
      type: String,
      default: () => {
        return ""
      },
    },
    d2: {
      type: String,
      default: () => {
        return ""
      },
    }
  },
  data: () => ({
    dateModal : false,
    dates: ['2019-09-10', '2019-09-20'],
    dates_c : [],
    langType : 'ko',
  }),
  watch : {
    dates(){
      this.datesConvert()
    },
  },
  created(){
    const me = this
    me.langType = me.$i18n.locale
    const rx = /(\d{4})-(\d{2})-(\d{2})/g
    if(me.d1 && me.d1.match(rx)) me.dates[0] = me.d1
    if(me.d2 && me.d2.match(rx)) me.dates[1] = me.d2
    me.datesConvert()
  },
  mounted(){
    
  },
  destroyed(){
    
  },
  methods: {
    getDate(date){
      const d = new Date(date).getDate(date);
      return d
    },
    getEnDate(val){
      const d = new Date(val).toDateString()
      const arr = d.split(" ")
      const date = arr[2]+' '+arr[1]+'. '+arr[3]
      return date
    },
    dateSelect(){
      const me = this
      me.dates_c = []
      if(me.dates.length===2){
        if(me.dates[0] > me.dates[1]){
          const item = me.dates[0]
          me.dates[0] = me.dates[1]
          me.dates[1] = item
        }
        setTimeout(()=>{me.dateModal = false},200)
      }
    },
    datesConvert(){
      const me = this
      for(let i=0;i<me.dates.length;i++){
        if(me.langType==='ko') me.dates_c[i] = me.dates[i].replace(/-/gi, '.')
        else if(me.langType==='en') me.dates_c[i] = me.getEnDate(me.dates[i])
      }
    }
  },
}
</script>
<style lang="scss" scoped>
</style>
