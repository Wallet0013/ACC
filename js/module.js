
$(function() {
	// 共通パーツの読込
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    //タブのactive入れ替え
    $("a.nav-item.is-tab").click(function(){
	  	$("a.nav-item.is-tab.is-active").removeClass("is-active");
	  	$(this).toggleClass("is-active");
	});

    // $("#overview").toggleClass("is-active");

    //テキストエリアの文字列を表示
    $("#config_submit").click(function(){
    	var config = $("#config_source").val();
    	$("#output").text(config);
    });


    $("#config_clear").click(function(){
    	$("#output").text("");
    	$("#config_source").val("");
    });
});
