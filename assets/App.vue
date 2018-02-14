<template>
  <div id="app">
    <Header />
    <div id="content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from 'components/Header';
import Footer from 'components/Footer';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
.wrapper {
  max-width: 1200px;
  padding: 0 30px;
}
</style>
