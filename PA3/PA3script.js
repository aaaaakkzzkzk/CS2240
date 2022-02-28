$( "#frogMenu" ).menu();

$( "#frogTabs" ).tabs();

$( "#frogTrivia" ).accordion({collapsible:true,heightStyle: "content"});

$("#frogLogo").on("click", function(){$("#frogLogo").effect("bounce",2000)});

$( "#frogModal" ).dialog({
    height: "auto",
    modal:true,
    width:300,
	show: {
        effect: "bounce",
		times: 2,
        duration: 1000
      },
	buttons: [
		{            
			text: "Register",
			click: function() {
				window.location.href = "html pages/register.html";
				$( this ).dialog( "close" );
			}
		},
		{
			text: "Later",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( ".draggable" ).draggable({ revert: true });

let state =true;
$("#draggable2").dblclick(function() {
	if ( state ) {
	  $( this ).animate({
		backgroundColor: "##0c8217",
		color: "#fff"
	  }, 1000 );
	} else {
	  $( this).animate({
		backgroundColor: "#f4fcf2",
		color: "#4b904b"
	  }, 1000 );
	}
	state = !state;
  });

//table filter
$("#searchInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#frogTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

 



//Animation

$(".content").css("display","none").fadeIn("slow");