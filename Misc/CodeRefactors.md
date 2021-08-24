## Code Refactors

1.  <details>
    <summary>Keeping track of empty input fields for progress bar</summary>

    ```
    var empty = 0;
    let total = 0;

    $(document).ready(function(){

    $(".tab-1 input.personalinfostyle:not(#oldpassword, #oldpasswordactive, #newpassword, #instagramhandle)").each(function(){
        if($(this).val() == ""){
            empty = empty + 1;
        }
        total = total + 1;
    })

    $(".tab-1 textarea").each(function(){
        if($(this).val() == ""){
            empty = empty + 1;
        }
        total = total + 1;
    })

    $(".tab-1 select:not(#birthday_day, #birthday_month, #birthday_year)").each(function(){
        if($(this).val() == ""){
            empty = empty + 1;
        }
        total = total + 1;
    })

    total = total + 1;
    if($(".personalinfostylechkbox:checked").length == 0){
        empty = empty + 1;
    }

    var percent = Math.floor((1 - (empty / total)) * 100);

    $(".rect-full").slice(Math.round(percent / 20)).addClass("rect-empty");

    $(".completion").text(percent + "% complete");

    if( percent < 97){
        $(".complete-cta").show();
    }

    });
    ```

    to

    ```
    $(document).ready(function(){
    	$nodeList = $(".tab-1 input.personalinfostyle:not(#oldpassword, #oldpasswordactive, #newpassword, #instagramhandle), .tab-1 textarea:not(.note-codable), .tab-1 select:not(#birthday_day, #birthday_month, #birthday_year)");
    	let empty = 0, total = $nodeList.length;

      	$nodeList.each(function(){
    		if ($(this).val() === "") empty++;
      	});

    	$(".personalinfostylechkbox:checked").length === 0 ? (empty++, total++) : total++; // To account for personality checkboxes

      	var percent = Math.floor((1 - (empty / total)) * 100);
      	$(".rect-full").slice(Math.round(percent / 20)).addClass("rect-empty");
      	$(".completion").text(percent + "% complete");

      	if( percent < 97) $(".complete-cta").show();
    });
    ```

    </details>

1.  <details>
    <summary>Grabbing fields and prepping for POST</summary>

    ```
    $( "#saveprofilechanges" ).click(function() {
        var birthmonth = document.getElementById("birthday_month").value;
    	var birthdayy = document.getElementById("birthday_day").value;
    	var birthyear = document.getElementById("birthday_year").value;
    	if(birthmonth < 10){
    		birthmonth = '0' + birthmonth;
    	}
    	if(birthdayy < 10){
    		birthdayy = '0' + birthdayy;
    	}
    	var birthvalue = birthmonth + '-' + birthdayy + '-' + birthyear;
    	document.getElementById("birthdayvalue").value = birthvalue;
    	var birthvalue2 = document.getElementById("birthdayvalue").value;
    	document.getElementById('saveprofile').submit();
    });
    ```

    to

    ```
    $( "#saveprofilechanges" ).click(function() {
    	$birthdayList = $("#birthday_month, #birthday_day, #birthday_year");
    	let birthdayListArray = [], birthValue;

    	$birthdayList.each(function(){
    		let current = $(this)[0].value;
    		if (current < 10){
    			current = "0" + current;
    		}
    		birthdayListArray.push(current);
    	})

    	birthValue = birthdayListArray.join("-");
    	document.getElementById("birthdayvalue").value = birthValue;
    	document.getElementById('saveprofile').submit();
    });
    ```

    </details>
