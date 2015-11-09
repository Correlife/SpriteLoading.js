/*!
 * SpriteLoading.js
 * version : 1.0
 * author : Guy Brukhis
 * license : MIT
 * https://github.com/Correlife/SpriteLoading.js
 */
var SpriteLoading = function (container, custom_options) {
    custom_options = custom_options || {};
    var options = $.extend({
        width: 60,
        height: 60,
        delay: 40,
        frames: {
            start: 1,
            loop_start: 12,
            loop_end: 35,
            out_end: 45
        },
        backdrop: false,
        theme: 'light',
        sprite_url: 'https://raw.githubusercontent.com/Correlife/SpriteLoading.js/master/loading.png',
        sprite_url_dark: 'https://raw.githubusercontent.com/Correlife/SpriteLoading.js/master/loading-dark.png'
    }, custom_options);
    var frame = options.frames.start;
    var that = this;
    this.set_finish = false;
    this.finish_callback = false;

    if (options.backdrop) {
        var bd = $('<div class="sprite-loading-backdrop"></div>').appendTo(container)
            .css({
                opacity:0.5,
                backgroundColor:(options.theme === 'dark' ? '#fff' : '#000'),
                width:'100%',
                height:'100%',
                position:'absolute',
                'top':0})
            .hide().fadeIn(200);
    }
    var obj = $('<div class="sprite-loading"></div>').appendTo(container);
    if (obj.parent().css('position') === 'static') {
        obj.parent().css({position: 'relative'});
    }
    obj.css({
        'background': 'url(\'' + (options.theme === 'dark' ? options.sprite_url_dark : options.sprite_url) + '\')',
        'width': options.width + 'px',
        'height': options.height + 'px',
        'position': 'absolute',
        'background-position-x': 0,
        'background-position-y': '-' + options.height + 'px',
        'top': '50%',
        'transform': 'translateY(-50%)',
        '-webkit-transform': 'translateY(-50%)',
        '-ms-transform': 'translateY(-50%)',
        'left': '50%',
        'margin-left': '-' + (options.width / 2) + 'px'
    });

    var intervalID = window.setInterval(function () {
        frame += 1;
        if (frame > options.frames.loop_end) {
            if (that.set_finish === true) {
                if (frame > options.frames.out_end) {
                    clearInterval(intervalID);
                    if (options.backdrop) {
                        bd.fadeOut(200, function(){$(this).remove();});
                    }
                    obj.remove();
                    that.finish_callback();
                }
            } else {
                frame = options.frames.loop_start;
            }
        }
        obj.css('background-position-y', -options.height * (frame - 1));
    }, options.delay);
};

SpriteLoading.prototype.finish = function (callback) {
    this.set_finish = true;
    this.finish_callback = callback;
};
