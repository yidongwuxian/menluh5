$(function(){
    /*文本框获取焦点移开焦点 start*/
    $("#txtUser").jFocus();
    $("#txtCorp").jFocus();
    $("#txtZhi").jFocus();
    $("#txtCountry").jFocus();
    $("#txtYear").jFocus();
    $(".expertForm .in textarea").jFocus();
    /*文本框获取焦点移开焦点 end*/

    /*输入框输入文字改变文字颜色 start*/
    $('.e-formItem input').click(function(){
         $(this).css("color","#222222");
    });
    $('.expertForm .in textarea').css('color','#c0c5ca');
    $('.expertForm .in textarea').click(function(){
        $(this).css('color','#222222');
    })
    /*输入框输入文字改变文字颜色 end*/

});
