import{_ as s,c as n,o as a,a as l}from"./app.ccb73730.js";const y=JSON.parse('{"title":"\uFF08\u4E8C\uFF09\u5F15\u5165uni-ui","description":"","frontmatter":{"layout":"doc","title":"\uFF08\u4E8C\uFF09\u5F15\u5165uni-ui"},"headers":[],"relativePath":"uniapp/02_import_uni_ui.md","lastUpdated":1678897262000}'),p={name:"uniapp/02_import_uni_ui.md"},e=l(`<h1 id="\uFF08\u4E8C\uFF09\u5F15\u5165uni-ui" tabindex="-1">\uFF08\u4E8C\uFF09\u5F15\u5165uni-ui <a class="header-anchor" href="#\uFF08\u4E8C\uFF09\u5F15\u5165uni-ui" aria-hidden="true">#</a></h1><p><a href="https://uniapp.dcloud.net.cn/component/uniui/quickstart.html" target="_blank" rel="noreferrer">https://uniapp.dcloud.net.cn/component/uniui/quickstart.html</a></p><ol><li><strong><strong>npm\u5B89\u88C5</strong></strong></li></ol><p>cli \u9879\u76EE\u9ED8\u8BA4\u662F\u4E0D\u7F16\u8BD1\xA0<code>node_modules</code>\u4E0B\u7684\u7EC4\u4EF6\u7684\uFF0C\u5BFC\u81F4\u6761\u4EF6\u7F16\u8BD1\u7B49\u529F\u80FD\u5931\u6548 \uFF0C\u5BFC\u81F4\u7EC4\u4EF6\u5F02\u5E38 \u9700\u8981\u5728\u6839\u76EE\u5F55\u521B\u5EFA\xA0<code>vue.config.js</code>\u6587\u4EF6 \uFF0C\u589E\u52A0\xA0<code>@dcloudio/uni-ui</code>\u5305\u7684\u7F16\u8BD1\u5373\u53EF\u6B63\u5E38</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#7F848E;">// vue.config.js</span></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">transpileDependencies</span><span style="color:#ABB2BF;">:[</span><span style="color:#98C379;">&#39;@dcloudio/uni-ui&#39;</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol><li><strong>\u5B89\u88C5 sass</strong></li></ol><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#abb2bf;">npm i sass -D   \u6216   yarn add sass -D</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="2"><li><strong>\u5B89\u88C5 sass-loader</strong></li></ol><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#abb2bf;">npm i sass-loader@10.1.1 -D   \u6216   yarn add sass-loader@10.1.1 -D</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="3"><li><strong>\u914D\u7F6Eeasycom</strong></li></ol><div class="language-json line-numbers-mode"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#7F848E;">// pages.json</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">&quot;easycom&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">&quot;autoscan&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">&quot;custom&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#7F848E;">// uni-ui \u89C4\u5219\u5982\u4E0B\u914D\u7F6E</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E06C75;">&quot;^uni-(.*)&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">	},</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;">// \u5176\u4ED6\u5185\u5BB9</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#FFFFFF;">pages</span><span style="color:#ABB2BF;">:[</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">	]</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,11),o=[e];function t(r,c,i,u,B,d){return a(),n("div",null,o)}const m=s(p,[["render",t]]);export{y as __pageData,m as default};
