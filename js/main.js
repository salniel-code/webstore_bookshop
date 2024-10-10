$(document).ready(function() {
    $('#prev').css('display', 'none');
    $('#next').on('click', function() {
        var activePicture = $('.active');
        var nextPicture = activePicture.next()
        if (nextPicture.length) {
            activePicture.removeClass('active').css('z-index', -10);
            nextPicture.addClass('active').css('z-index', 10);
            $('#next').css('display', 'none');
            $('#prev').css('display', 'block');

        }
    });
    $('#prev').on('click', function() {
        var activePicture = $('.active');
        var prevPicture = activePicture.prev()
        if (prevPicture.length) {
            activePicture.removeClass('active').css('z-index', -10);
            prevPicture.addClass('active').css('z-index', 10);
            $('#next').css('display', 'block');
            $('#prev').css('display', 'none');

        }
    });

});