$(document).ready(function(){
fretchNumber()


let numeroAnterior = [];

setInterval(function(){
    $(".numero_img").remove();

    numeroAnterior.splice(1,1);

    fretchNumber();   

}, 5000,)

function fretchNumber(){
    $.get("list_numero.php", function(res, err){
        let numero=JSON.parse(res);

        numeroAnterior.push(numero);



        console.log(numeroAnterior);

        if (numeroAnterior != numero) {
            
            for(let un_numero of numero.numero){            
                const newDiv=document.createElement("img");         
                let continer=document.querySelector("#continer").append(newDiv);  
        
                     
                        
        
                    switch(un_numero){                
                        

                        case "0":
                            newDiv.setAttribute ("class", "numero_img");
                            newDiv.setAttribute ("src", "numerosimg/0c.png");
                        break    
        
                        case "1":
                            newDiv.setAttribute ("class", "numero_img");
                            newDiv.setAttribute ("src", "numerosimg/1c.png");
                        break    
        
                        case "2":
                            newDiv.setAttribute ("class", "numero_img");
                            newDiv.setAttribute ("src", "numerosimg/2c.png");
                        break    
        
                        case "3":
                            newDiv.setAttribute ("class", "numero_img");
                            newDiv.setAttribute ("src", "numerosimg/3c.png");
                        break    
        
                        case "4":
                            newDiv.setAttribute ("class", "numero_img");
                            newDiv.setAttribute ("src", "numerosimg/4c.png");
                            
                        break    
        
                        case "5":
                            newDiv.setAttribute ("class", "numero_img");
                            newDiv.setAttribute ("src", "numerosimg/5c.png");
                        break    
        
                        case "6":
                            newDiv.setAttribute ("class", "numero_img");
                            newDiv.setAttribute ("src", "numerosimg/6c.png");
                        break    
        
                        case "7":
                            newDiv.setAttribute ("class", "numero_img");
                            newDiv.setAttribute ("src", "numerosimg/7c.png");
                        break    
        
                        case "8":
                            newDiv.setAttribute ("class", "numero_img");
                            newDiv.setAttribute ("src", "numerosimg/8c.png");
                        break    
        
                        case "9":
                            newDiv.setAttribute ("class", "numero_img");
                            newDiv.setAttribute ("src", "numerosimg/9c.png");
                        break    
                    


                    }

                     
        
                }

                

        }

        
        
    });



}
    

});

/*document.addEventListener("submit", (e)=>{    
     e.preventDefault();
     let numero=document.querySelector("#numero").value;     
     for(let un_numero of numero){

        switch(un_numero){
             case "1":
                 un_numero=1;                 
             break;    
         }

         numeros_img=`
         numero=${un_numero}`

         
        let continer=document.querySelector("#continer").append(numeros_img);         
     }

});*/



