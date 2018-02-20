<template>
  <div class="list">
    <div class="list__header">
      <div class="wrapper">
        <div class="list__nav">
          <div class="list__nav__item active">
            <a href="#">Hasil Pencarian Beasiswa</a>
          </div>
        </div>
      </div>
    </div>
    <div class="list__row">
      <div class="wrapper">
        <div class="list__filter">
          filter
        </div>
        <div class="list__item">
          <h2><strong>3897</strong> beasiswa ditemukan</h2>
          <div class="list__pagination">
            pagination
          </div>
          <div class="list__meta">
            <div class="list__data">
              <div class="list__data__content">
                <h1><a href="#">Congressional Hispanic Caucus Institute Public Policy Fellowships</a></h1>
                <div class="list__author">
                  <strong>Beasiswa</strong> disediakan oleh <strong>PT Telkomsel</strong>
                </div>
                <div class="list__desc">
                  Fellowship for recent college graduates from the United States to gain hands-on experience at the federal level in the public policy area of their choice. Award consists of a monthly stipend of $2200, round-trip transportation to Washington D.C., and health insurance. Fellows with a graduate degree ...
                </div>
              </div>
              <div class="list__data__action">
                <div class="list__data__action__button">
                  <i class="far fa-heart"></i> Save
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  metaInfo: {
    title: 'Cari Beasiswa - 3085 Hasil | Index Beasiswa',
  },
};
</script>
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

.list__row {
  background-color: #e9ecf0;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    &:before {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      background-color: #fff;
      width: 50vw;
      height: 100%;
      z-index: 1;
    }
  }
}

.list__filter {
  background-color: #fff;
  min-height: 100vh;
  width: 20%;
  position: relative;
  z-index: 2;
}

.list__item {
  background-color: #e9ecf0;
  min-height: 100vh;
  width: 80%;
  position: relative;
  z-index: 2;
  padding: 0 30px;

  h2 {
    font-size: 1.5em;
    color: #5b636b;
    font-weight: 400;
    margin-top: 50px;
    margin-bottom: 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #c2ccd8;
  }
}

.list__pagination {
  padding: 2.5em 0 1.875em;
}

.list__data {
  background-color: #fff;
  margin: 15px 0;
  padding: 30px;
  display: flex;
  align-items: center;

  &:first-child {
    margin-top: 0;
  }

  h1 {
    margin: 0;
    font-size: 1.25em;
    color: #383d42;
  }

  a {
    color: #383d42;
  }
}

.list__data__content {
  width: 75%;
}

.list__data__action {
  width: 25%;
  padding-left: 30px;
}

.list__data__action__button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  text-transform: uppercase;
  background-color: #3c92d4;
  color: #fff;
  border-radius: 99px;

  i {
    font-size: 18px;
    margin-right: 10px;
  }
}

.list__author {
  font-size: .9em;
  margin-top: .4em;
}

.list__desc {
  font-size: .95em;
  color: #70808f;
  margin-top: .6em;
}
</style>
