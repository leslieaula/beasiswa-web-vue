<template>
  <div class="footnav">
    <div class="wrapper">
      <div class="footnav__item">
        <h6 class="footnav__title">
          Untuk Lembaga Pendidikan
        </h6>
        <div class="footnav__list">
          <div class="footnav__list__item">
            <a href="#">Layanan Pemasaran</a>
          </div>
          <div class="footnav__list__item">
            <a href="#">Pembuatan Website dan Aplikasi</a>
          </div>
          <div class="footnav__list__item">
            <a href="#">Kerjasama Lainnya</a>
          </div>
        </div>
      </div>
      <div class="footnav__item">
        <h6 class="footnav__title">
          Untuk Murid dan Orang Tua
        </h6>
        <div class="footnav__list">
          <div class="footnav__list__item">
            <a href="#">Sekolah dan Perguruan Tinggi</a>
          </div>
          <div class="footnav__list__item">
            <a href="#">Beasiswa</a>
          </div>
          <div class="footnav__list__item">
            <a href="#">Tes Persiapan Beasiswa</a>
          </div>
          <div class="footnav__list__item">
            <a href="#">Info Kegiatan dan Seminar</a>
          </div>
          <div class="footnav__list__item">
            <a href="#">Toko Buku</a>
          </div>
        </div>
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
      <div class="footnav__item footnav__item--social">
        <div class="socialbutton">
          <div class="socialbutton__item">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
          </div>
          <div class="socialbutton__item">
            <a href="#"><i class="fab fa-twitter"></i></a>
          </div>
          <div class="socialbutton__item">
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
          <div class="socialbutton__item">
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <h6 class="footnav__title">
          Punya Kritik dan Saran ?
        </h6>
        <div class="footnav__button">
          <a href="#">Hubungi Kami</a>
        </div>
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
  font-size: 1em;
}

.footnav__item {
  flex: 1 1 0;
}

.footnav__item--social {
  text-align: center;
}

.footnav__list__item {
  margin: 5px 0;

  a {
    color: rgba(255,255,255,.5);
    font-size: .95em;

    &:hover, &:active, &:focus {
      color: rgba(255,255,255,.5);
    }
  }
}

.footnav__button {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    opacity: .9;
    font-weight: 600;
    display: block;
    font-size: .875em;
    padding: .75em 1.375em;
    background-color: #fc7136;
    border-radius: 99px;
    border: 1px solid #fc7136;
    color: #fff;
    cursor: pointer;
  }
}

.socialbutton {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.socialbutton__item {
  width: 2.3em;
  height: 2.3em;
  margin: 0 5px;
  border-radius: 99px;
  background-color: rgba(255,255,255,.1);
  color: rgba(255,255,255,.85);
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: rgba(255,255,255,.85);
    font-size: 1em;

    &:hover, &:active, &:focus {
      color: rgba(255,255,255,.85);
    }
  }
}
</style>
