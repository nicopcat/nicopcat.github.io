import{_ as s,c as a,o as n,a as l}from"./app.3fa27a80.js";const F=JSON.parse('{"title":"\u5982\u4F55\u4F18\u96C5\u5730\u7528JS\u521B\u5EFA\u5305\u542B0~n\u7684\u6574\u6570\u6570\u7EC4","description":"","frontmatter":{"title":"\u5982\u4F55\u4F18\u96C5\u5730\u7528JS\u521B\u5EFA\u5305\u542B0~n\u7684\u6574\u6570\u6570\u7EC4","layout":"doc","lastUpdated":true},"headers":[{"level":2,"title":"Object.keys & Array.apply \u65B9\u6CD5","slug":"object-keys-array-apply-\u65B9\u6CD5","link":"#object-keys-array-apply-\u65B9\u6CD5","children":[]},{"level":2,"title":"Array.from \u65B9\u6CD5","slug":"array-from-\u65B9\u6CD5","link":"#array-from-\u65B9\u6CD5","children":[{"level":3,"title":"\u8BED\u6CD5\uFF1A","slug":"\u8BED\u6CD5\uFF1A","link":"#\u8BED\u6CD5\uFF1A","children":[]},{"level":3,"title":"\u53C2\u6570\uFF1A","slug":"\u53C2\u6570\uFF1A","link":"#\u53C2\u6570\uFF1A","children":[]},{"level":3,"title":"\u5206\u6790","slug":"\u5206\u6790","link":"#\u5206\u6790","children":[]}]}],"relativePath":"javascript/other/js-create-number-array.md","lastUpdated":1678036510000}'),p={name:"javascript/other/js-create-number-array.md"},e=l(`<h1 id="\u5982\u4F55\u4F18\u96C5\u5730\u7528js\u521B\u5EFA\u5305\u542B0" tabindex="-1">\u5982\u4F55\u4F18\u96C5\u5730\u7528JS\u521B\u5EFA\u5305\u542B0 <a class="header-anchor" href="#\u5982\u4F55\u4F18\u96C5\u5730\u7528js\u521B\u5EFA\u5305\u542B0" aria-hidden="true">#</a></h1><p>Codewar \u4E0A\u6709\u4E00\u9898\u975E\u5E38\u7B80\u5355\u7684\u9898\uFF1A</p><blockquote><p>\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u7ED9\u4EFB\u610F\u4E00\u4E2A\u6B63\u6574\u6570 n\uFF0C\u6C42\u548C\u3002</p></blockquote><p>Example:</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#abb2bf;">2 -&gt; 1 + 2  // output: 3</span></span>
<span class="line"><span style="color:#abb2bf;">5 -&gt; 1 + 2 + 3 + 4 + 5 //  output: 15</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u3010<strong>\u5C0F\u5B66\u751F\u89E3\u6CD5</strong>\u3011</p><p>\u5148\u7528\u5C0F\u5B66\u5C31\u5B66\u8FC7\u7B49\u5DEE\u6570\u5217\u7684\u7D2F\u52A0\u8BA1\u7B97\u516C\u5F0F\u201C( \u9996\u9879 + \u672B\u9879 ) * \u9879\u6570 / 2\u201D\u8BA1\u7B97\u4E00\u4E0B:</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#abb2bf;">2 -&gt; (1+2)* 2/2 = 3  \u2714</span></span>
<span class="line"><span style="color:#abb2bf;">5 -&gt; (1+5)* 5/2 = 15 \u2714</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><s>\u672C\u5C0F\u5B66\u751F\u505A\u5BF9\u4E86\uFF01</s></p><p>\u3010<strong>\u7528 for \u5FAA\u73AF</strong>\u3011</p><p>\u4E5F\u5F88\u5BB9\u6613\u60F3\u5230\u7684\u662F\u7528 for \u5FAA\u73AF\u89E3\u9898\uFF1A</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">sum</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">n</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">sum</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&lt;=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">n</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#56B6C2;">++</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">sum</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">sum</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><hr><p>\u5176\u5B9E\u50CF\u8FD9\u79CD\u7D2F\u52A0\u7684\u9898\u76EE\uFF0C\u611F\u89C9\u975E\u5E38\u9002\u5408\u7528 <code>reduce</code> \u6765\u505A\uFF0C\u4E8E\u662F\u95EE\u9898\u53D8\u6210\u4E86<strong>\u5982\u4F55\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2A 0~n \u7684\u6570\u7EC4\uFF1F</strong></p><p>\u4E0B\u9762\u5047\u8BBE\u6211\u4EEC\u9700\u8981\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2A 0 ~ 9 \u7684\u6570\u7EC4\u3002</p><h1 id="\u6570\u7EC4\u5B57\u9762\u91CF\u6CD5-\u62EC\u53F7\u8BED\u6CD5" tabindex="-1">\u6570\u7EC4\u5B57\u9762\u91CF\u6CD5 - [ ]\u62EC\u53F7\u8BED\u6CD5 <a class="header-anchor" href="#\u6570\u7EC4\u5B57\u9762\u91CF\u6CD5-\u62EC\u53F7\u8BED\u6CD5" aria-hidden="true">#</a></h1><p>\u8001\u8001\u5B9E\u5B9E\u5199\u4E0B\uFF1A</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;"> ... , </span><span style="color:#D19A66;">9</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5F88\u76F4\u89C2\uFF0C\u4F46\u6570\u7EC4\u5927\u4E86\u5199\u5F97\u4F1A\u5F88\u8F9B\u82E6\uFF0C\u4E5F\u4E0D\u4F18\u96C5\uFF0C\u5982\u540C\u82E6\u529B\u3002</p><h1 id="es5-\u65B9\u6CD5" tabindex="-1">ES5 \u65B9\u6CD5 <a class="header-anchor" href="#es5-\u65B9\u6CD5" aria-hidden="true">#</a></h1><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">keys</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Array</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">apply</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">, {</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">n</span><span style="color:#ABB2BF;">}));</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="object-keys-array-apply-\u65B9\u6CD5" tabindex="-1">Object.keys &amp; Array.apply \u65B9\u6CD5 <a class="header-anchor" href="#object-keys-array-apply-\u65B9\u6CD5" aria-hidden="true">#</a></h2><p><code>Object.keys</code> \u65B9\u6CD5\u5C06<strong>\u904D\u5386\u5BF9\u8C61\u7684\u5C5E\u6027\u540D\uFF0C\u7136\u540E\u8FD4\u56DE\u5305\u542B\u5C5E\u6027\u540D\u7684\u5B57\u7B26\u4E32\u6570\u7EC4</strong>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5B83\u6765\u8FD4\u56DE\u6570\u7EC4\u7684\u4E0B\u6807\uFF0C\u4E5F\u5C31\u662F 0 ~ n\u3002</p><p><code>Array.apply(null,{length:n})</code> \u7528\u6765<strong>\u521B\u5EFA 0 ~ n \u7684\u6570\u7EC4</strong>\uFF08\u56E0\u4E3A\u8FD9\u4E2A\u6570\u7EC4\u672A\u521D\u59CB\u5316\uFF0C\u6240\u4EE5\u503C\u90FD\u662F<code>undefined</code>\uFF09\uFF1A</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">keys</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Array</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">apply</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">, { </span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;"> }))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">);  </span></span>
<span class="line"><span style="color:#7F848E;">// [&#39;0&#39;, &#39;1&#39;, &#39;2&#39;, &#39;3&#39;, &#39;4&#39;, &#39;5&#39;, &#39;6&#39;, &#39;7&#39;, &#39;8&#39;, &#39;9&#39;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>apply</code> \u65B9\u6CD5\u53EF\u4F20\u5165\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u662F\u51FD\u6570\u8C03\u7528\u7684 this \u503C\uFF0C\u53E6\u4E00\u4E2A\u53C2\u6570\u53EF\u9009\uFF0C\u6570\u7EC4\u6216\u7C7B\u6570\u7EC4\u5BF9\u8C61\uFF0C\u8FD9\u91CC\u6211\u4EEC\u4F20\u5165\u7C7B\u6570\u7EC4<code>{length: n}</code></p><p><code>{length: n}</code> \u662F\u7C7B\u6570\u7EC4\u5BF9\u8C61\uFF0C\u5B83\u548C\u6570\u7EC4\u76F8\u4F3C\uFF0C\u62E5\u6709 length \u5C5E\u6027\uFF0C\u4F46\u6CA1\u6709\u6570\u7EC4\u7684\u65B9\u6CD5\uFF0C\u4F8B\u5982<code>map()</code>, <code>filter()</code>\u7B49</p><p>\u521B\u5EFA\u597D\u4E86\u6570\u7EC4\uFF0C\u9700\u8981\u628A\u6570\u7EC4\u91CC\u7684\u5B57\u7B26\u4E32\u8F6C\u4E3A\u6570\u7EC4\u7C7B\u578B\uFF1A</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">keys</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Array</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">apply</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">, {</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">})).</span><span style="color:#61AFEF;">map</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">n</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#E06C75;">n</span><span style="color:#ABB2BF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#7F848E;">// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u9664\u4E86\u4F7F\u7528<code>{length: 10}</code> \u6765\u521B\u5EFA\u4E00\u4E2A\u957F\u5EA6\u4E3A10\u7684\u6570\u7EC4\uFF0C\u4E5F\u53EF\u4EE5\u7528<code>Array(10)</code>\uFF1A</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">keys</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Array</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">apply</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">, </span><span style="color:#61AFEF;">Array</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">))).</span><span style="color:#61AFEF;">map</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">n</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#E06C75;">n</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#7F848E;">// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h1 id="es6-\u65B9\u6CD5" tabindex="-1">ES6 \u65B9\u6CD5 <a class="header-anchor" href="#es6-\u65B9\u6CD5" aria-hidden="true">#</a></h1><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#E5C07B;">Array</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">from</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Array</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">keys</span><span style="color:#ABB2BF;">())</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="array-from-\u65B9\u6CD5" tabindex="-1">Array.from \u65B9\u6CD5 <a class="header-anchor" href="#array-from-\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>ES6 \u4E2D\u7684 <code>Array.from</code> \u65B9\u6CD5\u53EF\u4EE5\u5BF9\u7C7B\u6570\u7EC4\u6216\u53EF\u8FED\u4EE3\u5BF9\u8C61\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\uFF0C\u6D45\u62F7\u8D1D\u7684\u6570\u7EC4\u5B9E\u4F8B\u3002</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Array</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">from</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;foo&#39;</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#7F848E;">// expected output: Array [&quot;f&quot;, &quot;o&quot;, &quot;o&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Array</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">from</span><span style="color:#ABB2BF;">([</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">], </span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#7F848E;">// expected output: Array [2, 4, 6]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u8BED\u6CD5\uFF1A" tabindex="-1">\u8BED\u6CD5\uFF1A <a class="header-anchor" href="#\u8BED\u6CD5\uFF1A" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#E5C07B;">Array</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">from</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">arrayLike</span><span style="color:#ABB2BF;">[, </span><span style="color:#E06C75;">mapFn</span><span style="color:#ABB2BF;">[, </span><span style="color:#E06C75;">thisArg</span><span style="color:#ABB2BF;">]])</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u53C2\u6570\uFF1A" tabindex="-1">\u53C2\u6570\uFF1A <a class="header-anchor" href="#\u53C2\u6570\uFF1A" aria-hidden="true">#</a></h3><ol><li>\u5B83\u63A5\u53D7\u4E00\u4E2A<code>\u7C7B\u6570\u7EC4</code>\u6216<code>\u53EF\u8FED\u4EE3\u5BF9\u8C61</code>\u4F5C\u4E3A\u5FC5\u9009\u53C2\u6570\u3002</li><li><code>map</code> \u51FD\u6570\u4EE5\u53CA\u8BE5\u51FD\u6570\u7684 <code>this</code> \u5BF9\u8C61\u4F5C\u4E3A\u53EF\u9009\u53C2\u6570\u3002</li></ol><h3 id="\u5206\u6790" tabindex="-1">\u5206\u6790 <a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a></h3><p><code>new Array(10)</code> \uFF08\u53EF\u4EE5\u7B80\u5316\u4E3A <code>Array(10)</code>\uFF09\uFF1A\u610F\u601D\u662F\u5148\u521B\u5EFA\u4E00\u4E2A\u957F\u5EA6\u4E3A 10 \u4E14\u6CA1\u6709\u521D\u59CB\u5316\u7684\u6570\u7EC4\uFF0C\u7136\u540E\u4F7F\u7528 <code>Array.from</code> \u65B9\u6CD5\u521B\u5EFA\u6570\u7EC4\u521D\u59CB\u5316\uFF0C\u6570\u7EC4\u91CC\u6709 10 \u4E2A <code>undefined</code> \u5143\u7D20\u3002\u63A5\u7740\u4F7F\u7528 <code>Object.key()</code> \u65B9\u6CD5\u83B7\u53D6\u5143\u7D20\u7684\u5C5E\u6027\u540D\uFF0C\u4E5F\u5C31\u662F\u5143\u7D20\u7684\u4E0B\u6807\uFF08\u5E8F\u5217\u53F7\uFF09\uFF0C\u5373 0 ~ 1 \u3002</p><p>\u5176\u4ED6\u5199\u6CD5\uFF1A</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#E5C07B;">Array</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">from</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;"> }, (</span><span style="color:#E06C75;">_</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h1 id="es6-\u65B9\u6CD5\u4E4B\u6269\u5C55\u8FD0\u7B97\u7B26" tabindex="-1">ES6 \u65B9\u6CD5\u4E4B\u6269\u5C55\u8FD0\u7B97\u7B26 <code>...</code> <a class="header-anchor" href="#es6-\u65B9\u6CD5\u4E4B\u6269\u5C55\u8FD0\u7B97\u7B26" aria-hidden="true">#</a></h1><p>ES6 \u63D0\u4F9B\u7684\u6269\u5C55\u8FD0\u7B97\u7B26\u975E\u5E38\u5F3A\u5927\u65B9\u4FBF\uFF0C\u5B83\u53EF\u4EE5\u5728\u51FD\u6570\u8C03\u7528/\u6570\u7EC4\u6784\u9020\u65F6, \u5C06\u6570\u7EC4\u6216\u8005string\u5C55\u5F00\u3002</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#ABB2BF;">[...</span><span style="color:#61AFEF;">Array</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">keys</span><span style="color:#ABB2BF;">()]</span></span>
<span class="line"><span style="color:#ABB2BF;">[...</span><span style="color:#E5C07B;">Array</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">from</span><span style="color:#ABB2BF;">({</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">}).</span><span style="color:#61AFEF;">keys</span><span style="color:#ABB2BF;">()]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5927\u4F6C\u7528\u7684\u5E94\u8BE5\u662F<strong>\u6570\u7EC4\u5B57\u9762\u91CF</strong>\u7684\u5C55\u5F00\u7279\u6027\u3002\u5148\u7528 <code>Array(10)</code> / <code>Array.from({length:100})</code> \u521B\u5EFA\u957F\u5EA6\u4E3A 10 \u7684\u6570\u7EC4\uFF0C\u7136\u540E\u7528\u5C55\u5F00\u8FD0\u7B97\u7B26\u628A\u5143\u7D20\u5C55\u5F00\u5230\u6570\u7EC4\u4E2D\uFF0C\u518D\u53D6\u5143\u7D20\u7684\u5E8F\u53F7\u3002</p><p>\u603B\u4E4B\u5B66\u5230\u5F88\u591A\u65B9\u6CD5\u4EE5\u53CA\u4E00\u4E9B ES6 \u65B0\u7279\u6027\uFF0C\u611F\u6069\u5927\u4F6Chhh</p><h1 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h1><ul><li>\u4E3B\u8981\u53C2\u8003 yugasun \u5927\u4F6C\u7684 <a href="https://yugasun.com/post/create-0-99-array-by-js.html" target="_blank" rel="noreferrer">\u6587\u7AE0</a></li><li>\u601D\u5426 - <a href="https://segmentfault.com/a/1190000011435501" target="_blank" rel="noreferrer">\u300A\u5206\u6790Array.apply(null, { length: 20 })\u300B</a></li></ul>`,51),o=[e];function r(c,t,B,y,i,d){return n(),a("div",null,o)}const b=s(p,[["render",r]]);export{F as __pageData,b as default};
