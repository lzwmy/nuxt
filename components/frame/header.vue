<template>
  <Header>
    <Menu mode="horizontal" theme="dark" active-name="1" class="flex-between-center">
      <Logo/>
      <div class="layout-nav">
        <MenuItem name="1" v-for="(item, index) in menuList" :key="index" :to="item.path">
          <Icon type="logo-sass" size='26'/>
          {{item.title}}
        </MenuItem>
      </div>
    </Menu>
  </Header>
</template>

<script>
import Logo from '@/components/logo'
import rootRouters from '@/assets/utils/rootRouters'
export default {
  data() {
    return {
    }
  },
  components: {
    Logo
  },
  computed: {
    menuList() {
      return rootRouters.filter( li => li.isNav)
    }
  },
  methods: {

  }
}
</script>
<style lang='scss' scoped>

</style>