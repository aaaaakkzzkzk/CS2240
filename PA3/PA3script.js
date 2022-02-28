$( "#frogMenu" ).menu();

$( "#frogTabs" ).tabs();

$( "#frogTrivia" ).accordion({collapsible:true,heightStyle: "content"});

$( "#frogModal" ).dialog({
    height: "auto",
    modal:true,
    width:300,
	buttons: [
		{            
			text: "Register",
			click: function() {
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

$( "#draggable" ).draggable({ revert: true });

//for table filter

// $("#searchInput").on("keyup", function() {
//     var value = $(this).val().toLowerCase();
//     $("#frogTable tr").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });

//   const availableTags = [
//     "ActionScript",
//     "AppleScript",
//     "Asp",
//     "BASIC",
//     "C",
//     "C++",
//     "Clojure",
//     "COBOL",
//     "ColdFusion",
//     "Erlang",
//     "Fortran",
//     "Groovy",
//     "Haskell",
//     "Java",
//     "JavaScript",
//     "Lisp",
//     "Perl",
//     "PHP",
//     "Python",
//     "Ruby",
//     "Scala",
//     "Scheme"
//   ];
//   $( "#" ).autocomplete({ //place this somewhere
//     source: availableTags
//   });



//Animation

$(".content").css("display","none").fadeIn("slow");