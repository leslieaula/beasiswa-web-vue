<template>
  <div class="searchmain">
    <div class="searchmain__form">
      <div class="wrapper">
        <div class="searchmain__box">
          <div class="searchmain__input">
            <select>
              <option>
                Cari Beasiswa
              </option>
              <option>
                Cari Sekolah
              </option>
            </select>
          </div>
          <div class="searchmain__input">
            <select>
              <option>
                Beasiswa S1
              </option>
              <option>
                Beasiswa S2
              </option>
              <option>
                Beasiswa S3
              </option>
            </select>
          </div>
          <div class="searchmain__input">
            <input type="text" placeholder="Kata Kunci" />
          </div>
          <div class="searchmain__input">
            <input type="submit" value="Cari" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.searchmain {
  height: 500px;
  background: #677079;
  box-shadow: inset 0 -300px 300px -150px rgba(10,12,15,.6);

  .wrapper {
    display: flex;
    justify-content: center;
    text-align: center;
  }
}

.searchmain__form {
  padding: 100px 0 0;
}

.searchmain__box {
  background-color: rgba(255,255,255,.333);
  padding: 1.25em;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.searchmain__input {
  margin: 0 10px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  input[type=text] {
    background-color: #fff;
    border: none;
    padding: 0 20px;
    height: 50px;
    border-radius: 5px;
    font-size: 1.2em;
  }

  select {
    background-color: #fff;
    border: none;
    padding: 0 20px;
    height: 50px;
    border-radius: 5px;
    font-size: 1.2em;
  }

  input[type=submit] {
    background-color: #fc7136;
    border: none;
    padding: 0 20px;
    height: 50px;
    border-radius: 5px;
    font-size: 1.2em;
    font-weight: 600;
    color: #fff;
  }
}
</style>
