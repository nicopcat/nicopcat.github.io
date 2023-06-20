import{_ as s,c as n,o as a,a as l}from"./app.928dab02.js";const A=JSON.parse('{"title":"8 - Middleware","description":"","frontmatter":{"layout":"doc","title":"8 - Middleware"},"headers":[{"level":2,"title":"\u4F7F\u7528next()","slug":"\u4F7F\u7528next","link":"#\u4F7F\u7528next","children":[]},{"level":2,"title":"Third Party Middlewares","slug":"third-party-middlewares","link":"#third-party-middlewares","children":[]},{"level":2,"title":"Static Files","slug":"static-files","link":"#static-files","children":[]}],"relativePath":"backend/Node.js/08_Middleware.md","lastUpdated":1687271949000}'),p={name:"backend/Node.js/08_Middleware.md"},e=l(`<h1 id="_8-middleware" tabindex="-1">8 - Middleware <a class="header-anchor" href="#_8-middleware" aria-hidden="true">#</a></h1><p>Code which runs (on the server) between getting a request and sending a response</p><blockquote><p>\u5728 Node.js \u4E2D\uFF0C\u4E2D\u95F4\u4EF6\u662F\u6307\u4E00\u4E2A\u51FD\u6570\u6216\u8005\u4E00\u7EC4\u51FD\u6570\uFF0C\u5B83\u4EEC\u53EF\u4EE5\u88AB\u5D4C\u5165\u5230 HTTP \u8BF7\u6C42\u548C\u54CD\u5E94\u5904\u7406\u6D41\u7A0B\u4E2D\uFF0C\u7528\u4E8E\u5B8C\u6210\u7279\u5B9A\u7684\u4EFB\u52A1\uFF0C\u4F8B\u5982\u65E5\u5FD7\u8BB0\u5F55\u3001\u8EAB\u4EFD\u9A8C\u8BC1\u3001\u8BF7\u6C42\u8F6C\u53D1\u3001\u6570\u636E\u683C\u5F0F\u8F6C\u6362\u7B49\u7B49\u3002\u4E2D\u95F4\u4EF6\u53EF\u4EE5\u88AB\u770B\u4F5C\u662F\u4E00\u4E2A\u62E6\u622A\u5668\u6216\u8005\u8FC7\u6EE4\u5668\uFF0C\u5B83\u4EEC\u53EF\u4EE5\u4FEE\u6539\u8BF7\u6C42\u548C\u54CD\u5E94\u5BF9\u8C61\uFF0C\u6216\u8005\u5728\u5904\u7406\u8BF7\u6C42\u548C\u54CD\u5E94\u4E4B\u524D\u6216\u4E4B\u540E\u6267\u884C\u67D0\u4E9B\u64CD\u4F5C\u3002</p></blockquote><p>\u4E4B\u524D\u5904\u7406404\u65F6\u5C31\u7528\u8FC7\u4E2D\u95F4\u4EF6<code>app.use()</code></p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#7F848E;">// 404 page</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">req</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">status</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">404</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;404&#39;</span><span style="color:#ABB2BF;">,{</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;404&#39;</span><span style="color:#ABB2BF;">});</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u4F7F\u7528next" tabindex="-1">\u4F7F\u7528next() <a class="header-anchor" href="#\u4F7F\u7528next" aria-hidden="true">#</a></h2><p>next() \u6709\u7740\u653E\u884C\u7684\u4F5C\u7528\uFF0C\u5982\u679C\u4E0Dcall next(), \u90A3\u4E48\u8BF7\u6C42\u5C06\u5361\u5728\u8FD9\u4E2A\u4E2D\u95F4\u4EF6\u91CC</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">req</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;\u7B2C\u4E00\u4E2A\u4E2D\u95F4\u4EF6&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">req</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">hostname</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">next</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">req</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;\u7B2C\u4E8C\u4E2A\u4E2D\u95F4\u4EF6&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">next</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="third-party-middlewares" tabindex="-1">Third Party Middlewares <a class="header-anchor" href="#third-party-middlewares" aria-hidden="true">#</a></h2><p>\u4F7F\u7528\u4E00\u4E2A\u53EBmorgan\u7684logger\u4E2D\u95F4\u4EF6\u3002</p><p>\u5B89\u88C5</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#abb2bf;">npm i morgan</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">express</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;express&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">express</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">morgan</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;morgan&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">listen</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3000</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">morgan</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;tiny&#39;</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// ...</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="static-files" tabindex="-1">Static Files <a class="header-anchor" href="#static-files" aria-hidden="true">#</a></h2><p>\u4ECE\u4E4B\u524D\u7684\u5B9E\u8DF5\u4E2D\uFF0C\u6211\u4EEC\u76EE\u524D\u53EA\u80FD\u5728<code>&lt;head&gt;</code>\u6807\u7B7E\u4E2D\u5199\u5185\u8054\u6837\u5F0F\uFF0C\u800C\u4E0D\u80FDLink\u5230\u4E00\u4E2A.css\u6587\u4EF6\uFF0C\u8FD9\u662F\u56E0\u4E3AApp\u6CA1\u7528\u5BF9\u6587\u4EF6\u8FDB\u884C\u5904\u7406\u3002</p><p>\u5904\u7406\u9759\u6001\u6587\u4EF6\uFF0C\u53EF\u4EE5\u7528Express\u81EA\u5E26\u7684\u4E2D\u95F4\u4EF6\u3002</p><p><strong>app.js\u4E2D\u8FD0\u884C\u4E2D\u95F4\u4EF6</strong></p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#7F848E;">// middleware for static files</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">express</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">static</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;public&#39;</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u5C06public\u6587\u4EF6\u5939\u6307\u5B9A\u4E3A\u9759\u6001\u6587\u4EF6\u7684\u76EE\u5F55\u3002</p><p>\u6839\u76EE\u5F55\u65B0\u5EFApublic \u6587\u4EF6\u5939 \uFF0C\u5C06style.css\u653E\u5165\u8BE5\u6587\u4EF6\u3002</p><p>\u5728head.ejs\u4E2D\uFF0C\u5F15\u5165style.css</p><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">head</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">meta</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">charset</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;UTF-8&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">meta</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">http-equiv</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;X-UA-Compatible&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">content</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;IE=edge&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">meta</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;viewport&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">content</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">&gt;Nic\u90E8\u843D\u683C | </span><span style="color:#FFFFFF;">&lt;</span><span style="color:#ABB2BF;">%= title %&gt;&lt;/</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">rel</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;stylesheet&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;text/css&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">href</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;style.css&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">head</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u6CE8\u610F\uFF0C\u8DEF\u5F84\u4E3A<code>styles.css</code>\u6216<code>/styles.css</code>\uFF0C\u56E0\u4E3A\u5F15\u7528\u7684\u6839\u76EE\u5F55\u5DF2\u8BBE\u7F6E\u4E3A<code>/public</code>\u3002</p>`,24),o=[e];function r(t,c,B,y,i,F){return a(),n("div",null,o)}const b=s(p,[["render",r]]);export{A as __pageData,b as default};