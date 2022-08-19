$(document).ready(function(){

    $('input').on('change', function() {               // функция - переключатель состояния видимости блока

        let value = $('input[name="question"]:checked').val();
        
        if (value == 1){
            $('#field-hidden').css('display','none');
        } else{
          $('#field-hidden').css('display','flex');  
        } 
     });

     $("#form").submit(function(){ //функция отправки         
        $.ajax({
            url: 'some_url',
            method: 'post',
            dataType: 'html',
            data: $(this).serialize(),
            success: function(){
                $('.popup-fade').fadeIn(); // открытие модального окна(срабатывает при успешной отправке формы)
            }
        });
    });

    
     $('.popup-close').click(function() {         // функция закрытия модального окна
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});        
 
});