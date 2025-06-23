<template>
  <DialogBasic class="popup-productSizeGuide" header-title="사이즈 조건표" :width="880" @hide="closeDialog">
    <template #body>
      <!-- 221109 조견표탭 : 마크업 변경 -->
      <!-- <div class="size-tit-top">
        <h2>WOMEN TOP</h2>
      </div> -->
      <div class="cmp-tabs tabs-noneLine">
        <v-tabs v-model="sizeTab">
          <v-tab>WOMEN TOP</v-tab>
          <v-tab>MEN TOP</v-tab>
        </v-tabs>
      </div>
      <!-- // 221109 조견표탭 -->
      <v-tabs-items v-model="sizeTab" touchless>
        <v-tab-item :transition="false">
          <div class="size-tbl">
            <table>
              <caption>
              WOMEN TOP
              </caption>
              <colgroup>
                <col style="width: 213px" />
                <col style="width: auto" />
                <col style="width: auto" />
                <col style="width: auto" />
                <col style="width: auto" />
                <col style="width: auto" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-left">BRAND</th>
                <th scope="col">XS</th>
                <th scope="col">S</th>
                <th scope="col">M</th>
                <th scope="col">L</th>
                <th scope="col">XL</th>
              </tr>
            </thead>
              <tbody>
                <tr>
                  <td class="text-left">TIME</td>
                  <td class="text-center">74</td>
                  <td class="text-center">78</td>
                  <td class="text-center">82, 84</td><!-- [퍼블수정]23.01.25 사이즈 2개인 케이스 추가 -->
                  <td class="text-center">86, 88</td>
                  <td class="text-center">90, 92</td>
                </tr>
                <tr>
                  <td class="text-left">SYSTEM</td>
                  <td class="text-center">74</td>
                  <td class="text-center">78</td>
                  <td class="text-center">82, 84</td>
                  <td class="text-center">86</td>
                  <td class="text-center">88</td>
                </tr>
                <tr>
                  <td class="text-left">FOURM MEN’S LOUNGE</td>
                  <td class="text-center">74</td>
                  <td class="text-center">78, 82</td>
                  <td class="text-center">84</td>
                  <td class="text-center">86, 88</td>
                  <td class="text-center">90</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="size-tbl">
            <table>
              <caption>
              COUNTRTY
              </caption>
              <colgroup>
                <col style="width: 213px" />
                <col style="width: auto" />
                <col style="width: auto" />
                <col style="width: auto" />
                <col style="width: auto" />
                <col style="width: auto" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-left">COUNTRTY</th>
                <th scope="col">XS</th>
                <th scope="col">S</th>
                <th scope="col">M</th>
                <th scope="col">L</th>
                <th scope="col">FREE</th>
              </tr>
            </thead>
              <tbody>
                <tr>
                  <td class="text-left">KOREA</td>
                  <td class="text-center">-</td>
                  <td class="text-center">85</td>
                  <td class="text-center">90</td>
                  <td class="text-center">95</td>
                  <td class="text-center">-</td>
                </tr>
                <tr>
                  <td class="text-left">US</td>
                  <td class="text-center">2</td>
                  <td class="text-center">4</td>
                  <td class="text-center">6</td>
                  <td class="text-center">8</td>
                  <td class="text-center">-</td>
                </tr>
                <tr>
                  <td class="text-left">EUROPE</td>
                  <td class="text-center">34</td>
                  <td class="text-center">36</td>
                  <td class="text-center">38</td>
                  <td class="text-center">40</td>
                  <td class="text-center">-</td>
                </tr>
                <tr>
                  <td class="text-left">CHINA</td>
                  <td class="text-center">160/80A</td>
                  <td class="text-center">165/84A</td>
                  <td class="text-center">170/88A</td>
                  <td class="text-center">175/92A</td>
                  <td class="text-center">-</td>
                </tr>           
              </tbody>
            </table>
          </div>
        </v-tab-item>
        <v-tab-item :transition="false">
          <div class="size-tbl">
            <table>
              <caption>
              MEN TOP
              </caption>
              <colgroup>
                <col style="width: 213px" />
                <col style="width: auto" />
                <col style="width: auto" />
                <col style="width: auto" />
                <col style="width: auto" />
                <col style="width: auto" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-left">BRAND (MEN)</th>
                <th scope="col">XS</th>
                <th scope="col">S</th>
                <th scope="col">M</th>
                <th scope="col">L</th>
                <th scope="col">FREE</th>
              </tr>
            </thead>
              <tbody>
                <tr>
                  <td class="text-left">TIME</td>
                  <td class="text-center">76</td>
                  <td class="text-center">82</td>
                  <td class="text-center">82, 84</td>
                  <td class="text-center">86, 88</td>
                  <td class="text-center">90, 92</td>
                </tr>
                <tr>
                  <td class="text-left">MINE</td>
                  <td class="text-center">76</td>
                  <td class="text-center">82</td>
                  <td class="text-center">82, 84</td>
                  <td class="text-center">86</td>
                  <td class="text-center">88</td>
                </tr>
                <tr>
                  <td class="text-left">SYSTEM</td>
                  <td class="text-center">76</td>
                  <td class="text-center">82</td>
                  <td class="text-center">88</td>
                  <td class="text-center">-</td>
                  <td class="text-center">-</td>
                </tr>
                <tr>
                  <td class="text-left">SJSJ</td>
                  <td class="text-center">76</td>
                  <td class="text-center">82</td>
                  <td class="text-center">88</td>
                  <td class="text-center">-</td>
                  <td class="text-center">-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="size-tbl">
            <table>
              <caption>
              COUNTRTY
              </caption>
              <colgroup>
                <col style="width: 213px" />
                <col style="width: auto" />
                <col style="width: auto" />
                <col style="width: auto" />
                <col style="width: auto" />
                <col style="width: auto" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-left">COUNTRTY</th>
                <th scope="col">XS</th>
                <th scope="col">S</th>
                <th scope="col">M</th>
                <th scope="col">L</th>
                <th scope="col">FREE</th>
              </tr>
            </thead>
              <tbody>
                <tr>
                  <td class="text-left valign-top" rowspan="2">KOREA</td><!-- [퍼블수정]23.01.25 rowspan="2" 인 경우 class valign-top 추가 -->
                  <td class="text-center">&nbsp;</td>
                  <td class="text-center">85</td>
                  <td class="text-center">90</td>
                  <td class="text-center">95</td>
                  <td class="text-center">-</td>
                </tr>
                <tr>
                  <td class="text-center">44</td>
                  <td class="text-center">55</td>
                  <td class="text-center">66</td>
                  <td class="text-center">77</td>
                  <td class="text-center">-</td>
                </tr>
                <tr>
                  <td class="text-left">US</td>
                  <td class="text-center">2</td>
                  <td class="text-center">4</td>
                  <td class="text-center">6</td>
                  <td class="text-center">8</td>
                  <td class="text-center">-</td>
                </tr>
                <tr>
                  <td class="text-left">EUROPE</td>
                  <td class="text-center">34</td>
                  <td class="text-center">36</td>
                  <td class="text-center">38</td>
                  <td class="text-center">40</td>
                  <td class="text-center">-</td>
                </tr>
                <tr>
                  <td class="text-left">CHINA</td>
                  <td class="text-center">160/80A</td>
                  <td class="text-center">165/84A</td>
                  <td class="text-center">170/88A</td>
                  <td class="text-center">175/92A</td>
                  <td class="text-center">-</td>
                </tr>           
              </tbody>
            </table>
          </div>
        </v-tab-item>
      </v-tabs-items>
      

      
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
    sizeTab : 0, // 221109 조견표탭 : 추가
  }),
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
