import{_ as s,c as n,o as a,a as l}from"./app.40da1dd7.js";const b=JSON.parse(`{"title":"\uFF08\u56DB\uFF09uniapp\u8DEF\u7531\u4F20\u53C2","description":"","frontmatter":{"layout":"doc","title":"\uFF08\u56DB\uFF09uniapp\u8DEF\u7531\u4F20\u53C2"},"headers":[{"level":3,"title":"1. \u5B57\u7B26\u4E32\u62FC\u63A5\u4F20\u53C2 \u2714","slug":"_1-\u5B57\u7B26\u4E32\u62FC\u63A5\u4F20\u53C2-\u2714","link":"#_1-\u5B57\u7B26\u4E32\u62FC\u63A5\u4F20\u53C2-\u2714","children":[]},{"level":3,"title":"2. \u7528JSON.stringify \u548C JSON.parse() \u628A\u5BF9\u8C61\u5E8F\u5217\u5316 \u2714","slug":"_2-\u7528json-stringify-\u548C-json-parse-\u628A\u5BF9\u8C61\u5E8F\u5217\u5316-\u2714","link":"#_2-\u7528json-stringify-\u548C-json-parse-\u628A\u5BF9\u8C61\u5E8F\u5217\u5316-\u2714","children":[]},{"level":3,"title":"3. \u4F7F\u7528 eventChannel.emit() \u2714","slug":"_3-\u4F7F\u7528-eventchannel-emit-\u2714","link":"#_3-\u4F7F\u7528-eventchannel-emit-\u2714","children":[]},{"level":3,"title":"4. uni.$emit('name', obj)","slug":"_4-uni-emit-name-obj","link":"#_4-uni-emit-name-obj","children":[]}],"relativePath":"uniapp/04_emit_params.md","lastUpdated":1685936396000}`),p={name:"uniapp/04_emit_params.md"},e=l(`<h1 id="\uFF08\u56DB\uFF09uniapp\u8DEF\u7531\u4F20\u53C2" tabindex="-1">\uFF08\u56DB\uFF09uniapp\u8DEF\u7531\u4F20\u53C2 <a class="header-anchor" href="#\uFF08\u56DB\uFF09uniapp\u8DEF\u7531\u4F20\u53C2" aria-hidden="true">#</a></h1><h3 id="_1-\u5B57\u7B26\u4E32\u62FC\u63A5\u4F20\u53C2-\u2714" tabindex="-1">1. \u5B57\u7B26\u4E32\u62FC\u63A5\u4F20\u53C2 \u2714 <a class="header-anchor" href="#_1-\u5B57\u7B26\u4E32\u62FC\u63A5\u4F20\u53C2-\u2714" aria-hidden="true">#</a></h3><p>\u9002\u7528\u4E8E\u4F20\u9012\u7B80\u5355\u7684\u5B57\u7B26\u4E32\u53C2\u6570\u3002</p><p>A\u9875\u9762\u4F20\u9012\uFF1A</p><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#61AFEF;">edit</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;hello&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">uni</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">navigateTo</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">url</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/pages/myPrepay/edit?params=&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;"> })</span></span>
<span class="line"><span style="color:#ABB2BF;">},</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>B\u9875\u9762\u63A5\u6536\uFF1A</p><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#61AFEF;">onLoad</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">option</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">option</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">option</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;">);  </span><span style="color:#7F848E;">//  \u6253\u5370\u7ED3\u679C\uFF1Ahello</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_2-\u7528json-stringify-\u548C-json-parse-\u628A\u5BF9\u8C61\u5E8F\u5217\u5316-\u2714" tabindex="-1">2. \u7528<code>JSON.stringify</code> \u548C <code>JSON.parse()</code> \u628A\u5BF9\u8C61\u5E8F\u5217\u5316 \u2714 <a class="header-anchor" href="#_2-\u7528json-stringify-\u548C-json-parse-\u628A\u5BF9\u8C61\u5E8F\u5217\u5316-\u2714" aria-hidden="true">#</a></h3><p>A\u9875\u9762\uFF1A</p><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#61AFEF;">edit</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">JSON</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">stringify</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">uni</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">navigateTo</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">url</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/pages/myPrepay/edit?item=&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;"> })</span></span>
<span class="line"><span style="color:#ABB2BF;">},</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>B\u9875\u9762\u63A5\u6536\uFF1A</p><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#61AFEF;">onLoad</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">option</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">option</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">JSON</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">parse</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">option</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getAdminList</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_3-\u4F7F\u7528-eventchannel-emit-\u2714" tabindex="-1">3. \u4F7F\u7528 <code>eventChannel.emit()</code> \u2714 <a class="header-anchor" href="#_3-\u4F7F\u7528-eventchannel-emit-\u2714" aria-hidden="true">#</a></h3><p>A\u9875\u9762\u53D1\u9001\uFF1A</p><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#61AFEF;">edit</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;">// \u7B2C\u4E8C\u79CD\u65B9\u6CD5\u6CE8\u91CA\u6389</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;">// let obj = JSON.stringify(item)</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;">// uni.navigateTo({ url: &#39;/pages/myPrepay/edit?item=&#39; + obj })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// \u6765\u8BD5\u8BD5\u9EBB\u70E6\u7684eventChannel.emit()</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">uni</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">navigateTo</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E06C75;">url</span><span style="color:#ABB2BF;">:</span><span style="color:#98C379;">\`/pages/myPrepay/edit\`</span><span style="color:#ABB2BF;">,  </span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#61AFEF;">success</span><span style="color:#ABB2BF;">:(</span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">eventChannel</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">emit</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;sendTestValue&#39;</span><span style="color:#ABB2BF;">,{</span></span>
<span class="line"><span style="color:#ABB2BF;">						</span><span style="color:#E06C75;">info</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;">item</span></span>
<span class="line"><span style="color:#ABB2BF;">				})</span></span>
<span class="line"><span style="color:#ABB2BF;">			}</span></span>
<span class="line"><span style="color:#ABB2BF;">		})</span></span>
<span class="line"><span style="color:#ABB2BF;">},</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>B\u9875\u9762\u63A5\u6536\uFF1A</p><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">onload</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">page</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getOpenerEventChannel</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">page</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">on</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;sendTestValue&#39;</span><span style="color:#ABB2BF;">,(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#7F848E;">// \u8FD9\u662Fdata \u5C31\u662F\u4E0A\u4E2A\u9875\u9762\u4F20\u9012\u7684\u5BF9\u8C61\u4E86</span></span>
<span class="line"><span style="color:#ABB2BF;">		})</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_4-uni-emit-name-obj" tabindex="-1">4. <code>uni.$emit(&#39;name&#39;, obj)</code> <a class="header-anchor" href="#_4-uni-emit-name-obj" aria-hidden="true">#</a></h3><p>\u8FD9\u4E2A\u65B9\u6CD5\u786E\u5B9E\u80FD\u4F20\u9012\u5BF9\u8C61\uFF0C\u4F46\u662F\u7B2C\u4E00\u6B21\u70B9\u51FB\u4E0D\u751F\u6548</p><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#7F848E;">// \u4F20\u9012</span></span>
<span class="line"><span style="color:#E5C07B;">uni</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">$emit</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;test&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// \u63A5\u6536</span></span>
<span class="line"><span style="color:#ABB2BF;">mounted:{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">uni</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">$on</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;list&#39;</span><span style="color:#ABB2BF;">, (</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">uni</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">$off</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;test&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">test</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">	})</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5173\u95ED\u76D1\u542C\uFF1A\uFF08\u4F46\u5982\u679C\u8FD9\u6837\u5199\u6839\u672C\u63A5\u6536\u4E0D\u5230\uFF0C\u5F88\u602A\u5F02\uFF09</p><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#ABB2BF;">destroyed: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">uni</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">$off</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;test&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">test</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,22),o=[e];function t(r,c,B,i,y,F){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{b as __pageData,u as default};