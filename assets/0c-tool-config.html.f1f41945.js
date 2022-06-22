import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,o,c as r,a as e,b as t,d as l,e as i}from"./app.c6e7f883.js";const c={},d=l(`<h1 id="_0c-\u5F00\u53D1\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_0c-\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a> 0C.\u5F00\u53D1\u73AF\u5883</h1><p>\u5DE5\u6B32\u5584\u5176\u4E8B\uFF0C\u5FC5\u5148\u5229\u5176\u5668\u3002</p><h2 id="_0c-1-java\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#_0c-1-java\u5F00\u53D1" aria-hidden="true">#</a> 0C.1.Java\u5F00\u53D1</h2><p>\u4F7F\u7528<code>IntelliJIdea</code>\u4F5C\u4E3A\u5F00\u53D1<code>IDE</code>\uFF0C\u53EF\u4F7F\u7528<code>code style</code>\u548C<code>live templates</code>\u3002 <code>wings-idea-style.xml</code>\u5728<code>Setting/Editor/Code Style</code>\u5BFC\u5165\u3002</p><p><code>wings-idea-live.xml</code>\u9700\u8981\u624B\u52A8\u653E\u5230<code>$config/templates/</code>\uFF0C\u6CA1\u6709\u5219\u65B0\u5EFA\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> wings
<span class="token assign-left variable">id_config</span><span class="token operator">=~</span>/Library/ApplicationSupport/JetBrains/IntelliJIdea2021.1
<span class="token comment"># \u901A\u8FC7\u590D\u5236\uFF0C\u5907\u4EFD</span>
<span class="token function">cat</span> <span class="token variable">$id_config</span>/templates/wings.xml <span class="token operator">&gt;</span> wings-idea-live.xml
<span class="token function">cat</span> <span class="token variable">$id_config</span>/codestyles/Wings-Idea.xml <span class="token operator">&gt;</span> wings-idea-style.xml
<span class="token comment"># \u901A\u8FC7\u590D\u5236\uFF0C\u8FD8\u539F</span>
<span class="token function">cat</span> wings-idea-live.xml  <span class="token operator">&gt;</span> <span class="token variable">$id_config</span>/templates/wings.xml
<span class="token function">cat</span> wings-idea-style.xml <span class="token operator">&gt;</span> <span class="token variable">$id_config</span>/codestyles/Wings-Idea.xml
<span class="token comment"># \u82E5\u91CD\u65B0\u5BFC\u5165\u5DE5\u7A0B\uFF0C\u6E05\u9664idea\u914D\u7F6E</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> -name <span class="token string">&#39;*.iml&#39;</span> -o -name <span class="token string">&#39;.idea&#39;</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39;\\n&#39;</span> <span class="token string">&#39;\\0&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> -0 <span class="token function">rm</span> -r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5173\u4E8Elive-template\u7684\u4F7F\u7528\uFF0C\u5206\u4E3AInsert\u548CSurround\uFF0C\u5BF9\u5E94\u63D2\u5165\u548C\u7F16\u8F91\uFF0C\u4E00\u822C\u9009\u62E9\u6587\u672C\u65F6\uFF0C <code>Surround... \u2325\u2318J</code>\uFF0C\u65E0\u9009\u62E9\u6587\u672C\u65F6\uFF0C\u4F7F\u7528 <code>Insert... \u2318J</code></p><ul><li>WIN <code>%HOMEPATH%\\.IntelliJIdea2019.2\\config</code></li><li>LIN <code>~/.IntelliJIdea2019.2/config</code></li><li>MAC <code>~/Library/Preferences/IntelliJIdea2019.2</code></li><li>MAC <code>~/Library/ApplicationSupport/JetBrains/IntelliJIdea2021.1</code></li></ul><p>\u53C2\u8003\u8D44\u6599</p>`,9),p={href:"https://www.jetbrains.com/help/idea/sharing-live-templates.html",target:"_blank",rel:"noopener noreferrer"},h=i("sharing-live-templates"),m={href:"https://www.jetbrains.com/help/idea/tuning-the-ide.html#default-dirs",target:"_blank",rel:"noopener noreferrer"},_=i("2020.1 and above versions"),u={href:"https://www.jetbrains.com/help/idea/2019.3/tuning-the-ide.html#default-dirs",target:"_blank",rel:"noopener noreferrer"},g=i("2019.3.x and below versions"),b=l('<p>\u5B89\u88C5\u4EE5\u4E0B\u63D2\u4EF6</p><ul><li>.ignore - \u548C\u7248\u672C\u7BA1\u7406\u4E2Dignore\u6709\u5173\u7684\u3002</li><li>Any2dto - \u652F\u6301jooq, sql\u67E5\u8BE2\u76F4\u63A5\u751F\u6210dto\uFF0C\u51CF\u5C11\u590D\u5236\u548C\u8D4B\u503C</li><li>CheckStyle - \u4EE3\u7801\u8D28\u91CF</li><li>Comments Highlighter - \u6CE8\u91CA\u4E2D\u5212\u91CD\u70B9</li><li>Error Prone Compiler - google\u51FA\u54C1\uFF08java8\u4E0D\u597D\u6574\uFF09</li><li>GenerateAllSetter - alt-enter \u751F\u6210\u5168\u90E8 po.setXxx(&quot;&quot;)</li><li>Git Flow Integration - \u96C6\u6210\u4E86git-flow</li><li>GitToolBox - \u81EA\u52A8 fetch</li><li>Git Commit Guide - gitmoji.dev \u8F85\u52A9</li><li>Grep Console - \u63A7\u5236\u53F0\u7684\u65E5\u5FD7\u5206\u989C\u8272\u663E\u793A\u548C\u8FC7\u6EE4</li><li>Indent Rainbow - \u4F7F\u7F29\u8FDB\u6709\u989C\u8272</li><li>kotlin - \u9ED8\u8BA4\u5B89\u88C5\u4E86</li><li>lombok - IntelliJ Lombok plugin</li><li>MapStruct Support - \u9759\u6001\u5F3A\u7C7B\u578BDTO\u8F6C\u6362\uFF0C\u51CF\u5C11\u590D\u5236\u548C\u8D4B\u503C</li><li>Maven Helper - \u5E2E\u52A9\u7BA1\u7406maven</li><li>Quick File Preview - \u5355\u51FB\u5FEB\u901F\u6D4F\u89C8\u6587\u4EF6</li><li>Rainbow Brackets - \u5F69\u8679\u62EC\u53F7</li><li>Request mapper - \u5FEB\u901F\u67E5\u627E mapping</li><li>Statistic - \u7EDF\u8BA1\u4E00\u4E0B\u81EA\u5DF1\u7684\u4EE3\u7801</li><li>String Manipulation - \u5BF9\u5B57\u7B26\u4E32\u7684\u5404\u79CD\u64CD\u4F5C\u548C\u8F6C\u6362\u3002</li><li>HTTP Client - \u5B98\u65B9\u5BF9<code>*.http</code>\u6587\u4EF6\u683C\u5F0F\u7684\u652F\u6301</li></ul><h2 id="_0c-2-sql\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_0c-2-sql\u5DE5\u5177" aria-hidden="true">#</a> 0C.2.SQL\u5DE5\u5177</h2><ul><li>Mysql Workbench - SQL\u4F18\u5148\u7684\u573A\u666F\uFF0C\u5982DDL\uFF0CAdmin\uFF0C\u6743\u9650\u7B49</li><li>DataGrid - \u6570\u636E\u4F18\u5148\u7684\u573A\u666F\uFF0C\u5982\u67E5\u8BE2\uFF0C\u5C40\u90E8\u5BFC\u51FA\u7B49\u3002</li></ul><h2 id="_0c-3-\u6587\u672C\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_0c-3-\u6587\u672C\u5DE5\u5177" aria-hidden="true">#</a> 0C.3.\u6587\u672C\u5DE5\u5177</h2><ul><li>VsCode - \u524D\u7AEF\uFF0Cmarkdown\u7B49</li><li>Sublime - \u6587\u672C\u5904\u7406</li></ul><h2 id="_0c-4-http\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_0c-4-http\u6D4B\u8BD5" aria-hidden="true">#</a> 0C.4.http\u6D4B\u8BD5</h2><p>\u63A8\u8350\u5728\u6BCF\u4E2A\u5DE5\u7A0Btest\u4E0B\u5EFA\u7ACBidea\u652F\u6301\u7684 <code>*.http</code> \u63A5\u53E3\u63CF\u8FF0\u548C\u6D4B\u8BD5\u811A\u672C\uFF0C\u5B98\u65B9\u6587\u6863\u5982\u4E0B</p>',8),f={href:"https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html",target:"_blank",rel:"noopener noreferrer"},w=i("https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html"),v={href:"https://www.jetbrains.com/help/idea/exploring-http-syntax.html",target:"_blank",rel:"noopener noreferrer"},k=i("https://www.jetbrains.com/help/idea/exploring-http-syntax.html"),x={href:"https://www.jetbrains.com/help/idea/http-response-handling-api-reference.html",target:"_blank",rel:"noopener noreferrer"},I=i("https://www.jetbrains.com/help/idea/http-response-handling-api-reference.html"),j={href:"https://www.jetbrains.com/help/idea/http-client-reference.html",target:"_blank",rel:"noopener noreferrer"},C=i("https://www.jetbrains.com/help/idea/http-client-reference.html"),y={href:"https://www.jetbrains.com/help/idea/http-response-reference.html",target:"_blank",rel:"noopener noreferrer"},S=i("https://www.jetbrains.com/help/idea/http-response-reference.html"),J=e("p",null,"\u4F7F\u7528\u5EFA\u8BAE\u5982\u4E0B",-1),L=l("<li>\u4F7F\u7528<code>*.http</code>\u65F6\uFF0C\u901A\u5E38\u5148\u4ECEchrome\u4E2D\u6293\u53D6 cURL \u547D\u4EE4\uFF0C\u590D\u5236\u8FC7\u6765\u5373\u53EF\u3002</li><li>\u53D8\u91CF<code>{{variable_name}}</code>\uFF0C\u6765\u81EA<code>http-client*.env.json</code>\uFF0C<code>client.global.</code>\u6216\u7CFB\u7EDF\u81EA\u5E26</li><li>\u5904\u7406Response. prepend it with <code>&gt;</code> and enclose it in <code>{%</code> <code>%}</code></li><li>\u5F88\u957F\u7684\u8BF7\u6C42\u6298\u591A\u4E2A\u77ED\u884C. Indent all query string lines but the first one.</li><li>HTTP Response Handler \u76842\u4E2A\u5BF9\u8C61 client \u548C response</li>",5),q={href:"https://www.jetbrains.com/help/idea/http-response-handling-examples.html",target:"_blank",rel:"noopener noreferrer"},T=i("https://www.jetbrains.com/help/idea/http-response-handling-examples.html");function A(B,E){const n=s("ExternalLinkIcon");return o(),r("div",null,[d,e("ul",null,[e("li",null,[e("a",p,[h,t(n)])]),e("li",null,[e("a",m,[_,t(n)])]),e("li",null,[e("a",u,[g,t(n)])])]),b,e("ul",null,[e("li",null,[e("a",f,[w,t(n)])]),e("li",null,[e("a",v,[k,t(n)])]),e("li",null,[e("a",x,[I,t(n)])]),e("li",null,[e("a",j,[C,t(n)])]),e("li",null,[e("a",y,[S,t(n)])])]),J,e("ul",null,[L,e("li",null,[e("a",q,[T,t(n)])])])])}var M=a(c,[["render",A],["__file","0c-tool-config.html.vue"]]);export{M as default};
