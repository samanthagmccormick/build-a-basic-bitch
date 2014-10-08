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
	"Hashtag totesamaze"
	];

	/* Quote Button */
	$('.fa-quote-left').on('click', function() {
		// Pull a random quote out of the array
		var randomQuote = _.sample(quotes) ;
		// Empty what's currently in the #quoteHere div
		$('#quoteHere').empty();
		$('#quoteHere').append(randomQuote);
	});

	/* Basic Bitch Object */
	var BasicBitch = function(quote, name, yourName, lattePos, kombuchaPos, teenMomPos, fishtailPos, messyBunPos, fedoraPos, bagPos, keepCalmPos, scarfPos, laurenConradPos, instagramPos, wifeyMaterialPos) {
		this.quote = quote;
		this.name = name;
		this.yourName = yourName;
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

			this.element = $('<img src="images/mannequin-smaller.png" class="img-responsive">');
			$('#gallery').append(this.element);

			// put the latte image at the latteposition
			// REPEAT FOR ALL OTHER ELEMENTS
			var latte = $('<img src="images/latte.png" class="img-responsive" style="position: absolute; top:' + this.lattePos.top + 'px; left:' + this.lattePos.left + 'px;" />');

			var kombucha = $('<img src="images/kombucha.png" class="img-responsive" style="position: absolute; top:' + this.kombuchaPos.top + 'px; left:' + this.kombuchaPos.left + 'px;" />');

			var teenMom = $('<img src="images/teenmom.png" class="img-responsive" style="position: absolute; top:' + this.teenMomPos.top + 'px; left:' + this.teenMomPos.left + 'px;" />');

			var fishtail = $('<img src="images/fishtail.png" class="img-responsive" style="position: absolute; top:' + this.fishtailPos.top + 'px; left:' + this.fishtailPos.left + 'px;" />');

			var messyBun = $('<img src="images/messybun.png" class="img-responsive" style="position: absolute; top:' + this.messyBunPos.top + 'px; left:' + this.messyBunPos.left + 'px;" />');

			var fedora = $('<img src="images/fedora.png" class="img-responsive" style="position: absolute; top:' + this.fedoraPos.top + 'px; left:' + this.fedoraPos.left + 'px;" />');

			var bag = $('<img src="images/bag.png" class="img-responsive" style="position: absolute; top:' + this.bagPos.top + 'px; left:' + this.bagPos.left + 'px;" />');

			var keepCalm = $('<img src="images/keepcalm.png" class="img-responsive" style="position: absolute; top:' + this.keepCalmPos.top + 'px; left:' + this.keepCalmPos.left + 'px;" />');

			var scarf = $('<img src="images/scarf.png" class="img-responsive" style="position: absolute; top:' + this.scarfPos.top + 'px; left:' + this.scarfPos.left + 'px;" />');

			var laurenConrad = $('<img src="images/laurenconrad.png" class="img-responsive" style="position: absolute; top:' + this.laurenConradPos.top + 'px; left:' + this.laurenConradPos.left + 'px;" />');

			var instagram = $('<img src="images/instagram.png" class="img-responsive" style="position: absolute; top:' + this.instagramPos.top + 'px; left:' + this.instagramPos.left + 'px;" />');

			var wifeyMaterial = $('<img src="images/wifeymaterial.png" class="img-responsive" style="position: absolute; top:' + this.wifeyMaterialPos.top + 'px; left:' + this.wifeyMaterialPos.left + 'px;" />');


			$('#gallery').append(latte, kombucha, teenMom, fishtail, messyBun, fedora, bag, keepCalm, scarf, laurenConrad, instagram, wifeyMaterial);

			$('#quote').append("<p>Hi, I'm " + this.name + "! " + this.quote + "</p>");

		};



		// DRAGGABLE STUFF //

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

				$("#mannequin").append($(this));
				$(this).css({ top: top, left: left }).css("position", "absolute");

		    }
		}); 

// EVENT HANDLERS //

	// On click of the Save button, store all information into an object
	$(document).on('click', '.save', function() {
		var randomQuote = $('#quoteHere').text();
		var basicBitchName = $('#basicBitchName').val();
		var yourName = $('#yourName').val();

		// Save locations of all tools that have been dropped into the mannequin
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

		var newBitch = new BasicBitch(randomQuote, basicBitchName, yourName, lattePos, kombuchaPos, teenMomPos, fishtailPos, messyBunPos, fedoraPos, bagPos, keepCalmPos, scarfPos, laurenConradPos, instagramPos, wifeyMaterialPos);
		
		console.log(newBitch);	

		$(this).closest('#secondFrame').fadeOut(2000);

		newBitch.render();
	});





}); // End document ready







