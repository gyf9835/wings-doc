import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as c,c as s,a as e,b as i,d as a,e as n}from"./app.c6e7f883.js";var d="/silencer_icon.png";const l={},p=a('<h1 id="_1-\u6C89\u9ED8\u672F\u58EB" tabindex="-1"><a class="header-anchor" href="#_1-\u6C89\u9ED8\u672F\u58EB" aria-hidden="true">#</a> 1.\u6C89\u9ED8\u672F\u58EB</h1><p><img src="'+d+'" alt="silencer" loading="lazy"></p><p>silence fool\uFF0C\u4E00\u5207\u9B54\u6CD5\uFF0C\u906D\u9047\u4E86\u4ED6\uFF0C\u90FD\u5C06\u5F52\u4E8E\u5BC2\u9759\u3002</p><p>\u6700\u5C0F\u5316\u4F9D\u8D56springboot\uFF0C\u63D0\u4F9B\u4EE5\u4E0B\u81EA\u52A8\u914D\u7F6E\u548C\u53E0\u52A0\u80FD\u529B</p><ul><li>\u81EA\u52A8\u52A0\u8F7DSpringBoot\u914D\u7F6E(wings-conf)</li><li>properties\u4E2D\u7684\u76F4\u63A5\u5199\u4E2D\u6587\uFF0C\u4E0D\u9700\u8981unicode\u8F6C\u7801\u3002</li><li>\u81EA\u52A8\u52A0\u8F7Di8n\u914D\u7F6E(wings-i18n)</li><li>\u81EA\u52A8\u52A0\u8F7D<code>**/spring/bean/</code>\uFF0C\u914D\u7F6Econsole logger</li></ul><h2 id="_1-1-\u5C42\u53E0\u548C\u5206\u9694\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5C42\u53E0\u548C\u5206\u9694\u914D\u7F6E" aria-hidden="true">#</a> 1.1.\u5C42\u53E0\u548C\u5206\u9694\u914D\u7F6E</h2><p>wings\u4E2D\u4E3B\u5F20\u6309\u529F\u80FD\u6216\u9879\u76EE\uFF0C\u628Aapplication\u7684\u5927\u914D\u7F6E\uFF0C\u5206\u9694\u6210\u72EC\u7ACB\u7684\u5C0F\u914D\u7F6E\u3002 \u5E76\u4E14\uFF0C\u63D0\u4F9B80%\u60C5\u51B5\u9002\u7528\u7684\u9ED8\u8BA4\u503C\uFF0C\u5229\u7528\u914D\u7F6E\u6587\u4EF6\u52A0\u8F7D\u7684\u4F18\u5148\u7EA7\uFF0C\u5C42\u53E0\u914D\u7F6E\u9879\u3002</p><p>\u4E0ECSS\uFF08\u5C42\u53E0\u6837\u5F0F\u8868\uFF09\u7C7B\u4F3C\uFF0C\u540C\u4E00\u4E2Akey\u7684\u914D\u7F6E\uFF0C\u53EF\u80FD\u5B58\u5728\u591A\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u591A\u4E2A\u503C\uFF0C \u6700\u7EC8\uFF0C\u4EE5\u6700\u9AD8\u4F18\u5148\u7EA7\u7684\u503C\u4F5C\u4E3A\u7CFB\u7EDF\u914D\u7F6E\u503C\u3002</p><h2 id="_1-2-spring\u81EA\u52A8\u88C5\u914D" tabindex="-1"><a class="header-anchor" href="#_1-2-spring\u81EA\u52A8\u88C5\u914D" aria-hidden="true">#</a> 1.2.spring\u81EA\u52A8\u88C5\u914D</h2><p>wings\u4E2D\u7684spring\u547D\u540D\uFF0C\u4E3B\u8981\u96C6\u4E2D\u5728\u4EE5\u4E0B\uFF08\u540E\u7EED\u76EE\u5F55\u7ED3\u6784\u6709\u8BE6\u89E3\uFF09</p><ul><li><code>/wings-conf/</code> \u81EA\u52A8\u52A0\u8F7D\uFF0C\u653E\u7F6E\u62C6\u5206\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6309\u5B57\u6BCD\u987A\u5E8F\u52A0\u8F7D\u548C\u8986\u76D6\u3002</li><li><code>/wings-i18n/</code> \u81EA\u52A8\u52A0\u8F7D\uFF0C\u653E\u7F6E\u62C6\u5206\u7684\u591A\u56FD\u8BED\u7684\u4FE1\u606F\u6587\u4EF6\u3002</li><li><code>*Configuration</code> \u5FC5\u987B\u90FD\u6761\u4EF6\u52A0\u8F7D\uFF0C\u524D\u7F00<code>spring.wings.</code>\uFF0C\u53EF\u4EE5\u5173\u95ED\u3002</li><li><code>**/spring/boot/</code> \u624B\u52A8\u52A0\u8F7D\uFF0Cboot\u6709\u5173\u7684\u914D\u7F6E\uFF0C\u5982<code>spring.factories</code></li><li><code>**/spring/bean/</code> \u81EA\u52A8\u52A0\u8F7D\uFF0C\u6BD4\u5982@ComponentScan\u6307\u5B9A\u3002</li><li><code>**/spring/conf/</code> \u81EA\u52A8\u6216\u624B\u52A8\u52A0\u8F7D\uFF0C\u9700\u8981\u66B4\u9732\u7684properties\u7684\u914D\u7F6E\u3002</li></ul><p>\u4F7F\u7528<code>idea</code>\u5F00\u53D1\u65F6\uFF0C\u4F1A\u6709\u9EC4\u8272\u8B66\u544A\u6216\u63D0\u793A\uFF0C\u4E0D\u5F71\u54CD\u8FD0\u884C\uFF0C\u4F46\u770B\u7740\u788D\u773C</p><ul><li>\u63D0\u793AApplication context not configured for this file\uFF0C \u5728<code>Project Structure</code>/<code>Facets</code>/<code>Spring</code>\u624B\u52A8\u6DFB\u52A0<code>boot/WingsAutoConfiguration</code>\u4E00\u4E2A\u5373\u53EF\u3002</li><li>\u63D0\u793A annotation processing\u7684\u8BBE\u7F6E\uFF0C\u5728<code>Settings</code>/<code>Annotation Processors</code>/<code>Enable annotation processing</code> \u6CE8\u610F\uFF1A\u5728<code>@Configuration</code>\u4E2D\u7684\u5185\u90E8\u7C7B\uFF0C<code>static class</code>\u662F\u6309\u72EC\u7ACB\u7C7B\u5904\u7406\u7684\uFF0C\u4E0D\u53D7\u5916\u5C42\u7EA6\u675F\u3002</li></ul><p>\u5728wings\u5DE5\u7A0B\u4E2D\uFF0C\u4F1A\u5B58\u5728<code>spring-wings-enabled.properties</code>\u914D\u7F6E\uFF0C\u4F5C\u4E3A\u529F\u80FD\u5F00\u5173 \u53EF\u4EE5\u901A\u8FC7\u5C5E\u6027<code>spring.wings.silencer.enabled.verbose=true</code> \u901A\u8FC7\u65E5\u5FD7INFO\u67E5\u770B\u3002</p><h2 id="_1-3-\u914D\u7F6Ebind\u548Cmeta\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#_1-3-\u914D\u7F6Ebind\u548Cmeta\u63D0\u793A" aria-hidden="true">#</a> 1.3.\u914D\u7F6Ebind\u548Cmeta\u63D0\u793A</h2><p>\u914D\u7F6E\u7C7B\uFF0C\u7EDF\u4E00\u4F7F\u7528<code>*Prop</code>\u548C@Data\uFF0C\u7ECF\u8FC7\u914D\u7F6E\u540E\uFF0C\u53EF\u4EE5\u81EA\u52A8\u63D0\u793A\u3002</p><ul><li>\u624B\u52A8\u6DFB\u52A0 additional-spring-configuration-metadata.json</li><li>\u81EA\u52A8\u751F\u6210 spring-configuration-metadata.json</li></ul><p>\u53C2\u8003\u8D44\u6599</p>',18),g={href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#configuration-metadata",target:"_blank",rel:"noopener noreferrer"},h=n("https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#configuration-metadata"),u={href:"https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-Configuration-Binding",target:"_blank",rel:"noopener noreferrer"},_=n("https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-Configuration-Binding"),f={href:"https://github.com/spring-projects/spring-boot/wiki/IDE-binding-features#simple-pojo",target:"_blank",rel:"noopener noreferrer"},b=n("https://github.com/spring-projects/spring-boot/wiki/IDE-binding-features#simple-pojo");function m(w,x){const o=t("ExternalLinkIcon");return c(),s("div",null,[p,e("ul",null,[e("li",null,[e("a",g,[h,i(o)])]),e("li",null,[e("a",u,[_,i(o)])]),e("li",null,[e("a",f,[b,i(o)])])])])}var j=r(l,[["render",m],["__file","index.html.vue"]]);export{j as default};
