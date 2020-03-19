<template>
  <Content :style="{padding: '0 50px'}">
    <Breadcrumb :style="{margin: '20px 0'}">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>{{$route.name}}</BreadcrumbItem>
    </Breadcrumb>
    <Card>
        <nuxt />
    </Card>
  </Content>
</template>

<script>
export default {
  props: ['error'],
  mounted() {
    console.log(this.error)
  }
}
</script>
<style lang="scss" scoped>
  .ivu-layout-content {
    display: flex;
    flex-direction: column;
    .ivu-card {
      flex: 1 0 auto;
      .ivu-card-body {
        height: 100%;
      }
    }
  }
</style>