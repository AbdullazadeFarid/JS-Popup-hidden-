var overlay = document.querySelector(".overlay")
var number = document.querySelector(".number");    //Bu 4 setirde lazim olan klasslara adlandirirg
var openBtn = document.querySelector("#call");
var closeBtn = document.querySelector(".exit_icon");

function openNumber () {

    number.classList.remove("hidden") //numberin ustune klik etdikde hiddenler silinir ekrana verir
    overlay.classList.remove("hidden")  //numberin ustune klik etdikde hiddenler silinir ekrana bulsnig bsckgroundu verir verir
}

function closeNumber(){
    number.classList.add("hidden")  //numberin ustune basanda hiddenler elave olunsu yeni gorsenmesin
    overlay.classList.add("hidden")  //numberin ustune basanda hiddenler elave olunsu yeni bulanig ekran gorsenmesin

}



openBtn.addEventListener("click",openNumber)
closeBtn.addEventListener("click",closeNumber)
overlay.addEventListener("click",closeNumber)
