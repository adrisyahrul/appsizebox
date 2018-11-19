// created for APP BOX Size Mobile v1.2.3
// =========================================back end=========================================

$(".btn-drawing").prop("disabled", true);
$("#typebox").prop("disabled", true);
$("#typebox-ext").prop("disabled", true);

// ============Created by adri_syahrul@app.co.id-01131618=============================
$("#typebox").change(function()
{
	var kpbc = 35;
	var kpb = 32;
	if ($("#typebox").val() == "BC") {
		$("#kp").val(kpbc);
		var length = parseInt($("#longsize").val()) + parseInt(7);
			$("#l1").val(length);
			$("#l2").val(length);
			$("#longsize-ext").val(length)
		var length1 = parseInt($("#widthsize").val()) + parseInt(7);
        var length2 = parseInt($("#widthsize").val()) + parseInt(4);
			$("#w1").val(length1);
			$("#w2").val(length2);
			$("#widthsize-ext").val(length1)
		var height = parseInt($("#heightsize").val()) + parseInt(15);
			if ($("#widthsize").val()%2==0) {
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(5.5);
			} else
			{
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(6);
			}
            $("#swidthsize").val(height);
			$("#h1").val(theight);
			$("#h2").val(theight);
			$("#heightsize-ext").val(height)
			
		var tws = parseInt(theight * 2) + parseInt(height);
			$("#totalscoring").val(tws);
		var tls = parseInt(kpbc) + parseInt(length * 2) + parseInt(length1) + parseInt(length2);
			$("#totalscoringl").val(tls);
			$("#widths").val(tws);
			$("#lengths").val(parseInt(tls) + 10);
		$(".canvas-drawing").css("display", "block");
		$(".btn-drawing").prop("disabled", false);
	} 
	
	else if ($("#typebox").val() == "BA") {
		$("#kp").val(kpbc);
		var length = parseInt($("#longsize").val()) + parseInt(8);
			$("#l1").val(length);
			$("#l2").val(length);
			$("#longsize-ext").val(length)
		var length1 = parseInt($("#widthsize").val()) + parseInt(8);
        var length2 = parseInt($("#widthsize").val()) + parseInt(5);
			$("#w1").val(length1);
			$("#w2").val(length2);
			$("#widthsize-ext").val(length1)
		var height = parseInt($("#heightsize").val()) + parseInt(14);
			if ($("#widthsize").val()%2==0) {
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(5) + ".5";
			} else
			{
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(6) + ".5";
			}
            $("#swidthsize").val(height);
			$("#h1").val(theight);
			$("#h2").val(theight);
			$("#heightsize-ext").val(height)
		var tws = parseInt(theight * 2) + parseInt(height);
			$("#totalscoring").val(tws);
		var tls = parseInt(kpbc) + parseInt(length * 2) + parseInt(length1) + parseInt(length2);
			$("#totalscoringl").val(tls);
			$("#widths").val(tws);
			$("#lengths").val(parseInt(tls) + 10);
		$(".canvas-drawing").css("display", "block");
		$(".btn-drawing").prop("disabled", false);
	} 
	
	else if ($("#typebox").val() == "B") {
		$("#kp").val(kpb);
		var length = parseInt($("#longsize").val()) + parseInt(3);
			$("#l1").val(length);
			$("#l2").val(length);
			$("#longsize-ext").val(length)
		var length1 = parseInt($("#widthsize").val()) + parseInt(3);
        var length2 = $("#widthsize").val();
			$("#w1").val(length1);
			$("#w2").val(length2);
			$("#widthsize-ext").val(length1)
		var height = parseInt($("#heightsize").val()) + parseInt(5);
			if ($("#widthsize").val()%2==0) {
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(1) + ".5";
			} else
			{
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(2) + ".5";
			}
            $("#swidthsize").val(height);
			$("#h1").val(theight);
			$("#h2").val(theight);
			$("#heightsize-ext").val(height)
		var tws = parseInt(theight * 2) + parseInt(height);
			$("#totalscoring").val(tws);
		var tls = parseInt(kpb) + parseInt(length * 2) + parseInt(length1) + parseInt(length2);
			$("#totalscoringl").val(tls);
			$("#widths").val(tws);
			$("#lengths").val(parseInt(tls) + 10);
		$(".canvas-drawing").css("display", "block");
		$(".btn-drawing").prop("disabled", false);
	}
	
	else if ($("#typebox").val() == "C") {
		$("#kp").val(kpb);
		var length = parseInt($("#longsize").val()) + parseInt(4);
			$("#l1").val(length);
			$("#l2").val(length);
			$("#longsize-ext").val(length)
		var length1 = parseInt($("#widthsize").val()) + parseInt(4);
        var length2 = parseInt($("#widthsize").val()) + parseInt(1);
			$("#w1").val(length1);
			$("#w2").val(length2);
			$("#widthsize-ext").val(length1)
		var height = parseInt($("#heightsize").val()) + parseInt(7);
			if ($("#widthsize").val()%2==0) {
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(3);
			} else
			{
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(4);
			}
            $("#swidthsize").val(height);
			$("#h1").val(theight);
			$("#h2").val(theight);
			$("#heightsize-ext").val(height)
		var tws = parseInt(theight * 2) + parseInt(height);
			$("#totalscoring").val(tws);
		var tls = parseInt(kpb) + parseInt(length * 2) + parseInt(length1) + parseInt(length2);
			$("#totalscoringl").val(tls);
			$("#widths").val(tws);
			$("#lengths").val(parseInt(tls) + 10);
		$(".canvas-drawing").css("display", "block");
		$(".btn-drawing").prop("disabled", false);
	}
	
	else if ($("#typebox").val() == "A") {
		$("#kp").val(kpb);
		var length = parseInt($("#longsize").val()) + parseInt(5);
			$("#l1").val(length);
			$("#l2").val(length);
			$("#longsize-ext").val(length)
		var length1 = parseInt($("#widthsize").val()) + parseInt(5);
        var length2 = parseInt($("#widthsize").val()) + parseInt(2);
			$("#w1").val(length1);
			$("#w2").val(length2);
			$("#widthsize-ext").val(length1)
		var height = parseInt($("#heightsize").val()) + parseInt(9);
			if ($("#widthsize").val()%2==0) {
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(3) + .5;
			} else
			{
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(4) + .5;
			}
            $("#swidthsize").val(height);
			$("#h1").val(theight);
			$("#h2").val(theight);
			$("#heightsize-ext").val(height)
		var tws = parseInt(theight * 2) + parseInt(height);
			$("#totalscoring").val(tws);
		var tls = parseInt(kpb) + parseInt(length * 2) + parseInt(length1) + parseInt(length2);
			$("#totalscoringl").val(tls);
			$("#widths").val(tws);
			$("#lengths").val(parseInt(tls) + 10);
		$(".canvas-drawing").css("display", "block");
		$(".btn-drawing").prop("disabled", false);
	}
	else {
		$("#kp").val("");
		$("#l1").val("");
		$("#l2").val("");
		$("#w1").val("");
		$("#w2").val("");
		$("#swidthsize").val("Pilih flute");
		$("#h1").val("Pilih flute");
		$("#h2").val("Pilih flute");
		$("#totalscoring").val("Pilih flute");
		$("#totalscoringl").val("");
		$("#widths").val("");
		$("#lengths").val("");
		$("#fx1").val("");
		$("#fx2").val("");
		$("#fx3").val("");
		$("#fx4").val("");
		
		$("#lw1").val("");
		$("#lw2").val("");
		$("#lw3").val("");
		$("#lw4").val("");
		$("#lw5").val("");
		$("#lw6").val("");
		$("#typebox-ext").val("Flute")
		$("#longsize-ext").val("")
		$("#widthsize-ext").val("")
		$("#heightsize-ext").val("")
		$("#typebox-ext").prop("disabled", true);
		$(".canvas-drawing").css("display", "none");
		$(".btn-drawing").prop("disabled", true);
	}
	var theightd = theight * 0.9805;
	var heightd = height * 0.9805;
	var twsd = tws * 0.9805;
	var kpd = kpbc * 0.9921;
	var lengthd = length * 0.9921;
	var length1d = length1 * 0.9921;
	var length2d = length2 * 0.9921;
	var totalsc = tls * 0.9921;
	var theightbl = theightd.toFixed(2);
	var heightdbl = heightd.toFixed(2);
	var twsbl = twsd.toFixed(2);
	var kpbl = kpd.toFixed(2);
	var lengthbl = lengthd.toFixed(2);
	var length1bl = length1d.toFixed(2);
	var length2bl = length2d.toFixed(2);
	var totalbl = totalsc.toFixed(2);
		$("#fx1").val(theightbl);
		$("#fx2").val(heightdbl);
		$("#fx3").val(theightbl);
		$("#fx4").val(twsbl);
		$("#lw1").val(kpbl);
		$("#lw2").val(lengthbl);
		$("#lw3").val(length1bl);
		$("#lw4").val(lengthbl);
		$("#lw5").val(length2bl);
		$("#lw6").val(totalbl);
		$("#typebox-ext").val($("#typebox").val())

// ============Created by adri_syahrul@app.co.id-01131618============

// ===========================for drawing============================
		$(".flute-drawing").text("Flute : ");
		$(".txt-h-tp").text("");
		$(".txt-h-bt").text("");
		$(".txt-tt").text("");
		$(".txt-total-h").text("");
		$(".txt-kp").text("");
		$(".txt-l1").text("");
		$(".txt-w1").text("");
		$(".txt-l2").text("");
		$(".txt-w2").text("");
		$(".txt-total-w").text("");
		
		$(".flute-drawing").append($(" #typebox").val());
		$(".txt-h-tp").append(theight + "mm");
		$(".txt-h-bt").append(theight + "mm");
		$(".txt-tt").append(height + "mm");
		$(".txt-total-h").append(tws + "mm");
		$(".txt-kp").append($("#kp").val() + "mm");
		$(".txt-l1").append(length + "mm");
		$(".txt-w1").append(length1 + "mm");
		$(".txt-l2").append(length + "mm");
		$(".txt-w2").append(length2 + "mm");
		$(".txt-total-w").append(tls + "mm");
		$("#flute").val("Flute : " + $("#typebox").val());
		
		$(".arrow-descript-flexo1").text("");
		$(".arrow-descript-flexo1").append(theightbl);
		$(".arrow-descript-flexo2").text("");
		$(".arrow-descript-flexo2").append(heightdbl);
		$(".arrow-descript-longway1").text("");
		$(".arrow-descript-longway1").append(lengthbl);
		$(".arrow-descript-longway3").text("");
		$(".arrow-descript-longway3").append(lengthbl);
		$(".arrow-descript-longway2").text("");
		$(".arrow-descript-longway2").append(length1bl);
		$(".arrow-descript-longway4").text("");
		$(".arrow-descript-longway4").append(length2bl);
// ============Created by adri_syahrul@app.co.id-01131618============
});

// ========================from external size========================

$("#typebox-ext").change(function()
{
	if ($("#typebox-ext").val() == "BC") {
		$("#kp").val(35);
		var extlength = $("#longsize-ext").val();
		var intlength = parseInt(extlength - 7);
			$("#l1").val(extlength);
			$("#l2").val(extlength);
			$("#longsize").val(intlength)
		var extlength1 = $("#widthsize-ext").val();
		var intlength1 = parseInt(extlength1 - 7);
        var intlength2 = parseInt(extlength1 - 3);
			$("#w1").val(extlength1);
			$("#w2").val(intlength2);
			$("#widthsize").val(intlength1)
		var extheight = $("#heightsize-ext").val();
		var intheight = parseInt(extheight - 15);
			if ($("#widthsize").val()%2==0) {
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(5.5);
			} else
			{
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(6);
			}
            $("#swidthsize").val(extheight);
			$("#h1").val(theight);
			$("#h2").val(theight);
			$("#heightsize").val(intheight)
			
		var tws = parseInt(theight * 2) + parseInt(extheight);
			$("#totalscoring").val(tws);
		var tls = parseInt(35) + parseInt(extlength * 2) + parseInt(extlength1) + parseInt(intlength2);
			$("#totalscoringl").val(tls);
			$("#widths").val(tws);
			$("#lengths").val(parseInt(tls) + 10);
	
		$(".btn-drawing").prop("disabled", false);
		$("#typebox").val($("#typebox-ext").val())
		$(".canvas-drawing").css("display", "block");
	}
	else if ($("#typebox-ext").val() == "BA") {
		$("#kp").val(35);
		var extlength = $("#longsize-ext").val();
		var intlength = parseInt(extlength - 8);
			$("#l1").val(extlength);
			$("#l2").val(extlength);
			$("#longsize").val(intlength)
		var extlength1 = $("#widthsize-ext").val();
		var intlength1 = parseInt(extlength1 - 8);
        var intlength2 = parseInt(extlength1 - 3);
			$("#w1").val(extlength1);
			$("#w2").val(intlength2);
			$("#widthsize").val(intlength1)
		var extheight = $("#heightsize-ext").val();
		var intheight = parseInt(extheight - 14);
			if ($("#widthsize").val()%2==0) {
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(5) + .5;
			} else
			{
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(6) + .5;
			}
            $("#swidthsize").val(extheight);
			$("#h1").val(theight);
			$("#h2").val(theight);
			$("#heightsize").val(intheight)
			
		var tws = parseInt(theight * 2) + parseInt(extheight);
			$("#totalscoring").val(tws);
		var tls = parseInt(35) + parseInt(extlength * 2) + parseInt(extlength1) + parseInt(intlength2);
			$("#totalscoringl").val(tls);
			$("#widths").val(tws);
			$("#lengths").val(parseInt(tls) + 10);
	
		$(".btn-drawing").prop("disabled", false);
		$("#typebox").val($("#typebox-ext").val())
		$(".canvas-drawing").css("display", "block");
	}
	else if ($("#typebox-ext").val() == "B") {
		$("#kp").val(32);
		var extlength = $("#longsize-ext").val();
		var intlength = parseInt(extlength - 3);
			$("#l1").val(extlength);
			$("#l2").val(extlength);
			$("#longsize").val(intlength)
		var extlength1 = $("#widthsize-ext").val();
		var intlength2 = parseInt(extlength1 - 3);
			$("#w1").val(extlength1);
			$("#w2").val(intlength2);
			$("#widthsize").val(intlength2)
		var extheight = $("#heightsize-ext").val();
		var intheight = parseInt(extheight - 5);
			if ($("#widthsize").val()%2==0) {
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(1) + .5;
			} else
			{
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(2) + .5;
			}
            $("#swidthsize").val(extheight);
			$("#h1").val(theight);
			$("#h2").val(theight);
			$("#heightsize").val(intheight)
			
		var tws = parseInt(theight * 2) + parseInt(extheight);
			$("#totalscoring").val(tws);
		var tls = parseInt(32) + parseInt(extlength * 2) + parseInt(extlength1) + parseInt(intlength2);
			$("#totalscoringl").val(tls);
			$("#widths").val(tws);
			$("#lengths").val(parseInt(tls) + 10);
	
		$(".btn-drawing").prop("disabled", false);
		$("#typebox").val($("#typebox-ext").val())
		$(".canvas-drawing").css("display", "block");
	}
	else if ($("#typebox-ext").val() == "C") {
		$("#kp").val(32);
		var extlength = $("#longsize-ext").val();
		var intlength = parseInt(extlength - 4);
			$("#l1").val(extlength);
			$("#l2").val(extlength);
			$("#longsize").val(intlength)
		var extlength1 = $("#widthsize-ext").val();
		var intlength1 = parseInt(extlength1 - 4);
        var intlength2 = parseInt(extlength1 - 3);
			$("#w1").val(extlength1);
			$("#w2").val(intlength2);
			$("#widthsize").val(intlength1)
		var extheight = $("#heightsize-ext").val();
		var intheight = parseInt(extheight - 7);
			if ($("#widthsize").val()%2==0) {
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(3);
			} else
			{
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(4);
			}
            $("#swidthsize").val(extheight);
			$("#h1").val(theight);
			$("#h2").val(theight);
			$("#heightsize").val(intheight)
			
		var tws = parseInt(theight * 2) + parseInt(extheight);
			$("#totalscoring").val(tws);
		var tls = parseInt(32) + parseInt(extlength * 2) + parseInt(extlength1) + parseInt(intlength2);
			$("#totalscoringl").val(tls);
			$("#widths").val(tws);
			$("#lengths").val(parseInt(tls) + 10);
	
		$(".btn-drawing").prop("disabled", false);
		$("#typebox").val($("#typebox-ext").val())
		$(".canvas-drawing").css("display", "block");
	}
	else if ($("#typebox-ext").val() == "A") {
		$("#kp").val(32);
		var extlength = $("#longsize-ext").val();
		var intlength = parseInt(extlength - 5);
			$("#l1").val(extlength);
			$("#l2").val(extlength);
			$("#longsize").val(intlength)
		var extlength1 = $("#widthsize-ext").val();
		var intlength1 = parseInt(extlength1 - 5);
        var intlength2 = parseInt(extlength1 - 3);
			$("#w1").val(extlength1);
			$("#w2").val(intlength2);
			$("#widthsize").val(intlength1)
		var extheight = $("#heightsize-ext").val();
		var intheight = parseInt(extheight - 9);
			if ($("#widthsize").val()%2==0) {
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(3) + .5;
			} else
			{
				var theight = parseInt($("#widthsize").val() / 2) + parseInt(4) + .5;
			}
            $("#swidthsize").val(extheight);
			$("#h1").val(theight);
			$("#h2").val(theight);
			$("#heightsize").val(intheight)
			
		var tws = parseInt(theight * 2) + parseInt(extheight);
			$("#totalscoring").val(tws);
		var tls = parseInt(32) + parseInt(extlength * 2) + parseInt(extlength1) + parseInt(intlength2);
			$("#totalscoringl").val(tls);
			$("#widths").val(tws);
			$("#lengths").val(parseInt(tls) + 10);
	
		$(".btn-drawing").prop("disabled", false);
		$("#typebox").val($("#typebox-ext").val())
		$(".canvas-drawing").css("display", "block");
	}
	else {
		$("#kp").val("");
		$("#l1").val("");
		$("#l2").val("");
		$("#w1").val("");
		$("#w2").val("");
		$("#swidthsize").val("Pilih flute");
		$("#h1").val("Pilih flute");
		$("#h2").val("Pilih flute");
		$("#totalscoring").val("Pilih flute");
		$("#totalscoringl").val("");
		$("#widths").val("");
		$("#lengths").val("");
		$("#fx1").val("");
		$("#fx2").val("");
		$("#fx3").val("");
		$("#fx4").val("");
		
		$("#lw1").val("");
		$("#lw2").val("");
		$("#lw3").val("");
		$("#lw4").val("");
		$("#lw5").val("");
		$("#lw6").val("");
		$(".btn-drawing").prop("disabled", true);
		$("#typebox").val("Flute")
		$("#longsize").val("")
		$("#widthsize").val("")
		$("#heightsize").val("")
		$("#typebox").prop("disabled", true);
		$(".canvas-drawing").css("display", "none");
	}

	var kpbc = $("#kp").val();
	var theightd = theight * 0.9805;
	var heightd = extheight * 0.9805;
	var twsd = tws * 0.9805;
	var kpd = kpbc * 0.9921;
	var lengthd = extlength * 0.9921;
	var length1d = extlength1 * 0.9921;
	var length2d = intlength2 * 0.9921;
	var totalsc = tls * 0.9921;
	var theightbl = theightd.toFixed(2);
	var heightdbl = heightd.toFixed(2);
	var twsbl = twsd.toFixed(2);
	var kpbl = kpd.toFixed(2);
	var lengthbl = lengthd.toFixed(2);
	var length1bl = length1d.toFixed(2);
	var length2bl = length2d.toFixed(2);
	var totalbl = totalsc.toFixed(2);
		$("#fx1").val(theightbl);
		$("#fx2").val(heightdbl);
		$("#fx3").val(theightbl);
		$("#fx4").val(twsbl);
		$("#lw1").val(kpbl);
		$("#lw2").val(lengthbl);
		$("#lw3").val(length1bl);
		$("#lw4").val(lengthbl);
		$("#lw5").val(length2bl);
		$("#lw6").val(totalbl);
		


// ===========================for drawing============================
		$(".flute-drawing").text("Flute : ");
		$(".txt-h-tp").text("");
		$(".txt-h-bt").text("");
		$(".txt-tt").text("");
		$(".txt-total-h").text("");
		$(".txt-kp").text("");
		$(".txt-l1").text("");
		$(".txt-w1").text("");
		$(".txt-l2").text("");
		$(".txt-w2").text("");
		$(".txt-total-w").text("");
		
		$(".flute-drawing").append($(" #typebox-ext").val());
		$(".txt-h-tp").append(theight + "mm");
		$(".txt-h-bt").append(theight + "mm");
		$(".txt-tt").append(extheight + "mm");
		$(".txt-total-h").append(tws + "mm");
		$(".txt-kp").append($("#kp").val() + "mm");
		$(".txt-l1").append(extlength + "mm");
		$(".txt-w1").append(extlength1 + "mm");
		$(".txt-l2").append(extlength + "mm");
		$(".txt-w2").append(intlength2 + "mm");
		$(".txt-total-w").append(tls + "mm");
		$("#flute").val("Flute : " + $("#typebox-ext").val());

		$(".arrow-descript-flexo1").text("");
		$(".arrow-descript-flexo1").append(theightbl);
		$(".arrow-descript-flexo2").text("");
		$(".arrow-descript-flexo2").append(heightdbl);
		$(".arrow-descript-longway1").text("");
		$(".arrow-descript-longway1").append(lengthbl);
		$(".arrow-descript-longway3").text("");
		$(".arrow-descript-longway3").append(lengthbl);
		$(".arrow-descript-longway2").text("");
		$(".arrow-descript-longway2").append(length1bl);
		$(".arrow-descript-longway4").text("");
		$(".arrow-descript-longway4").append(length2bl);
// ============Created by adri_syahrul@app.co.id-01131618============

});


// ===========================validation==============================

var valid = 0;
var valid1 = 0;
var valid2 = 0;
var bateh = " | ";
$("#longsize").keyup(function() {
			valid = "yes";
			truevalid = valid+valid1+valid2;
			if(truevalid == "yesyesyes") {
				if($("#longsize").val() >= 10) {
					$("#typebox").prop("disabled", false);
					valid2 = 0;
					valid1 = 0;
					valid = 0;
				}
			}
		});
$("#widthsize").keyup(function() {
			valid1 = "yes";
			truevalid = valid+valid1+valid2;
			if(truevalid == "yesyesyes") {
				if($("#widthsize").val() >= 10) {
					$("#typebox").prop("disabled", false);
					valid2 = 0;
					valid1 = 0;
					valid = 0;
				}
			}
		});
$("#heightsize").keyup(function() {
			valid2 = "yes";
			truevalid = valid+valid1+valid2;
			if(truevalid == "yesyesyes") {
				if($("#heightsize").val() >= 10) {
					$("#typebox").prop("disabled", false);
					valid2 = 0;
					valid1 = 0;
					valid = 0;
				}
			}
		});

var valid3 = 0;
var valid4 = 0;
var valid5 = 0;
var bateh = " | ";
$("#longsize-ext").keyup(function() {
			valid3 = "yes";
			truevalid1 = valid3+valid4+valid5;
			if(truevalid1 == "yesyesyes") {
				if($("#longsize-ext").val() >= 10) {
					$("#typebox-ext").prop("disabled", false);
					valid5 = 0;
					valid4 = 0;
					valid3 = 0;
				}
			}
		});
$("#widthsize-ext").keyup(function() {
			valid4 = "yes";
			truevalid1 = valid3+valid4+valid5;
			if(truevalid1 == "yesyesyes") {
				if($("#longsize-ext").val() >= 10) {
					$("#typebox-ext").prop("disabled", false);
					valid5 = 0;
					valid4 = 0;
					valid3 = 0;
				}
			}
		});
$("#heightsize-ext").keyup(function() {
			valid5 = "yes";
			truevalid1 = valid3+valid4+valid5;
			if(truevalid1 == "yesyesyes") {
				if($("#longsize-ext").val() >= 10) {
					$("#typebox-ext").prop("disabled", false);
					valid5 = 0;
					valid4 = 0;
					valid3 = 0;
				}
			}
		});
// ============Created by adri_syahrul@app.co.id-01131618============

// ============================clear button============================
$(".btn-clear").click(function() {
	$("input[type=text], textarea").val("");
	$("input[type=number], textarea").val("");
	$("select[type=text]").val("Flute");
	$(".btn-drawing").prop("disabled", true);
	$("#typebox").prop("disabled", true);
	$("#typebox-ext").prop("disabled", true);
	$(".canvas-drawing").css("display", "none");
});
// ====================================================================

// ======================validation numeric input======================
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}    
// ====================================================================

// ==============================reduction=============================
$("#breduksi").keyup(function() {
	if ($("#typereduksi").val() == "F") {
		var reduction = $("#breduksi").val() * 98.05/100 ;
		$("#areduksi").val(reduction);
	} else if ($("#typereduksi").val() == "L") {
		var reduction = $("#breduksi").val() * 99.21/100 ;
		$("#areduksi").val(reduction);
	} else {
		$("#areduksi").val("Pilih tipe reduksi dahulu");
	}
});
// ============Created by adri_syahrul@app.co.id-01131618============

// ==============================tool tips=============================
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
// ====================================================================

// for reduction drawing===============================================
$("#typereduksi-on-drawing1").change(function()
{
	if ($("#typereduksi-on-drawing1").val() == "F") {
		$(".flexo-arrow1").css("display", "block");
		$(".flexo-arrow2").css("display", "block");
		$(".longway-arrow").css("display", "none");
	}
	else if ($("#typereduksi-on-drawing1").val() == "L") {
		$(".flexo-arrow1").css("display", "none");
		$(".flexo-arrow2").css("display", "none");
		$(".longway-arrow").css("display", "block");
	}
	else {
		$(".flexo-arrow1").css("display", "none");
		$(".flexo-arrow2").css("display", "none");
		$(".longway-arrow").css("display", "none");
	}
});
$("#typereduksi-on-drawing").change(function()
{
	if ($("#typereduksi-on-drawing").val() == "F") {
		$("#flexo-arrow1").css("display", "block");
		$("#flexo-arrow2").css("display", "block");
		$("#flexo-arrow3").css("display", "block");
		$("#flexo-arrow4").css("display", "block");
		$("#flexo-arrow5").css("display", "block");
		$("#flexo-arrow6").css("display", "block");
		$("#longway-arrow1").css("display", "none");
		$("#longway-arrow2").css("display", "none");
		$("#longway-arrow3").css("display", "none");
		$("#longway-arrow4").css("display", "none");
	}
	else if ($("#typereduksi-on-drawing").val() == "L") {
		$("#flexo-arrow1").css("display", "none");
		$("#flexo-arrow2").css("display", "none");
		$("#flexo-arrow3").css("display", "none");
		$("#flexo-arrow4").css("display", "none");
		$("#flexo-arrow5").css("display", "none");
		$("#flexo-arrow6").css("display", "none");
		$("#longway-arrow1").css("display", "block");
		$("#longway-arrow2").css("display", "block");
		$("#longway-arrow3").css("display", "block");
		$("#longway-arrow4").css("display", "block");
	}
	else {
		$("#flexo-arrow1").css("display", "none");
		$("#flexo-arrow2").css("display", "none");
		$("#flexo-arrow3").css("display", "none");
		$("#flexo-arrow4").css("display", "none");
		$("#flexo-arrow5").css("display", "none");
		$("#flexo-arrow6").css("display", "none");
		$("#longway-arrow1").css("display", "none");
		$("#longway-arrow2").css("display", "none");
		$("#longway-arrow3").css("display", "none");
		$("#longway-arrow4").css("display", "none");
	}
});
$("#typereduksi-on-drawing1").change(function()
{
	if ($("#typereduksi-on-drawing1").val() == "F") {
		$("#flexo-arrow1-1").css("display", "block");
		$("#flexo-arrow2-1").css("display", "block");
		$("#flexo-arrow3-1").css("display", "block");
		$("#flexo-arrow4-1").css("display", "block");
		$("#flexo-arrow5-1").css("display", "block");
		$("#flexo-arrow6-1").css("display", "block");
		$("#longway-arrow1-1").css("display", "none");
		$("#longway-arrow2-1").css("display", "none");
		$("#longway-arrow3-1").css("display", "none");
		$("#longway-arrow4-1").css("display", "none");
	}
	else if ($("#typereduksi-on-drawing1").val() == "L") {
		$("#flexo-arrow1-1").css("display", "none");
		$("#flexo-arrow2-1").css("display", "none");
		$("#flexo-arrow3-1").css("display", "none");
		$("#flexo-arrow4-1").css("display", "none");
		$("#flexo-arrow5-1").css("display", "none");
		$("#flexo-arrow6-1").css("display", "none");
		$("#longway-arrow1-1").css("display", "block");
		$("#longway-arrow2-1").css("display", "block");
		$("#longway-arrow3-1").css("display", "block");
		$("#longway-arrow4-1").css("display", "block");
	}
	else {
		$("#flexo-arrow1-1").css("display", "none");
		$("#flexo-arrow2-1").css("display", "none");
		$("#flexo-arrow3-1").css("display", "none");
		$("#flexo-arrow4-1").css("display", "none");
		$("#flexo-arrow5-1").css("display", "none");
		$("#flexo-arrow6-1").css("display", "none");
		$("#longway-arrow1-1").css("display", "none");
		$("#longway-arrow2-1").css("display", "none");
		$("#longway-arrow3-1").css("display", "none");
		$("#longway-arrow4-1").css("display", "none");
	}
});
$(".close-tab").click(function() {
	if(confirm('Are you sure to close ?')){
		window.close();
	}
});