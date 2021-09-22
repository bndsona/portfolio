var a=0;
var b=0;
var c=0;
setInterval(clock,1000)
function clock() {
    a+=6;
    sec.style.transform ="rotate("+a+"deg)";
    if (a%360==0) {
    b+=6;
    min.style.transform ="rotate("+b+"deg)";
    if (b%360==0) {
    c+=30;
    hour.style.transform ="rotate("+c+"deg)";
    }
    }

}
