import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as r,c as p,a as e,b as s,w as i,d as o,e as n}from"./app.c6e7f883.js";var d="/faceless_icon.png";const m={},u=o('<h1 id="_2-\u865A\u7A7A\u5047\u9762" tabindex="-1"><a class="header-anchor" href="#_2-\u865A\u7A7A\u5047\u9762" aria-hidden="true">#</a> 2.\u865A\u7A7A\u5047\u9762</h1><p><img src="'+d+'" alt="faceless_void" loading="lazy"></p><p><code>Void</code>\uFF0CJ8\u8138, <code>public static void main</code><br> \u4ED6\u662F\u6765\u81EA\u8D85\u7EF4\u89C6\u754C\u7684\u4E00\u540D\u8BBF\u5BA2\uFF0C\u4E00\u4E2A\u65F6\u95F4\u4E4B\u5916\u7684\u5883\u57DF\u3002</p><p>\u53EF\u5BF9MySql\u7CFB(mysql\u53CA\u5206\u652F,h2)\u505ASharding\uFF0C\u8868\u7ED3\u6784\u548C\u6570\u636E\u505A\u7248\u672C\u7BA1\u7406\u3002</p><ul><li>\u53EF\u5207\u6362\u7684\u5206\u8868\u5206\u5E93\u529F\u80FD(ShardingJdbc/PlainDataSource)</li><li>\u9AD8\u6548\u9012\u589E\u975E\u8FDE\u7EED\u7684\u5206\u5E03\u5F0F\u4E3B\u952E(LightId)</li><li>\u4ECE\u6570\u636E\u5E93\u81EA\u52A8\u751F\u6210enum\u548Ci18n\u4EE3\u7801, constantEnum,i18nEnum</li><li>\u8F7B\u91CFSCHEMA\u7248\u672C\u7BA1\u7406(fly-wave @flywave)</li><li>DATA\u7248\u672C\u7BA1\u7406\u548C\u8FFD\u8E2A(journal/$log @flywave)</li><li>\u5168\u5907\u4EFDdump\u73B0\u6709\u6570\u636E\u5E93\u7684\u8868\u7ED3\u6784\u548C\u8BB0\u5F55(@flywave)</li><li>\u4ECE\u6570\u636E\u5E93\u81EA\u52A8\u751F\u6210jooq\u4EE3\u7801\uFF0Cpojo, table, dao (@jooq)</li></ul><h2 id="_2-1-\u98DE\u6CE2-flywave-\u662F\u4E00\u4E2A\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#_2-1-\u98DE\u6CE2-flywave-\u662F\u4E00\u4E2A\u5B9E\u8DF5" aria-hidden="true">#</a> 2.1.\u98DE\u6CE2(flywave)\u662F\u4E00\u4E2A\u5B9E\u8DF5</h2><p>\u5DE5\u7A0B\u5B9E\u9645\u4E2D\uFF0C\u6211\u4EEC\u54CD\u5E94\u53D8\u5316\uFF0C\u5E94\u5F53\u53D8\u66F4\uFF0C\u90FD\u6709\u6210\u719F\u7684\u5DE5\u5177\uFF0C\u6E90\u4EE3\u7801\u7531git\u7BA1\u7406\uFF0C\u4EFB\u52A1\u7531jira\u7BA1\u7406\uFF0C \u90A3\u4E48\u9759\u6001\u7684\u8868\u7ED3\u6784\u53D8\u66F4\uFF0C\u8FD0\u884C\u65F6\u7684\u6570\u636E\u53D8\u66F4\uFF0C\u6211\u4EEC\u600E\u4E48\u7BA1\u7406\u548C\u8BB0\u5F55\uFF0C\u8DDF\u8E2A\u548C\u8C03\u67E5\uFF0C\u5206\u652F\u548C\u56DE\u6EDA\u5462\uFF1F</p><ul><li>\u9879\u76EE\u4ECE\u96F6\u5F00\u59CB\uFF0C\u9700\u6C42\u9010\u6E10\u6D6E\u73B0\uFF0C\u5982\u679C\u7BA1\u7406\u6BCF\u5468\u8FED\u4EE3\u4E2D\u7684\u5B57\u6BB5\u65B0\u589E\uFF0C\u5E9F\u5F03\u548C\u4FEE\u6539</li><li>local, develop, product\u7684\u4EE3\u7801\u5E94\u8BE5\u5BF9\u5E94\u54EA\u4E2Aschema\u548Cdata</li><li>\u7EBF\u4E0A\u4E00\u4E2A\u8BA2\u5355\u6570\u636E\u9519\u8BEF\uFF0C\u7531\u54EA\u4E2Aeven\u5F15\u8D77\uFF0C\u540C\u4E00even\u90FD\u66F4\u65B0\u4E86\u54EA\u4E9B\u6761\u6570\u636E</li><li>sql\u641E\u9519where\uFF0C\u53D1\u73B0\u65F6\u5DF2\u665A\uFF0C\u5982\u4F55\u786E\u8BA4\u53D7\u5F71\u54CD\u6570\u636E\uFF0C\u5FEB\u901F\u6062\u590D\u5230\u66F4\u65B0\u524D</li><li>\u9879\u76EE\u4E00\u70B9\u70B9\u53D8\u5927\uFF0C\u4ECE\u5355\u5E93\u5355\u8868\uFF0C\u5E73\u6ED1\u7684\u8FC7\u5EA6\u5230\uFF0C\u8BFB\u5199\u5206\u79BB\uFF0C\u5206\u8868\u5206\u5E93</li><li>\u9700\u8981\u79BB\u7EBF\u529F\u80FD\uFF0C\u540C\u6837\u4EE3\u7801\u53EF\u4EE5\u8DD1\u672C\u5730h2database\uFF0C\u4E91\u7AEFmysql</li></ul>',8),h=n("\u5177\u4F53\u5185\u5BB9\uFF0C\u79FB\u6B65\u5230\u5B50\u5DE5\u7A0B"),v=n("\u65F6\u95F4\u7ED3\u754C(flywave)"),_=o('<h2 id="_2-2-\u5F3A\u7C7B\u578B-jooq-\u6570\u636E\u5E93\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5F3A\u7C7B\u578B-jooq-\u6570\u636E\u5E93\u64CD\u4F5C" aria-hidden="true">#</a> 2.2.\u5F3A\u7C7B\u578B(jooq)\u6570\u636E\u5E93\u64CD\u4F5C</h2><p>\u63A8\u8350\u4F7F\u7528SqlMapping\uFF0C\u56E0\u4E3AORM\u592A\u91CD\u4E86\uFF0C\u5DE5\u7A0B\u5185\u4F7F\u7528Jooq\u548CJdbcTemplate</p><p>MyBatis\u867D\u662F\u5927\u90E8\u5206\u9879\u76EE\u7684\u9996\u9009\uFF0C\u56FA\u6709\u5176\u4F18\u79C0\u4E4B\u5904\uFF0C\u4F46\u5F00\u53D1\u4EBA\u5458\u7684\u61D2\u60F0\u6216\u7EA6\u675F\u529B\u91CF\u7684\u4E0D\u8DB3\uFF0C \u4F7F\u5F97\u9879\u76EE\u4E0D\u9AD8\u6548\uFF0C\u5076\u5C14\u5F88\u96BE\u7EF4\u62A4\uFF0C\u9879\u76EE\u4E2D\u5BB9\u6613\u8513\u751F\u51FA\u4EE5\u4E0B\u95EE\u9898\u3002</p><ul><li>\u7ECF\u5E38\u88AB <code>select *</code>\uFF0C\u5E26\u6709\u5927\u91CF\u65E0\u7528\u4FE1\u606F\u3002</li><li>\u5F88\u5BB9\u6613\u5199\u51FA\u590D\u6742\u7684\u5927SQL\uFF0C\u4F7F\u5F97\u670D\u52A1\u96BE\u4EE5\u62C6\u5206\u3002</li><li>\u5B57\u7B26\u4E32\u53CA\u5F31\u7C7B\u578B\uFF0CIDE\u7684\u7737\u987E\u6709\u9650\u3002</li></ul><p>\u4F7F\u7528Jooq\uFF0C\u5F3A\u7C7B\u578B\uFF0C\u7F16\u7A0B\u9AD8\u4E8E\u914D\u7F6E\uFF0C\u5E76\u4E14SQL\u53CB\u597D\uFF0C\u53C8\u6070\u597D\u6709\u9650\u5236\u80FD\u529B\u7684\u80FD\u529B\u3002</p>',5),k=n("\u5177\u4F53\u5185\u5BB9\uFF0C\u79FB\u6B65\u5230\u5B50\u5DE5\u7A0B"),f=n("\u65F6\u95F4\u6F2B\u6E38(jooq)"),b=o('<h2 id="_2-3-\u6570\u636E\u81A8\u80C0\u540E\u7684\u5206\u8868\u5206\u5E93-shard" tabindex="-1"><a class="header-anchor" href="#_2-3-\u6570\u636E\u81A8\u80C0\u540E\u7684\u5206\u8868\u5206\u5E93-shard" aria-hidden="true">#</a> 2.3.\u6570\u636E\u81A8\u80C0\u540E\u7684\u5206\u8868\u5206\u5E93(shard)</h2><p>\u6709\u65F6\u5019\u9700\u8981\u4FDD\u7559\u5206\u8868\u5206\u5E93\u7684\u80FD\u529B\uFF0C\u4F46\u5F53\u524D\u8FD8\u4E0D\u9700\u8981\u5206\u3002\u6240\u4EE5\uFF0C</p><ul><li>\u5728\u53EA\u6709\u4E00\u4E2A<code>DataSource</code>\u5E76\u4E14\u6CA1\u6709\u5206\u8868\u914D\u7F6E\u65F6\uFF0C\u66B4\u9732\u666E\u901A\u6570\u636E\u6E90\uFF0C</li><li>\u6709\u5206\u8868\u5206\u5E93\u9700\u8981\u65F6\uFF0C\u66B4\u9732<code>Sharding</code>\u6570\u636E\u6E90\u3002</li><li>\u6240\u6709\u666E\u901A\u6570\u636E\u6E90\u5728<code>FacelessDataSources</code>\u4E2D\u83B7\u5F97\u3002</li></ul>',3),g=n("\u7528ShardingSphere\u5B9E\u73B0\uFF0C\u5177\u4F53\u5185\u5BB9\uFF0C\u79FB\u6B65\u5230\u5B50\u5DE5\u7A0B"),T=n("\u65F6\u95F4\u81A8\u80C0(shard)"),y=n("\u6570\u636E\u5E93\u8FD0\u7EF4\u5E94\u8BE5\u4F7F\u7528\u5176\u4ED6\u5DE5\u5177\u94FE\uFF0C\u5982"),E={href:"https://gitee.com/trydofor/godbart",target:"_blank",rel:"noopener noreferrer"},w=n("godbart"),q=n("\u7531\u4E13\u4E1ADBA\u6267\u884C\u3002"),S=e("h2",{id:"_2-4-\u5206\u5E03\u5F0F\u4E3B\u952E-lightid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-4-\u5206\u5E03\u5F0F\u4E3B\u952E-lightid","aria-hidden":"true"},"#"),n(" 2.4.\u5206\u5E03\u5F0F\u4E3B\u952E(LightId)")],-1),j=n("\u5206\u5E03\u5F0F\u4E3B\u952E\u6709"),A=e("code",null,"snowflake",-1),z=n("\u65B9\u6848\u53EF\u9009\uFF0C\u4F46"),I=e("code",null,"LightId",-1),C=n("\u652F\u6301CRC8\u505A\u4F2A\u968F\u673A\u7F16\u7801\u4F7F\u7528\u3002 \u53C2\u8003"),L={href:"https://gitee.com/trydofor/pro.fessional.mirana",target:"_blank",rel:"noopener noreferrer"},M=n("pro.fessioinal.mirana"),x=n("\u9879\u76EE\u3002"),D=o('<p>\u5B9E\u73B0\u4E86\u57FA\u4E8EJDBC\u7684LightId\uFF0C\u5728Jooq\u751F\u6210pojo\u65F6\uFF0C\u81EA\u52A8\u7EE7\u627F<code>LightIdAware</code>\uFF0C\u53EF\u4EE5\u5F53\u4F5Ckey\u4F7F\u7528\u3002 \u5177\u4F53\u7EC6\u8282\u53C2\u8003<code>LightIdService</code>\u7684\u5B9E\u73B0\u3002</p><h2 id="_2-5-\u6570\u636E\u5E93enum\u7C7B\u548C\u591A\u56FD\u8BED" tabindex="-1"><a class="header-anchor" href="#_2-5-\u6570\u636E\u5E93enum\u7C7B\u548C\u591A\u56FD\u8BED" aria-hidden="true">#</a> 2.5.\u6570\u636E\u5E93Enum\u7C7B\u548C\u591A\u56FD\u8BED</h2><p>schema\u7248\u672C2019_0521_01\uFF0C\u5B9A\u4E49\u4E86enum\u548Ci18n\u8868\uFF0C\u5206\u522B\u5B9A\u4E49\u4E1A\u52A1\u7EA7\u679A\u4E3Ecode\uFF0C\u5982\u72B6\u6001\uFF0C \u53EF\u4EE5\u4F7F\u7528<code>ConstantEnumGenerate</code>\u81EA\u52A8\u751F\u6210java\u7C7B\uFF0C\u4FDD\u6301db\u548Cjava\u4EE3\u7801\u7684\u4E00\u81F4\u3002</p><p>i18n\u53EF\u4EE5\u4F7F\u7528CombinableMessageSource\u52A8\u6001\u6DFB\u52A0\uFF0C\u5904\u7406service\u5185\u6D88\u606F\u7684\u591A\u56FD\u8BED\u3002</p><h2 id="_2-6-\u4E8B\u4EF6\u670D\u52A1eventservice" tabindex="-1"><a class="header-anchor" href="#_2-6-\u4E8B\u4EF6\u670D\u52A1eventservice" aria-hidden="true">#</a> 2.6.\u4E8B\u4EF6\u670D\u52A1EventService</h2><p>\u5355\u8FDB\u7A0B\u7684\u5F02\u6B65\u548C\u89E3\u8026\uFF0Cguava\u7684EventBus\u548CSpring\u7684Event\u90FD\u53EF\u4EE5\u80DC\u4EFB\u3002 \u4E3A\u5355Jvm\uFF0C\u591AJvm\u63D0\u9AD8\u4E00\u4E2A\u57FA\u4E8E\u6570\u636E\u5E93\u7684Event\u670D\u52A1\uFF0C\u4E3B\u8981\u7528\u6765\u3002</p><ul><li>the event should extend ApplicationEvent</li><li>the publisher should inject an ApplicationEventPublisher object</li><li>the listener should implement the ApplicationListener interface</li><li>@EventListener \u548C @TransactionalEventListener</li></ul><p>\u5BF9\u5E94\u7EBF\u7A0B\u6C60\u76F4\u63A5\u4F20\u9012\u4E0A\u4E0B\u6587\uFF0C\u53EF\u4F7F\u7528</p>',8),Z={href:"https://github.com/alibaba/transmittable-thread-local",target:"_blank",rel:"noopener noreferrer"},B=n("https://github.com/alibaba/transmittable-thread-local"),U=o(`<h2 id="_2-7-\u65E5\u65F6\u96F6\u503C\u548C\u65F6\u533A" tabindex="-1"><a class="header-anchor" href="#_2-7-\u65E5\u65F6\u96F6\u503C\u548C\u65F6\u533A" aria-hidden="true">#</a> 2.7.\u65E5\u65F6\u96F6\u503C\u548C\u65F6\u533A</h2><p>\u6267\u884C\u73AF\u5883\u548C\u6570\u636E\u5E93\u8981\u5728\u540C\u4E00\u65F6\u533A\uFF0C\u5426\u5219jooq\u548Cjdbc\u5728\u4EE5\u4E0B\u8FC7\u7A0B\u4F1A\u81EA\u52A8\u8F6C\u6362\u65F6\u533A\uFF0C\u5F15\u53D1\u95EE\u9898\u3002</p><p>\u5982\u679C\u670D\u52A1\u5668\u548C\u6267\u884C\u73AF\u5883\u65F6\u533A\u4E0D\u4E00\u81F4\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u534F\u8C03\u3002</p><ul><li>\u901A\u8FC7wings\u7684\u53C2\u6570\u8BBE\u7F6E\u65F6\u533A <code>wings.silencer.i18n.zoneid=Asia/Shanghai</code></li><li>java\u7684\u542F\u52A8\u53C2\u6570\uFF0C <code>-Duser.timezone=Asia/Shanghai</code></li><li>mysql\u7684jdbc\u7684url\u53C2\u6570\uFF0C <code>connectionTimeZone=%2B08:00&amp;forceConnectionTimeZoneToSession=true</code></li><li>java\u7684\u4EE3\u7801\u53C2\u6570\uFF0C <code>TimeZone.setDefault(TimeZone.getTimeZone(&quot;Asia/Shanghai&quot;));</code></li></ul><p>\u5728\u6570\u636E\u5E93\u548Cjava\u914D\u7F6E\u4E0A\uFF0C\u9700\u8981\u7EDF\u4E00\u65F6\u533A\u548Cdev\u72B6\u6001\u4E0B\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u4E00\u822C\u56E2\u961F\u4E00\u81F4\u3002</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">wings.silencer.i18n.zoneid</span><span class="token punctuation">=</span><span class="token value attr-value">Asia/Shanghai</span>
<span class="token comment"># \u5E38\u7528jdbc\u53C2\u6570</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/wings_example\\
  ?autoReconnect=true&amp;useSSL=false\\
  &amp;useUnicode=true&amp;characterEncoding=UTF-8\\
  &amp;connectionTimeZone=Asia/Shanghai</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F15\u53D1\u95EE\u9898\u7684\u539F\u56E0\uFF0C\u76EE\u524D\u65AD\u5B9A\u4E3Ajdbc\u548Ctimestamp\u5386\u53F2\u95EE\u9898\uFF08wings210\u540E\u7EDF\u4E00mysql8\uFF0C\u5DF2\u7EDF\u4E00\u89E3\u51B3\uFF09</p><ul><li>jooq\uFF0C\u4F7F\u7528timestamp\u4F5C\u4E3AlocalDatetime\u7684\u503C\uFF0C\u8BBE\u7F6EpreparedStatement\u3002</li><li>jdbc\uFF0CsetTimestamp(int parameterIndex, Timestamp x), the JDBC driver uses the time zone of the virtual machine to calculate the date and time of the timestamp in that time zone.</li></ul><p>\u901A\u8FC7\u4EE5\u4E0BSQL\u53EF\u4EE5\u5728mysql\u7AEF\u8C03\u67E5\u6570\u636E\u5E93\u6267\u884C\u8FC7\u7A0B</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u67E5\u770B \u7CFB\u7EDF\uFF0C\u7A0B\u5E8F\uFF0C\u4F1A\u8BDD\u65F6\u533A</span>
<span class="token keyword">SELECT</span> @<span class="token variable">@system_time_zone</span><span class="token punctuation">,</span>  @<span class="token variable">@global.time_zone</span><span class="token punctuation">,</span> @<span class="token variable">@session.time_zone</span><span class="token punctuation">;</span>
<span class="token comment">-- @@system_time_zone, @@global.time_zone, @@session.time_zone</span>
<span class="token comment">-- UTC, Asia/Shanghai, Asia/Shanghai</span>

<span class="token comment">-- mysql \u6267\u884C\u65E5\u5FD7(UTC)</span>
<span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">\`</span>win_user<span class="token punctuation">\`</span></span> <span class="token keyword">where</span> <span class="token identifier"><span class="token punctuation">\`</span>delete_dt<span class="token punctuation">\`</span></span> <span class="token operator">&lt;=</span> <span class="token string">&#39;0999-12-31 16:00:00.0&#39;</span><span class="token punctuation">;</span>
<span class="token comment">-- jooq \u7ED1\u5B9A\u65E5\u5FD7(GMT+8)</span>
<span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">\`</span>win_user<span class="token punctuation">\`</span></span> <span class="token keyword">where</span> <span class="token identifier"><span class="token punctuation">\`</span>delete_dt<span class="token punctuation">\`</span></span> <span class="token operator">&lt;=</span> <span class="token string">&#39;1000-01-01 00:00:00.0&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- \u6253\u5F00\uFF0C\u65E5\u5FD7\uFF0Cblob\u8981</span>
<span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> log_output <span class="token operator">=</span> <span class="token string">&#39;TABLE&#39;</span><span class="token punctuation">;</span><span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> general_log <span class="token operator">=</span> <span class="token string">&#39;ON&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">from</span> mysql<span class="token punctuation">.</span>general_log <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> event_time <span class="token keyword">DESC</span><span class="token punctuation">;</span>
<span class="token comment">-- \u5173\u95ED\uFF0C\u6E05\u9664</span>
<span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> log_output <span class="token operator">=</span> <span class="token string">&#39;TABLE&#39;</span><span class="token punctuation">;</span> <span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> general_log <span class="token operator">=</span> <span class="token string">&#39;OFF&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">truncate</span> <span class="token keyword">table</span> mysql<span class="token punctuation">.</span>general_log<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The session time zone setting affects display and storage of time values that are zone-sensitive. This includes the values displayed by functions such as NOW() or CURTIME(), and values stored in and retrieved from TIMESTAMP columns. Values for TIMESTAMP columns are converted from the session time zone to UTC for storage, and from UTC to the session time zone for retrieval.</p><p>\u5728mysql\u4E2D\uFF0C\u5C3D\u91CF\u4F7F\u7528NOW(fsp)\uFF0C\u56E0\u4E3A\u5176\u77ED\u5C0F\u660E\u786E\u6709\u7F13\u5B58\uFF0C\u5982\u65E0\u5FC5\u987B\u4E0D\u53EF\u4F7F\u7528SYSDATE(fsp)\uFF0C\u53C2\u8003</p>`,12),O={href:"https://dev.mysql.com/doc/refman/8.0/en/time-zone-support.html#time-zone-variables",target:"_blank",rel:"noopener noreferrer"},J=n("https://dev.mysql.com/doc/refman/8.0/en/time-zone-support.html#time-zone-variables"),N={href:"https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_now",target:"_blank",rel:"noopener noreferrer"},R=n("https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_now"),P={href:"https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-configuration-properties.html",target:"_blank",rel:"noopener noreferrer"},V=n("https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-configuration-properties.html"),G={href:"https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-connp-props-datetime-types-processing.html",target:"_blank",rel:"noopener noreferrer"},F=n("https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-connp-props-datetime-types-processing.html"),W=o('<h2 id="_2-8-\u6570\u636E\u5E93\u548Cjvm\u65F6\u533A\u7EDF\u4E00" tabindex="-1"><a class="header-anchor" href="#_2-8-\u6570\u636E\u5E93\u548Cjvm\u65F6\u533A\u7EDF\u4E00" aria-hidden="true">#</a> 2.8.\u6570\u636E\u5E93\u548CJvm\u65F6\u533A\u7EDF\u4E00</h2><p>\u5E38\u7528\u7684\u65F6\u533A\u67092\u4E2D\u683C\u5F0F\uFF0C\u4E0D\u7BA1\u90A3\u79CD\uFF0C\u90FD\u63A8\u8350\u4F7F\u7528\u7A33\u5B9A\u65F6\u533A\uFF0C\u5982\u653F\u7B56\u4E0D\u4F1A\u53D8\uFF0C\u6CA1\u6709\u590F\u4EE4\u65F6\u3002</p><ul><li>\u5BB9\u6613\u7406\u89E3\u7684ZoneId\u5F62\u5F0F - \u5730\u7406\u57CE\u5E02 Asia/Shanghai\uFF0CAmerica/New_York</li><li>\u89C4\u5219\u7A33\u5B9A\u7684Offset\u5F62\u5F0F - \u76F8\u5BF9\u4E8EUTC\u7684\u65F6\u5DEE\uFF0CUTC\uFF0C+08:00</li></ul><p>wings\u4E2D\u4F7F\u7528DatabaseChecker\u68C0\u67E5\u4EE5\u4E0B\u2461\u2462\u2463\u65F6\u5DEE\u662F\u5426\u4E00\u81F4\uFF0C\u63A8\u8350\u5168\u90E8\u4E00\u81F4\u3002</p><ul><li>\u2460system_time_zone - mysql host machine</li><li>\u2461time_zone - mysql current time zone</li><li>\u2462connectionTimeZone - jdbc connectionTimeZone/serverTimezone</li><li>\u2463jvm TimeZone - jvm DefaultTimeZone</li><li>\u2464host TimeZone - java host machine</li></ul><p>\u5176\u4E2D\u2462\u662Fjdbc\u4E2D\u7279\u6709\u7684\uFF0C\u548Csession timezone\u7C7B\u4F3C\uFF0C\u4F46\u6BD4<code>SET time_zone = timezone</code>\u5F3A\u5927\u3002 \u82E5\u2462\u2463\u4E00\u81F4\u5219\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF0C\u4F46\u82E5\u975Ewings\u73AF\u5883\uFF0C\u5728\u672A\u8BBE\u7F6E\u2462\u5BFC\u81F4mysql\u9ED8\u8BA4\u4F7F\u7528\u2461\u65F6\uFF0C\u5C31\u4F1A\u51FA\u73B0\u65F6\u5DEE\u95EE\u9898\u3002</p><p>\u4F7F\u7528NOW()\u53CATIMESTAMP\u7C7B\u578B\u65F6\u8981\u6CE8\u610F\u65F6\u533A\uFF0C\u4ED6\u4EEC\u53D7\u2462\u7684\u5F71\u54CD\u3002</p><blockquote><p>The session time zone setting affects display and storage of time values that are zone-sensitive. This includes the values displayed by functions such as NOW() or CURTIME(), and values stored in and retrieved from TIMESTAMP columns. Values for TIMESTAMP columns are converted from the session time zone to UTC for storage, and from UTC to the session time zone for retrieval.</p></blockquote><p>\u5C3D\u91CF\u4F7F\u7528 DATE, TIME, DATETIME\u7C7B\u578B\uFF0C\u4ED6\u4EEC\u662F\u65F6\u533A\u65E0\u5173\u7684\u3002</p><blockquote><p>The session time zone setting does not affect values displayed by functions such as UTC_TIMESTAMP() or values in DATE, TIME, or DATETIME columns. Nor are values in those data types stored in UTC; the time zone applies for them only when converting from TIMESTAMP values. If you want locale-specific arithmetic for DATE, TIME, or DATETIME values, convert them to UTC, perform the arithmetic, and then convert back.</p></blockquote><p>\u4EE5\u4E0A\u662F\u6570\u636E\u5E93\u5C42\u9762\u9700\u8981\u6CE8\u610F\u7684\u5730\u65B9\uFF0C\u800C\u4EE5\u4E0B\u4E3Ajdbc\u53CAjava\u4F53\u7CFB\u4E2D\u7684\u6CE8\u610F\u70B9\uFF0C</p><ul><li>connectionTimeZone\u548CforceConnectionTimeZoneToSession\u540C\u65F6\u4F7F\u7528\u3002</li><li>connectionTimeZone\u7684\u503C\uFF0C\u5EFA\u8BAE\u4F7F\u7528offset\u5F62\u5F0F\uFF0C<code>UTC</code>, <code>-40:00</code>, <code>+80:00</code></li><li>\u5728jdbc url\u4E2D\uFF0C\u9700\u8981\u8F6C\u4E49<code>+</code>\uFF0C\u4EE5<code>%2B08:00</code>\u8868\u793A<code>+80:00</code></li><li>\u4E1A\u52A1\u4FA7\u5EFA\u8BAE\u4F7F\u7528ZoneId\u5F62\u5F0F\uFF0Cmysql\u914D\u7F6E\u9879\uFF0C\u5EFA\u8BAE\u662F\u6709offset\u5F62\u5F0F</li></ul><p>connectionTimeZone\u53C2\u6570\uFF088.0\u4E4B\u524D\u662FserverTimezone\uFF09\u53EF\u4EE5\u534F\u8C03\u597Djvm\u548Cmysql\u7684\u65F6\u533A\uFF0C \u5355\u72EC\u4F7F\u7528connectionTimeZone\uFF0C\u4E0D\u4F1A\u6539\u53D8session\u7EA7\u7684time_zone\uFF0C \u9700\u8981\u914D\u5408forceConnectionTimeZoneToSession\uFF0C\u624D\u80FD\u8FBE\u5230session\u548Cjdbc\u4E00\u81F4\u7684\u6548\u679C\u3002</p><p>\u5C3D\u7BA1\u4EE5\u4E0A\u8BBE\u7F6E\u53EF\u4EE5\u6EE1\u8DB3\u9879\u76EE\u8981\u6C42\uFF0C\u4F46\u56E0\u4F5C\u7528\u8303\u56F4\u4E0D\u5982\u7EDF\u4E00\u65F6\u533A\u66F4\u7A33\u5B9A\u53EF\u9760\uFF0C\u4ECD\u5E94\u907F\u514D\u4F7F\u7528\u3002 \u6B64\u5916\u5728mysql\u914D\u989D\u4E2D\uFF0C\u5EFA\u8BAE\u4F7F\u7528offset\u683C\u5F0F\u65F6\u533A\uFF0C\u800C\u4E1A\u52A1\u4FA7\u4F7F\u7528ZoneId\u683C\u5F0F\u3002</p><p>\u5728\u914D\u7F6EJdbcUrl\u65F6\uFF0C\u82E5\u4F7F\u7528<code>+</code>\u65F6\uFF08\u5982\u4E0B\u6240\u793A\uFF09\uFF0C\u4F1A\u53D1\u751FDateTimeException\uFF0C\u56E0\u4E3A\u5728URL\u4E2D<code>+</code>\u6807\u8BC6\u7A7A\u683C\u3002 \u9700\u8981\u8F6C\u4E49\u4E3A<code>%2B</code>\uFF0C\u5373\u6B63\u786E\u7684\u683C\u5F0F\u4E3AconnectionTimeZone=%2B08:00</p><blockquote><p>wings_test?connectionTimeZone=+08:00` Invalid ID for region-based ZoneId, invalid format: 08:00</p></blockquote>',16);function Q(Y,H){const t=l("RouterLink"),a=l("ExternalLinkIcon");return r(),p("div",null,[u,e("p",null,[h,s(t,{to:"/2-faceless/2a-flywave.html"},{default:i(()=>[v]),_:1})]),_,e("p",null,[k,s(t,{to:"/2-faceless/2b-jooq.html"},{default:i(()=>[f]),_:1})]),b,e("p",null,[g,s(t,{to:"/2-faceless/2c-shard.html"},{default:i(()=>[T]),_:1})]),e("p",null,[y,e("a",E,[w,s(a)]),q]),S,e("p",null,[j,A,z,I,C,e("a",L,[M,s(a)]),x]),D,e("p",null,[e("a",Z,[B,s(a)])]),U,e("ul",null,[e("li",null,[e("a",O,[J,s(a)])]),e("li",null,[e("a",N,[R,s(a)])]),e("li",null,[e("a",P,[V,s(a)])]),e("li",null,[e("a",G,[F,s(a)])])]),W])}var X=c(m,[["render",Q],["__file","index.html.vue"]]);export{X as default};
