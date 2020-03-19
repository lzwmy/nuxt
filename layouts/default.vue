<template>
  <div id="main">
    <Layout>
      <Header/>
      <Content/>
      <Footer/>
    </Layout>
  </div>
</template>

<script>
import Header from '@/components/frame/header'
import Content from '@/components/frame/content'
import Footer from '@/components/frame/Footer'
export default {
  components: {
    Header,
    Content,
    Footer
  },
  created() {
    console.log(this.$router.options.routes)
  }

}
</script>

<style lang="scss">
  #__nuxt {
    height: 100%;
    #__layout {
      height: inherit;
      #main {
        height: inherit;
        .ivu-layout { 
          height: inherit;
        }
      }
    }
  }
</style>
