$(document).ready(function(){
    $('body').append(`<div class="grid" > <ul id="hexGrid"></ul></div>`);



    let item= [];
    item=items;
    console.log(item);  

    for ( i = 0 ; i<item.length ; i++){
        $("#hexGrid").append(`<li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <div class='img' ><img src=${item[i].imgsrc}></div>
            <h1 id="demo1">${item[i].name}</h1>
            <p id="demo2">${item[i].desc}</p>
          </a>
        </div>
      </li>`);
    }
   
$.each(items, function(key,value) {
  console.log(value.name);
}); 
});

   



