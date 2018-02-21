<template>
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
      <div class="list__data__action__button">
        <i class="fas fa-share-alt"></i> Share
      </div>
    </div>
  </div>
</template>
<style lang="scss">
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
  margin: 10px auto;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

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
