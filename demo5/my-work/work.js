onmessage = function (e){
            //  console.log("111");//控制台打印成功，说明数据传过来了
            let sum=0;
            //  console.log(e);//在未计算前，打印出e是一个对象，看控制台发现，e.data才是我们要的数据n
            for(i=1;i<=e.data;i++){
                // console.log("判断有没有进来");//改成e.data后进来了
                 sum = sum +i; 
                
            }
            //  console.log(sum)//验证计算成功。将结果饭给主线程
           
            postMessage(sum);
        }