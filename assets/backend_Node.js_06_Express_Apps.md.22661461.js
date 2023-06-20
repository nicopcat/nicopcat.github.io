import{_ as s,c as n,o as a,a as p}from"./app.928dab02.js";const A=JSON.parse('{"title":"6 - Express Apps","description":"","frontmatter":{"layout":"doc","title":"6 - Express Apps"},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","link":"#\u5B89\u88C5","children":[]},{"level":2,"title":"\u521B\u5EFA\u4E00\u4E2Aexpress app","slug":"\u521B\u5EFA\u4E00\u4E2Aexpress-app","link":"#\u521B\u5EFA\u4E00\u4E2Aexpress-app","children":[]},{"level":2,"title":"HTML & Routing","slug":"html-routing","link":"#html-routing","children":[]},{"level":2,"title":"Redirects & 404","slug":"redirects-404","link":"#redirects-404","children":[]}],"relativePath":"backend/Node.js/06_Express_Apps.md","lastUpdated":1687271949000}'),l={name:"backend/Node.js/06_Express_Apps.md"},e=p(`<h1 id="_6-express-apps" tabindex="-1">6 - Express Apps <a class="header-anchor" href="#_6-express-apps" aria-hidden="true">#</a></h1><p>Express is a framework that helps us to easily manage routing requests server-side logic and responses in a much more elegant way.</p><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#abb2bf;">npm i express</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u521B\u5EFA\u4E00\u4E2Aexpress-app" tabindex="-1">\u521B\u5EFA\u4E00\u4E2Aexpress app <a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2Aexpress-app" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">express</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;express&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">express</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">listen</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3000</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/&#39;</span><span style="color:#ABB2BF;">, (</span><span style="color:#E06C75;">req</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">send</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;&lt;p&gt;using express!&lt;/p&gt;&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="html-routing" tabindex="-1">HTML &amp; Routing <a class="header-anchor" href="#html-routing" aria-hidden="true">#</a></h2><p>\u73B0\u5728\u5B66\u4F1A\u4E86\u5411\u524D\u53F0\u53D1\u9001\u7B80\u5355\u7684html snippets\uFF0C\u90A3\u4E48\u5982\u4F55\u53D1\u9001html\u6587\u6863\u5462\uFF1F\u53C8\u600E\u4E48\u8BBE\u7F6E\u8DEF\u7531\uFF1F</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/&#39;</span><span style="color:#ABB2BF;">, (</span><span style="color:#E06C75;">req</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">sendFile</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;./views/index.html&#39;</span><span style="color:#ABB2BF;">, {</span><span style="color:#E06C75;">root</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;">__dirname</span><span style="color:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/about&#39;</span><span style="color:#ABB2BF;">, (</span><span style="color:#E06C75;">req</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">sendFile</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;./views/about.html&#39;</span><span style="color:#ABB2BF;">, {</span><span style="color:#E06C75;">root</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;">__dirname</span><span style="color:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4EE5\u4E0A\u4EE3\u7801\u5206\u522B\u4E3A\u6839\u76EE\u5F55<code>/</code>\u8BBE\u7F6E\u4E86\u8DEF\u5F84\uFF0C\u548C\u8FD4\u56DE\u7684html\u6587\u4EF6\uFF0C\u6D4F\u89C8\u5668\u8F93\u5165<code>/</code>\u65F6\uFF0C\u4F1A\u8BBF\u95EE<strong>index.html</strong>\uFF0C\u6D4F\u89C8\u5668\u8F93\u5165<code>/about</code>\uFF0C\u5219\u8BBF\u95EE<strong>about.html</strong>\u3002</p><p>\u7136\u540E\u52A0\u4E0A\u4E00\u4E2Anavbar</p><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">nav</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">href</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;/&quot;</span><span style="color:#ABB2BF;">&gt;Home&lt;/</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">href</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;/about&quot;</span><span style="color:#ABB2BF;">&gt;About&lt;/</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">nav</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u7B80\u76F4\u5C31\u662F\u4E00\u4E2A\u5C0F\u7F51\u7AD9\u4E86\u3002</p><h2 id="redirects-404" tabindex="-1">Redirects &amp; 404 <a class="header-anchor" href="#redirects-404" aria-hidden="true">#</a></h2><p>It&#39;s very easy to do redirect with express app.</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#7F848E;">// redirects</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/about-me&#39;</span><span style="color:#ABB2BF;">, (</span><span style="color:#E06C75;">req</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">redirect</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/about&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>and also 404 page,</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#7F848E;">// 404 page</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">req</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">sendFile</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;./views/404.html&#39;</span><span style="color:#ABB2BF;">,{</span><span style="color:#E06C75;">root</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">__dirname</span><span style="color:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Notice the <code>app.use()</code> method, it matches every request sending through. So we&#39;d better put it at the bottom of everything. When no urls can be catched by the upper ones, they will evnetually fall on the 404 landing page.</p><p>And don&#39;t forget to set the status for 404 page, otherwise the header will set 200 OK instead.(Coz we actually land somewhere name 404.html) <img src="https://nic-gz-1308403500.file.myqcloud.com/vitepress/06_Express_Apps-2023-06-19-23-22-27.png" alt="snapshot"></p><p>set status:</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#7F848E;">// 404 status</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">req</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">status</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">404</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">sendFile</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;./views/404.html&#39;</span><span style="color:#ABB2BF;">,{</span><span style="color:#E06C75;">root</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">__dirname</span><span style="color:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,22),o=[e];function r(t,c,B,i,y,d){return a(),n("div",null,o)}const u=s(l,[["render",r]]);export{A as __pageData,u as default};