var i=0;
var n=0;
var m=0;
var a=[
{sual:"2*3", A:"6",B:"9", C:"7" , true:"A"},
{sual:"6*5", A:"42",B:"27", C:"30" , true:"C"},
{sual:"3*3", A:"6",B:"12", C:"9" , true:"C"},
{sual:"8*7", A:"56",B:"49", C:"63" , true:"A"},
{sual:"4*6", A:"36",B:"24", C:"18" , true:"B"},
{sual:"8*2", A:"16",B:"9", C:"18" , true:"A"},
{sual:"9*4", A:"26",B:"46", C:"36" , true:"C" },
{sual:"7*3", A:"22",B:"20", C:"21" , true:"C"},
{sual:"8*4", A:"30",B:"32", C:"24" , true:"B"},
{sual:"4*7", A:"28",B:"24", C:"34" , true:"A"}
];
$(document).ready(function(){
	$('.end').hide();
	$('.second').hide();
 	$('.enter').click(function(){
    $('.second').show();
    $('.giris').hide();
    $('.ad').text($('#name').val())
    $('.soyad').text($('#surname').val())
 })

})
function suallar() {
  sual.innerHTML = a[i].sual;
  document.getElementsByClassName('variant1')[0].innerHTML = a[i].A;
  document.getElementsByClassName('variant2')[0].innerHTML = a[i].B;
  document.getElementsByClassName('variant3')[0].innerHTML = a[i].C;
}
$('#novb').click(function ireli(){
  $('.choose button').css("background-color","transparent")
    i++;
    suallar();
})
$('#evvel').click(function(){
    i--;
    suallar();
})
var b = 0;
$('#number button').click(function(){
 b = $(this).text();
 i = b;
 i--;
 suallar();
  
})
$('.choose button').click(function(){
  if ($(this).attr('id')==a[i].true) {
    $(this).css("background-color","green");
    n++;
  }
  else{
    $(this).css("background-color","red");
    m++;
  }
})
$('#bitir').click(function(){
  $('.second').hide();
  $('.end').show();
  $('#dogru').text(`Doğru cavab:${n}`)
  $('#sehv').text(`Yanlış cavab:${m}`)
})