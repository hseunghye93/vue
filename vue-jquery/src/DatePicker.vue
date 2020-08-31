<template>
  <input id="calendar">
</template>

<script>
export default {
  // created(){
  //   console.log($.fn.jquery);
  //   console.log($.ui.version);
  // }
  // 중요 !!
  // 인스턴스 라이프 사이클 훅 중 mounted 에 제이쿼리 로직을 추가
  // 버전 확인은 created 에 로직 수행할 때는 mounted 를 사용한 이유
  // <template> 안의 HTML 태그에 접근할 수 있는 시점이
  // 뷰의 가상 돔이 화면의 특정 요소에 부착되고 난 시점인 mounted 이기 때문
  // mounted 이전 라이프 사이클 단계인 created 에서는 <template> 에 저의한
  // 돔 요소에 접근 할 수 x
  mounted(){
    $('#calendar').datepicker();
  }
}
</script>

<style lang="css" scoped>
</style>
