/**
 * @objectExrend
 *
 * @Created by tommy on 14-8-7
 *
 * @note 用于居中元素.
 *
 * @useage
 * $('#sample').widgetcenter(true)
 * 当设置为true将会相对整个页面进行居中
 *
 * @version 0.1.0a
 */

(function($){
    $.fn.widgetcenter = function(widget){
        var ele = this;

        if(widget){
            var clone = this.clone(true);
            this.detach();
            clone.appendTo('body');
            ele=clone;
        }

        var _parent = ele.parent();

        //alert(_parent[0].tagName.toLowerCase());
        if (_parent[0].tagName.toLowerCase() == 'body') {
            ele.css({
                position: 'absolute',
                top: ($(window).height() - ele.outerHeight()) / 2 + $(window).scrollTop() + 'px',
                left: ($(window).width() - ele.outerWidth()) / 2 + $(window).scrollLeft() + 'px'
            })
        } else {
            ele.css({
                position: 'absolute',
                top: (_parent.outerHeight() - ele.outerHeight()) / 2 + 'px',
                left: (_parent.outerWidth() - ele.outerWidth()) / 2 + 'px'
            })
        }
        ele.fadeToggle(1000);
        //alert(this.css('left')+'x'+this.css('top'));
        return ele;
    }
})(jQuery);