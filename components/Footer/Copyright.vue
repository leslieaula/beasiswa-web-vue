<template>
  <div class="copyright">
    <div class="wrapper">
      <div class="copyright__text">
        &copy; 2018 StackAlterdev. All rights reserved.
      </div>
      <div class="copyright__nav">
        <div class="copyright__nav__item">
          <a href="#">Sitemap</a>
        </div>
        <div class="copyright__nav__item">
          <a href="#">Kebijakan Privasi</a>
        </div>
        <div class="copyright__nav__item">
          <a href="#">Syarat dan Ketentuan</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.copyright {
  padding: .625em 0;
  background-color: #212426;
  font-size: .875em;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.copyright__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright__text {
  @media screen and (max-width: 640px) {
    display: block;
    width: 100%;
    text-align: center;
  }
}

.copyright__nav__item {
  color: rgba(255,255,255,.75);

  @media screen and (max-width: 640px) {
    display: none;
  }

  a {
    padding: 0 10px;
    display: block;
    color: rgba(255,255,255,.75);
    border-right: 1px solid rgba(255,255,255,.75);

    &:hover, &:active, &:focus {
      color: rgba(255,255,255,.75);
    }
  }

  &:last-child {
    a {
      border-right: none;
    }
  }
}
</style>
