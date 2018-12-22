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
/*不要把编程想的太难，其实就是把你怎么解决一个问题的思路步骤转化成具体的代码，通常都是一些判断语句，等学过的语句进行实现 。比如这个求三个数的最大值，我的思路：定一个最大值的变量，将这个变量作为一个指针，指到谁，在将这个与剩余的数字比较，与a，b，c*/
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



