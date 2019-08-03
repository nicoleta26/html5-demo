document.addEventListener('DOMContentLoaded',function (e) {
    var bgsPhotos = [
        './photos/background.png',
        './photos/bg2.jpeg',
        './photos/bg3.png',
        './photos/bg4.jpg'
    ];
    var countPhoto = 0;

    $( "#select" ).selectmenu();
    $( "#accordion" ).accordion();
    $( "button" ).button();
    window.addEventListener("scroll", function (event){
        var sticky = $('#sticky_menu').get(0).offsetTop;
        console.log(window.pageYOffset);
        console.log(sticky);
        if (window.pageYOffset >= sticky) {
            $('#sticky_menu').get(0).classList.add("sticky");
            console.log("addSticky");
        } else {
            console.log("addSticky remove");
            $('#sticky_menu').get(0).classList.remove("sticky");
        }
    });
    $('#burger-icon').on('click',function (event) {
        if($('#burger_menu').css('display') == 'block') {
            $('#burger_menu').css('display','none');
        } else {
            $('#burger_menu').css('display','block');
        }
    })
    $('.main > span').on('click',function (event) {
        var hasClass = $(this).attr('class');
        countPhoto += (hasClass == 'after') ? 1 : -1;

        if(countPhoto == -1 || countPhoto == bgsPhotos.length){
            countPhoto = (countPhoto == -1) ? bgsPhotos.length - 1 : 0;
        }
        $('.main').fadeOut(200,function () {
            $('.main').css('background-image','url("' + bgsPhotos[countPhoto] + '")')
            $('.main').fadeIn(200)
        });


    })

})