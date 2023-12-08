var overlay = document.querySelector(".overlay")

var number = document.querySelector(".number");    //Bu 4 setirde lazim olan klasslara adlandirirg
var openBtn = document.querySelector("#call");
var closeBtn = document.querySelector(".exit_icon");

var section = document.querySelector(".section")
var inf_kinds = document.querySelector(".inf_kinds")
var order_end = document.querySelector(".order_end")


function openNumber () {

    number.classList.remove("hidden") //numberin ustune klik etdikde hiddenler silinir ekrana verir
    overlay.classList.remove("hidden")  //numberin ustune klik etdikde hiddenler silinir ekrana bulsnig bsckgroundu verir verir
}

function closeNumber(){
    number.classList.add("hidden")  //numberin ustune basanda hiddenler elave olunsu yeni gorsenmesin
    overlay.classList.add("hidden")  //numberin ustune basanda hiddenler elave olunsu yeni bulanig ekran gorsenmesin

}


function openOnlinecall() {
    section.classList.remove("hidden")   //ikinci keci
    overlay.classList.remove("hidden")


}
function closeOnlinecall() {
    section.classList.add("hidden")  //ikinci kecid
    number.classList.add("hidden")
    overlay.classList.add("hidden")

    // overlay.classList.remove("hidden")
    // number.classList.remove("hidden")
}




openBtn.addEventListener("click",openNumber)
closeBtn.addEventListener("click",closeNumber)
overlay.addEventListener("click",closeNumber)





//ikinci kecid
inf_kinds.addEventListener("click",openOnlinecall)

order_end.addEventListener("click",closeOnlinecall)
overlay.addEventListener("click",closeOnlinecall)






document.addEventListener("keydown",function(esc){

    if(esc.key === "Escape"){
        closeOnlinecall();
    }
});