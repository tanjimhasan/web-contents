$(document).ready(function () {



     var SectionList = "//raw.githubusercontent.com/devstown/json-hosting/master/web-contents/section-list.json";

    //get data from json file
    $.getJSON(SectionList, function (result) {

        for (var i = 0; i < result.length; i++) {
            var singleSection = '<div class="single-section">' +
                '<div class="card">' +
                '<div class="demo-bg" style="background-image: url(\'' + result[i].sectionImgURL + '\');"></div>' +
                '<div class="card-body text-center">' +
                '<h5 class="card-title">' + result[i].sectionTitle + '</h5>' +
                '<a href="' + result[i].demoButtonURL + '" target="_blank" class="bordered-btn"><i class="far fa-heart"></i> Demo</a>' +
                '</div>' +
                '</div>' +
                '</div>';

            $('#section-container').append(singleSection);

        }
        //pagination
        $('#section-container').paginate({
            'perPage': 16
        });
    });
	
     //search 
    // while keypress on search box
    $("#searchSection").on("keyup", function () {
        //take the search term and convert it to lower case
        var searchKey = $(this).val().toLowerCase();

        // search in the plugin container 
        $("#section-container .single-section").filter(function () {
            // show the matched plugin based on search key
            $(this).toggle($(this).text().toLowerCase().indexOf(searchKey) > -1);
        });
    });
        
     
});