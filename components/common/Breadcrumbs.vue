<template>
  <div class="ui-breadcrumbs">
    <v-breadcrumbs :items="items">
      <template #divider>
        <i class="cmp-icon i-next">다음</i>
      </template>
    </v-breadcrumbs>

    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      offset-y
      content-class="menu-subDepth"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          class="btn-toggleMenu"
          icon
          :ripple="false"
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          <i class="cmp-icon i-next">서브 메뉴 열기/닫기</i>
        </v-btn>
      </template>
      <v-card>
        <v-tabs vertical>
          <v-tab> 여성</v-tab>
          <v-tab>남성</v-tab>
          <v-tab> 키즈</v-tab>
          <v-tab> 뷰티</v-tab>
          <v-tab>라이프스타일</v-tab>
          <v-tab-item>
            <h2 class="ir">여성</h2>
            <div class="menu-group">
              <v-list>
                <v-list-item-group>
                  <v-list-item>
                    <v-list-item-title>전체</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>아우터</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>탑</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>드레스</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>팬츠</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>스커트</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>패션잡화</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>SPECIAL SHOP</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              <v-list>
                <v-list-item-group>
                  <v-list-item>
                    <v-list-item-title>전체</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>재킷</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>점퍼</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>가디건/베스트</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>트렌치코드</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
          </v-tab-item>
        </v-tabs>

        <v-card-actions class="justify-end">
          <v-btn text @click="menu = false">닫기</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: '여성',
        disabled: false,
        href: '#none',
      },
      {
        text: '아우터',
        disabled: false,
        href: '#none',
      },
      {
        text: '재킷',
        disabled: true,
      },
    ],
    menu: false,
  }),
}
</script>

<style lang="scss" scoped></style>
