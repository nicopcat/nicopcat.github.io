import{_ as s,c as n,o as a,a as l}from"./app.928dab02.js";const d=JSON.parse('{"title":"9 - MongoDB","description":"","frontmatter":{"layout":"doc","title":"9 - MongoDB"},"headers":[{"level":2,"title":"SQL\u548CNoSQL\u7684\u533A\u522B","slug":"sql\u548Cnosql\u7684\u533A\u522B","link":"#sql\u548Cnosql\u7684\u533A\u522B","children":[]},{"level":2,"title":"MongoDB Setup & Atlas","slug":"mongodb-setup-atlas","link":"#mongodb-setup-atlas","children":[]},{"level":2,"title":"Mongoose, Models & Schemas","slug":"mongoose-models-schemas","link":"#mongoose-models-schemas","children":[{"level":3,"title":"Mongoose","slug":"mongoose","link":"#mongoose","children":[]},{"level":3,"title":"Schemas","slug":"schemas","link":"#schemas","children":[]},{"level":3,"title":"Models","slug":"models","link":"#models","children":[]}]},{"level":2,"title":"\u5B9E\u6218","slug":"\u5B9E\u6218","link":"#\u5B9E\u6218","children":[{"level":3,"title":"\u521B\u5EFAschema  & model","slug":"\u521B\u5EFAschema-model","link":"#\u521B\u5EFAschema-model","children":[]}]},{"level":2,"title":"Getting & Saving","slug":"getting-saving","link":"#getting-saving","children":[]},{"level":2,"title":"Outputting Documents in Views","slug":"outputting-documents-in-views","link":"#outputting-documents-in-views","children":[]}],"relativePath":"backend/Node.js/09_MongoDB.md","lastUpdated":1687271949000}'),p={name:"backend/Node.js/09_MongoDB.md"},o=l(`<h1 id="_9-mongodb" tabindex="-1">9 - MongoDB <a class="header-anchor" href="#_9-mongodb" aria-hidden="true">#</a></h1><h2 id="sql\u548Cnosql\u7684\u533A\u522B" tabindex="-1">SQL\u548CNoSQL\u7684\u533A\u522B <a class="header-anchor" href="#sql\u548Cnosql\u7684\u533A\u522B" aria-hidden="true">#</a></h2><table><thead><tr><th>SQL</th><th>NoSQL</th></tr></thead><tbody><tr><td>Table</td><td>Collections</td></tr><tr><td>Rows</td><td>Documents</td></tr><tr><td>Columns</td><td></td></tr><tr><td>\u8BE6\u60C5\u67E5\u770B\u6587\u7AE0[[SQL\u548CNoSQL\u7684\u533A\u522B]]]</td><td></td></tr></tbody></table><h2 id="mongodb-setup-atlas" tabindex="-1">MongoDB Setup &amp; Atlas <a class="header-anchor" href="#mongodb-setup-atlas" aria-hidden="true">#</a></h2><p><a href="https://cloud.mongodb.com/" target="_blank" rel="noreferrer">https://cloud.mongodb.com/</a></p><h2 id="mongoose-models-schemas" tabindex="-1">Mongoose, Models &amp; Schemas <a class="header-anchor" href="#mongoose-models-schemas" aria-hidden="true">#</a></h2><h3 id="mongoose" tabindex="-1">Mongoose <a class="header-anchor" href="#mongoose" aria-hidden="true">#</a></h3><ul><li>Mongoose is an ODM library - Object Document Mapping library.</li></ul><blockquote><p>Mongoose \u662F\u4E00\u4E2A Node.js \u73AF\u5883\u4E0B\u7684 Object Data Modeling\uFF08ODM\uFF09\u5E93\uFF0C\u5B83\u4E3A MongoDB \u6570\u636E\u5E93\u63D0\u4F9B\u4E86\u4E00\u79CD\u4F18\u96C5\u7684\u3001\u57FA\u4E8E\u6A21\u578B\u7684\u65B9\u5F0F\u6765\u64CD\u4F5C\u6570\u636E\u3002Mongoose \u7684\u8BBE\u8BA1\u76EE\u6807\u662F\u8BA9\u5F00\u53D1\u8005\u80FD\u591F\u66F4\u8F7B\u677E\u5730\u5728 Node.js \u5E94\u7528\u7A0B\u5E8F\u4E2D\u4F7F\u7528 MongoDB \u6570\u636E\u5E93\uFF0C\u5B83\u63D0\u4F9B\u4E86\u4E00\u4E9B\u65B9\u4FBF\u7684\u529F\u80FD\uFF0C\u5982\u6A21\u578B\u5B9A\u4E49\u3001\u67E5\u8BE2\u6784\u5EFA\u3001\u6570\u636E\u9A8C\u8BC1\u3001\u4E2D\u95F4\u4EF6\u7B49\u3002</p><p>Mongoose \u63D0\u4F9B\u4E86\u4E00\u79CD\u7C7B\u4F3C\u4E8E ORM\uFF08Object-Relational Mapping\uFF09\u6846\u67B6\u7684\u65B9\u5F0F\u6765\u64CD\u4F5C MongoDB \u6570\u636E\u5E93\uFF0C\u901A\u8FC7\u5B9A\u4E49\u6A21\u578B\uFF08Model\uFF09\u3001\u6587\u6863\uFF08Document\uFF09\u548C\u67E5\u8BE2\u5668\uFF08Query\uFF09\u7B49\u6982\u5FF5\uFF0C\u4F7F\u5F00\u53D1\u8005\u80FD\u591F\u66F4\u52A0\u65B9\u4FBF\u5730\u8FDB\u884C\u6570\u636E\u5E93\u64CD\u4F5C\u3002\u540C\u65F6\uFF0CMongoose \u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E9B\u65B9\u4FBF\u7684\u529F\u80FD\uFF0C\u5982\u6570\u636E\u9A8C\u8BC1\u3001\u67E5\u8BE2\u6784\u5EFA\u5668\u3001\u4E2D\u95F4\u4EF6\u7B49\uFF0C\u4F7F\u5F97\u5F00\u53D1\u8005\u80FD\u591F\u66F4\u52A0\u8F7B\u677E\u5730\u6784\u5EFA\u590D\u6742\u7684\u5E94\u7528\u7A0B\u5E8F\u3002</p></blockquote><h3 id="schemas" tabindex="-1">Schemas <a class="header-anchor" href="#schemas" aria-hidden="true">#</a></h3><ul><li>Schemas defines the structure of a type of data / document <ul><li>Properties &amp; property types</li></ul></li></ul><blockquote><p>\u5728 Mongoose \u4E2D\uFF0CSchema \u662F\u7528\u6765\u5B9A\u4E49 MongoDB \u4E2D\u96C6\u5408\uFF08collection\uFF09\u7684\u7ED3\u6784\u7684\u4E00\u79CD\u673A\u5236\uFF0C\u5B83\u7C7B\u4F3C\u4E8E\u5173\u7CFB\u6570\u636E\u5E93\u4E2D\u7684\u8868\u7ED3\u6784\u5B9A\u4E49\u3002Schema \u5B9A\u4E49\u4E86\u96C6\u5408\u4E2D\u7684\u5B57\u6BB5\u3001\u6570\u636E\u7C7B\u578B\u3001\u9ED8\u8BA4\u503C\u3001\u9A8C\u8BC1\u89C4\u5219\u7B49\u4FE1\u606F\uFF0C\u4EE5\u53CA\u5BF9\u8FD9\u4E9B\u5B57\u6BB5\u8FDB\u884C\u64CD\u4F5C\u7684\u65B9\u6CD5\uFF0C\u4F8B\u5982\u589E\u52A0\u3001\u5220\u9664\u3001\u4FEE\u6539\u7B49\u3002\u901A\u8FC7\u5B9A\u4E49 Schema\uFF0CMongoose \u53EF\u4EE5\u5BF9 MongoDB \u4E2D\u7684\u6570\u636E\u8FDB\u884C\u66F4\u52A0\u65B9\u4FBF\u3001\u5F3A\u5927\u7684\u64CD\u4F5C\u3002</p><p>Schema \u53EF\u4EE5\u5305\u542B\u4EE5\u4E0B\u7C7B\u578B\uFF1A</p><p>\u57FA\u672C\u7C7B\u578B\uFF1AString\u3001Number\u3001Date\u3001Boolean\u3001Buffer\u3001ObjectID\u3001Mixed \u6570\u7EC4\u7C7B\u578B\uFF1A[String]\u3001[Number]\u3001[Date]\u3001[Boolean]\u3001[Buffer]\u3001[ObjectID]\u3001[Mixed] \u5D4C\u5957\u7C7B\u578B\uFF1A\u5305\u542B\u5176\u4ED6 Schema \u7C7B\u578B\u7684\u5BF9\u8C61</p></blockquote><p>\u4F8B\u5982\uFF1A</p><table><thead><tr><th>User Schema</th><th>Blog Schema</th></tr></thead><tbody><tr><td>name(string), required</td><td>title(string), required</td></tr><tr><td>age(string)</td><td>snippets(string), required</td></tr><tr><td>bio(string), required</td><td>body(string), required</td></tr></tbody></table><h3 id="models" tabindex="-1">Models <a class="header-anchor" href="#models" aria-hidden="true">#</a></h3><p>Models allow us to communcate with database collections.</p><h2 id="\u5B9E\u6218" tabindex="-1">\u5B9E\u6218 <a class="header-anchor" href="#\u5B9E\u6218" aria-hidden="true">#</a></h2><p>\u6CE8\u518C\uFF0C\u521B\u5EFAClusters\uFF0C\u521B\u5EFACollections, \u6700\u540E\u5C06DB\u5730\u5740\u653E\u5230app.js\u4E2D</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#7F848E;">// connect to MongoDB</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">dbURI</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;mongodb+srv://nekolas:admin123@webappcluster.rxnnbvp.mongodb.net/&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// \u5728.net/ \u540E\u9762\u53EF\u4EE5\u6307\u5B9A\u96C6\u5408\u540D\u79F0\uFF0C\u5982.net/learnNodeDB</span></span>
<span class="line"><span style="color:#7F848E;">// \u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u7CFB\u7EDF\u4F1A\u5206\u53D1\u4E00\u4E2Atest \u96C6\u5408\uFF0C\u5E76\u628A\u6570\u636E\u5B58\u653E\u5176\u4E2D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">mongoose</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">connect</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">dbURI</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">r</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;connecting to db&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">listen</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3000</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}).</span><span style="color:#61AFEF;">catch</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u521B\u5EFAconnect\u540E\u91CD\u8DD1\uFF0C\u53D1\u73B0\u62A5\u9519\uFF1A</p><blockquote><p>MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you&#39;re trying to access the database from an IP that isn&#39;t whitelisted.</p></blockquote><p>\u770B\u5230\u8FD9\u4E2A\u62A5\u9519\uFF0C\u53EA\u9700\u8981\u53BB SECURTIY &gt; Network Access &gt; + ADD IP ADDRESS &gt; ADD CURRENT IP ADDRESS</p><p>\u70B9\u51FBConfirm, \u4FDD\u5B58<code>0.0.0.0/0</code> \u8FD9\u4E2A\u5730\u5740\u5373\u53EF\u3002</p><h3 id="\u521B\u5EFAschema-model" tabindex="-1">\u521B\u5EFAschema &amp; model <a class="header-anchor" href="#\u521B\u5EFAschema-model" aria-hidden="true">#</a></h3><p>\u5728\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA\u6587\u4EF6\u5939models\uFF0C\u4E14\u65B0\u5EFAblog.js\u3002\u8BA9\u6211\u4EEC\u5728blog.js\u4E2D\u521B\u5EFA\u4E00\u4E9Bblog schema\uFF0C\u5176\u5B9E\u5C31\u662F\u5B9A\u4E49\u5173\u4E8Eblog\u7684\u4E00\u4E9B\u5B57\u6BB5\u548C\u7C7B\u578B\u3002</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">mongoose</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;mongoose&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Schema</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">mongoose</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">Schema</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">blogSchema</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Schema</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">String</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">required</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">snippets</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">String</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">required</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">String</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">required</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">}, { </span><span style="color:#E06C75;">timestamps</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;"> });</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u6839\u636E\u6211\u4EEC\u5B9A\u4E49\u7684blog schema\uFF0C\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2Amodel:</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Blog</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">mongoose</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">model</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Blog&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">blogSchema</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6700\u540E\uFF0C\u9700\u8981\u5C06\u521A\u521A\u521B\u5EFA\u597D\u7684model export\u51FA\u53BB\u3002</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#7F848E;">//...</span></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">Blog</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="getting-saving" tabindex="-1">Getting &amp; Saving <a class="header-anchor" href="#getting-saving" aria-hidden="true">#</a></h2><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u8BD5\u7740\u5C06\u6570\u636E\u4FDD\u5B58\u5230\u6570\u636E\u5E93\u4E2D\u3002</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#7F848E;">// \u5F15\u5165model:</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Blog</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;./models/blog&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// \u5728new post \u9875\u9762\u5199\u4E00\u4E9B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/new&#39;</span><span style="color:#ABB2BF;">, (</span><span style="color:#E06C75;">req</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">blog</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Blog</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u4ECA\u5929\u9001\u6C34\u7684\u597D\u6162&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">snippets</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u4ED6\u662F\u4ECE\u6842\u6797\u9001\u8FC7\u6765\u7684\u4E48&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u4ECE\u65E9\u4E0A10\u70B9\u6574\u5230\u4E0B\u534814:41\uFF0C\u90FD\u591F\u53BB\u6842\u6797\u7684\u6765\u56DE\u4E86\u3002\u771F\u662F\u6709\u591F\u6162\u7684\u3002&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;">// \u8C03\u7528save()\u65B9\u6CD5\uFF0C\u8C03\u7528\u5F02\u6B65\u8BF7\u6C42\uFF0C\u5C06\u6570\u636E\u4FDD\u5B58\u5230\u6570\u636E\u5E93</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">blog</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">save</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">r</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">r</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">send</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">r</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">   }).</span><span style="color:#61AFEF;">catch</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u7528find\u65B9\u6CD5\u8BFB\u53D6\u6240\u6709blogs\uFF1A</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/all-blogs&#39;</span><span style="color:#ABB2BF;">, (</span><span style="color:#E06C75;">req</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">Blog</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">r</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">r</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">send</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">r</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">   }).</span><span style="color:#61AFEF;">catch</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u7528<code>findById</code>\u65B9\u6CD5\u8BFB\u53D6\u67D0\u4E00\u7BC7blog\uFF1A</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/single-blog&#39;</span><span style="color:#ABB2BF;">, (</span><span style="color:#E06C75;">req</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">Blog</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">findById</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;648972ae90c7b60531212d46&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">r</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">r</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">send</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">r</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">   }).</span><span style="color:#61AFEF;">catch</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="outputting-documents-in-views" tabindex="-1">Outputting Documents in Views <a class="header-anchor" href="#outputting-documents-in-views" aria-hidden="true">#</a></h2><p>\u662F\u65F6\u5019\u628A\u6570\u636E\u5E93\u7684blog\u6E32\u67D3\u5230\u9875\u9762\u4E86\u3002</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/blogs&#39;</span><span style="color:#ABB2BF;">, (</span><span style="color:#E06C75;">req</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;">// \u627E\u5230\u6240\u6709\u7684\u535A\u6587</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">Blog</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">r</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;">// \u6E32\u67D3\uFF0C\u4F20\u53C2</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;index&#39;</span><span style="color:#ABB2BF;">,{</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;About&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">blogs</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">r</span><span style="color:#ABB2BF;">});</span></span>
<span class="line"><span style="color:#ABB2BF;">   }).</span><span style="color:#61AFEF;">catch</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>find()\u65B9\u6CD5\u540E\u53EF\u4EE5\u63A5\u4E00\u4E2A.sort()\u65B9\u6CD5\uFF0C\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\uFF1A</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#E5C07B;">Blog</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">sort</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">createdAt</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">}).</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">catch</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4E0A\u9762\u5199\u6CD5\u6839\u636E\u521B\u5EFA\u65F6\u95F4\u7684\u5012\u5E8F\u6392\u5E8F\uFF0C\u4E5F\u5C31\u662F\u6700\u65B0\u7684\u535A\u6587\u653E\u5728\u6700\u4E0A\u9762\u3002</p>`,43),e=[o];function r(c,t,B,y,i,F){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{d as __pageData,b as default};