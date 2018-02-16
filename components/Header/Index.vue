<template>
  <div id="header">
    <div class="nav">
      <div class="nav__item">
        <div class="logo">
          <div class="logo__image">
            <img src="/static/ui/Index-Beasiswa-Logo-Icon.svg" />
          </div>
          <div class="logo__text">
            <img src="/static/ui/Index-Beasiswa-Logo-Text.png" />
          </div>
        </div>
        <div class="main-nav">
          <div class="main-nav__item">
            <a href="#" @click.prevent="dropdownToggle($event)" @blur="dropdownReset()">
              Beasiswa <i class="fa fa-angle-down" aria-hidden="true"></i>
            </a>
            <div class="main-nav__dropdown">
              <div class="main-nav__dropdown__item">
                <a href="#">Beasiswa S3</a>
              </div>
              <div class="main-nav__dropdown__item">
                <a href="#">Beasiswa S2</a>
              </div>
              <div class="main-nav__dropdown__item">
                <a href="#">Beasiswa S1</a>
              </div>
            </div>
          </div>
          <div class="main-nav__item">
            <a href="#" @click.prevent="dropdownToggle($event)" @blur="dropdownReset()">
              Sekolah <i class="fa fa-angle-down" aria-hidden="true"></i>
            </a>
            <div class="main-nav__dropdown">
              <div class="main-nav__dropdown__item">
                <a href="#">Perguruan Tinggi</a>
              </div>
              <div class="main-nav__dropdown__item">
                <a href="#">SMA</a>
              </div>
              <div class="main-nav__dropdown__item">
                <a href="#">SMP</a>
              </div>
              <div class="main-nav__dropdown__item">
                <a href="#">SD</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="nav__item">
        <div class="not-authenticated">
          <div class="nav__button nav__button--bg-primary">
            <a href="#">Masuk</a>
          </div>
          <div class="nav__button nav__button--outline-primary">
            <a href="#">Daftar</a>
          </div>
        </div>
        <div class="nav__button nav__button--outline-grey">
          <a href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    dropdownReset() {
      const elements = document.getElementsByClassName('main-nav__item');

      for (let i = 0; i < elements.length; i += 1) {
        elements[i].classList.remove('active');
      }
    },
    dropdownToggle(event) {
      const target = event.target.parentNode;
      const isActive = target.classList.contains('active');

      this.dropdownReset();

      if (isActive) {
        target.classList.remove('active');
      } else {
        target.classList.add('active');
      }
    },
  },
};
</script>
<style lang="scss">
#header {
  height: 75px;
  padding: 0 20px;
  background: white;
  border-bottom: 1px solid #d7dadf;
  box-shadow: 0 -10px 20px 10px rgba(44,48,52,0.2);
  position: relative;
  z-index: 2;
}

.nav {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.nav__item {
  display: flex;
  align-items: center;
  height: 100%;
}

.nav__button {
  display: inline-block;
  vertical-align: middle;
  margin: 0 5px;

  a {
    display: block;
    padding: 8px 20px;
    text-transform: capitalize;

    &:hover, &:focus {
      text-decoration: none;
    }
  }
}

.nav__button--bg-primary {
  background-color: #3c92d4;
  color: #fff;
  border-radius: 99px;

  a {
    color: #fff;
  }
}

.nav__button--outline-primary {
  border-color: #3c92d4;
  border-width: 1px;
  border-style: solid;
  color: #3c92d4;
  border-radius: 99px;

  a {
    color: #3c92d4;
  }
}

.nav__button--outline-grey {
  border-color: #acb4be;
  border-width: 1px;
  border-style: solid;
  color: #acb4be;
  border-radius: 99px;

  a {
    color: #acb4be;
  }
}

.logo {
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo__image {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;

  img {
    height: 30px;
  }
}

.logo__text {
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 20px;
  }
}

.main-nav {
  display: flex;
  align-items: center;
  margin-left: 50px;
  height: 100%;
}

.main-nav__item {
  height: 100%;
  color: #2c3034;
  font-weight: 600;
  position: relative;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;

  &.active {
    background: #fafbfb;
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;

    .main-nav__dropdown {
      display: block;
    }
  }

  i, svg {
    margin-left: 5px;
  }

  a {
    color: #2c3034;
    display: flex;
    align-items: center;
    padding: 0 30px;
    height: 100%;

    &:hover, &:focus {
      text-decoration: none;
      color: #fc7136;
    }
  }
}

.main-nav__dropdown {
  display: none;
  position: absolute;
  left: -1px;
  min-width: 250px;
  background: #fafbfb;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  font-weight: normal;
}

.main-nav__dropdown__item {
  padding: 5px 0;
}
</style>
