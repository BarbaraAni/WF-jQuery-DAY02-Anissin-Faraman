$(document).ready(function() {
    $('body').append(`<div class="grid" > <ul id="hexGrid"></ul></div>`);



    let item = [];
    item = items;
    console.log(item);

    for (i = 0; i < item.length; i++) {
        $("#hexGrid").append(`<li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <div class='img' ><img src=${item[i].imgsrc}></div>
            <h1 id="demo1">${item[i].name}</h1>
            <p id="demo2">${item[i].desc}</p>
            <p id="demo3"><button></button></p>
          </a>
        </div>
      </li>`);
      $("button:last").attr("id", "add" + i);
      $("#add" + i).text("Add to Cart").addClass("add");
    }

    $.each(items, function(key, value) {
        console.log(value.name);
    });
});

/*
        addButt = document.getElementById("but" + i)
        addButt.onclick = function(e) {
            addCount(e.target.id);
            function addCount(x) {
                current = Number(x.substring(3, 10))
                y = document.getElementById("count" + current)
                amount = Number(document.getElementById("count" + current).innerHTML.slice(14));
                amount += 1
                y.innerHTML = "In your cart: " + amount;
                if (amount >= 5) {
                    $("#grocDiv" + current).css("background-color", "#DEF0FD");
                } else {
                    $("#grocDiv" + current).css("background-color", "#DEFDE0");
                }
            };
        }
    }

*/