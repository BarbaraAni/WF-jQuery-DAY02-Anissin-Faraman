<<<<<<< HEAD
=======




      
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
            console.log(v);
        
        })


>>>>>>> e38041b64913d51de617035bb392ec9de59a02d3
