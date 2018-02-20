<template>
  <div class="list__header">
    <div class="wrapper">
      <div class="list__nav">
        <div class="list__nav__item active">
          <a href="#">Hasil Pencarian Beasiswa</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.list__header {
  background-color: #d2d5d8;

  .wrapper {
    width: 100%;
    overflow-x: hidden;
  }
}

.list__nav {
  padding-left: 30px;
  margin-left: 20%;
  width: 100%;
  background-color: #d2d5d8;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.list__nav__item {
  color: #737d87;
  font-weight: 700;

  a {
    display: block;
    padding: 23px 20px;
    color: #737d87;
    font-size: .9em;
  }

  &.active {
    color: #383d42;

    a {
      color: #383d42;
      box-shadow: inset 0 3px 3px rgba(0,0,0,.075);
      background: #fff;
      border-left: 1px solid #c3ccd8;
      border-right: 1px solid #c3ccd8;
    }
  }
}
</style>
