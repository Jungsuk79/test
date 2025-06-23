<template>
  <div class="guide">
    <!-- eslint-disable -->
    <div class="d-flex align-center">
      <div class="text-left">
        STATE [&nbsp;진행:<b class="ing">ing</b>,&nbsp;&nbsp;대기:<b
          class="hold"
          >hold</b
        >,&nbsp;&nbsp;중복(공통페이지) :
        <b class="pass">pass</b>,&nbsp;&nbsp;보류:
        <b class="pending">pending</b>,&nbsp;&nbsp;완료:
        <b class="complete">complete</b>&nbsp;]
      </div>
      <div style="margin-left: 20px">
        <v-select
          v-model="status"
          :items="statuses"
          flat
          height="25"
          style="width: 100px; display: inline-block"
        ></v-select>
        <v-select
          v-model="publisher"
          :items="publishers"
          flat
          height="25"
          style="width: 100px; display: inline-block"
        ></v-select>
        <input v-model="searchTxt" type="text" class="search-txt" placeholder="텍스트 검색" />
      </div>
      <!-- <div style="padding-left:20px;">
        <v-checkbox v-model="gridLayoutToDo" label="Grid ToDo" class="cmp-form-checkbox" style="display:inline-block;"></v-checkbox>
      </div>
      <div style="padding-left:20px;">
        <v-checkbox v-model="notFinished" label="미검수" class="cmp-form-checkbox" style="display:inline-block;"></v-checkbox>
      </div> -->
      <div class="ml-auto">
        <ul class="d-flex">
          <li>작업완료: <span id="endState"></span></li>
          <li>총 페이지수: <span id="totalState"></span></li>
          <li>진행율: <span id="perState"></span></li>
        </ul>
      </div>
    </div>
    <v-simple-table class="guide_table mt-4">
      <thead>
        <tr>
          <th>Category</th>
          <th width="10%">1Depth</th>
          <th class="large">2Depth</th>
          <th width="10%">ID</th>
          <th>Name</th>
          <th>URL</th>
          <th class="big">상태</th>
          <th class="big">시작일</th>
          <th class="big">완료일</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, idx) in list" :key="idx"
          :divide="item.divide"
          :class="{
            recent: item.recent,
            hide : !(
                      showAll ||
                      (status === '진행상태' && publisher === item.publisher) ||
                      (publisher === '퍼블리셔' && status === item.statusPub) ||
                      (publisher === item.publisher && status === item.statusPub) ||
                      (searchTxt !== '' && ( item.id.includes(searchTxt) || item.name.includes(searchTxt) || item.twodepth.includes(searchTxt) )) ||
                      (gridLayoutToDo && item.grid === undefined) ||
                      (notFinished && !(item.confirmPlan && item.confirmDesign))
                    )
          }"
        >
          <td :class="['grid-'+item.grid, 'table-'+item.table]"><div class="divide">{{ item.divide }}</div></td>
          <td>{{ item.onedepth }}</td>
          <td><div v-html="newLine(item.twodepth)" :index="idx+1"></div></td>
          <td v-html="newLine(item.id)" class="text-xs-right"></td>
          <td v-html="newLine(item.name)" class="text-xs-right"></td>
          <td class="text-center links" :class="{'local':isLocal, 'ip':ip}">
            <a v-if="ip" :href="'http://' + ip + ':8001/ko' + item.url" target="_blank">IP</a>
            <a v-if="isLocal" :href="'/ko' + item.url" target="_blank">LC</a>
            <a
              :href="'https://pub-fo.thehandsome.com/ko' + item.url"
              target="_blank"
              >PUB</a
            >
          </td>
          <td
            class="text-center"
            :class="[
              { complete: item.status === 'complete' },
              { end: item.status === 'end' },
              { ing: item.status === 'ing' },
              { hold: item.status === 'hold' },
              { pass: item.status === 'pass' },
            ]"
          >
            <span class="complete" v-if="item.status === 'complete'">
              {{ item.status }}<br />
              {{ item.checkdate }}
            </span>
            <span class="pending" v-else-if="item.status === 'pending'">
              {{ item.status }}<br />
              {{ item.checkdate }}
            </span>
            <span v-else> 
              {{ item.status }}
            </span>
          </td>
          <td class="text-center">
            {{ item.sdate }}
          </td>
          <td class="text-center">
            {{ item.edate }}
          </td>
          <td :class="{ multiple: item.description.length > 1 }">
            <div>
              <div
                v-for="desc in item.description.slice().reverse()"
                :key="desc"
                class="description"
                v-html="replaceDesc(desc)"
              ></div>
            </div>
            <div class="showall" @click.stop="showAllDesc"></div>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <!-- eslint-disable -->

  </div>
</template>

<script>
export default {
  layout: 'guide',
  data() {
    return {
      showAll: true,
      publishers: [
        '퍼블리셔',
        'glim',
        'glim2',
        'glim3',
        'glim_check'
      ],
      publisher: '퍼블리셔',
      statuses: ['진행상태', 'ing', 'hold', 'end', 'complete', 'pending'],
      status: '진행상태',
      gridLayoutToDo: false,
      notFinished: false,
      searchTxt: '',
      searchTimer: 0,
      isLocal: false,
      pubList: [],
      list: [
        {
          divide: '전시(DP)',
          onedepth: '메인',
          twodepth: '메인',
          id: 'DP_0001',
          name: 'test1',
          url: '/DP/test1',
          status: '',
          statusPlan: '',
          description: [],
          publisher: ''
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '메인',
          id: 'DP_0002',
          name: 'test2',
          url: '/DP/test2',
          status: '',
          statusPlan: '',
          description: [],
          publisher: ''
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '메인',
          id: 'DP_0003',
          name: 'test3',
          url: '/DP/test3',
          status: '',
          statusPlan: '',
          description: [],
          publisher: ''
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '메인',
          id: 'DP_0004',
          name: 'test4',
          url: '/DP/test4',
          status: '',
          statusPlan: '',
          description: [],
          publisher: ''
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '메인',
          id: 'DP_0005',
          name: 'test5',
          url: '/DP/test5',
          status: '',
          statusPlan: '',
          description: [],
          publisher: ''
        },
        {
          divide: '',
          onedepth: '',
          twodepth: '메인',
          id: 'DP_0006',
          name: 'test6',
          url: '/DP/test6',
          status: '',
          statusPlan: '',
          description: [],
          publisher: ''
        }
      ],
      map: {},
      endState: 0,
      totalState: 0,
      regexp: /\d{8}/g,
      regexp2: /(\d{4})(\d{2})(\d{2})/g,
      regexp3: /(\d{4}).(\d{2}).(\d{2})/g,
      ip: ""
    }
  },
  watch: {
    status(val) {
      const me = this
      me.checkVisible()
    },
    publisher(val) {
      const me = this
      me.checkVisible()
    },
    searchTxt(val) {
      const me = this
      me.checkVisible()
    },
    gridLayoutToDo(val){
      const me = this
      me.checkVisible()
    },
    notFinished(val){
      const me = this
      me.checkVisible()
    }
  },
  created() {
    const me = this
    me.prepareList()
  },
  mounted() {
    const me = this
    me.isLocal = location.port === '8001'
    me.ip = localStorage.getItem("DEV_IP")

    const replaceMap = { '"': '\\"', '&': '","', '=': '":"' }
    const repRegExp = new RegExp(Object.keys(replaceMap).join('|'), 'gi')
    let param = {}
    let pub = ''
    let stat = ''
    function replaceFunc(str) {
      return replaceMap[str]
    }
    if (decodeURI(location.search.substring(1)).length > 0) {
      param = JSON.parse(
        '{"' +
          decodeURI(location.search.substring(1)).replace(
            repRegExp,
            replaceFunc
          ) +
          '"}'
      )
    }
    if (me.publishers.includes(param.publisher)) {
      pub = param.publisher
    }
    if (me.statuses.includes(param.status)) {
      stat = param.status
    }

    const lc = localStorage.getItem('pathSelect')
    if (lc) {
      const arr = lc.split('|')
      if (arr.length >= 2) {
        if (stat !== '') {
          me.status = stat
        } else {
          me.status = arr[0]
        }
        if (pub !== '') {
          me.publisher = pub
        } else {
          me.publisher = arr[1]
        }
        if(arr[2]){
          me.searchTxt = arr[2]
        }
        me.gridLayoutToDo = arr[3] === "true"
        me.notFinished = arr[4] === "true"
      }
    }

    me.renderState()
  },
  methods: {
    updateList() {
      const me = this
      let json, list, len, a, i, item, target, name, str, cls

      if (me.publisher === 'glim_check') {
        me.list = []
        me.map = {}

        const glimCheckJson = require('~/pages/guide/glim_check.json')
        glimCheckJson.list.forEach(item => {
          // 기존에 같은 id/url이 있는지 확인
          const key = item.id + '_' + item.url
          let base = null
          // glim3 등 기존 퍼블리셔 데이터에서 찾아서 복사
          const arr = [
            { name: 'glim', path: 'glim' },
            { name: 'glim2', path: 'glim2' },
            { name: 'glim3', path: 'glim3' }
          ]
          for (let a = 0; a < arr.length; a++) {
            const json = require('~/pages/guide/' + arr[a].path + '.json')
            const found = json.list.find(d => d.id === item.id && d.url === item.url)
            if (found) {
              base = found
              break
            }
          }

          const newItem = {
            id: item.id,
            url: item.url,
            statusPub: item.status !== undefined ? item.status : (base ? base.status : ''),
            checkdate: item.checkdate || '',
            publisher: 'glim_check',
            sdate: item.sdate || (base ? base.sdate : ''),
            edate: item.edate || (base ? base.edate : ''),
            description: item.comment || (base ? base.comment : []),
            // 필요한 필드 추가
          }
          me.list.push(newItem)
          me.map[key] = newItem
        })
        return
      }
      const arr = [
        { name: 'glim', path: 'glim' },
        { name: 'glim2', path: 'glim2' },
        { name: 'glim3', path: 'glim3' },
        { name: 'glim_check', path: 'glim_check' },
      ]
      const alen = arr.length

      for (a = 0; a < alen; a++) {
        name = arr[a].name
        json = require('~/pages/guide/' + arr[a].path + '.json')
        list = json.list
        len = list.length
        for (i = 0; i < len; i++) {
          item = list[i]
          target = me.map[item.id + '_' + item.url]
          if (typeof target !== 'undefined') {
            target.publisher = name
            if(item.confirm){
              str = ""
              if(item.confirm.plan){
                if(item.confirm.plan.match(me.regexp3) !== null){
                  target.confirmPlan = true
                  cls = "done"
                }else{
                  cls = ""
                }
                str = "<div class='plan " + cls + "'>P: " + item.confirm.plan + "</div>"
              }
              if(item.confirm.design){
                if(item.confirm.design.match(me.regexp3) !== null){
                  target.confirmDesign = true
                  cls = "done"
                }else{
                  cls = ""
                }
                str += "<div class='design " + cls + "'>D: " + item.confirm.design + "</div>"
              }
              target.statusPlan = str
            }
            if(item.complete){
              target.complete = item.complete
            }
            if(item.status){
              target.status = item.status
            }
            if(item.checkdate){
              target.checkdate = item.checkdate
            }
            if(item.sdate){
              target.sdate = item.sdate
            }
            if(item.edate){
              target.edate = item.edate
            }
            if (item.comment) {
              target.description = item.comment
            }
            if(item.planner){
              target.planner = item.planner
            }
            if(item.designer){
              target.designer = item.designer
            }
            if(item.developer){
              target.developer = item.developer
            }
          }
        }
      }

      // //////////////////////////////////////////// GRID LAYOUT
      json = require('~/pages/guide/grid.json')
      json.done.forEach((item)=>{
        target = me.map[item.id + '_' + item.url]
        if (typeof target !== 'undefined') {
          target.grid = "done"
        }
      })
      json.na.forEach((item)=>{
        target = me.map[item.id + '_' + item.url]
        if (typeof target !== 'undefined') {
          target.grid = "na"
        }
      })
      // //////////////////////////////////////////// GRID LAYOUT
      // //////////////////////////////////////////// TABLE LAYOUT
      json = require('~/pages/guide/table.json')
      json.done.forEach((item)=>{
        target = me.map[item.id + '_' + item.url]
        if (typeof target !== 'undefined') {
          target.table = "done"
        }
      })
      json.na.forEach((item)=>{
        target = me.map[item.id + '_' + item.url]
        if (typeof target !== 'undefined') {
          target.table = "na"
        }
      })
      // //////////////////////////////////////////// TABLE LAYOUT

      console.log(me.list)

    },
    prepareList() {
      const me = this
      const len = me.list.length
      const now = new Date()
      const day = 1000 * 60 * 60 * 24
      now.setHours(0, 0, 0, 0)
      let i, item, desc, str, mt, date, dif
      let dv = ""

      for (i = 0; i < len; i++) {
        item = me.list[i]
        if(item.divide !== ""){
          dv = item.divide
        }else{
          item.divide = dv
        }
        me.map[item.id + '_' + item.url] = item
      }

      me.updateList()

      for (i = 0; i < len; i++) {
        item = me.list[i]
        desc = item.description
        if (Array.isArray(desc) && desc.length > 0) {
          try {
            str = desc[desc.length - 1]
            mt = str.match(me.regexp)
            date = new Date(
              mt[0].replace(me.regexp2, '$1-$2-$3' + ' 00:00:00')
            )
            dif = now - date
            item.recent = dif <= day
          } catch (e) {}
        }
      }
    },

    checkVisible() {
      const me = this
      me.showAll = me.status === '진행상태' && me.publisher === '퍼블리셔' && me.searchTxt === '' && !me.gridLayoutToDo && !me.notFinished

      localStorage.setItem('pathSelect', me.status + '|' + me.publisher + '|' + me.searchTxt + "|" + me.gridLayoutToDo + "|" + me.notFinished)
    },
    renderState() {
      this.list.forEach((item, index) => {
        if (item.status === 'complete' || item.statusPub === 'pass') {
          this.endState++
        }
        this.totalState++
      })

      const endState = this.endState
      const totalState = this.totalState
      const perState = parseInt((endState / totalState) * 100) + '%'

      document.getElementById('endState').append(endState)
      document.getElementById('totalState').append(totalState)
      document.getElementById('perState').append(perState)
    },
    newLine(str) {
      return String(str).replace(/(?:\r\n|\r|\n)/g, '</br>')
    },
    replaceDesc(str) {
      const me = this
      try {
        str = str.replace(me.regexp3, '<b>' + '$1.$2.$3' + '</b>')
        str = str.replace(me.regexp2, '<b>' + '$1.$2.$3' + '</b>')
        return str// str.replace(me.regexp, '<b>' + str.match(me.regexp)[0] + '</b>')
      } catch (e) {
        return str
      }
    },
    showAllDesc(e) {
      const cl = e.currentTarget.parentNode.classList
      if (cl.contains('open')) {
        cl.remove('open')
      } else {
        cl.add('open')
      }
    },
  },
}
</script>

<style lang="scss">
html,
body {
  overflow: auto !important;
}
.guide {
  width: 1500px;
}
.guide_table tr.recent {
  background-color: aliceblue;
}
.guide_table th,
.guide_table td {
  padding: 5px 10px !important;
  color: #222;
  text-align: left;
  font-size: 18px;
}
.guide_table th {
  line-height: 14px;
  background: #f5f5f5;
  border-top: 2px solid #414040;
  color: #000 !important;
}
.guide_table td {
  border-bottom: 1px solid #e5e5e5;
  border-left: 1px solid #e5e5e5;
}
.guide_table td.num {
  text-align: center;
}
.guide .complete span {
  color: #007c11;
  .plan, .design{color:grey;}
  .plan.done{color:#11007c;}
  .design.done{color:#7c1100;}
}
.guide .end span {
  color: #472bfd;
}
.guide .ing span {
  color: #9e9e9e;
}
.guide .hold span {
  color: #d93f70;
}
.guide .pass span {
  color: #5676c5;
}
.guide .pending,
.guide span.pending {
  color: #d93f70;
}
.guide span.complete {
  color: #007c11;
}

.guide_table th:nth-child(1){width:8%;}
.guide_table th:nth-child(2){width:8%;}
.guide_table th:nth-child(3){width:20%;}
.guide_table th:nth-child(4){width:8%;}
.guide_table th:nth-child(5){width:10%;}
.guide_table th:nth-child(6){width:7%;}
.guide_table th:nth-child(7){width:5%;}
.guide_table th:nth-child(8){width:7%;}
.guide_table th:nth-child(9){width:9%;}
.guide_table th.big {width:6% !important;}
.guide_table th.large {width:15% !important;}

.guide_table td.links {
  padding: 0;
  width: 80px;
  a {
    box-shadow: lightgrey 0 0 0 1px inset;
    padding: 3px 5px;
    border-radius: 5px;
  }
  a ~ a {
    margin-left: 2px;
  }
  a:hover {
    background-color: lightgrey;
  }
  &.local.ip{
    a{padding:3px;}
    a ~ a{margin-left:0;}
  }
}

.table-type2 {
  margin-top:30px;
  h2 {font-size:18px;padding-bottom:5px;}
  .guide_table { border-top: 2px solid #414040;}
}

.d-flex li {
  padding-right: 20px;
}
.d-flex li:last-child span {
  color: #d93f70;
}

.search-txt{border-bottom:1px solid grey;width:100px;height:25px;outline:none;}

.description {
  display: none;
}
.description b {
  color: #000;
}
.description:first-child {
  display: block;
}
.description ~ .description {
  border-top: 1px dotted grey;
  margin-top: 2px;
  padding-top: 4px;
}
.showall {
  display: none;
  cursor: pointer;
}
.multiple .showall {
  display: block;
  text-align: center;
  height: 18px;
  line-height: 18px;
  color: lightgrey;
}
.multiple .showall:before {
  content: '▼';
}
.open {
  .description {
    display: block;
  }
  .showall:before {
    content: '▲';
  }
}

td.assignee{
  position:relative;
  > div{
    display:none;position:absolute;left:0;right:0;top:calc(50% + 10px);padding:5px 0;z-index:1;pointer-events:none;
    border:1px solid lightgrey;border-radius:4px;background-color:#fff;box-shadow:2px 2px 3px 0 lightgrey;
    div{height:18px;line-height:18px;}
  }
  &:hover > div{display:block;}
}
.v-data-table__wrapper{overflow-x:visible !important;overflow-y:visible !important;}

// td.grid-done{
//   position:relative;
//   &:before{content:"G";color:blue;display:block;position:absolute;height:20px;line-height:20px;left:-15px;top:calc(50% - 10px);pointer-events:none;}
// }
// td.grid-na{
//   position:relative;
//   &:before{content:"X";color:lightgrey;display:block;position:absolute;height:20px;line-height:20px;left:-15px;top:calc(50% - 10px);pointer-events:none;}
// }
// td.grid-undefined{
//   position:relative;
//   &:before{content:"?";color:#666;display:block;position:absolute;height:20px;line-height:20px;left:-15px;top:calc(50% - 10px);pointer-events:none;}
// }
// td.table-done{
//   position:relative;
//   &:after{content:"T";color:blue;display:block;position:absolute;height:20px;line-height:20px;left:-25px;top:calc(50% - 10px);pointer-events:none;}
// }
// td.table-na{
//   position:relative;
//   &:after{content:"X";color:lightgrey;display:block;position:absolute;height:20px;line-height:20px;left:-25px;top:calc(50% - 10px);pointer-events:none;}
// }
// td.table-undefined{
//   position:relative;
//   &:after{content:"?";color:#666;display:block;position:absolute;height:20px;line-height:20px;left:-25px;top:calc(50% - 10px);pointer-events:none;}
// }
div[index]{
  display:flex;flex-direction:row;
  &:before{content:attr(index);display:block;width:30px;padding-right:10px;text-align:right;flex-shrink:0;font-family: 'Courier New';letter-spacing: -0.1em;}
}

tr.hide{display:none;}
tr:not(.hide) .divide{display:block;}
tr[divide='전시(DP)']:not(.hide) + tr[divide='전시(DP)'] .divide,
tr[divide='공통(CP)']:not(.hide) + tr[divide='공통(CP)'] .divide,
tr[divide='회원(ME)']:not(.hide) + tr[divide='회원(ME)'] .divide,
tr[divide='고객만족(CS)']:not(.hide) + tr[divide='고객만족(CS)'] .divide,
tr[divide='e기프트(GC)']:not(.hide) + tr[divide='e기프트(GC)'] .divide,
tr[divide='상품전시(DP)']:not(.hide) + tr[divide='상품전시(DP)'] .divide,
tr[divide='상품관리(PM)']:not(.hide) + tr[divide='상품관리(PM)'] .divide,
tr[divide='마케팅(MK)']:not(.hide) + tr[divide='마케팅(MK)'] .divide,
tr[divide='케어플러스 세탁(HC)']:not(.hide) + tr[divide='케어플러스 세탁(HC)'] .divide,
tr[divide='수선(HR)']:not(.hide) + tr[divide='수선(HR)'] .divide,
tr[divide='주문(OR)']:not(.hide) + tr[divide='주문(OR)'] .divide,
tr[divide='옷장(CL)']:not(.hide) + tr[divide='옷장(CL)'] .divide,
tr[divide='유료멤버십(TP)']:not(.hide) + tr[divide='유료멤버십(TP)'] .divide{display:none;}
tr[divide='회원(GP_ME)']:not(.hide) + tr[divide='회원(GP_ME)'] .divide{display:none;}
</style>
