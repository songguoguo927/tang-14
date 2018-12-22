onmessage = function (e){
             console.log("111");//控制台打印成功，说明数据传过来了
            let sum=0;
            for(i=1;i<=e;i++){
                console.log("判断有没有进来")
                 sum = sum +i; 
            }
            console.log(sum)
            // postMessage(sum);
        }