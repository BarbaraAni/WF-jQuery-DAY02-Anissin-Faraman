$(document).ready(function() {
    $('body').append(`<div class="grid" > <ul id="hexGrid"> <div class="cart"></div></ul></div>`);

    let item = [];
    item = items;

    for (i = 0; i < item.length; i++) {
        $("#hexGrid").append(`<li class="hex" value=${item[i].name}>
        <div class="hexIn" >
          <a class="hexLink" href="#">
            <div class='img' ><img src=${item[i].imgsrc}></div>
            <h1 id="demo1">${item[i].name}</h1>
            <p id="demo2">${item[i].desc}</p>
            <p id="demo3">${item[i].price}</p>
          </a>
        </div>
      </li>`);
        $("button:last").attr("id", "add" + i);
        $("#add" + i).text("Add to Cart").addClass("add");
        $("add" + i).on(`click`, function(e) {
            count(e, target.id)

            function count(x) {
                amount = Number(document.getElementById("numb").innerHTML)
                amount += amount
                $(".cart").append($(items.name), amount)
            }
        })
    }

    $.each(items, function(key, value) {});
    let scart = [];
    $(".hex").click(function() {
        var v = $(this).attr("value");
        let count = 1;

        if ($.inArray(v, scart) != -1) {
            var cout = Number($(`#${v}`).html());
            $(`#${v}`).text(`${cout+=1}`);

        } else {
            scart.push(v);
            $(".cart").append(`<li>${v}<span id=${v}>${count}</span><button id="remove${v}">X</button><button id="decrease${v}">--</button></li>`);
            $(`#decrease${v}`).click(function() {
                var cout = Number($(`#${v}`).html())
                if (cout === 1) {
                    $(this).parent("li").remove()
                    x = Array.prototype.indexOf(v);
                    scart.splice(x, 1)
                } else {
                    $(`#${v}`).text(`${cout-=1}`);
                }
            })
            $(`#remove${v}`).click(function() {
                $(this).parent("li").remove()
                x = Array.prototype.indexOf(v);
                scart.splice(x, 1)
            });
        }
        var test= $(this).contents().find("demo3").text();
        console.log(test);
//        for(i=0 ; i<scart.length ; i++){
//        if (scart[i]===items[].name){

//    }
//        $(".cart").append(`<h1>${sum}</h1>`)
//    }
})
});