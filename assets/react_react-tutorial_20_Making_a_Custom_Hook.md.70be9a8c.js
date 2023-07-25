import{_ as s,c as n,o as a,a as l}from"./app.53a606ea.js";const C=JSON.parse('{"title":"8. \u521B\u5EFA\u81EA\u5B9A\u4E49Hook","description":"","frontmatter":{"title":"8. \u521B\u5EFA\u81EA\u5B9A\u4E49Hook","showToc":false,"layout":"doc"},"headers":[],"relativePath":"react/react-tutorial/20_Making_a_Custom_Hook.md","lastUpdated":1690273634000}'),p={name:"react/react-tutorial/20_Making_a_Custom_Hook.md"},o=l(`<h1 id="_8-\u521B\u5EFA\u81EA\u5B9A\u4E49hook" tabindex="-1">8. \u521B\u5EFA\u81EA\u5B9A\u4E49Hook <a class="header-anchor" href="#_8-\u521B\u5EFA\u81EA\u5B9A\u4E49hook" aria-hidden="true">#</a></h1><p>\u521B\u5EFA\u81EA\u5DF1\u7684hook\uFF0C\u662F\u4E3A\u4E86\u66F4\u597D\u5730\u590D\u7528\u7EC4\u4EF6\u3002</p><p>\u5728src\u4E0B\u65B0\u5EFA\u6587\u4EF6<strong>useFetch.js</strong>\u3002Hook\u7684\u547D\u540D\u90FD\u662F<strong>use</strong>\u5F00\u5934\u3002</p><p>\u7136\u540E\u628A\u903B\u8F91\u4E22\u8FDB\u53BB\uFF1A</p><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">useState</span><span style="color:#ABB2BF;"> ,</span><span style="color:#E06C75;">useEffect</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;react&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useFetch</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">url</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> { </span><span style="color:#7F848E;">// \u4F20\u5165\u53C2\u6570url</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> [</span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">setData</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useState</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;">// blogs\u6539\u6210\u4E86data\uFF0C\u610F\u4E49\u66F4\u5E7F\u6CDB</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> [</span><span style="color:#E5C07B;">isPending</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">setIsPending</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useState</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> [</span><span style="color:#E5C07B;">error</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">setError</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useState</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">useEffect</span><span style="color:#ABB2BF;">(() </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">fetch</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">url</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">ok</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">throw</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Error</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;\u627E\u4E0D\u5230\u8D44\u6E90&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">json</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    }).</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#61AFEF;">setData</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }).</span><span style="color:#61AFEF;">catch</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#61AFEF;">setError</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">err</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">message</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }).</span><span style="color:#61AFEF;">finally</span><span style="color:#ABB2BF;">(()</span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#61AFEF;">setIsPending</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    })</span></span>
<span class="line"><span style="color:#ABB2BF;">  }, [</span><span style="color:#E06C75;">url</span><span style="color:#ABB2BF;">])   </span><span style="color:#7F848E;">// \u76D1\u542Curl\u7684\u53D8\u5316</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">isPending</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">error</span><span style="color:#ABB2BF;">} 	</span><span style="color:#7F848E;">// return\u51FA\u53BB</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">useFetch</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u5728Home.js\u4E2D\u4F7F\u7528</p><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">BlogList</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;./BlogList&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">useFetch</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;./useFetch&quot;</span><span style="color:#ABB2BF;">;  </span><span style="color:#7F848E;">// \u5F15\u7528hook</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Home</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">blogs</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">isPending</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">error</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useFetch</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;http://localhost:8000/blogs&#39;</span><span style="color:#ABB2BF;">);  </span><span style="color:#7F848E;">//\u7ED3\u6784\u53C2\u6570\uFF0C\u4F20\u5165url</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> (  </span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">className</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;home&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">{</span><span style="color:#E06C75;">error</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">{</span><span style="color:#E06C75;">error</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">{</span><span style="color:#E06C75;">isPending</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;\u52A0\u8F7D\u4E2D\u3002\u3002\u3002&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">{</span><span style="color:#E06C75;">blogs</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E5C07B;">BlogList</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">blogs</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">{</span><span style="color:#E06C75;">blogs</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">title</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;All Blogs&quot;</span><span style="color:#ABB2BF;"> /&gt;</span><span style="color:#C678DD;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  );</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">Home</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,7),e=[o];function r(B,c,t,y,F,A){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{C as __pageData,b as default};
