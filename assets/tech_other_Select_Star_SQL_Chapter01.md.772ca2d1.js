import{_ as s,c as e,o as a,a as l}from"./app.3fa27a80.js";const _=JSON.parse('{"title":"SQL\u5B66\u4E60 - Select Star SQL 01","description":"","frontmatter":{"title":"SQL\u5B66\u4E60 - Select Star SQL 01","date":"2023-02-27T09:00:00.000Z","tags":["SQL"],"draft":false,"showToc":false,"layout":"doc"},"headers":[{"level":2,"title":"\u7528SQL\u7B97\u6570","slug":"\u7528sql\u7B97\u6570","link":"#\u7528sql\u7B97\u6570","children":[]},{"level":2,"title":"\u8FD0\u7B97\u7B26","slug":"\u8FD0\u7B97\u7B26","link":"#\u8FD0\u7B97\u7B26","children":[]},{"level":2,"title":"% \u548C _ \u901A\u914D\u7B26","slug":"\u548C-\u901A\u914D\u7B26","link":"#\u548C-\u901A\u914D\u7B26","children":[]},{"level":2,"title":"SQL\u7684\u8BED\u6CD5\u548C\u7ED3\u6784","slug":"sql\u7684\u8BED\u6CD5\u548C\u7ED3\u6784","link":"#sql\u7684\u8BED\u6CD5\u548C\u7ED3\u6784","children":[]},{"level":2,"title":"SQL\u5173\u952E\u5B57","slug":"sql\u5173\u952E\u5B57","link":"#sql\u5173\u952E\u5B57","children":[]},{"level":2,"title":"SQL\u8FD0\u7B97","slug":"sql\u8FD0\u7B97","link":"#sql\u8FD0\u7B97","children":[]},{"level":2,"title":"% \u548C _ \u901A\u914D\u7B26","slug":"\u548C-\u901A\u914D\u7B26-1","link":"#\u548C-\u901A\u914D\u7B26-1","children":[]},{"level":2,"title":"\u5982\u4F55\u5199\u6CE8\u91CA","slug":"\u5982\u4F55\u5199\u6CE8\u91CA","link":"#\u5982\u4F55\u5199\u6CE8\u91CA","children":[]},{"level":2,"title":"\u5F53\u8868\u7684\u540D\u5B57\u4E0E\u5173\u952E\u5B57\u91CD\u590D\u2026\u2026\uFF1F","slug":"\u5F53\u8868\u7684\u540D\u5B57\u4E0E\u5173\u952E\u5B57\u91CD\u590D\u2026\u2026\uFF1F","link":"#\u5F53\u8868\u7684\u540D\u5B57\u4E0E\u5173\u952E\u5B57\u91CD\u590D\u2026\u2026\uFF1F","children":[]}],"relativePath":"tech_other/Select_Star_SQL_Chapter01.md","lastUpdated":1678036510000}'),n={name:"tech_other/Select_Star_SQL_Chapter01.md"},r=l(`<h1 id="sql\u5B66\u4E60-select-star-sql-01" tabindex="-1">SQL\u5B66\u4E60 - Select Star SQL 01 <a class="header-anchor" href="#sql\u5B66\u4E60-select-star-sql-01" aria-hidden="true">#</a></h1><blockquote><p>If you&#39;d like a more complete introduction to SQL, try Select Star SQL.</p></blockquote><p>\u89E3\u51B3\u5B8C SQL Murder Mystery \u89C9\u5F97\u8FD8\u4E0D\u8FC7\u763E\uFF08\uFF1F\uFF09\uFF0C\u53EF\u4EE5\u8BD5\u8BD5\u53E6\u4E00\u4E2A\u5B66\u4E60\u7F51\u7AD9\uFF1A<strong><a href="https://selectstarsql.com/" target="_blank" rel="noreferrer">Select Star SQL</a></strong></p><p>\u7F51\u5740\uFF1A<a href="https://selectstarsql.com/" target="_blank" rel="noreferrer">https://selectstarsql.com/</a></p><hr><h2 id="\u7528sql\u7B97\u6570" tabindex="-1">\u7528SQL\u7B97\u6570 <a class="header-anchor" href="#\u7528sql\u7B97\u6570" aria-hidden="true">#</a></h2><p>SQL\u8FD8\u53EF\u4EE5\u7528\u4F5C<strong>\u8BA1\u7B97\u5668</strong>\uFF1F\u786E\u5B9E\u662F\u53EF\u4EE5\u7684\uFF0C\u800C\u4E14\u4E0D\u9700\u8981\u4F7F\u7528 FROM \u5173\u952E\u5B57\uFF01\uFF1A</p><p><img src="https://nic-gz-1308403500.file.myqcloud.com/gruvbox/Select_Star_SQL_Chapter01-2023-02-27-17-27-09.png" alt="sql_image"></p><h2 id="\u8FD0\u7B97\u7B26" tabindex="-1">\u8FD0\u7B97\u7B26 <a class="header-anchor" href="#\u8FD0\u7B97\u7B26" aria-hidden="true">#</a></h2><p>\u4F8B\u5B50\uFF1A</p><div class="language-sql line-numbers-mode"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> first_name,last_name,ex_age</span></span>
<span class="line"><span style="color:#C678DD;">FROM</span><span style="color:#ABB2BF;"> executions</span></span>
<span class="line"><span style="color:#C678DD;">WHERE</span><span style="color:#ABB2BF;"> ex_age </span><span style="color:#56B6C2;">&lt;=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">25</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u548C-\u901A\u914D\u7B26" tabindex="-1">% \u548C _ \u901A\u914D\u7B26 <a class="header-anchor" href="#\u548C-\u901A\u914D\u7B26" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 <code>LIKE</code> \u5173\u952E\u5B57\u642D\u914D <code>%</code>\u548C<code>_</code> \u901A\u914D\u7B26\uFF0C\u53EF\u4EE5\u8D77\u5230\u6A21\u7CCA\u67E5\u8BE2\u7684\u4F5C\u7528\u3002</p><p>\u5B83\u4FE9\u7684\u533A\u522B\uFF0C\u4E3B\u8981\u662F_\u66F4\u4E25\u683C\uFF0C\u4F8B\u5982\uFF1A</p><h2 id="sql\u7684\u8BED\u6CD5\u548C\u7ED3\u6784" tabindex="-1">SQL\u7684\u8BED\u6CD5\u548C\u7ED3\u6784 <a class="header-anchor" href="#sql\u7684\u8BED\u6CD5\u548C\u7ED3\u6784" aria-hidden="true">#</a></h2><p>SQL\u662F\u4E00\u79CD\u548C\u6570\u636E\uFF08\u4E3B\u8981\u662Ftable\uFF09\u6253\u4EA4\u9053\u7684\u8BED\u8A00\uFF0C\u5B83\u5305\u62EC\uFF1A</p><ul><li>SQL\u5173\u952E\u5B57\uFF08\u5982\u4E0A\u6587\u4E2D\u7684<code>SELECT</code>\u548C<code>FROM</code>\uFF09</li><li>\u5217\u540D\uFF08\u5982\u4E0A\u6587\u4E2D\u7684name\u5217\uFF09</li><li>\u8868\u540D\uFF08\u5982\u4E0A\u6587\u4E2D\u7684person\u8868\uFF09</li><li>\u901A\u914D\u7B26\uFF08\u5982<code>%</code>\uFF09</li><li>\u51FD\u6570</li><li>\u7B5B\u9009\u6761\u4EF6</li><li>\u7B49</li></ul><h2 id="sql\u5173\u952E\u5B57" tabindex="-1">SQL\u5173\u952E\u5B57 <a class="header-anchor" href="#sql\u5173\u952E\u5B57" aria-hidden="true">#</a></h2><ul><li><strong>SELECT</strong>\uFF1A\u4ECE\u4E00\u4E2A\u6216\u591A\u4E2A\u6570\u636E\u5E93\u8868\u4E2D\u83B7\u53D6\u6570\u636E\uFF0C\u5141\u8BB8\u6307\u5B9A\u8981\u68C0\u7D22\u7684\u5217\u548C\u8981\u4ECE\u4E2D\u68C0\u7D22\u5B83\u4EEC\u7684\u8868\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528SUM\u3001COUNT\u3001AVG\u7B49\u51FD\u6570\u6267\u884C\u8BA1\u7B97\u548C\u64CD\u4F5C\u6570\u636E\u3002</li><li><strong>FROM</strong>\uFF1A\u9009\u62E9\u76F8\u5E94\u7684\u8868\u683C\uFF0C\u5982person\u8868\u3002</li><li><strong>WHERE</strong>\uFF1A\u6309\u7279\u5B9A\u6761\u4EF6\u8FC7\u6EE4\u7ED3\u679C\u3002</li><li><strong>AND</strong>\uFF1A\u5C06\u591A\u4E2A\u8FC7\u6EE4\u6761\u4EF6\u4E32\u5728\u4E00\u8D77\uFF0C\u53EA\u8FD4\u56DE\u7B26\u5408\u6240\u6709\u6761\u4EF6\u7684\u884C\u3002</li><li><strong>OR</strong>\uFF1A\u4E0EAND\u7C7B\u4F3C\uFF0C\u4F46\u8FD4\u56DE\u7B26\u5408\u4EFB\u4F55\u6761\u4EF6\u7684\u884C\u3002</li></ul><h2 id="sql\u8FD0\u7B97" tabindex="-1">SQL\u8FD0\u7B97 <a class="header-anchor" href="#sql\u8FD0\u7B97" aria-hidden="true">#</a></h2><p>\u6709\u65F6\u5019\u5E76\u4E0D\u9700\u8981FROM\u5173\u952E\u5B57\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8FDB\u884C\u8FD0\u7B97\u3002</p><h2 id="\u548C-\u901A\u914D\u7B26-1" tabindex="-1">% \u548C _ \u901A\u914D\u7B26 <a class="header-anchor" href="#\u548C-\u901A\u914D\u7B26-1" aria-hidden="true">#</a></h2><p>\u4F7F\u7528<code>LIKE</code>\u5173\u952E\u5B57\u642D\u914D<code>%</code>\u548C<code>_</code>\u901A\u914D\u7B26\uFF0C\u53EF\u4EE5\u8FDB\u884C\u6A21\u7CCA\u67E5\u8BE2\u3002</p><div class="language-sql line-numbers-mode"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#ABB2BF;">// B_b \u53EF\u4EE5\u5339\u914D Bob, Beb, ..</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">// B%b \u4E0D\u4EC5\u53EF\u4EE5\u5339\u914D Bob\u6216Beb\uFF0C\u8FD8\u53EF\u4EE5\u5339\u914D Booob, \u6216 Bssjseb\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u5982\u4F55\u5199\u6CE8\u91CA" tabindex="-1">\u5982\u4F55\u5199\u6CE8\u91CA <a class="header-anchor" href="#\u5982\u4F55\u5199\u6CE8\u91CA" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u4F7F\u7528\u5355\u884C\u6CE8\u91CA<code>--</code>\u548C\u591A\u884C\u6CE8\u91CA<code>/* ... */</code>\u3002</p><div class="language-sql line-numbers-mode"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#7F848E;">-- \u8FD9\u662F\u5355\u884C\u6CE8\u91CA</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">/* \u8FD9\u662F\u591A\u884C\u6CE8\u91CA</span></span>
<span class="line"><span style="color:#7F848E;">\u770B\u770B\u554A</span></span>
<span class="line"><span style="color:#7F848E;">*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u5F53\u8868\u7684\u540D\u5B57\u4E0E\u5173\u952E\u5B57\u91CD\u590D\u2026\u2026\uFF1F" tabindex="-1">\u5F53\u8868\u7684\u540D\u5B57\u4E0E\u5173\u952E\u5B57\u91CD\u590D\u2026\u2026\uFF1F <a class="header-anchor" href="#\u5F53\u8868\u7684\u540D\u5B57\u4E0E\u5173\u952E\u5B57\u91CD\u590D\u2026\u2026\uFF1F" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u4F7F\u7528\u53CD\u5F15\u53F7</p><p>In SQL, strings are denoted by single quotes. Backticks (ie\xA0<strong>\`\`\`</strong> ) can be used to denote column and table names.</p><div class="language-sql line-numbers-mode"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">\`from\`</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">FROM</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">\`where\`</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">WHERE</span><span style="color:#ABB2BF;"> ....</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,31),t=[r];function p(c,o,i,d,h,u){return a(),e("div",null,t)}const S=s(n,[["render",p]]);export{_ as __pageData,S as default};
