let add = document.querySelector(".add")
let multi = document.querySelector(".multi")
let sub = document.querySelector(".sub")
let div = document.querySelector(".div")
let btn = document.querySelector(".btn")
let inptvalue = document.querySelector(".inptvalue")
let err = document.querySelector(".err")


let value = 4







btn.addEventListener("click",function(){


    if(!(add.value || multi.value || sub.value || div.value)){
        console.log("kissu nai")
    }else{

        if((add.value && multi.value) || (multi.value && sub.value) || (sub.value && div.value) || (div.value && add.value ) || (sub.value && add.value ) || (div.value && multi.value )){
            console.log("dui tai value")

        }else{
            console.log("single value")
            

            switch (add.value ||   multi.value || sub.value || div.value) {
        

                case (add.value) :

               

                // value = (add.value + value)

                //  inptvalue.innerHTML = value
                //     // console.log(value = Number(inptvalue.innerHTML) + add.value)
                //     add.value = " "
                    break;


                case (multi.value):

                    console.log(multi.value)
                        if (value == 0){
                            err.innerHTML = " Do Some Addition First"
        
                        }else if (multi.value == 0 )
                        {
                            err.innerHTML = " Enter a value except 0"
                        }else{
                            value = (multi.value*value)  
                                inptvalue.innerHTML = value
                                multi.value = " "
                        }
        
                    break;


                case (sub.value):

                


                    console.log(sub.value)

                    if (value == 0){
                        err.innerHTML = " Do Some Addition First"

                    }else if (sub.value == 0)
                    {
                        err.innerHTML = " Enter a value except 0"
                        console.log(" Enter a value except 0 and Bigger than preivious value")
                    }else if((sub.value > value )){
                        err.innerHTML = " Enter a value Bigger than" + " " + value
                    }else{
                        value = ( value - sub.value )  
                            inptvalue.innerHTML = value
                            sub.value = " "
                    }

                    
                    break;
                case (div.value):
                    if (value == 0){
                        err.innerHTML = " Do Some Addition First"
    
                    }else if (div.value == 0 )
                    {
                        err.innerHTML = " Enter a value except 0"
                    }else if(div.value > value){
                        err.innerHTML = " Enter a value except bigger than " + " " + value
                    }else{
                        value = ( value / div.value )  
                            inptvalue.innerHTML = value
                            div.value = " "
                    }

                    console.log(div.value)
                  break;
                default:
                  text = "Looking forward to the Weekend";
              }
            
        }
        
        console.log("kisu ase")
    }
})




