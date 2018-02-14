<template>
  <div class="searchmain">
    <div class="searchmain__form">
      <div class="wrapper">
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
};
</script>
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
    min-width: 220px;
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
