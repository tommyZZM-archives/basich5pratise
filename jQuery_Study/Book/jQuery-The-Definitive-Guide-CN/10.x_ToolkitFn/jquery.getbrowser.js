/**
 * @GlobalExrend
 *
 * @Created by tommy on 14-8-5.
 *
 * @note
 * 该方法只需要调用一次,请尽量不要重复调用该方法
 *
 * @useage
 * var browser = $.getbrowser();
 * browser.name;
 * browser.version;
 *
 * @version 0.1.0a
 */

jQuery.extend({
    //browsercontext:{},
    getbrowser:function(){
        var useragent = navigator.userAgent.toLowerCase();

        var b_info = judegbrowser(useragent);

        var b_name = /^\w*/i.exec(b_info._info);
        var b_version = /\d*\.\d*/i.exec(b_info._info);
        //var b_prefix =  b_info._prefix;

        function judegbrowser(context) {
            /** Sample Context on Maxthon Mac
             * mozilla/5.0 (macintosh; intel mac os x 10_7_5)
             * applewebkit/537.22 (khtml, like gecko)
             * chrome/25.0.1364.99
             * safari/537.22
             **/

            var sg_IE = /msie\s\d*\.\d*/;
            var sg_IE11 = /rv:\d*\.\d*/;
            var sg_Firefox = /firefox\/\d*\.\d*/;
            var sg_Opera = /opera\/\d*\.\d*/;

            var sg_webkit = /webkit\/\d*\.\d*/;
            var sg_chrome = /chrome\/\d*\.\d*/;
            var sg_safari = /safari\/\d*\.\d*/;

            var sg_maxthon= /maxthon\/\d*\.\d*/;
            //var sg_qqbrowser = /QQBrowser\/\d*\.\d*/;

            var _info = 'unknow/0.0';//+"\n"+context;
            //var _prefix = '';

            if(sg_IE.test(context)){
                _info= "ie/"+/\d*\.\d*/i.exec(sg_IE.exec(context)[0]);
                //_prefix = '-ms-'
            }
            if(sg_IE11.test(context)){
                _info= "ie/"+/\d*\.\d*/i.exec(sg_IE11.exec(context)[0]);
            }
            if(sg_Firefox.test(context)){
                _info= sg_Firefox.exec(context)[0];
                //_prefix = '-moz-'
            }
            if(sg_Opera.test()){
                _info= sg_Opera.exec(context);
                //_prefix = '-o-'
            }
            if(sg_webkit.test(context)){
                _info= sg_webkit.exec(context)[0];
                //_prefix = '-webkit-'

                if(sg_safari.test(context)){
                    _info= sg_safari.exec(context)[0];
                    if(sg_chrome.test(context)){
                        _info= sg_chrome.exec(context)[0];
                        if(sg_maxthon.test(context)){
                            _info= sg_maxthon.exec(context)[0];
                        }
                    }
                }
            }

            return {
                _info:_info
                //,_prefix:_prefix
            };
        }

        return {
            name:b_name
            ,version:b_version
            ,context:useragent
            //,prefix:b_prefix
        };
    }
});

/*$(function(){
    $.browsercontext = $.getbrowser();
});*/


