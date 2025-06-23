<template>
  <div class="contents-left-menu">
    <div class="meun-title" v-html="title"></div>

    <ul class="menu-listConts" :class="pageClass">
      <li v-for="item,idx in list" :key="idx" :class="{'line-group':item.sublist}">
        <div :class="{'active':item.active}">
          <nuxt-link :to="{path:item.link}" v-html="item.name"></nuxt-link>
        </div>

        <ul v-if="item.sublist" class="cmp-dotList">
          <li v-for="sub, sdx in item.sublist" :key="sdx" :class="[{'active':sub.active}, (sub.class ? sub.class : '')]">
            <button v-if="sub.thirdlist" @click="show_list=!show_list">{{sub.name}}</button>
            <nuxt-link v-else :to="{path:sub.link}">{{sub.name}}</nuxt-link>

            <ul v-if="sub.thirdlist" :class="{'show':show_list}" class="cmp-dotList">
              <li v-for="thd, tdx in sub.thirdlist" :key="tdx" :class="[{'active':thd.active}, (thd.class ? thd.class : '')]">
                <nuxt-link :to="{path:thd.link}">{{thd.name}}</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    url: {
      type: String,
      default: () => ''
    },
    leftData: {
      type: Array,
      default: ()=>{ return null },
    },
    title : {
      type: String,
      default: () => '',
    },
    active:{
      type: String,
      default: () => ""
    },
    pageClass : {
      type : String,
      default: () => ""
    },
  
  },
  data: () => ({
    list: [],
    show_list : false
  }),
  watch :{
    leftData(){
      const me = this
      me.list = me.leftData
      me.dataLoaded()
    }
  },
  mounted(){
    const me = this
    if(me.leftData){
      me.list = me.leftData
      me.dataLoaded()
    }else if(me.url){
      axios.get(me.url)
      .then(function(res){
        me.list = res.data.list
        me.dataLoaded()
      })
      .catch(function(e){
        console.log(e)
      })
    }
  },
  methods: {
    dataLoaded(){
      const me = this
      let url = me.active
      if(url === ""){
        url = location.pathname
      }
      if(me.list && me.list.length > 0){
        me.list.forEach(function(item){
          item.active = item.link === url
          if(item.sublist){
            item.sublist.forEach(function(sub){
              if(sub.link === url){
                sub.active = true
                item.active = true
              }else{
                sub.active = false
              }
              if(sub.thirdlist){
                if(sub.active){
                  me.show_list = true
                }
                const path = location.pathname
                sub.thirdlist.forEach(function(thd){
                  if(thd.link === path){
                    thd.active = true
                    sub.active = true
                    item.active = true
                  }else if(thd.link2 && thd.link2.length){
                    thd.link2.forEach(function(thdLink){
                      if(thdLink === path){
                        thd.active = true
                        sub.active = true
                        item.active = true
                      }
                    })
                  }else{
                    thd.active = false
                  }
                })
              }
            })
          }
        })
        me.$forceUpdate()
      }
    }
  },
}
</script>

<style lang="scss"></style>
