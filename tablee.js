var a=0;
$(document).ready(function(){
	$('.item1').hide();
	$('#plus').click(function(){
		$('.item1').show();
	})
})
 $('.elaveet').click(function(){
 	// i++;
	$('.elave').append('<tr><td></td><td>'+$('input').eq(1).val()+'</td><td>'+$('input').eq(2).val()+'</td><td>'+$('input').eq(3).val()+'</td><td>'+$('.cins').val()+'</td><td><i id="bir" class="fas fa-trash-alt"></i> <i class="fas fa-pen"></i></td></tr>')
   $('input').val('')
   yenile();
 })
 $('.cancel').click(function(){
 	$('.item1').hide();
 })
 $('.item2').hide();

 $('table').on('click','.fa-trash-alt',function(){
   a=$(this).parents('tr')
   $('.item2').show();
 $('.cancell').click(function(){
    $('.item2').hide();
 })
 $('.deletee').click(function(){
   a.remove();
  yenile();
   $('.item2').hide();
 })
 }) 
 $('.item3').hide();
 $('table').on('click','.fa-pen',function(){
     $('.item3').show();
     var b =  $(this).parents('tr').children().eq(1);
     $(".add").val(b.text())
     var c =  $(this).parents('tr').children().eq(2);
     $(".soyadd").val(c.text())
     var d =  $(this).parents('tr').children().eq(3);
     $(".yaşş").val(d.text())
     var e =  $(this).parents('tr').children().eq(4);
     $(".cinss").val(e.text())
     $('.edit').click(function(){
       b.text($(".add").val())
       c.text($(".soyadd").val())
       d.text($(".yaşş").val())
       e.text($(".cinss").val())
     })

 })
    $('.legv').click(function(){
    $('.item3').hide();
    })

  //   $('.search').keyup(function() {
  //   var m = $(this).val().toLowerCase();
  //   $('.elave tr').filter(function() {
  //     $(this).toggle($(this).text().toLowerCase().indexOf(m)>-1)
  //   });
  // });


    function yenile(){
     var n = 0;
     $("tbody tr").each(function(){
        n++;
        $(this).children().eq(0).text(n);
     })
    }

    $('.search').keyup(function() {
      $('tbody tr').hide();
    $('tbody tr').each(function() {
     if ($(this).text().toLowerCase().includes($(".search").val().toLowerCase()) ){
      $(this).show();
     }
    
    });
  });

