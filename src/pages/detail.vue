<template>
  <div class="detail-wrap">
  <!-- detail left start -->
	<div class="detail-left">
		<div class="product-board">
			<img :src="productIcon">
			<ul>
				<router-link v-for="item in products"
				:to="{path:item.path}" tag="li" 
				active-class="active">
					{{item.name}}
				</router-link>
			</ul>
		</div>
	</div>
  <!-- detail left end -->

  <!-- detail right start -->
  <div class="detail-right">
  	<keep-alive>
  		<router-view></router-view>
  	</keep-alive>
  </div>
  <!-- detail right end -->

  </div>
</template>

<script>

export default {
  components:{
   
  },
data () {
    return {
      products: [
        {
          name: '数据统计',
          path: 'count',
          icon: require('../assets/images/1.png'),
          active: false
        },
        {
          name: '数据预测',
          path: 'forecast',
          active: false
        },
        {
          name: '流量分析',
          path: 'analysis',
          active: false
        },
        {
          name: '广告发布',
          path: 'publish',
          active: false
        }
      ],
      imgMap: {
        '/detail/count': require("../assets/images/1.png"),
        '/detail/forecast': require("../assets/images/2.png"),
        '/detail/analysis': require("../assets/images/3.png"),
        '/detail/publish': require("../assets/images/4.png")
      }
    }
  },
  methods:{
    getPrice(){
    let buyVersionsArray=_.map(this.versions,
      (item)=>{
        return item.value
      })
    let passParams={
      buyNumber:this.buyNumber,
      buyType:this.buyType.value,
      period:this.period.value,
      version:buyVersionsArray.join(',')
    }
    this.$http.post('/api/getPrice',passParams).
    then((res)=>{
      let data=JSON.parse(res.data)
      this.price=data.amount
    })
  },
  test(){
    for(let i=1;i<3;i++ ){
      console.log(i);
    }
  }


  },
  computed:{
    productIcon(){
      return this.imgMap[this.$route.path]
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.detail-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
}
.detail-left {
  float: left;
  width: 200px;
  text-align: center;
}
.detail-right {
  float: left;
  width: 980px;
  margin-left: 20px;
}
.product-board {
  background: #fff;
  padding: 20px 0;
}
.product-board ul {
  margin-top: 20px;
}
.product-board li {
  text-align: left;
  padding: 10px 15px;
  cursor: pointer;
}
.product-board li.active,
.product-board li:hover {
  background: #4fc08d;
  color: #fff;
}
.product-board li a {
  display: block;
}
.sales-board {
  background: #fff;
}
.sales-board-form {

}
.sales-board-intro h2 {
  font-size: 20px;
  padding: 20px;
}
.sales-board-intro p {
  background: #f7fcff;
  padding: 10px 20px;
  color: #999;
  line-height: 1.8;
}
.sales-board-form {
  padding: 30px 20px;
  font-size: 14px;
}
.sales-board-line {
  clear: both;
  padding-bottom: 20px;
}
.sales-board-line-left {
    display: inline-block;
    width: 100px;
}
.sales-board-line-right {
    display: inline-block;
    width: 75%;
}
.sales-board-des {
  border-top: 20px solid #f0f2f5;
  padding: 15px 20px;
}
.sales-board-des p {
  line-height: 1.6;
}
.sales-board-des h2 {
  font-size: 20px;
  padding-bottom: 15px;
}
.sales-board-des h3 {
  font-size: 18px;
  font-weight: bold;
  padding: 20px 0 10px 0;
}
.sales-board-des li {
  padding: 5px 0;
}
.sales-board-table {
  width: 100%;
  margin-top: 20px;
}
.sales-board-table th {
  background: #4fc08d;
  color: #fff;
}
.sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
}
.button {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
  float: left;
  border-radius: 5px;
}
</style>


