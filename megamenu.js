﻿var mql = window.matchMedia('screen and (min-width: 801px)');if (mql.matches){
$(document).ready(function(){var a=$(".mg_menu").offset().top,e=function(){var e=$(window).scrollTop();e>a?$(".mg_menu").addClass(" fixed-nav"):a>e&&$(".mg_menu").addClass("relative-nav").removeClass("fixed-nav")};e(),$(window).scroll(function(){e()})});
(function(e){var t=function(e,t){this.elem=e;this.settings=t;this.mgmenuHtml();this.ajaxcall=null;this.menulist=this.elem.find(".leftmenulist li a");this.menuHelper(this.elem);this.addEvents()};t.prototype={regex:{islabel:new RegExp("/search/label/","g"),issearch:new RegExp("[?&]q=","g"),labelsearch:new RegExp("(//[^/]+)/search/label/([^/?&]+).*[?&]q=([^$&]+)(?:[^$]+)?","g"),label:new RegExp("(//[^/]+)/search/label/([^/?&$]+)","g"),search:new RegExp("(//[^/]+)/search/?[?&]q=(.*)","g")},addEvents:function(){var t=this;this.menulist.hover(function(){if(e(this).data("menuloaded")!=="true"){t.li=e(this);t.url=t.li.attr("href");t.container=t.li.closest("ul").siblings("ul");t.hoverOver()}},function(){t.hoverOut()})},hoverOver:function(){var t=this;this.getAJAXUrl();if(!this.ajaxUrl)return;this.ajaxcall=e.ajax({type:"GET",url:t.ajaxUrl,dataType:"jsonp",data:t.ajaxData,beforeSend:function(){t.showLoader()},success:function(e){t.hideLoader();t.addArrow();t.showPosts(e)},error:function(e){t.showError(e)}})},hoverOut:function(){this.ajaxcall.abort();this.hideLoader()},getAJAXUrl:function(){if(this.url){var e=this;this.ajaxData={alt:"json","max-results":this.settings.postsNumber};this.url.search(this.regex.islabel)!==-1&&this.url.search(this.regex.issearch)!==-1?this.ajaxUrl=this.url.replace(this.regex.labelsearch,function(t,n,r,i){e.ajaxData.q=i;return[n,"/feeds/posts/default/-/",r,"/"].join("")}):this.url.search(this.regex.islabel)!==-1&&this.url.search(this.regex.issearch)===-1?this.ajaxUrl=this.url.replace(this.regex.label,function(t,n,r){delete e.ajaxData.q;return[n,"/feeds/posts/default/-/",r,"/"].join("")}):this.url.search(this.regex.islabel)===-1&&this.url.search(this.regex.issearch)!==-1?this.ajaxUrl=this.url.replace(this.regex.search,function(t,n,r){e.ajaxData.q=r;return[n,"/feeds/posts/default"].join("")}):this.ajaxUrl=!1}else this.ajaxUrl=!1},showLoader:function(){e("<span></span>",{"class":"loading-icon"}).appendTo(this.li.closest("li"))},hideLoader:function(){this.li.closest("li").find("span.loading-icon").remove()},showPosts:function(t){var n=this,r=[],i,s,o;t.feed.openSearch$totalResults.$t>0?e.each(t.feed.entry,function(t,u){i=u.title.$t;e.each(u.link,function(e,t){t.rel==="alternate"?s=t.href:s="#"});o=u.media$thumbnail?u.media$thumbnail.url.replace(/.*?:\/\//g , "//").replace(/\/s72\-c\//,"/s202/"):n.settings.noThumbnail;r.push('<li><span class="thumb-container"><a title="',i,'" href="',s,'"><img alt="',i,'" src="',o,'" width="202" height="202"/><br />',i,"</a></span></li>")}):r.push("<h5>","No posts available.","</h5>");this.container.html(r.join(""));this.menulist.removeData("menuloaded");this.li.data("menuloaded","true")},showError:function(e){if(e.statusText==="error"){this.hideLoader();this.addArrow();this.container.html("<h5>Oops... Could not fetch the blog posts.</h5>")}},addArrow:function(){this.menulist.closest("li").find("span").remove();this.menulist.removeClass("hover-menu");this.li.addClass("hover-menu");e("<span></span>",{"class":"menu-icon"}).appendTo(this.li.closest("li"))},menuHelper:function(t){var n=this;t.find(">li").hover(function(){var t=e(this);t.find("a:first").addClass("hover-menu");var r=e(this).find("ul.leftmenulist li").height()*e(this).find("ul.leftmenulist li").length;t.find("ul.rghtmenulist").css({"min-height":r+"px"});n.requestFirstAjax(t)},function(){e(this).find("a:first").removeClass("hover-menu")})},mgmenuHtml:function(){this.elem.find("ul ul").remove();this.elem.addClass("mgmenuid").find(">li").find("ul:first").addClass("leftmenulist").wrap(e("<div></div>",{"class":this.settings.divClass}));e("ul.leftmenulist").after(e("<ul></ul>",{"class":"rghtmenulist"}))},requestFirstAjax:function(e){e=e.find(".leftmenulist li:first-child a");this.url=e.attr("href");this.container=e.closest("ul").siblings("ul");this.li=e;this.hoverOver()}};e.fn.megaBloggerMenu=function(n){var r={postsNumber:4,divClass:"megasubmenu",postsClass:"rghtmenulist",noThumbnail:"/default.png"},i=e.extend({},r,n);return this.each(function(){var n=new t(e(this),i)})}})(jQuery);
jQuery(document).ready(function(e){e("#mgmenuid").megaBloggerMenu({postsNumber:4,noThumbnail:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAVFBMVEXy8vLy8vL8/Pz6+vrx8fGwsLD29vb///++vr6zs7P4+PjZ2dn+/v709PS2trbq6uru7u7MzMzk5OS5ubnCwsLHx8ff39/o6OjT09Opqam8vLzy8vKFBACEAAAAAnRSTlPy5YB5WPAAAAaHSURBVHhe7M8BEQAwDAOhr4759zkfOXBA14TrjWhk0khERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERETks2cGOo6rOhiWsDHBBEggCSS8/3teh6bbsyvtzlF3dDU5Go8mdZwf7E8mDW2RoWH7fxkS9P9XoCmPD8+Dx7/pSEmfU6IfCT9U+ZjQ/zOjxy36hzelyf8FCC+h0SeA+MmVj+cZ530yq20/KuayO9U9SPsGfwnivUfP1OTADc9+E7MXp3tS5OW9CiWP1yk2Ph1UcXfmutqHnyOugQ0vVaNUUc25+UsjINqNPRknvcGV5i2QVaZFBF8mBiqRCZFgSoWg30Ax9qJOr+BzPQuymgrCI54iUK8IntewlCbax1KRV8EQFbPIxwYnyKVpVHQypXgQELsB0pXmPZCxrilrm/DQembvqdqgj8LIftV6TWuh07PWPfpE0+Gc1XbjdsaDnsk4fdjF98rZ2WDDptogAVTJJoOLzLgigRtwFBC6NMwluFnrI0IHeaV5C8RUnWsaQl7TvDsF815jygGBht2lRRBHOrQrEld9zJTtsaVDRyXxLbp9UdMc1q3PqNw+x7LuydQ9QuPFsrc6nSqWTGgExHTNcnZD+NMW9DQKiKLhkQbamyC7MybuqzEUFmjHbIyZJIuTaoxadekFGDNrpN6RnNs5oHYFmG3fDIoemxjMi0hB11OgeBKnhCShatHU0EHUemr41NgFxp5bQGS66RTqid8DmYMnLnobfTsWaqymkmabzHKwxzHZCMeAsbRNb9BB7KzaWWJXNEK7mqKvtx+kEUupuioaDjKbjtwUx5KGoT1BGqmucUayGvS8HKpI44eeJu1OvQmSmz9BVAcBXG0ehlCUnPjGJUR/5CPnfFinLhBoHKXWLNwCEl4gSDSfw60D5XQ0w8ANUrbHkJcnCALNumvOZsHZxQwCwsMjjf4UEMBgt8jRJgHhhpBs9GGJJaWpTe1XEO7nLxDvF12Ln2xfVo4kDGlfUlQ1PEGIh0tjit1Ur+LsCOSeJkqaTwAx2x7Pda+LWQMpMlVHNRxGYlOd/E8gZrUEzZT9sUauB5s7pdqNDdbFBSRYwmiUWbO/QKA8NTKsGg9k1xPJLNkYNm2O9MYD8QQJHcQJSF6MVDJCCjqJtxI5nYvAVQDU2tPPIGmfAfwRvJKKuIlJWELTsDuFKgW7qqZmHRXVfREQe4Jw3GcFcTj5g03M815M0ptJZ5oWdHsHxAqIbR7SfoKEAWjdjyPXQxfjrA1HPRJA3fOg8wStg+gOstcR3B4WawsQDvvjOcKnNMyLTEct70U1nrIewlr1MFZ9blE8dE1d9g3DmnPY+/rb+nSDDhHwrU2jj+nHpi2lRuTWeTJpLmDQOZ5sJK/Sujp/JcBU/HmM3qsyLxWhIU11OznQw7bOyUxzouZLOoWMdXEErl6bRiQWTTFxTj5RERd8k/x9urU2wDe38QTi+L4zAEbxlCLkUSpiY3q/sIECRRfHqZKjnL/iSAYQ+1WJcCND2Gfv1yTkm1JI8Ih5UIpRNA08KyWRnv853Sd/sIK0LzHWvcLdPyHylnMOFfzNQbCBL0UOeHMQMU/kv798+Ez7BvkG+Qb5BvkGIfjYuOGXB4EpfWwRPH5xEE7Z2vDRX3DwxTvCU7D/woJO8LVBlNO5pu3Pltyh5xuATAYAlDEKfmPGCwh/fZDCrQFPE/BvbmiabgPCcT2OuTHeHARi0DnoodG9QYAWfYjpGX7+NfBuIKbkfIKEpfknh+cNGW8Pgn50+wqM9wIBv9iflhbSKHG9MuPNbvZidc76QH72Q8IC1ntyJ5AGaRmGdQL8J8dFciuQBjQh85Ojdo5OIsFbgTRP5KnhyWGufvzoya1AxAiF5LWuXiQ3AxlT2Ez7sa5eJB5uBTKWoO1mzMXxMr2ZO4EIRxiCTduvHIe9E0jnkKJzCL9yHOFOIJ3jsjuD8B848o1AxilbKfn+HTEl5OP2Hbm28f+Rjmhtf2v7fUDU5P5gNcJNQKIi8ydjxuEWIInxz0bx0OsXB4Gk87F8ZMOhq/raIJ5m/W9s8fS1QZC4LutHttTG+LVBGnpF/iMjILzBb4j+Y/tfe3ZQBAAAwjCM6cC/T2xwu9RB3jVDQT4EAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsiVNpqIcOWF9IMKE6wkAAAAASUVORK5CYII="})});
function addURL(n){$(n).attr("href",function(){return this.href+"?&max-results=5"})};};
if (window.matchMedia("(max-width:800px)").matches){
$(".bemenu ul ul li:odd").addClass("odd"),$(".bemenu ul ul li:even").addClass("even"),$(".bemenu > ul > li > a").click(function(){$(".bemenu li").removeClass("active"),$(this).closest("li").addClass("active");var s=$(this).next();return s.is("ul")&&s.is(":visible")&&($(this).closest("li").removeClass("active"),s.slideUp("normal")),s.is("ul")&&!s.is(":visible")&&($(".bemenu ul ul:visible").slideUp("normal"),s.slideDown("normal")),0==$(this).closest("li").find("ul").children().length}),$(function(){$(".menu_mobile_burger").click(function(){$("#be-menu").css({right:"0"});var s=document.body;s.classList.toggle("flow")}),$(".close-menu").click(function(){$("#be-menu").css({right:"100%"});var s=document.body;s.classList.toggle("flow")})});};