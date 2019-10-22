<<<<<<< HEAD
=======
var i = 0;
>>>>>>> 62bfac47f98650ba8c6a48a865ca3af9738ad313

for (i = 0; i < 9; i++) {

    rand = Math.floor(Math.random() * 3);
    console.log(rand);
    $(".container").append(`
    <div class="box" value=${christmas[rand].name}><img src=${christmas[rand].img} alt=""></div>`);

};
$(".box").click(function() {
    var v = $(this).attr("value");
    console.log(v);

<<<<<<< HEAD
      
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


=======
})
>>>>>>> 62bfac47f98650ba8c6a48a865ca3af9738ad313
