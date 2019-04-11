$(document).ready(function(){

    var flag = false;
    var scroll;

    $(window).scroll(function(){
        scroll = $(window).scrollTop();

        if(scroll > 200){
            if(!flag){
                $("#logo").css({
                    "margin-top": "-5px",
                    "width": "50px",
                    "height":"50px"
                });

                $("header").css({
                    "background-color": "#473c89",
                    "border-bottom": "1px solid #ffffff"
                });
                flag = true;
            }
        }else{
            if(flag){
                $("#logo").css({
                    "margin-top": "250px",
                    "width": "450px",
                    "height":"450px"
                });

                $("header").css({
                    "background-color": "transparent",
                    "border-bottom": "1px solid transparent"
                });
                flag = false;
            }
        }
    });


    // menu sliding down
  

    $('#logo2').click(function () {
        $('#menu ul').slideToggle(500);
    });
    $(window).resize(function () {
        if ($(window).width() > 550){
            $('#menu ul').removeAttrs('style');
        }
    });





    /*Anchor*/

    $("#menu").on("click","a", function (event) {
        //prevent default event onclick
        event.preventDefault();

        //taking block id from href attribite
        var id  = $(this).attr('href'),

        //finding out the distance (height) from page top to the block, referenced to by the anchor
            top = $(id).offset().top;

        //animate transition to the "top"-distance in 1500 ms
        $('body,html').animate({scrollTop: top}, 1500);
         if ($(window).width() <= 650){ 
            $('#menu ul').slideToggle(500);
        }
    });







    // Order

    $('#button_a').click(function () {
        $("#block_orderForm").show(500);
        $("#hover_a").show();
        $("#button_a").css({
            "right": "-350px",
        });
    });
    $('#hover_a').click(function () {
        $("#block_orderForm").hide();
        $("#hover_a").hide();
        $("#button_a").css({
            "right": "-35px",
        });
    });


    // "Team" info about Alex

    $('#inf_a').click(function () {
        $("#block_info_Alex").show(500);
        $("#hover_a").show();
    });
    $('#hover_a').click(function () {
        $("#block_info_Alex").hide();
        $("#hover_a").hide();
    });

    // "Team" info about Max

    $('#inf_m').click(function () {
        $("#block_info_Max").show(500);
        $("#hover_a").show();
    });
    $('#hover_a').click(function () {
        $("#block_info_Max").hide();
        $("#hover_a").hide();
    });


    // "Team" info about Vitalik

    $('#inf_v').click(function () {
        $("#block_info_Vitaliy").show(500);
        $("#hover_a").show();
    });
    $('#hover_a').click(function () {
        $("#block_info_Vitaliy").hide();
        $("#hover_a").hide();
    });
    


    /*validate form*/

    $("#orderForm").validate({

        rules: {

            name: {
                required: true,
            },

            email: {
                email: true,
                required: true,
            },

            phone: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10,
            },
        },

        messages: {

            name: {
                required: "Entry field 'Name' <br>is required!",
            },

            email: {
                required: "E-mail is required! <br> Please, fill in!",
                email: "E-mail must contain <br> the '@' symbol! <br> For example: likestudio@gmail.com",
            },

            phone: {
                required: "Phone number <br> is required!",
                digits: "This entry field should contain only digits! <br> Example:  0631234567",
                minlength: "Phone number must be at least <br> 10 digits long",
                maxlength: "Maximum length of phone number <br> must be not more than 10 symbols",
            },

        }

    });


// Hidden Surprize (Paskhalka)

    $('.znak2').click(function () {

        $('.znak2').click(function () {

            $('.znak2').click(function () {

                $('.znak2').click(function () {

                    $('.znak2').click(function () {


                        // Matrix
                        $("#main_wrapper").hide();
                        $("#c").show();







                        // $("#pashalka video").show(500);
                        $("#pashalka_choice").show(500);
                        $("#pashalka_pills_blue").show(500);
                        $("#pashalka_pills_red").show(500);
                    });
                });
            });
        });
    });
    $('#pashalka_pills_blue').click(function () {


        // Matrix
        $("#main_wrapper").show();
        $("#c").hide();


        // $("#pashalka video").hide(500);
        $("#pashalka_choice").hide(500);
        $("#pashalka_pills_red").hide(500);
        $("#pashalka_pills_blue").hide(500);
    });

    $('#pashalka_pills_red').click(function () {



        // Matrix
        $("#main_wrapper").hide(500);
        $("#main_wrapper").show();
        $("#c").hide();





        $("#pashalka video").hide(500);
        $("#pashalka_choice").hide(500);
        $("#pashalka_pills_red").hide(500);
        $("#pashalka_pills_blue").hide(500);
        $("header").hide(500);
        $(".block_video_header").hide(1500);
        $(".block_aboutUs").hide(2500);
        $(".block_wowslider_teamwork").hide(3500);
        $(".block_skills_expertise").hide(4500);
        $(".block_ourTeam").hide(5500);
        $(".block_ourWorks").hide(6500);
        $("#button_a").hide(7500);
        $(".ourLocation").hide(8500);
        $("#pashalka_end img").show(8500);
        $("#c").show(9000);
    });

    $('#pashalka_end img').click(function () {


        $("#c").hide();


        $("#pashalka_end img").hide(1000);
        $("header").show(500);
        $(".block_video_header").show(1500);
        $(".block_aboutUs").show(2500);
        $(".block_wowslider_teamwork").show(3500);
        $(".block_skills_expertise").show(4500);
        $(".block_ourTeam").show(5500);
        $(".block_ourWorks").show(6500);
        $("#button_a").show(7500);
        $(".ourLocation").show(8500);

    });


    var c = document.getElementById("c");
    var ctx = c.getContext("2d");

//making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
    var chinese = "BIONIC";
    // var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
//converting the string into an array of single characters
    chinese = chinese.split("");

    var font_size = 10;
    var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
    var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
    for(var x = 0; x < columns; x++)
        drops[x] = 1;

//drawing the characters
    function draw()
    {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#473c89"; //green text
        ctx.font = font_size + "px arial";
        //looping over drops
        for(var i = 0; i < drops.length; i++)
        {
            //a random chinese character to print
            var text = chinese[Math.floor(Math.random()*chinese.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i*font_size, drops[i]*font_size);

            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if(drops[i]*font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;

            //incrementing Y coordinate
            drops[i]++;
        }
    }

    setInterval(draw, 33);

});