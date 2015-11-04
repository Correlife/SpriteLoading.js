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
        theme: 'light',
        sprite_url: 'https://correlife.org/img/loading.png',
        sprite_url_dark: 'https://correlife.org/img/loading-dark.png'
    }, custom_options);
    var frame = options.frames.start;
    var that = this;
    this.set_finish = false;
    this.finish_callback = false;

    var obj = $('<div class="sprite-loading"></div>').appendTo(container);
    obj.css({
        'background': 'url(\'' + (options.theme === 'dark' ? options.sprite_url_dark : options.sprite_url) + '\')',
        'width': options.width + 'px',
        'height': options.height + 'px',
        'position': 'relative',
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
