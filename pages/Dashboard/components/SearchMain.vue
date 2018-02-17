<template>
  <div class="searchmain">
    <div class="searchmain__header">
      <div class="wrapper">
        <h1>
          <span class="light">Ayo bermimpi besar</span><br />
          Kami akan membantu anda mewujudkannya
        </h1>
        <h2>Temukan beasiswa dan sekolah yang sesuai untukmu</h2>
      </div>
    </div>
    <div class="searchmain__form">
      <div class="wrapper d-flex justify-between align-center">
        <div class="searchmain__box">
          <div class="searchmain__input">
            <select v-model="type">
              <option value="1">
                Cari Beasiswa
              </option>
              <option value="2">
                Cari Sekolah
              </option>
            </select>
          </div>
          <div class="searchmain__input">
            <select v-model="levelInput">
              <option v-for="levelItem in level" :value="levelItem.value" :key="levelItem.text">
                {{ levelItem.text }}
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
<script>
export default {
  data() {
    return {
      type: '1',
      levelInput: '1',
      schoolLevel: [
        { value: '1', text: 'Perguruan Tinggi' },
        { value: '2', text: 'SMA' },
        { value: '3', text: 'SMP' },
        { value: '4', text: 'SD' },
      ],
      scholarshipLevel: [
        { value: '1', text: 'Beasiswa S1' },
        { value: '2', text: 'Beasiswa S2' },
        { value: '3', text: 'Beasiswa S3' },
      ],
    };
  },
  computed: {
    level() {
      if (this.type === '1') {
        return this.scholarshipLevel;
      } else if (this.type === '2') {
        return this.schoolLevel;
      }

      return [];
    },
  },
  watch: {
    type() {
      this.levelInput = '1';
    },
  },
};
</script>
<style lang="scss">
.searchmain {
  height: 500px;
  background: #677079;
  box-shadow: inset 0 -300px 300px -150px rgba(10,12,15,.6);

  h1 {
    text-align: center;
    color: #fff;
    font-size: 3em;
    margin-top: 0;
    margin-bottom: 40px;
    padding: 70px 0 0;

    .light {
      font-weight: 300;
    }
  }

  h2 {
    font-size: 1.25em;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 0;
    font-weight: 300;
    color: #fff;
    opacity: .9;
  }
}

.searchmain__box {
  width: 100%;
  max-width: 960px;
  background-color: rgba(255,255,255,.333);
  padding: 1.25em;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}

.searchmain__input {
  margin: 0 10px;
  width: 30%;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
    width: 10%;
  }

  input[type=text] {
    background-color: #fff;
    border: none;
    padding: 0 20px;
    height: 50px;
    border-radius: 5px;
    font-size: 1.2em;
    width: 100%;
  }

  select {
    background-color: #fff;
    border: none;
    padding: 0 20px;
    height: 50px;
    border-radius: 5px;
    font-size: 1.2em;
    width: 100%;
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
    width: 100%;
  }
}
</style>
