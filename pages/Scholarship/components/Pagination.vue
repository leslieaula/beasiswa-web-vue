<template>
  <div class="list__pagination">
    <div class="list__pagination__offset">
      <div class="offset__row">
        <div class="offset__item">
          <a href="#"><i class="fas fa-long-arrow-alt-left"></i></a>
        </div>
        <div class="offset__item">
          <a href="#" class="active">1</a>
        </div>
        <div class="offset__item">
          <a href="#">2</a>
        </div>
        <div class="offset__item">
          <a href="#">3</a>
        </div>
        <div class="offset__item">
          <a href="#"><i class="fas fa-long-arrow-alt-right"></i></a>
        </div>
      </div>
    </div>
    <div class="list__pagination__count">
      <div class="count__row">
        <div class="count__item">
          Show:
        </div>
        <div class="count__item">
          <a href="#" class="active">15</a>
        </div>
        <div class="count__item">
          <a href="#">30</a>
        </div>
        <div class="count__item">
          <a href="#">50</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.list__pagination {
  padding: 2.5em 0 1.875em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.offset__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.offset__item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 3px;

  &:first-child {
    margin-left: 0;

    a {
      background-color: transparent;
    }
  }

  &:last-child {
    margin-right: 0;

    a {
      background-color: transparent;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    border-radius: 99px;
    color: #b7bdc2;
    font-size: 12px;

    &.active {
      background-color: #333;
      color: #fff;
      font-weight: 600;
    }
  }
}

.count__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.count__item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 10px;
  font-size: 12px;

  &:first-child {
    color: #333;
    font-weight: 600;
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  a {
    color: #b7bdc2;

    &.active {
      color: #333;
      font-weight: 600;
    }
  }
}
</style>
