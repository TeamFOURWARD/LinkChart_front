// DATE
$("input[type=date].placeholder-date").on("change", (e) => {
    const target = $(e.target);
    if (target.val() == "") target.addClass("date_empty");
    else target.removeClass("date_empty");
});

// CHART
google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Set Data
    var data = google.visualization.arrayToDataTable([
        ['Price', 'Size'],
        [50,7],[60,8],[70,8],[80,9],[90,9],
        [100,9],[110,10],[120,11],
        [130,14],[140,14],[150,15]
    ]);
    // Set Options
    var options = {
        title: 'House Prices vs. Size',
        hAxis: {title: 'Square Meters'},
        vAxis: {title: 'Price in Millions'},
        legend: 'none'
    };
    // Draw
    var chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
}

// CHANGE CONTENT
$(".table_container a").click(function(){
    $(this).children().removeClass("fa-regular");
    $(this).children().addClass("fa-solid");
});

// SIGN UP
$("#signup").click(function() {
    $("#first").fadeOut("fast", function() {
        $("#second").fadeIn("fast");
    });
});

$("#signin").click(function() {
    $("#second").fadeOut("fast", function() {
        $("#first").fadeIn("fast");
    });
});

$(function() {
    $("form[name='login']").validate({
        rules: {

            email: {
                required: true,
                email: true
            },
            password: {
                required: true,

            }
        },
        messages: {
            email: "Please enter a valid email address",

            password: {
                required: "Please enter password",

            }

        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});

$(function() {

    $("form[name='registration']").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },

        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address"
        },

        submitHandler: function(form) {
            form.submit();
        }
    });
});

// MAIN FUNCTION
//$(".intro_page").fadeOut(3000);