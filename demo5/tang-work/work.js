/**
 * Created by Administrator on 2018/12/21 0021.
 */

onmessage= function (e) {
     var sum=0;
    for(i=1;i<= e.data;i++){
        sum+=i;
    }

    console.log("11111");
   postMessage(sum);
};