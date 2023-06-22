import{_ as e,c as a,o as t,a as o}from"./app.75c5b203.js";const m=JSON.parse('{"title":"Chapter 4 - Execution Hiatuses","description":"","frontmatter":{"title":"Chapter 4 - Execution Hiatuses","layout":"doc"},"headers":[{"level":3,"title":"INNER JOIN","slug":"inner-join","link":"#inner-join","children":[]},{"level":3,"title":"LEFT JOIN","slug":"left-join","link":"#left-join","children":[]},{"level":3,"title":"RIGHT JOIN","slug":"right-join","link":"#right-join","children":[]},{"level":3,"title":"OUTER JOIN","slug":"outer-join","link":"#outer-join","children":[]},{"level":2,"title":"ref","slug":"ref","link":"#ref","children":[]}],"relativePath":"home/BACKEND/SQL/04_Select_Star_SQL.md","lastUpdated":1687421958000}'),r={name:"home/BACKEND/SQL/04_Select_Star_SQL.md"},n=o(`<h1 id="chapter-4-execution-hiatuses" tabindex="-1">Chapter 4 - Execution Hiatuses <a class="header-anchor" href="#chapter-4-execution-hiatuses" aria-hidden="true">#</a></h1><h1 id="join" tabindex="-1">JOIN <a class="header-anchor" href="#join" aria-hidden="true">#</a></h1><p>JOIN\u662F\u4E00\u4E2A\u628A\u591A\u4E2A\u8868\u62FC\u5728\u4E00\u8D77\u7684\u5173\u952E\u5B57\u3002</p><p>\u6709\u4EE5\u4E0B\u51E0\u79CD\u7C7B\u578B\uFF1A</p><ul><li><code>(INNER) JOIN</code>: Returns records that have matching values in both tables</li><li><code>LEFT (OUTER) JOIN</code>: Returns all records from the left table, and the matched records from the right table</li><li><code>RIGHT (OUTER) JOIN</code>: Returns all records from the right table, and the matched records from the left table</li><li><code>FULL (OUTER) JOIN</code>: Returns all records when there is a match in either left or right table</li></ul><p>\u53EF\u4EE5\u7406\u89E3\u4E3A\uFF0CLEFT\u6216RIGHT\u7684\u8868\uFF0C\u4FDD\u7559\u66F4\u591A\u7684\u6570\u636E(unmatched)\uFF0C\u53E6\u5916\u4E00\u8FB9\u7684\u4E3A\u7A7A\uFF1BOUTER\u5219\u4FDD\u7559\u4E24\u8FB9</p><h3 id="inner-join" tabindex="-1">INNER JOIN <a class="header-anchor" href="#inner-join" aria-hidden="true">#</a></h3><p>JOIN\u9ED8\u8BA4\u4E3A\u201CINNER JOIN\u201D, in which unmatched rows are dropped.</p><p><img src="https://www.w3schools.com/sql/img_innerjoin.gif" alt="img_innerjoin.gif"></p><h3 id="left-join" tabindex="-1">LEFT JOIN <a class="header-anchor" href="#left-join" aria-hidden="true">#</a></h3><p>To preserve all the rows of the left table, we use a\xA0<strong><code>LEFT JOIN</code></strong> \xA0in place of the vanilla\xA0**<code>JOIN</code>.**The empty parts of the row are left alone, which means they evaluate to\xA0<strong><code>NULL</code></strong>.</p><p><img src="https://www.w3schools.com/sql/img_leftjoin.gif" alt="join_left.png"></p><h3 id="right-join" tabindex="-1"><strong>RIGHT JOIN</strong> <a class="header-anchor" href="#right-join" aria-hidden="true">#</a></h3><p>can be used to preserve unmatched rows in the right table, <img src="https://www.w3schools.com/sql/img_rightjoin.gif" alt="join_left.png"></p><h3 id="outer-join" tabindex="-1"><strong>OUTER JOIN</strong> <a class="header-anchor" href="#outer-join" aria-hidden="true">#</a></h3><p>can be used to preserve unmatched rows in both. <img src="https://www.w3schools.com/sql/img_fulljoin.gif" alt="join_left.png"></p><h1 id="dates" tabindex="-1">Dates <a class="header-anchor" href="#dates" aria-hidden="true">#</a></h1><p>\u65E5\u671F\u7684\u5F62\u5F0F\u6839\u636E\u6570\u636E\u5E93\u7C7B\u578B\u7A0D\u6709\u4E0D\u540C\uFF1A</p><p><strong>MySQL</strong>\xA0comes with the following data types for storing a date or a date/time value in the database:</p><ul><li><code>DATE</code>\xA0- format YYYY-MM-DD</li><li><code>DATETIME</code>\xA0- format: YYYY-MM-DD HH:MI:SS</li><li><code>TIMESTAMP</code>\xA0- format: YYYY-MM-DD HH:MI:SS</li><li><code>YEAR</code>\xA0- format YYYY or YY</li></ul><p><strong>SQL Server</strong>\xA0comes with the following data types for storing a date or a date/time value in the database:</p><ul><li><code>DATE</code>\xA0- format YYYY-MM-DD</li><li><code>DATETIME</code>\xA0- format: YYYY-MM-DD HH:MI:SS</li><li><code>SMALLDATETIME</code>\xA0- format: YYYY-MM-DD HH:MI:SS</li><li><code>TIMESTAMP</code>\xA0- format: a unique number</li></ul><p>\u800C\u4E14\uFF0C\u6709\u4E00\u4E9B\u6570\u636E\u5E93\u652F\u6301\u65E5\u671F\u76F8\u51CF\uFF01</p><p>wait what ??</p><p>\u6BD4\u5982<a href="https://www.sqlite.org/lang_datefunc.html" target="_blank" rel="noreferrer">\u6559\u7A0B</a>\u4F7F\u7528\u7684SQLite\uFF0C\u5C31\u6709\u4FE9\u7279\u5B9A\u7684\u5199\u6CD5<code>julianday</code>\u548C<code>unixepoch</code>\u3002</p><div class="language-sql line-numbers-mode"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> JULIANDAY(</span><span style="color:#98C379;">&#39;1993-08-10&#39;</span><span style="color:#ABB2BF;">) - JULIANDAY(</span><span style="color:#98C379;">&#39;1989-07-07&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">AS</span><span style="color:#ABB2BF;"> day_difference</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">-- \u8FD4\u56DE\u5929\u6570\uFF1A 1495</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h1 id="self-joins" tabindex="-1">Self Joins <a class="header-anchor" href="#self-joins" aria-hidden="true">#</a></h1><p>A powerful technique for allowing rows to get information from other parts of the same table.</p><h2 id="ref" tabindex="-1">ref <a class="header-anchor" href="#ref" aria-hidden="true">#</a></h2><ol><li><p><a href="https://selectstarsql.com/hiatuses.html" target="_blank" rel="noreferrer">Select Star SQL - hiatuses</a></p></li><li><p><a href="https://www.w3schools.com/sql/sql_join.asp" target="_blank" rel="noreferrer">SQL Joins - w3schools</a></p></li></ol>`,30),s=[n];function l(i,c,h,d,p,f){return t(),a("div",null,s)}const g=e(r,[["render",l]]);export{m as __pageData,g as default};
