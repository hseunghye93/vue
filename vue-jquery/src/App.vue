<template>
  <div id="app">
    App 컴포넌트 <br />
    <DatePicker></DatePicker>
  </div>
</template>

<script>
// 뷰 로직에 제이쿼리 로직 섞어서 개발하다 보면
// 추후 코드를 추적, 관리 어려움.
// 날짜 선택기 위젯 부분만 컴포넌트로 분리하여 관리할 수 있게 코드를 구조화.
import DatePicker from './DatePicker.vue'
export default {
  name: 'app'
  , data(){
    return{
      msg: 'Welcome to Yourt Vue.js App'
    }
  }
  , components:{
    // 'DatePicker': DatePicker
    // 와 동일.. ES6의 객체 리터럴에서 제공하는 약식 문법
    DatePicker
  }
}
</script>

<style lang="css" scoped>
</style>
