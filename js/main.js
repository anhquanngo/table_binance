var tbody = $("tbody");

function add(params) {
    let number1 = Math.floor(Math.random() * 1000000) + 100000
    let number2 = Math.floor(Math.random() * 1000000) + 100000
    let number3 = Math.floor(Math.random() * 1000000) + 100000
    tbody.prepend("<tr id=''><td>" + number1 + "</td><td>" + number2 + "</td><td>" + number3 +
        "</td></tr>");
    tbody.find("tr").eq(10).remove()

}
let select = $("select")
select.change(function () {
    setInterval(add, select.val());
    console.log("select.val()", select.val())
})