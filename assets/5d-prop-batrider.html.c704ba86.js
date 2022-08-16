import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,o,c as d,a as e,b as a,e as r,d as t}from"./app.67fbed9b.js";const n={},h=e("h1",{id:"_5d-\u8759\u8760\u7684\u5C5E\u6027",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5d-\u8759\u8760\u7684\u5C5E\u6027","aria-hidden":"true"},"#"),r(" 5D.\u8759\u8760\u7684\u5C5E\u6027")],-1),l=e("p",null,"\u6709\u5173Batrider\u5FAE\u670D\u52A1\u7684\u8BBE\u7F6E",-1),p=e("h2",{id:"_5d-1-spring-servicecomb-79-properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5d-1-spring-servicecomb-79-properties","aria-hidden":"true"},"#"),r(" 5D.1.spring-servicecomb-79.properties")],-1),v=r("servicecomb "),b={href:"https://servicecomb.apache.org/references/java-chassis/zh_CN/",target:"_blank",rel:"noopener noreferrer"},m=r("\u5B98\u65B9\u6587\u6863"),u=r("\u4E2D\u7684\u914D\u7F6E"),g=e("h3",{id:"servicecomb-service-application",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#servicecomb-service-application","aria-hidden":"true"},"#"),r(" servicecomb.service.application")],-1),_=e("p",null,[e("code",null,"String"),r("="),e("code",null,"${spring.application.name:batrider}"),r(" \u5FAE\u670D\u52A1\u6240\u5C5E\u7684\u5E94\u7528\u540D")],-1),f={id:"servicecomb-service-name",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#servicecomb-service-name","aria-hidden":"true"},"#",-1),w=r(),S={href:"http://servicecomb.service.name",target:"_blank",rel:"noopener noreferrer"},k=r("servicecomb.service.name"),z=t('<p><code>String</code>=<code>${spring.application.name:batrider}</code> \u5FAE\u670D\u52A1\u540D, \u5E94\u786E\u4FDD\u5E94\u7528\u5185\u90E8\u552F\u4E00</p><h3 id="servicecomb-service-version" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-version" aria-hidden="true">#</a> servicecomb.service.version</h3><p><code>String</code>=<code>0.0.1</code> \u5FAE\u670D\u52A1\u7248\u672C\u53F7</p><h3 id="servicecomb-service-zero-config-enabled" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-zero-config-enabled" aria-hidden="true">#</a> servicecomb.service.zero-config.enabled</h3><p><code>Boolean</code>=<code>true</code> \u662F\u5426\u4F7F\u7528zero-config\u670D\u52A1\u4E2D\u5FC3\u529F\u80FD</p><h3 id="servicecomb-service-zero-config-multicast-address" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-zero-config-multicast-address" aria-hidden="true">#</a> servicecomb.service.zero-config.multicast.address</h3><p><code>String</code>=<code>0.0.0.0:6666</code> UDP\u7684\u672C\u5730bind\u5730\u5740</p><h3 id="servicecomb-service-zero-config-multicast-group" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-zero-config-multicast-group" aria-hidden="true">#</a> servicecomb.service.zero-config.multicast.group</h3><p><code>String</code>=<code>225.6.7.8</code> UDP multicast\u591A\u64ADgroup\u5730\u5740</p><h3 id="servicecomb-service-registry-address" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-registry-address" aria-hidden="true">#</a> servicecomb.service.registry.address</h3><p><code>List&lt;String&gt;</code>=<code>http://localhost:30100</code> \u670D\u52A1\u4E2D\u5FC3\u7684\u5730\u5740\u4FE1\u606F\uFF0C\u53EF\u4EE5\u914D\u7F6E\u591A\u4E2A\uFF0C\u7528\u9017\u53F7\u5206\u9694</p><h3 id="servicecomb-rest-address" tabindex="-1"><a class="header-anchor" href="#servicecomb-rest-address" aria-hidden="true">#</a> servicecomb.rest.address</h3><p><code>String</code>=<code>${server.address:localhost}:${server.port}</code> \u670D\u52A1\u76D1\u542C\u5730\u5740\uFF0C\u5FC5\u987B\u914D\u7F6E\u4E3A\u4E0Eweb\u5BB9\u5668\u76D1\u542C\u76F8\u540C</p><h3 id="servicecomb-rest-servlet-urlpattern" tabindex="-1"><a class="header-anchor" href="#servicecomb-rest-servlet-urlpattern" aria-hidden="true">#</a> servicecomb.rest.servlet.urlPattern</h3><p><code>String</code>=<code>/servcomber/*</code> \u4E0EspringMvc\u540C\u65F6\u5B58\u5728\u8DEF\u5F84</p><h3 id="server-servlet-path" tabindex="-1"><a class="header-anchor" href="#server-servlet-path" aria-hidden="true">#</a> server.servlet.path</h3><p><code>String</code>=<code>/</code> SpringMvc\u9ED8\u8BA4\u7684\u8DEF\u5F84\uFF0C\u51B2\u7A81\u65F6\u8BBE\u7F6E\uFF0C\u63A8\u8350<code>/mvc/</code></p><h3 id="servicecomb-provider-rest-scanrestcontroller" tabindex="-1"><a class="header-anchor" href="#servicecomb-provider-rest-scanrestcontroller" aria-hidden="true">#</a> servicecomb.provider.rest.scanRestController</h3><p><code>Boolean</code>=<code>false</code> \u660E\u786E\u533A\u5206RestController\u548C@RestSchma</p><h3 id="servicecomb-handler-chain-consumer-default" tabindex="-1"><a class="header-anchor" href="#servicecomb-handler-chain-consumer-default" aria-hidden="true">#</a> servicecomb.handler.chain.Consumer.default</h3><p><code>List&lt;String&gt;</code>=<code>loadbalance, auth-consumer</code> \u6D88\u8D39\u8005\u9ED8\u8BA4\u5904\u7406\u94FE</p><h3 id="servicecomb-handler-chain-provider-default" tabindex="-1"><a class="header-anchor" href="#servicecomb-handler-chain-provider-default" aria-hidden="true">#</a> servicecomb.handler.chain.Provider.default</h3><p><code>List&lt;String&gt;</code>=<code>auth9-provider</code> \u63D0\u4F9B\u8005\u9ED8\u8BA4\u5904\u7406\u94FE</p><h2 id="_5d-2-wings-servicecomb-79-properties" tabindex="-1"><a class="header-anchor" href="#_5d-2-wings-servicecomb-79-properties" aria-hidden="true">#</a> 5D.2.wings-servicecomb-79.properties</h2><h3 id="wings-batrider-handler-auth-skip-schema" tabindex="-1"><a class="header-anchor" href="#wings-batrider-handler-auth-skip-schema" aria-hidden="true">#</a> wings.batrider.handler.auth-skip-schema</h3><p><code>Set&lt;String&gt;</code>=<code>scb-discovery</code> \u4E0D\u9700\u8981\u9A8C\u8BC1\u7684schemaId</p><h2 id="_5d-3-wings-warlock-security-79-properties" tabindex="-1"><a class="header-anchor" href="#_5d-3-wings-warlock-security-79-properties" aria-hidden="true">#</a> 5D.3.wings-warlock-security-79.properties</h2><h3 id="wings-warlock-security-web-ignore" tabindex="-1"><a class="header-anchor" href="#wings-warlock-security-web-ignore" aria-hidden="true">#</a> wings.warlock.security.web-ignore</h3><p><code>Map&lt;String, String&gt;</code>\u7C7B\u578B\uFF0C<code>servicecomb</code>=<code>/servcomber/**</code> RestSchema\u7684URL\u4E0D\u9700\u8981serverlet\u5904\u7406</p>',29);function y(B,D){const c=s("ExternalLinkIcon");return o(),d("div",null,[h,l,p,e("p",null,[v,e("a",b,[m,a(c)]),u]),g,_,e("h3",f,[x,w,e("a",S,[k,a(c)])]),z])}var N=i(n,[["render",y],["__file","5d-prop-batrider.html.vue"]]);export{N as default};
