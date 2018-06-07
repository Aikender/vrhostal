

function http(url){


 var core ={

    ajax: function(method,url,data){
     
        var promise =new Promise(function(resolve,reject){

         var client= new XMLHttpRequest();
         client.open(method,url,true);
         if(method ==='POST' ||  method==='PUT')
         {
            client.setRequestHeader("Content-type","application/json");
         
            client.send(data);
         }
  
         if(method ==='GET')
         {
           client.send();
         }
         client.onload=function(){
             resolve(this.response);
             console.log("response = " + this.response);
         };


        

        });
     
      return promise;
    }

   
 };

 return{
      'get':function()
      {
         return core.ajax("GET",url);
      },
      'post': function(data)
      {
        return core.ajax("POST",url,data);
      },

      'put': function(data)
      {
        return core.ajax("PUT",url,data);
      }

 };


};