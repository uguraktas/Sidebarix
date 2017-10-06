(function ($) {
    "use strict";

    $.fn.sidebarMenu = function (param) {
        var that = this;
        resizeSidebarMenu(that, param);
        $(window).resize(function () {
            resizeSidebarMenu(that, param);
        });
        return
    }

    function resizeSidebarMenu(that, param) {
        //Gelen Parametreler
        var size = param.widthSize + 'px';
        var top = param.top + 'px';
        var selectorClass = param.selectorClass;
        var side = param.side;
        var responsive = param.responsive;

        // Right - Left Kontrol
        if (side == 'right') {
            $(selectorClass).css({
                "right": "0px",
            });
            that.css({
                marginRight: size,
            });
        }
        else if (side == 'left') {
            $(selectorClass).css({
                "left": "0px",
            });
            $(selectorClass).css({
                "position": "fixed",
                "top": top,
                "width": size,
            });
            that.css({
                marginLeft: size,
            });
        }
        else {
            console.log('değer yok')
        }

        //Mobil Kontrol
        if (responsive != null) {
            if ($('html').width() > responsive) {
                size = size = 0;
                $('body').css({
                    marginRight: size,
                    marginLeft: size,
                });
                $(selectorClass).css({
                    "display": "none",
                });
            }
            else {
                //Side Menü olarak seçilen
                $(selectorClass).css({
                    "position": "fixed",
                    "display": "block",
                    "top": top,
                    "width": size,
                });
            }
        }


    }

})(jQuery);
