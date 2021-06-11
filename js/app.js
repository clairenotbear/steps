$(document).ready(function(){
    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    if(iOS) return;

    // For mobile UI - first click to open the list, second click to link the step.
    if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var isClicked = false;

        $('nav li a').first().on('click', function (event) {
            if (isClicked == false) {
                event.preventDefault();
                isClicked = true;
            };
        });
    }


    // fix old browser issue
    $('nav a').on('click mouseover', (function(){
        var flag = 0;
        $(window).click(function(e){
            flag = 0;
        });
        return function(e){
            if($(document).width() > 768){
                return;
            }

            // small viewport case
            if(flag === 0){
                setTimeout(function(){
                    flag = 1;
                }, 50);
                return e.preventDefault();
            }
        }
    })());
});