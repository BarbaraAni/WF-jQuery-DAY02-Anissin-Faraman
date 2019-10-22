var i = 0;

for (i = 0; i < 9; i++) {

    $(document).ready(function () {

        rand = Math.floor(Math.random() * 3);
        console.log(rand);
        $(".container").append(`
<div class="box" value="${christmas[rand].name}"><img src="${christmas[rand].img}" alt=""></div>`
        );
$("box").on(`click`,function(){
    $( ".box" ).click( handler ).find( valueof(".box") ) ;

})
    })
};
