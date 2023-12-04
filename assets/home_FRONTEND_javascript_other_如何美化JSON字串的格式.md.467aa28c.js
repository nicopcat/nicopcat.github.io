import{_ as a,c as l,b as s,d as p,t as o,a as e,o as t}from"./app.9c25a495.js";const h=JSON.parse('{"title":"\u5982\u4F55\u7F8E\u5316JSON\u5B57\u4E32\u7684\u683C\u5F0F","description":"","frontmatter":{"layout":"doc","title":"\u5982\u4F55\u7F8E\u5316JSON\u5B57\u4E32\u7684\u683C\u5F0F","editLink":true},"headers":[{"level":3,"title":"\u539F\u56E0","slug":"\u539F\u56E0","link":"#\u539F\u56E0","children":[]},{"level":3,"title":"JSON.strigify() api","slug":"json-strigify-api","link":"#json-strigify-api","children":[]},{"level":3,"title":"pre \u548C code","slug":"pre-\u548C-code","link":"#pre-\u548C-code","children":[]},{"level":3,"title":"\u53C2\u8003\u8D44\u6599","slug":"\u53C2\u8003\u8D44\u6599","link":"#\u53C2\u8003\u8D44\u6599","children":[]}],"relativePath":"home/FRONTEND/javascript/other/\u5982\u4F55\u7F8E\u5316JSON\u5B57\u4E32\u7684\u683C\u5F0F.md","lastUpdated":1701695793000}'),r={name:"home/FRONTEND/javascript/other/\u5982\u4F55\u7F8E\u5316JSON\u5B57\u4E32\u7684\u683C\u5F0F.md"},c={id:"frontmatter-title",tabindex:"-1"},B=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=e(`<h3 id="\u539F\u56E0" tabindex="-1">\u539F\u56E0 <a class="header-anchor" href="#\u539F\u56E0" aria-hidden="true">#</a></h3><p>\u4E0D\u7ECF\u8FC7\u5904\u7406\u7684JSON\u5B57\u4E32\uFF0C\u5C31\u662F\u4E00\u6761\u957F\u5B57\u4E32\uFF0C\u4E0D\u5229\u4E8E\u9605\u8BFB\uFF1A</p><div class="language-json line-numbers-mode"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#ABB2BF;">{ </span><span style="color:#E06C75;">&quot;name&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;anran758&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">&quot;avatar&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;https://xxx&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">&quot;detail&quot;</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">&quot;desc&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;some description&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">&quot;level&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> } }</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5E0C\u671B\u5904\u7406\u6210\u683C\u5F0F\u5316\u7684\u5F62\u5F0F\uFF1A</p><div class="language-json line-numbers-mode"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;name&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;anran758&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;avatar&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;https://xxx&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;detail&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;desc&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;some description&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;level&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="json-strigify-api" tabindex="-1">JSON.strigify() api <a class="header-anchor" href="#json-strigify-api" aria-hidden="true">#</a></h3><p>JSON \u6709\u4E00\u4E2A <code> JSON.strigify()</code> \u7684 api\uFF0C\u7528\u4E8E\u5C06\u5BF9\u8C61\u5904\u7406\u6210JSON\u5B57\u4E32\u3002</p><p>\u8FD9\u4E2Aapi\u63A5\u6536\u4E09\u4E2A\u53C2\u6570\uFF1A \u7B2C\u4E00\u4E2A\u662F\u9700\u8981\u5E8F\u5217\u5316\u7684\u5BF9\u8C61\uFF1B\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662Freplacer\uFF0C\u7528\u4EE5\u5BF9\u5C5E\u6027\u8F6C\u6362\u548C\u5904\u7406\uFF0C\u7531\u4E8E\u6211\u4EEC\u4E0D\u9700\u8981\u989D\u5916\u7684\u5904\u7406\uFF0C\u56E0\u6B64\u4F20\u5165\u4E00\u4E2Anull\uFF1B\u7B2C\u4E09\u4E2A\u53C2\u6570\u5219\u662F\u7A7A\u683C\u7D22\u5F15\u7684\u4E2A\u6570\uFF0C\u5C01\u9876\u662F10\uFF0C0\u6216\u4E0D\u4F20\u5219\u6CA1\u6709\u7A7A\u683C\u3002</p><p>\u6211\u4EEC\u4F20\u5165\u7684\u6570\u636E:</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">userInfo</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;anran758&#39;</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;">github</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;https://github.com/anran758&#39;</span><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">info</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">JSON</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">stringify</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">userInfo</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">info</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// &quot;{\u21B5  &quot;name&quot;: &quot;anran758&quot;,\u21B5  &quot;github&quot;: &quot;https://github.com/anran758&quot;\u21B5}&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u6837\u7A7A\u683C\u5C31\u4F20\u8FDB\u53BB\u4E86\u3002\u4F46\u662F\uFF0Chtml\u65E0\u6CD5\u6E32\u67D3\u7A7A\u683C\uFF0C\u5B83\u4F1A\u5FFD\u7565\u6389\uFF0C\u4E8E\u662F\u5C31\u9700\u8981\u7528\u4E00\u4E2A\u7279\u522B\u7684\u6807\u7B7E\u6765\u5305\u88F9\u3002</p><h3 id="pre-\u548C-code" tabindex="-1">pre \u548C code <a class="header-anchor" href="#pre-\u548C-code" aria-hidden="true">#</a></h3><p>HTML \u4E2D\u6709\u4E24\u4E2A\u6807\u7B7E\u53EF\u4EE5\u5C55\u793A\u6E90\u4EE3\u7801: <code>&lt;pre&gt; </code>\u548C <code>&lt;code&gt; </code>\u3002</p><p>\u5B83\u4EEC\u4E4B\u95F4\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E:</p><ul><li><p><code>&lt;pre&gt;</code> \u8868\u793A\u9884\u5B9A\u4E49\u683C\u5F0F\u6587\u672C\uFF0C\u6309\u7167\u539F\u6587\u4EF6\u4E2D\u7684\u7F16\u6392\uFF0C\u4EE5\u7B49\u5BBD\u5B57\u4F53\u7684\u5F62\u5F0F\u5C55\u73B0\u51FA\u6765\uFF0C\u6587\u672C\u4E2D\u7684\u7A7A\u767D\u7B26\uFF08\u6BD4\u5982\u7A7A\u683C\u548C\u6362\u884C\u7B26\uFF09\u90FD\u4F1A\u663E\u793A\u51FA\u6765\u3002</p></li><li><p><code>&lt;code&gt;</code> \u5219\u662F\u5448\u73B0\u4E00\u6BB5\u8BA1\u7B97\u673A\u4EE3\u7801\uFF0C\u5B83\u4EE5\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u7B49\u5BBD\u5B57\u4F53\u663E\u793A\uFF0C\u4F46\u5E76\u4E0D\u4E00\u5B9A\u4F1A\u5B8C\u6574\u5448\u73B0\u539F\u6765\u7684\u683C\u5F0F\u3002</p></li></ul><p>\u7ECF\u8FC7\u6BD4\u5BF9\uFF0Cpre\u66F4\u7B26\u5408\u5B9E\u9645\u9700\u6C42\u3002</p><hr><p>\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p><p><em>js</em></p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">userInfo</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;anran758&#39;</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;">github</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;https://github.com/anran758&#39;</span><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">info</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">JSON</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">stringify</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">userInfo</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">info</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><em>html</em></p><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;</span><span style="color:#E06C75;">pre</span><span style="color:#ABB2BF;">&gt;{{info}}&lt;/</span><span style="color:#E06C75;">pre</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u53C2\u8003\u8D44\u6599" tabindex="-1">\u53C2\u8003\u8D44\u6599 <a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a></h3><hr><ol><li><a href="https://anran758.github.io/blog/2019/08/24/js-%E5%B0%86JSON%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E8%BE%93%E5%87%BA%E8%87%B3%E9%A1%B5%E9%9D%A2%E4%B8%8A/" target="_blank" rel="noreferrer">js-\u5C06JSON\u6570\u636E\u683C\u5F0F\u8F93\u51FA\u81F3\u9875\u9762\u4E0A</a></li></ol>`,25);function y(n,u,d,A,F,b){return t(),l("div",null,[s("h1",c,[p(o(n.$frontmatter.title)+" ",1),B]),i])}const C=a(r,[["render",y]]);export{h as __pageData,C as default};
