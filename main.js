$(document).on('ready', function() {

//////////////////////////////
// FIRST FRAME FUNCTIONALITY//
//////////////////////////////

	// Hide the second frame on page load
	$('#secondFrame').hide();  

	// On click of whatever button, fade out all first frame contents, then launch second frame
	$('.whatever').on('click', function() {
		// Remove the entry message so the next frame doesn't have to deal with its padding/space
		$(this).closest('#firstFrame').fadeOut(2000, launchSecondFrame());
		// set interval before this happens
		$(this).closest('#firstFrame').remove(); 
		// Remove the entry photo background
		$('.background').remove();
	});

	var launchSecondFrame = function() {
		$('#secondFrame').fadeIn(2000);

		// On page load, get original location of all tools!
		var lattePos = $("#latte").parent().position();
		var yogaPantsPos = $("#yogaPants").parent().position();
		var messyBunPos = $("#messyBun").parent().position();
		console.log("Latte original position: ", lattePos);
		console.log("Yoga pants original position: ", yogaPantsPos);
		console.log("Messy bun original position: ", messyBunPos);
	};

////////////////////////////////
// SECOND FRAME FUNCTIONALITY //
////////////////////////////////

	/* Quotes */
	var quotes = [
	"Omg those yoga pants tho",
	"Keep calm and carry on",
	"Vodka soda pls",
	"I SO need to detox",
	"I just can't.",
	"Can Monday like, not?",
	"Should I delete that Instagram or is it cute?",
	"Go like my status pls, no one has yet",
	"Wearing leggings as pants IDGAF"
	];

	/* Quote Button */
	$('.fa-quote-left').on('click', function() {
		// Pull a random quote out of the array
		var randomQuote = _.sample(quotes) ;
		// Empty what's currently in the #quoteHere div
		$('#quoteHere').empty();
		$('#quoteHere').append('"' + randomQuote + '"');
	});

	/* Basic Bitch Object */
	var BasicBitch = function(quote, name, yourName) {
		this.quote = quote;
		this.name = name;
		this.yourName = yourName;
	};

		BasicBitch.prototype.render = function() {
			if(this.element) return this.element;


		};

		$(document).on('click', '.saveShare', function() {
			var randomQuote = $('#quoteHere').text();
			var basicBitchName = $('#basicBitchName').val();
			var yourName = $('#yourName').val();

			console.log("random quote: " + randomQuote);
			console.log("bbname: " + basicBitchName);
			console.log("yourname: " + yourName);

			var newBitch = new BasicBitch(randomQuote, basicBitchName, yourName);
			console.log(newBitch);
		});

}); // End document ready



// Put all JQuery UI stuff down here!





$( ".col-lg-4 img" ).draggable({
	cursor: "move",
	cursorAt: { top: 0, left: 0 },
	// On stop dragging, store these variables
	stop: function() {

		console.log("--------------------");

		console.log( "Mannequin offset: ", $("#mannequin").offset() );
		var mannOffset = $("#mannequin").offset() ;

		console.log( "this draggable-item offset: ", $(this).offset() );
		var thisOffset = $(this).offset();

		// To get your target offset, take the draggable item's offset - the mannequin's offset,
		console.log( "Target offset: ", thisOffset.left - mannOffset.left, thisOffset.top - mannOffset.top );

		var left = thisOffset.left - mannOffset.left;
		var top = thisOffset.top - mannOffset.top;

		$("#mannequin").append($(this));
		$(this).css({ top: top, left: left }).css("position", "absolute");
		




    }
});
