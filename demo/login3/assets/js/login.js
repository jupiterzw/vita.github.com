$(function(){
		$(".submit_button").click(function(){
			var username = $("#username");
            var userpsw = $("#password");
			$("#loginTips").css({display:"none"});	
			if(username.val().length <6 || username.val().length>12){
				$("#loginTips").html("请输入正确的用户名!").fadeIn();
				username.focus();
				return false;
			}
			if(userpsw.val() == ''){
				$("#loginTips").html("请输入正确的密码!").fadeIn();
				userpsw.focus();
				return false;
			}

		})		
});