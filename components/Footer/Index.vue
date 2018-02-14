<template>
  <div id="footer">
    <Footnav />
    <Copyright />
  </div>
</template>
<script>
import Footnav from './Footnav';
import Copyright from './Copyright';

export default {
  components: {
    Footnav,
    Copyright,
  },
};
</script>
<style lang="scss">
#footer {
  color: rgba(255,255,255,.5);
}
</style>
