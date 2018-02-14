<template>
  <div class="footnav">
    <div class="wrapper">
      <div class="footnav__item">
        tes
      </div>
      <div class="footnav__item">
        tes
      </div>
      <div class="footnav__item">
        <h6 class="footnav__title">
          Tentang Index Beasiswa
        </h6>
        <div class="footnav__list">
          <div class="footnav__list__item">
            <a href="#">Tentang Kami</a>
          </div>
          <div class="footnav__list__item">
            <a href="#">Hubungi Kami</a>
          </div>
          <div class="footnav__list__item">
            <a href="#">Blog</a>
          </div>
          <div class="footnav__list__item">
            <a href="#">Kebijakan Iklan</a>
          </div>
        </div>
      </div>
      <div class="footnav__item">
        tes
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.footnav {
  background-color: #262a2d;
  padding: 2.5em 0;

  .wrapper {
    display: flex;
    justify-content: space-between;
  }
}

.footnav__title {
  margin-top: 0;
  margin-bottom: .625em;
  color: rgba(255,255,255,.75);
  font-size: 1.15em;
}

.footnav__list__item {
  a {
    color: rgba(255,255,255,.5);
    font-size: .95em;

    &:hover, &:active, &:focus {
      color: rgba(255,255,255,.5);
    }
  }
}
</style>
