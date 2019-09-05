var clickColor = new Vue({
  el: "#color",
  components: {
    aaaa: {
      data() {
        return {
          colors: [`red`, `green`, `yellow`, `blue`, `pink`, `purple`, `orange`]
        }
      },
      template: `
    <div>
    <button v-for="color in colors"
    :key="color"
    :style="{backgroundColor:color}"
    @click="boxcolor(color)"
    >
    {{ color }}
    </button>
    <div class="div" ref="box"></div>
      </div>
    `,
      methods: {
        boxcolor(color) {
          const boxc = this.$refs.box;
          boxc.style.backgroundColor = color;
        }
      }
    }
  }
})


var boxing = new Vue({
  el: `#boxing`,
  data: {
    he: 100,
    bo: false
  },
  methods: {
    less: function () {
      this.he -= 20;
      if (this.he <= 0) {
        this.bo = true
      }
    },
    anew: function () {
      this.he = 100;
      this.bo = false
    }
  }
})

var wath=new Vue({
  el:"#wath",
  data:{
    mag:" "
  },
  watch:{
    mag(nesw,ol){
    	if(nesw==="监听"){
    		alert(ol)
    	}
  
  //   mag:{
  //     handler(nesw,ol){
  //       if(nesw==="lll"){
  //       alert(ol)
  //     }
  //   },
  //   deep:true
  // }
}
}
    })

    var mous= new Vue({
      el: `#mos`,
      data: {
        yy:0,
        xx:0
      },
      methods: {
        mou: function () {
         this.xx=event.offsetX;
         this.yy=event.offsetY;
        }
      }
    })