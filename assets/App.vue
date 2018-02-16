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
import Header from 'components/Header/Index';
import Footer from 'components/Footer/Index';

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
  margin: auto;
}

.d-flex {
  display: flex !important;
}

.justify-between {
  justify-content: space-between !important;
}

.align-center {
  align-items: center !important;
}

.text-center {
  text-align: center;
}
</style>
