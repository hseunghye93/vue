<template>
  <div id="container"></div>
</template>

<script>
export default {
  mounted(){
      Highcharts.chart('container',{
        chart:{
          type:'bar'
        }
        ,title:{
          text: 'Fruit Consumption'
        }
        , xAXIS:{
          categories: ['Apples','Bananas','Oranges']
        }
        , yAXIS:{
          title: {
            text:'Fruit eaten'
          }
        }
        ,series: [{
          name:'Jane'
          ,data:[1,0,4]
        },{
          name:'John'
          ,data:[5,7,3]
        }]
      });
  }
}
</script>

<style lang="css" scoped>
  #container{
    width: 100%;
    height: 400px;
  }
</style>
