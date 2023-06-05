import{_ as s,c as n,o as a,a as l}from"./app.40da1dd7.js";const u=JSON.parse('{"title":"Ant Design Vue Table \u52A0\u4E00\u4E2A\u5408\u8BA1\u884C","description":"","frontmatter":{"layout":"doc","title":"Ant Design Vue Table \u52A0\u4E00\u4E2A\u5408\u8BA1\u884C"},"headers":[],"relativePath":"vue/009_andtv_table_sum.md","lastUpdated":1685936396000}'),p={name:"vue/009_andtv_table_sum.md"},o=l(`<h1 id="ant-design-vue-table-\u52A0\u4E00\u4E2A\u5408\u8BA1\u884C" tabindex="-1">Ant Design Vue Table \u52A0\u4E00\u4E2A\u5408\u8BA1\u884C <a class="header-anchor" href="#ant-design-vue-table-\u52A0\u4E00\u4E2A\u5408\u8BA1\u884C" aria-hidden="true">#</a></h1><p>\u4F17\u6240\u5468\u77E5\uFF0CVue 2\u7248\u672C\u7684Ant Design Vue\u7684Table\u7EC4\u4EF6\u5E76\u6CA1\u6709\u5408\u8BA1\u529F\u80FD\uFF0C\u90A3\u4E48\u5C31\u624B\u52A8\u589E\u52A0\u4E00\u4E2A\u3002</p><p>\u770B\u4E86\u53C2\u8003\u7684<a href="https://zhuanlan.zhihu.com/p/398007082" target="_blank" rel="noreferrer">\u6587\u7AE0</a>\uFF0C\u53EF\u80FD\u662F\u56E0\u4E3A\u539F\u672C\u7684table\u7684\u5B9E\u9645\u91D1\u989D\u5217\u56E0\u4E3A\u4E1A\u52A1\u5199\u4E86\u4E00\u4E2AcustomRender\uFF0C\u65B9\u6848\u4E8C\u6CA1\u6709\u751F\u6548\uFF0C\u4E8E\u662F\u9009\u62E9\u4E86\u76F4\u89C2\u7684\u65B9\u6848\u4E00\u3002\u65B9\u6848\u4E00\u7684\u597D\u5904\u5C31\u662F\u53EA\u9700\u8981\u7EDF\u8BA1\u5408\u8BA1\uFF0C\u628A\u5408\u8BA1push\u8FDBdataSource\u91CC\u5C31\u597D\u3002</p><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#61AFEF;">getList</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;">// \u8BF7\u6C42\u6570\u636E ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">success</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">r</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">result</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">records</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">result</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;">// \u8BA1\u7B97\u5408\u8BA1</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">Array</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">isArray</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">r</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">r</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;">// \u9700\u8981\u8BA1\u7B97\u7684\u5B57\u6BB5\uFF1Aamount, containerQuantity, quantity, amount</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;">// \u4F7F\u7528reduce\u6C42\u548C</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">sumAmount</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">r</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">reduce</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">acc</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">cur</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">acc</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">cur</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">amount</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">sumQuantity</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">r</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">reduce</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">acc</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">cur</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">acc</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">cur</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">quantity</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;">// \u514B\u9686\u6570\u7EC4\u7684\u7B2C\u4E00\u9879\u8D4B\u503C\u7ED9lastItem</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">sumRow</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { ...</span><span style="color:#E06C75;">r</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">] };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;">// \u904D\u5386sumRow\u7684key\uFF0C\u7528switch case\u5224\u65AD\u662F\u5426\u4E3A\u9700\u8981\u8BA1\u7B97\u7684\u5B57\u6BB5\uFF0C\u662F\u5219\u8D4B\u503C\u7ED9\u4E0A\u9762\u8BA1\u7B97\u597D\u7684\u603B\u548C</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">key</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">sumRow</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">switch</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#7F848E;">// id\u4E3A\u7B2C\u4E00\u5217\uFF0C\u663E\u793A&#39;\u5408\u8BA1&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#C678DD;">case</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;id&#39;</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">sumRow</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;\u5408\u8BA1&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#C678DD;">case</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;amount&#39;</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">sumRow</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">sumAmount</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#C678DD;">case</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;quantity&#39;</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">sumRow</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">sumQuantity</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">sumRow</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;">// \u5C06\u8BA1\u7B97\u597D\u7684sumRow push\u8FDB\u6570\u7EC4\uFF0C</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">r</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">sumRow</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;">// \u628A\u589E\u52A0\u4E86\u5408\u8BA1\u5217</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">dataSource</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">r</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;">// ..</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;</span><span style="color:#E06C75;">a-table</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#D19A66;">size</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;middle&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#D19A66;">:columns</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;isDetail ? columns2 : columns&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#D19A66;">:dataSource</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;dataSource&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#D19A66;">:pagination</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;ipagination&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#D19A66;">@change</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;handleTableChange&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">a-table</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5751\uFF1A</p><p>\u4E4B\u524D\u5199\u7684<code>sumRow[key] = &#39;&#39;</code>\uFF0C\u540E\u6765\u53C8\u5728\u91D1\u989D\u663E\u793A\u4E0A\u52A0\u4E86filter\uFF0C\u663E\u793A.00\u4E24\u4F4D\u5C0F\u6570\uFF0C\u4E8E\u662F\u4EA7\u751F\u4E86\u4E00\u4E9B\u8BA1\u7B97\uFF0C\u53D8\u6210<code>sumRow[key] = null</code> \u5C31\u6CA1\u95EE\u9898\u4E86\u3002</p><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#C678DD;">switch</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#7F848E;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">sumRow</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,8),e=[o];function B(r,c,t,y,i,A){return a(),n("div",null,e)}const b=s(p,[["render",B]]);export{u as __pageData,b as default};
