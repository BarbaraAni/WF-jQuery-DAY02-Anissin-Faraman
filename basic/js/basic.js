



      
        var i = 0;

        for (i = 0; i < 9; i++) {

            rand = Math.floor(Math.random() * 3);
            console.log(rand);
            $(".container").append(`
    <div class="box" value=${christmas[rand].name}><img src=${christmas[rand].img} alt=""></div>`
            );
    
        };
        $(".box").click(function(){
            var v=$(this).attr("value");
        if(v=="Santa"){
            $(this).remove();
        }   
        else{
            $("#output").text(v);
        }
        
        })


