<template>
  <div class="list">
    <Header />
    <div class="list__row">
      <div class="wrapper">
        <Filter />
        <div class="list__item">
          <h2><strong>3897</strong> beasiswa ditemukan</h2>
          <Pagination />
          <div class="list__meta">
            <Data />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from './components/Header';
import Filter from './components/Filter';
import Pagination from './components/Pagination';
import Data from './components/Data';

export default {
  metaInfo: {
    title: 'Cari Beasiswa - 3085 Hasil | Index Beasiswa',
  },
  components: {
    Header,
    Filter,
    Pagination,
    Data,
  },
};
</script>
<style lang="scss">
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
</style>
