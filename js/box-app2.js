// created for APP BOX Size v2.1.1

$(".btn-process-drawing1").prop("disabled", true);
$(".btn-process-drawing2").prop("disabled", true);
$(".flexo-reduction").css("display", "none");
$(".longway-reduction").css("display", "none");
$(".from-internal-size").css("display", "none");
$(".from-external-size").css("display", "none");
$(".question-text").css("display", "none");
$(".reduction-form").css("display", "none");
$("#close-calculator").css("display", "none");
$(".block-reduction").css("height", "auto");
$("#manual-reduction").prop("disabled", true);

// starting program
$("#btn-internal-size").click(function() {
	$(".from-internal-size").css("display", "block");
	$(".from-external-size").css("display", "none");
	$("#btn-internal-size").css("display", "none");
	$("#btn-external-size").css("display", "inline-block");
	$(".question-text").css("display", "block");
	$(".startup-text").css("display", "none");
	$(".btn-reduct").css("top", "0");
	$(".validation-reduction").val(1);
	$(".inp-lenght").val("");
	$(".inp-width").val("");
	$(".inp-height").val("");
	$(".btn-process-drawing1").prop("disabled", true);
});
$("#btn-external-size").click(function() {
	$(".from-internal-size").css("display", "none");
	$(".from-external-size").css("display", "block");
	$("#btn-internal-size").css("display", "inline-block");
	$("#btn-external-size").css("display", "none");
	$(".question-text").css("display", "block");
	$(".startup-text").css("display", "none");
	$(".btn-reduct").css("top", "0");
	$(".validation-reduction").val(1);
	$(".exp-lenght").val("");
	$(".exp-width").val("");
	$(".exp-height").val("");
	$(".btn-process-drawing2").prop("disabled", true);
});

// ================== Validation form
var valid = 0;
var valid1 = 0;
var valid2 = 0;
var valid3 = 0;
$(".inp-lenght").keyup(function() {
		if($(".inp-lenght").val() >= 10) {
			valid = "yes";
			}
		else {
			valid = 0;
			}
			truevalid = valid+valid1+valid2+valid3;
			if(truevalid == "yesyesyesyes") {
				if($(".inp-lenght").val() >= 10) {
					$(".btn-process-drawing1").prop("disabled", false);
					valid3 = 0;
					valid2 = 0;
					valid1 = 0;
					valid = 0;
				}
			}
		});
$(".inp-width").keyup(function() {
		if($(".inp-width").val() >= 10) {
			valid1 = "yes";
			}
		else {
			valid1 = 0;
		}
			truevalid = valid+valid1+valid2+valid3;
			if(truevalid == "yesyesyesyes") {
				if($(".inp-width").val() >= 10) {
					$(".btn-process-drawing1").prop("disabled", false);
					valid3 = 0;
					valid2 = 0;
					valid1 = 0;
					valid = 0;
				}
			}
		});
$(".inp-height").keyup(function() {
		if($(".inp-height").val() >= 10) {
			valid2 = "yes";
			}
			else {
			valid2 = 0;
			}
			truevalid = valid+valid1+valid2+valid3;
			if(truevalid == "yesyesyesyes") {
				if($(".inp-height").val() >= 10) {
					$(".btn-process-drawing1").prop("disabled", false);
					valid3 = 0;
					valid2 = 0;
					valid1 = 0;
					valid = 0;
				}
			}
		});
$("#inp-flute").change(function() {
		if($("#inp-flute").val() == "") {
			valid3 = 0;
			$(".btn-process-drawing1").prop("disabled", true);
			}
			else {
			valid3 = "yes";
			truevalid = valid+valid1+valid2+valid3;
			if(truevalid == "yesyesyesyes") {
				if(valid3 = "yes") {
					$(".btn-process-drawing1").prop("disabled", false);
				}
			}
			}
		});

$(".exp-lenght").keyup(function() {
		if($(".exp-lenght").val() >= 10) {
			valid = "yes";
			}
		else {
			valid = 0;
			}
			truevalid = valid+valid1+valid2+valid3;
			if(truevalid == "yesyesyesyes") {
				if($(".exp-lenght").val() >= 10) {
					$(".btn-process-drawing1").prop("disabled", false);
					valid3 = 0;
					valid2 = 0;
					valid1 = 0;
					valid = 0;
				}
			}
		});
$(".exp-width").keyup(function() {
		if($(".exp-width").val() >= 10) {
			valid1 = "yes";
			}
		else {
			valid1 = 0;
		}
			truevalid = valid+valid1+valid2+valid3;
			if(truevalid == "yesyesyesyes") {
				if($(".exp-width").val() >= 10) {
					$(".btn-process-drawing1").prop("disabled", false);
					valid3 = 0;
					valid2 = 0;
					valid1 = 0;
					valid = 0;
				}
			}
		});
$(".exp-height").keyup(function() {
		if($(".exp-height").val() >= 10) {
			valid2 = "yes";
			}
			else {
			valid2 = 0;
			}
			truevalid = valid+valid1+valid2+valid3;
			if(truevalid == "yesyesyesyes") {
				if($(".exp-height").val() >= 10) {
					$(".btn-process-drawing1").prop("disabled", false);
					valid3 = 0;
					valid2 = 0;
					valid1 = 0;
					valid = 0;
				}
			}
		});
$("#exp-flute").change(function() {
		if($("#exp-flute").val() == "") {
			valid3 = 0;
			$(".btn-process-drawing2").prop("disabled", true);
			}
			else {
			valid3 = "yes";
			truevalid = valid+valid1+valid2+valid3;
			if(truevalid == "yesyesyesyes") {
				if(valid3 = "yes") {
					$(".btn-process-drawing2").prop("disabled", false);
				}
			}
			}
		});

// ==================

$(".btn-sidesite").click(function() {
	if ($(".validation-button-navigation").val() == 0) {
		$("#sidesite").css("width", "0px");
		$(".block-btn-side").css("margin-left", "0px");
		$(".validation-button-navigation").val(1);
		$(".chevron-button-side").css("-webkit-transform", "rotate(0deg)");
		$(".form-side-nav").css("display", "none");
		$("#help-command").css("display", "none");
		$(".arrow-tray").css("display", "none");
		$(".descript-application").css("margin-left", "0px");
	}
	else if ($(".validation-button-navigation").val() == 1) {
		$("#sidesite").css("width", "350px");
		$(".block-btn-side").css("margin-left", "350px");
		$(".validation-button-navigation").val(0);
		$(".chevron-button-side").css("-webkit-transform", "rotate(180deg)");
		$("#help-command").css("display", "block");
		$(".form-side-nav").css("display", "block");
		$(".descript-application").css("margin-left", "0px");
	}
});

$(".btn-process-drawing1").click(function() {

	//================ reset
	$(".join").text("");
	$(".lenght-1").text("");
	$(".lenght-2").text("");
	$(".width-1").text("");
	$(".width-2").text("");
	$(".int-width").text("");
	$(".int-lenght").text("");
	$(".int-height").text("");
	$(".sc-flap").text("");
	$(".sc-height").text("");
	$(".sheet-width").text("");
	$(".sheet-lenght").text("");
	$(".sheet-flute").text("");
	$(".total-lenghtwise").text("");
	$(".reduction").text("");

	$(".txt-join").text("");
	$(".txt-l-1").text("");
	$(".txt-l-2").text("");
	$(".txt-w-1").text("");
	$(".txt-w-2").text("");
	$(".txt-total-length").text("");
	$(".txt-fl").text("");
	$(".txt-body-height").text("");
	$(".txt-total-rk").text("");

	$(".text-flexo").text("");
	$(".text-flexo-body").text("");
	$(".longway-1").text("");
	$(".longway-2").text("");
	$(".longway-3").text("");
	$(".longway-4").text("");
	// ==================

	// ======== validation program
	$(".block-main-side").css("display", "block");
	$("#help-command").css("display", "none");
	$("#help-command").css("background", "#6f6f6f");
	$(".opening-application-tray").css("display", "none");
	$("#sidesite").css("width", "0px");
	$(".block-btn-side").css("margin-left", "0px");
	$(".descript-application").css("margin-left", "0px");
	$(".validation-button-navigation").val(1);
	$(".chevron-button-side").css("-webkit-transform", "rotate(0deg)");
	$(".btn-sidesite").css("display", "block");
	$(".form-side-nav").css("display", "none");
	// ==================
	
	// ======== calculation program
	if ($("#inp-flute").val() == "BC") {
		var join = 35;
		$(".join").append(join);
		$(".sheet-flute").append($("#inp-flute").val());
		var length = parseInt($(".inp-lenght").val()) + parseInt(7);
			$(".lenght-1").append(length);
			$(".lenght-2").append(length);
			$(".int-lenght").append($(".inp-lenght").val());
		var width1 = parseInt($(".inp-width").val()) + parseInt(7);
        var width2 = parseInt(width1 - parseInt(3));
			$(".width-1").append(width1);
			$(".width-2").append(width2);
			$(".int-width").append($(".inp-width").val());
		var height = parseInt($(".inp-height").val()) + parseInt(15);
			$(".int-height").append($(".inp-height").val());
			if ($(".inp-width").val()%2==0) {
				var theight = parseInt($(".inp-width").val() / 2) + parseInt(5.5);
			} else
			{
				var theight = parseInt($(".inp-width").val() / 2) + parseInt(6);
			}
            $(".sc-height").append(height);
			$(".sc-flap").append(theight);
			
		var ttws = parseInt(theight * 2) + parseInt(height);
			$(".sheet-width").append(ttws);
		var ttls = parseInt(join) + parseInt(length * 2) + parseInt(width1) + parseInt(width2);
			$(".total-lenghtwise").append(ttls);
			$(".sheet-lenght").append(parseInt(ttls) + 10);
			$(".reduction").append($("#inp-reduction").val());
	}
	else if ($("#inp-flute").val() == "BA") {
		var join = 35;
		$(".join").append(join);
		$(".sheet-flute").append($("#inp-flute").val());
		var length = parseInt($(".inp-lenght").val()) + parseInt(8);
			$(".lenght-1").append(length);
			$(".lenght-2").append(length);
			$(".int-lenght").append($(".inp-lenght").val());
		var width1 = parseInt($(".inp-width").val()) + parseInt(8);
        var width2 = parseInt(width1 - parseInt(3));
			$(".width-1").append(width1);
			$(".width-2").append(width2);
			$(".int-width").append($(".inp-width").val());
		var height = parseInt($(".inp-height").val()) + parseInt(14);
			$(".int-height").append($(".inp-height").val());
			if ($(".inp-width").val()%2==0) {
				var theight = parseInt($(".inp-width").val() / 2) + parseInt(5) + ".5";
			} else
			{
				var theight = parseInt($(".inp-width").val() / 2) + parseInt(6) + ".5";
			}
            $(".sc-height").append(height);
			$(".sc-flap").append(theight);
			
		var ttws = parseInt(theight * 2) + parseInt(height);
			$(".sheet-width").append(ttws);
		var ttls = parseInt(join) + parseInt(length * 2) + parseInt(width1) + parseInt(width2);
			$(".total-lenghtwise").append(ttls);
			$(".sheet-lenght").append(parseInt(ttls) + 10);
			$(".reduction").append($("#inp-reduction").val());
	}
	else if ($("#inp-flute").val() == "B") {
		var join = 32;
		$(".join").append(join);
		$(".sheet-flute").append($("#inp-flute").val());
		var length = parseInt($(".inp-lenght").val()) + parseInt(3);
			$(".lenght-1").append(length);
			$(".lenght-2").append(length);
			$(".int-lenght").append($(".inp-lenght").val());
		var width1 = parseInt($(".inp-width").val()) + parseInt(3);
        var width2 = $(".inp-width").val();
			$(".width-1").append(width1);
			$(".width-2").append(width2);
			$(".int-width").append($(".inp-width").val());
		var height = parseInt($(".inp-height").val()) + parseInt(5);
			$(".int-height").append($(".inp-height").val());
			if ($(".inp-width").val()%2==0) {
				var theight = parseInt($(".inp-width").val() / 2) + parseInt(1) + ".5";
			} else
			{
				var theight = parseInt($(".inp-width").val() / 2) + parseInt(2) + ".5";
			}
            $(".sc-height").append(height);
			$(".sc-flap").append(theight);
			
		var ttws = parseInt(theight * 2) + parseInt(height);
			$(".sheet-width").append(ttws);
		var ttls = parseInt(join) + parseInt(length * 2) + parseInt(width1) + parseInt(width2);
			$(".total-lenghtwise").append(ttls);
			$(".sheet-lenght").append(parseInt(ttls) + 10);
			$(".reduction").append($("#inp-reduction").val());
	}
	else if ($("#inp-flute").val() == "C") {
		var join = 32;
		$(".join").append(join);
		$(".sheet-flute").append($("#inp-flute").val());
		var length = parseInt($(".inp-lenght").val()) + parseInt(4);
			$(".lenght-1").append(length);
			$(".lenght-2").append(length);
			$(".int-lenght").append($(".inp-lenght").val());
		var width1 = parseInt($(".inp-width").val()) + parseInt(4);
        var width2 = parseInt(width1 - parseInt(3));
			$(".width-1").append(width1);
			$(".width-2").append(width2);
			$(".int-width").append($(".inp-width").val());
		var height = parseInt($(".inp-height").val()) + parseInt(7);
			$(".int-height").append($(".inp-height").val());
			if ($(".inp-width").val()%2==0) {
				var theight = parseInt($(".inp-width").val() / 2) + parseInt(3);
			} else
			{
				var theight = parseInt($(".inp-width").val() / 2) + parseInt(4);
			}
            $(".sc-height").append(height);
			$(".sc-flap").append(theight);
			
		var ttws = parseInt(theight * 2) + parseInt(height);
			$(".sheet-width").append(ttws);
		var ttls = parseInt(join) + parseInt(length * 2) + parseInt(width1) + parseInt(width2);
			$(".total-lenghtwise").append(ttls);
			$(".sheet-lenght").append(parseInt(ttls) + 10);
			$(".reduction").append($("#inp-reduction").val());
	}
	else if ($("#inp-flute").val() == "A") {
		var join = 32;
		$(".join").append(join);
		$(".sheet-flute").append($("#inp-flute").val());
		var length = parseInt($(".inp-lenght").val()) + parseInt(5);
			$(".lenght-1").append(length);
			$(".lenght-2").append(length);
			$(".int-lenght").append($(".inp-lenght").val());
		var width1 = parseInt($(".inp-width").val()) + parseInt(5);
        var width2 = parseInt(width1 - parseInt(3));
			$(".width-1").append(width1);
			$(".width-2").append(width2);
			$(".int-width").append($(".inp-width").val());
		var height = parseInt($(".inp-height").val()) + parseInt(9);
			$(".int-height").append($(".inp-height").val());
			if ($(".inp-width").val()%2==0) {
				var theight = parseInt($(".inp-width").val() / 2) + parseInt(3) + .5;
			} else
			{
				var theight = parseInt($(".inp-width").val() / 2) + parseInt(4) + .5;
			}
            $(".sc-height").append(height);
			$(".sc-flap").append(theight);
			
		var ttws = parseInt(theight * 2) + parseInt(height);
			$(".sheet-width").append(ttws);
		var ttls = parseInt(join) + parseInt(length * 2) + parseInt(width1) + parseInt(width2);
			$(".total-lenghtwise").append(ttls);
			$(".sheet-lenght").append(parseInt(ttls) + 10);
			$(".reduction").append($("#inp-reduction").val());
	}
	$(".txt-join").append(join + "mm");
	$(".txt-l-1").append(length + "mm");
	$(".txt-l-2").append(length + "mm");
	$(".txt-w-1").append(width1 + "mm");
	$(".txt-w-2").append(width2 + "mm");
	$(".txt-total-length").append(ttls + "mm");
	$(".txt-fl").append(theight + "mm");
	$(".txt-body-height").append(height + "mm");
	$(".txt-total-rk").append(ttws + "mm");

	var flapflexo = theight * 0.9805;
	var bodyflexo = height * 0.9805;
	var lengthlong1 = length * 0.9921;
	var widthlong1 = width1 * 0.9921;
	var lengthlong2 = length * 0.9921;
	var widthlong2 = width2 * 0.9921;
	var rff = flapflexo.toFixed(2);
	var rfb = bodyflexo.toFixed(2);
	var rll1 = lengthlong1.toFixed(2);
	var rwl1 = widthlong1.toFixed(2);
	var rll2 = lengthlong2.toFixed(2);
	var rwl2 = widthlong2.toFixed(2);
	
	$(".text-flexo").append(rff);
	$(".text-flexo-body").append(rfb);
	$(".longway-1").append(rll1);
	$(".longway-2").append(rwl1);
	$(".longway-3").append(rll2);
	$(".longway-4").append(rwl2);


	if ($("#inp-reduction").val() == "Flexo") {
		$(".flexo-reduction").css("display", "block");
		$(".longway-reduction").css("display", "none");
	}
	else if ($("#inp-reduction").val() == "Longway") {
		$(".flexo-reduction").css("display", "none");
		$(".longway-reduction").css("display", "block");
	}
	else {
		$(".flexo-reduction").css("display", "none");
		$(".longway-reduction").css("display", "none");
	}
});    
$(".btn-process-drawing2").click(function() {

	//================ reset
	$(".join").text("");
	$(".lenght-1").text("");
	$(".lenght-2").text("");
	$(".width-1").text("");
	$(".width-2").text("");
	$(".int-width").text("");
	$(".int-lenght").text("");
	$(".int-height").text("");
	$(".sc-flap").text("");
	$(".sc-height").text("");
	$(".sheet-width").text("");
	$(".sheet-lenght").text("");
	$(".sheet-flute").text("");
	$(".total-lenghtwise").text("");
	$(".reduction").text("");

	$(".txt-join").text("");
	$(".txt-l-1").text("");
	$(".txt-l-2").text("");
	$(".txt-w-1").text("");
	$(".txt-w-2").text("");
	$(".txt-total-length").text("");
	$(".txt-fl").text("");
	$(".txt-body-height").text("");
	$(".txt-total-rk").text("");

	$(".text-flexo").text("");
	$(".text-flexo-body").text("");
	$(".longway-1").text("");
	$(".longway-2").text("");
	$(".longway-3").text("");
	$(".longway-4").text("");
	// ==================

	// ======== validation program
	$(".block-main-side").css("display", "block");
	$("#help-command").css("display", "none");
	$("#help-command").css("background", "#6f6f6f");
	$(".opening-application-tray").css("display", "none");
	$("#sidesite").css("width", "0px");
	$(".block-btn-side").css("margin-left", "0px");
	$(".descript-application").css("margin-left", "0px");
	$(".validation-button-navigation").val(1);
	$(".chevron-button-side").css("-webkit-transform", "rotate(0deg)");
	$(".btn-sidesite").css("display", "block");
	$(".form-side-nav").css("display", "none");
	// ==================
	
	// ======== calculation program
	if ($("#exp-flute").val() == "BC") {
		var join = 35;
		$(".join").append(join);
		$(".sheet-flute").append($("#exp-flute").val());
		var length = $(".exp-lenght").val();
		var interlenght = parseInt($(".exp-lenght").val()) - parseInt(7);
			$(".lenght-1").append(length);
			$(".lenght-2").append(length);
			$(".int-lenght").append(interlenght);
		var width1 = $(".exp-width").val();
        var width2 = parseInt($(".exp-width").val() - parseInt(3));
        var interwidht = parseInt($(".exp-width").val()) - parseInt(7);
			$(".width-1").append(width1);
			$(".width-2").append(width2);
			$(".int-width").append(interwidht);
		var height = $(".exp-height").val();
		var interheight = parseInt($(".exp-height").val()) - parseInt(15);
			$(".int-height").append(interheight);
			if (interwidht%2==0) {
				var theight = parseInt(interwidht / 2) + parseInt(5.5);
			} else
			{
				var theight = parseInt(interwidht / 2) + parseInt(6);
			}
            $(".sc-height").append(height);
			$(".sc-flap").append(theight);
			
		var ttws = parseInt(theight * 2) + parseInt(height);
			$(".sheet-width").append(ttws);
		var ttls = parseInt(join) + parseInt(length * 2) + parseInt(width1) + parseInt(width2);
			$(".total-lenghtwise").append(ttls);
			$(".sheet-lenght").append(parseInt(ttls) + 10);
			$(".reduction").append($("#exp-reduction").val());
	}
	else if ($("#exp-flute").val() == "BA") {
		var join = 35;
		$(".join").append(join);
		$(".sheet-flute").append($("#exp-flute").val());
		var length = $(".exp-lenght").val();
		var interlenght = parseInt($(".exp-lenght").val()) - parseInt(8);
			$(".lenght-1").append(length);
			$(".lenght-2").append(length);
			$(".int-lenght").append(interlenght);
		var width1 = $(".exp-width").val();
        var width2 = parseInt($(".exp-width").val() - parseInt(3));
        var interwidht = parseInt($(".exp-width").val()) - parseInt(8);
			$(".width-1").append(width1);
			$(".width-2").append(width2);
			$(".int-width").append(interwidht);
		var height = $(".exp-height").val();
		var interheight = parseInt($(".exp-height").val()) - parseInt(14);
			$(".int-height").append(interheight);
			if (interwidht%2==0) {
				var theight = parseInt(interwidht / 2) + parseInt(5) + ".5";
			} else
			{
				var theight = parseInt(interwidht / 2) + parseInt(6) + ".5";
			}
            $(".sc-height").append(height);
			$(".sc-flap").append(theight);
			
		var ttws = parseInt(theight * 2) + parseInt(height);
			$(".sheet-width").append(ttws);
		var ttls = parseInt(join) + parseInt(length * 2) + parseInt(width1) + parseInt(width2);
			$(".total-lenghtwise").append(ttls);
			$(".sheet-lenght").append(parseInt(ttls) + 10);
			$(".reduction").append($("#exp-reduction").val());
	}
	else if ($("#exp-flute").val() == "B") {
		var join = 32;
		$(".join").append(join);
		$(".sheet-flute").append($("#exp-flute").val());
		var length = $(".exp-lenght").val();
		var interlength = parseInt($(".exp-lenght").val()) - parseInt(3);
			$(".lenght-1").append(length);
			$(".lenght-2").append(length);
			$(".int-lenght").append(interlength);
		var width1 = $(".exp-width").val();
		var width2 = parseInt(width1) - parseInt(3);
		var interwidth = parseInt(width1) - parseInt(3);
			$(".width-1").append(width1);
			$(".width-2").append(width2);
			$(".int-width").append(interwidth);
		var height = $(".exp-height").val();
		var interheight = parseInt($(".exp-height").val()) - parseInt(5);
			$(".int-height").append(interheight);
			if (interwidth%2==0) {
				var theight = parseInt(interwidth / 2) + parseInt(1) + ".5";
			} else
			{
				var theight = parseInt(interwidth / 2) + parseInt(2) + ".5";
			}
            $(".sc-height").append(height);
			$(".sc-flap").append(theight);
			
		var ttws = parseInt(theight * 2) + parseInt(height);
			$(".sheet-width").append(ttws);
		var ttls = parseInt(join) + parseInt(length * 2) + parseInt(width1) + parseInt(interwidth);
			$(".total-lenghtwise").append(ttls);
			$(".sheet-lenght").append(parseInt(ttls) + 10);
			$(".reduction").append($("#exp-reduction").val());
	}
	
	else if ($("#exp-flute").val() == "C") {
		var join = 32;
		$(".join").append(join);
		$(".sheet-flute").append($("#exp-flute").val());
		var length = $(".exp-lenght").val();
		var interlenght = parseInt($(".exp-lenght").val()) - parseInt(4);
			$(".lenght-1").append(length);
			$(".lenght-2").append(length);
			$(".int-lenght").append(interlenght);
		var width1 = $(".exp-width").val();
		var interwidht = parseInt($(".exp-width").val()) - parseInt(4);
        var width2 = parseInt(width1 - parseInt(3));
			$(".width-1").append(width1);
			$(".width-2").append(width2);
			$(".int-width").append(interwidht);
		var height = $(".exp-height").val();
		var interheight = parseInt($(".exp-height").val()) - parseInt(7);
			$(".int-height").append(interheight);
			if (interwidht%2==0) {
				var theight = parseInt(interwidht / 2) + parseInt(3);
			} else
			{
				var theight = parseInt(interwidht / 2) + parseInt(4);
			}
            $(".sc-height").append(height);
			$(".sc-flap").append(theight);
			
		var ttws = parseInt(theight * 2) + parseInt(height);
			$(".sheet-width").append(ttws);
		var ttls = parseInt(join) + parseInt(length * 2) + parseInt(width1) + parseInt(width2);
			$(".total-lenghtwise").append(ttls);
			$(".sheet-lenght").append(parseInt(ttls) + 10);
			$(".reduction").append($("#exp-reduction").val());
	}
	else if ($("#exp-flute").val() == "A") {
		var join = 32;
		$(".join").append(join);
		$(".sheet-flute").append($("#exp-flute").val());
		var length = $(".exp-lenght").val();
		var interlength = parseInt($(".exp-lenght").val()) - parseInt(5);
			$(".lenght-1").append(length);
			$(".lenght-2").append(length);
			$(".int-lenght").append(interlength);
		var width1 = $(".exp-width").val();
		var interwidth = parseInt($(".exp-width").val()) - parseInt(5);
        var width2 = parseInt(width1 - parseInt(3));
			$(".width-1").append(width1);
			$(".width-2").append(width2);
			$(".int-width").append(interwidth);
		var height = $(".exp-height").val();
		var interheight = parseInt($(".exp-height").val()) - parseInt(9);
			$(".int-height").append(interheight);
			if (interwidth%2==0) {
				var theight = parseInt(interwidth / 2) + parseInt(3) + .5;
			} else
			{
				var theight = parseInt(interwidth / 2) + parseInt(4) + .5;
			}
            $(".sc-height").append(height);
			$(".sc-flap").append(theight);
			
		var ttws = parseInt(theight * 2) + parseInt(height);
			$(".sheet-width").append(ttws);
		var ttls = parseInt(join) + parseInt(length * 2) + parseInt(width1) + parseInt(width2);
			$(".total-lenghtwise").append(ttls);
			$(".sheet-lenght").append(parseInt(ttls) + 10);
			$(".reduction").append($("#exp-reduction").val());
	}
	$(".txt-join").append(join + "mm");
	$(".txt-l-1").append(length + "mm");
	$(".txt-l-2").append(length + "mm");
	$(".txt-w-1").append(width1 + "mm");
	$(".txt-w-2").append(width2 + "mm");
	$(".txt-total-length").append(ttls + "mm");
	$(".txt-fl").append(theight + "mm");
	$(".txt-body-height").append(height + "mm");
	$(".txt-total-rk").append(ttws + "mm");

	var flapflexo = theight * 0.9805;
	var bodyflexo = height * 0.9805;
	var lengthlong1 = length * 0.9921;
	var widthlong1 = width1 * 0.9921;
	var lengthlong2 = length * 0.9921;
	var widthlong2 = width2 * 0.9921;
	var rff = flapflexo.toFixed(2);
	var rfb = bodyflexo.toFixed(2);
	var rll1 = lengthlong1.toFixed(2);
	var rwl1 = widthlong1.toFixed(2);
	var rll2 = lengthlong2.toFixed(2);
	var rwl2 = widthlong2.toFixed(2);
	
	$(".text-flexo").append(rff);
	$(".text-flexo-body").append(rfb);
	$(".longway-1").append(rll1);
	$(".longway-2").append(rwl1);
	$(".longway-3").append(rll2);
	$(".longway-4").append(rwl2);


	if ($("#exp-reduction").val() == "Flexo") {
		$(".flexo-reduction").css("display", "block");
		$(".longway-reduction").css("display", "none");
	}
	else if ($("#exp-reduction").val() == "Longway") {
		$(".flexo-reduction").css("display", "none");
		$(".longway-reduction").css("display", "block");
	}
	else {
		$(".flexo-reduction").css("display", "none");
		$(".longway-reduction").css("display", "none");
	}
}); 
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}   
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

$("#calculator").click(function() {
	if ($(".validation-reduction").val() == "1") {
		$(".reduction-form").css("display", "inline-block");
		$("#calculator").css("display", "none");
		$("#close-calculator").css("display", "inline-block");
		$(".btn-reduct").css("top", "0");
		$(".block-reduction").css("top", "-420px");
		$(".block-reduction").css("height", "75vh");
	}
	else {
		$(".reduction-form").css("display", "inline-block");
		$("#calculator").css("display", "none");
		$("#close-calculator").css("display", "inline-block");
		$(".btn-reduct").css("top", "0");
		$(".block-reduction").css("top", "-105px");
		$(".block-reduction").css("height", "75vh");
	}
});

$("#close-calculator").click(function() {
	if ($(".validation-reduction").val() == "0") {
		$(".reduction-form").css("display", "none");
		$("#calculator").css("display", "inline-block");
		$("#close-calculator").css("display", "none");
		$(".btn-reduct").css("top", "186px");
		$(".block-reduction").css("top", "0px");
		$(".block-reduction").css("height", "75vh");
	}
	else {
		$(".reduction-form").css("display", "none");
		$("#calculator").css("display", "inline-block");
		$("#close-calculator").css("display", "none");
		$(".btn-reduct").css("top", "0");
		$(".block-reduction").css("top", "0px");
		$(".block-reduction").css("height", "75vh");
	}
});
$("#manual-reduction").click(function() {
	if ($("#typereduksi").val() == "F") {
		var valreduct = $("#breduksi").val() * 0.9805;
	}
	else {
		var valreduct = $("#breduksi").val() * 0.9921;
	}
	$("#areduksi").val(valreduct);
	$(".output-reduction-form").css("top", "20px");
	$("#breduksi").prop("readonly", true);
});

$("#corection-reduction").click(function() {
	$("#areduksi").val("");
	$("#breduksi").val("");
	$("#breduksi").prop("readonly", false);
	$("#manual-reduction").prop("disabled", true);
	$(".output-reduction-form").css("top", "-100px");

});
$("#breduksi").keyup(function() {
	if ($("#breduksi").val() >= 10) {
		if($("#typereduksi").val() == "F") {
			$("#manual-reduction").prop("disabled", false);
		}
		else if ($("#typereduksi").val() == "L") {
			$("#manual-reduction").prop("disabled", false);
		}
		else {
			$("#manual-reduction").prop("disabled", true);
		}
	}
	else if ($("#breduksi").val() == 0) {
		$("#manual-reduction").prop("disabled", true);
	}
});
$("#typereduksi").change(function() {
	if($("#typereduksi").val() == "F") {
		if ($("#breduksi").val() >= 10) {
			$("#manual-reduction").prop("disabled", false);
		}
		else if ($("#breduksi").val() == 0) {
			$("#manual-reduction").prop("disabled", true);
		}
	}
	else if($("#typereduksi").val() == "L") {
		if ($("#breduksi").val() >= 10) {
			$("#manual-reduction").prop("disabled", false);
		}
		else if ($("#breduksi").val() == 0) {
			$("#manual-reduction").prop("disabled", true);
		}
	}
	else {
		$("#manual-reduction").prop("disabled", true);
	}
});
$(".close-tab").click(function() {
	if(confirm('Are you sure to close ?')){
		window.close();
	}
});