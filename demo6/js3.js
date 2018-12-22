(function max(maxz){
    var a=9,b=4,c=5;
    this.maxz = a;
    if(this.maxz>b&&this.maxz>c){
        console.log(this.maxz);
    }else {
        this.maxz = b;
        if(this.maxz>c){
          console.log(this.maxz)
        }else{
             this.maxz = c;
              console.log(this.maxz)
        }   
    }  
})();/*-[]wait improve a,b,c,不确定，自动输入三个数判断大小 */
//方法一，直接写三个if语句,太麻烦
//方法一，if else嵌套



// function swap(a,b){
//     var a = 1, b = 2;
//     console.log("a初始值"+a);
//     console.log("b初始值"+b);
//      this.a = b;
//      this.b = a;
//     console.log("交换后a的值"+this.a);
//     console.log("交换后b的值"+this.b);
// }
// swap();



