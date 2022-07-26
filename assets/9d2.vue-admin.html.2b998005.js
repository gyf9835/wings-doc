import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as d,c as s,a as e,b as t,e as o,d as r}from"./app.1ba7ab3d.js";const l={},c=e("h1",{id:"_9d2-vueadmin\u7BA1\u7406\u7AEF",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_9d2-vueadmin\u7BA1\u7406\u7AEF","aria-hidden":"true"},"#"),o(" 9D2.VueAdmin\u7BA1\u7406\u7AEF")],-1),p=e("p",null,"\u7BA1\u7406\u7AEF winx-admin \u6709\u5BF9\u4E8E\u7684SPA\u9875\u9762\uFF0C\u5176\u6280\u672F\u6808\u662F Vue3+Ts+ElementPlus",-1),_={href:"https://github.com/trydofor/pro.fessional.vue-admin-starter",target:"_blank",rel:"noopener noreferrer"},h=o("https://github.com/trydofor/pro.fessional.vue-admin-starter"),u={href:"https://gitee.com/trydofor/pro.fessional.vue-admin-starter",target:"_blank",rel:"noopener noreferrer"},m=o("https://gitee.com/trydofor/pro.fessional.vue-admin-starter"),g=r('<p>\u8BBE\u7F6E<code>debug=true</code>\u53EF\u83B7\u5F97\u66F4\u8BE6\u7EC6\u7684\u8FD0\u884C\u4FE1\u606F\u3002</p><h2 id="_9d2-1-\u542F\u52A8\u7BA1\u7406\u7AEF" tabindex="-1"><a class="header-anchor" href="#_9d2-1-\u542F\u52A8\u7BA1\u7406\u7AEF" aria-hidden="true">#</a> 9D2.1.\u542F\u52A8\u7BA1\u7406\u7AEF</h2><p>\u76F4\u63A5\u542F\u52A8 WinxAdminApplication \u5373\u53EF\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u5185\u5B58\u7528\u6237\uFF0CH2\u5185\u5B58\u6570\u636E\u5E93\u3002</p><p>\u767B\u5F55\u53CA\u6743\u9650\u914D\u7F6E\uFF0C\u7531<code>wings.warlock.security</code>\u7684<code>mem-user</code>\u548C<code>mem-auth</code>\u8BBE\u7F6E\u3002</p><ul><li><code>winx-admin@fessional.pro</code> \u4E3ASPA\u7BA1\u7406\u7AEF\u767B\u5F55\u7528\u6237</li><li><code>boot-admin-client</code>\u548C<code>boot-admin-server</code>\u4E3Aspring-boot-admin\u7528\u6237</li><li>\u5BC6\u7801\u9ED8\u8BA4\u4E3A<code>$DING_TALK_TOKEN</code>\u73AF\u5883\u53D8\u91CF\uFF0C\u5426\u5219\u4E3A</li><li><code>!!!YOU_MUST_USE_STRONG_PASSWORD_HERE!!!</code></li></ul><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0CH2\u6570\u636E\u5E93\u4EC5\u4F9B\u6F14\u793A\uFF0C\u5168\u90E8\u529F\u80FD\u9700\u8981\u4F7F\u7528mysql\u6570\u636E\u5E93\u3002\u6B63\u5E38\u542F\u52A8admin\u540E\uFF0C \u53EF\u4EE5\u901A\u8FC7Swagger\u8FDB\u884C\u7B80\u5355\u7684Api\u6D4B\u8BD5\u3002\u6709\u6743\u9650\u7684\u63A5\u53E3\u9700\u8981\u9996\u5148\u767B\u5F55\u3002</p>',6),f={href:"http://127.0.0.1:8091/swagger-ui/index.html",target:"_blank",rel:"noopener noreferrer"},b=o("http://127.0.0.1:8091/swagger-ui/index.html"),v=e("h2",{id:"_9d2-2-\u76D1\u63A7\u53CA\u63A5\u53E3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_9d2-2-\u76D1\u63A7\u53CA\u63A5\u53E3","aria-hidden":"true"},"#"),o(" 9D2.2.\u76D1\u63A7\u53CA\u63A5\u53E3")],-1),w=e("p",null,"\u542F\u52A8 WinxDevopsApplication \u53EF\u4EE5\u901A\u8FC7\u7BA1\u7406springboot\u5E94\u7528\u3002",-1),x=o("\u4EE5"),k=e("code",null,"boot-admin-server",-1),A=o(" \u767B\u5F55 "),S={href:"http://localhost:8093/login",target:"_blank",rel:"noopener noreferrer"},y=o("http://localhost:8093/login"),E=r('<p>\u5982\u679C\u767B\u5F55\u6216\u6743\u9650\u5931\u8D25\uFF0C\u9700\u8981\u68C0\u67E5\u4EE5\u4E0B2\u4E2A\u53C2\u6570\u662F\u5426\u88AB\u4FEE\u6539\u8FC7\u3002</p><ul><li>spring.boot.admin.server.enabled=true</li><li>wings.warlock.security.login-forward=false</li><li>wings.warlock.security.logout-success-body=</li></ul><p>\u56E0wings\u4EE5\u5047\u7684PostMapping\u4E3Alogin\u751F\u6210Swagger\u6587\u6863\uFF0C\u8FD9\u548CSpringMvc\u7684 RequestMappingInfoHandlerMapping\u5904\u7406\u673A\u5236\u4F1A\u51B2\u7A81\uFF0C\u9700\u6C42\u786E\u4FDD\u6392\u5E8F\u65F6\uFF0C AdminControllerHandlerMapping\u5728RequestMappingHandlerMapping\u524D\u9762\u3002</p><p>\u82E5\u6709login/out\u7684url\u51B2\u7A81\uFF0C\u53EF\u8BBE\u7F6E\u5173\u95EDSwagger\u6587\u6863\u529F\u80FD\u3002</p><p><code>spring.wings.warlock.enabled.controller-proc</code>=<code>false</code></p><h2 id="_9d2-3-\u5355\u9875\u7BA1\u7406\u7AEF" tabindex="-1"><a class="header-anchor" href="#_9d2-3-\u5355\u9875\u7BA1\u7406\u7AEF" aria-hidden="true">#</a> 9D2.3.\u5355\u9875\u7BA1\u7406\u7AEF</h2><p>\u5C31\u8FD1\u514B\u9686 vue-admin-starter\uFF0C\u7136\u540E\u8FDB\u5165\u5DE5\u7A0B\u76EE\u5F55\uFF0C\u6839\u636EReadme\u6267\u884C\u547D\u4EE4\u3002 \u9ED8\u8BA4\u73AF\u5883\uFF0CNode16\uFF0Cpnpm7\uFF1B\u4E3B\u8981\u6846\u67B6 Ts4\uFF0CVue3\uFF0CElementPlus2\uFF0CVueI18n9\u3002</p><p>\u70B9\u51FB\u3010ForTest\u3011\u53EF\u4EE5\u4E0D\u767B\u5F55\u6F14\u793A\uFF0C\u6216\u914D\u5408WinxAdmin\u540E\u53F0\uFF0C\u53EF\u767B\u5F55\u6F14\u793A\u6743\u9650\u7B49\u529F\u80FD\u3002</p>',8);function M(N,T){const n=a("ExternalLinkIcon");return d(),s("div",null,[c,p,e("ul",null,[e("li",null,[e("a",_,[h,t(n)])]),e("li",null,[e("a",u,[m,t(n)])])]),g,e("p",null,[e("a",f,[b,t(n)])]),v,w,e("p",null,[x,k,A,e("a",S,[y,t(n)])]),E])}var H=i(l,[["render",M],["__file","9d2.vue-admin.html.vue"]]);export{H as default};
