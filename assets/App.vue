<template>
  <div id="app">
    <Header />
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
      footer
    </div>
  </div>
</template>
<script>
import Header from 'components/Header';

export default {
  components: {
    Header,
  },
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
</style>
