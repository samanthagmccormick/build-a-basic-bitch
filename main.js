$(document).on('ready', function() {

//////////////////////////////
// FIRST FRAME FUNCTIONALITY//
//////////////////////////////

	// Hide the second frame on page load
	$('#secondFrame').hide();  
	$('#thirdFrame').hide();
	$('#nav').hide();

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
		$('#nav').fadeIn(2000);
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
	"Wearing leggings as pants IDGAF",
	"Going to brunch with the ladies #totesamaze",
	"Just posted the CUTEST #tbt to Instagram ;)"
	];

	// Buttons .... Event Handlers //
	
		// On hover of all buttons...
		$('.fa').hover(

			function() {
			    console.log("on");
			    $(this).css("color", "#FF3366");
			},

		    function() {
			    console.log("off");
			    $(this).css("color", "");
			}
		);

		$('.fa-quote-left').on('click', function() {
			// Pull a random quote out of the array
			var randomQuote = _.sample(quotes) ;
			// Empty what's currently in the #quoteHere div
			$('#quoteHere').empty();
			$('#quoteHere').append("<div class='animated bounceInLeft'>" + randomQuote + "</div>");
		});


	


	/* Basic Bitch Object */
	var BasicBitch = function(quote, name, yourName, mannequinHeight, mannequinWidth, lattePos, kombuchaPos, teenMomPos, fishtailPos, messyBunPos, fedoraPos, bagPos, keepCalmPos, scarfPos, laurenConradPos, instagramPos, wifeyMaterialPos) {
		this.quote = quote;
		this.name = name;
		this.yourName = yourName;
		this.mannequinHeight = mannequinHeight;
		this.mannequinWidth = mannequinWidth;
		this.lattePos = lattePos;
		this.kombuchaPos = kombuchaPos;
		this.teenMomPos = teenMomPos;
		this.fishtailPos = fishtailPos;
		this.messyBunPos = messyBunPos;
		this.fedoraPos = fedoraPos;
		this.bagPos = bagPos;
		this.keepCalmPos = keepCalmPos;
		this.scarfPos = scarfPos;
		this.laurenConradPos = laurenConradPos;
		this.instagramPos = instagramPos;
		this.wifeyMaterialPos = wifeyMaterialPos;
	};

			BasicBitch.prototype.render = function() {
				if(this.element) return this.element;

				// Create the new element with the save mannequin height and width
				this.element = $('<div><img src="images/mannequin-smaller.png" class="img-responsive center animated lightSpeedIn" height="' + this.mannequinHeight + '" width ="' + this.mannequinWidth + '" ></div>');

				$('#gallery').append(this.element);

				$('.moved').addClass('animated lightSpeedIn');
				$('#gallery').append( $('.moved') );

				$('#quote').append("<p class='animated rollIn'>" + this.quote + "</p><p class='right'><i class='fa fa-heart'></i>  " + this.name + "</p>");

				var name = this.yourName;
				var createdBy = function() {
					$('#quote').append("<p class='animated bounceInRight'>Created by " + name.toString() + "</p>");
				};

				setTimeout(createdBy, 2000);
			};


		// DRAGGABLE ACCESSORIES //

		$( ".col-lg-4 img" ).draggable({
			cursor: "move",
			cursorAt: { top: 75, left: 75 },
			// On stop dragging, store these variables
			stop: function() {

				console.log("--------------------");

				console.log( "Mannequin offset: ", $("#mannequin").offset() );
				var mannOffset = $("#mannequin").offset() ;

				console.log( "this draggable-item offset: ", $(this).offset() );
				var thisOffset = $(this).offset();

				// To get your target offset, take the draggable item's offset - the mannequin's offset
				console.log( "Target offset: ", thisOffset.left - mannOffset.left, thisOffset.top - mannOffset.top );

				var left = thisOffset.left - mannOffset.left;
				var top = thisOffset.top - mannOffset.top;

				// Save the responsive size of the moved items
				var width = $(this).width();
				var height = $(this).height();

				// Append this exact tool to the mannequin
				$("#mannequin").append($(this));

				// Append in this exact location
				$(this).css({ top: top, left: left, height: height, width: width }).css("position", "absolute");

				// Add a class of "moved" to ONLY the items that you've moved.
				$(this).addClass('moved');

		    }
		}); 


		// On click of the Save button, store all information into an object
		$(document).on('click', '.save', function() {
			var randomQuote = $('#quoteHere').text();
			var basicBitchName = $('#basicBitchName').val();
			var yourName = $('#yourName').val();

			// Save locations of all tools that have a class of "moved"
			var lattePos = $("#latte").position();
			var kombuchaPos = $("#kombucha").position();
			var teenMomPos = $("#teenmom").position();
			var fishtailPos = $("#fishtail").position();
			var messyBunPos = $("#messybun").position();
			var fedoraPos = $("#fedora").position();
			var bagPos = $("#bag").position();
			var keepCalmPos = $("#keepcalm").position();
			var scarfPos = $("#latte").position();
			var laurenConradPos = $("#laurenconrad").position();
			var instagramPos = $("#instagram").position();
			var wifeyMaterialPos = $("#wifeymaterial").position();

			// Save mannequin size
			var mannequinHeight = $("#mannequinActual").height();
			var mannequinWidth = $("#mannequinActual").width();

			var newBitch = new BasicBitch(randomQuote, basicBitchName, yourName, mannequinHeight, mannequinWidth, lattePos, kombuchaPos, teenMomPos, fishtailPos, messyBunPos, fedoraPos, bagPos, keepCalmPos, scarfPos, laurenConradPos, instagramPos, wifeyMaterialPos);

			// Hide the second frame
			$(this).closest('#secondFrame').hide();

			// Find the third frame and fade in!
			$(this).closest('body').find('#thirdFrame').fadeIn(2000, newBitch.render());

			newBitch.render();

		});





}); // End document ready







