import{_ as s,c as t,o as e,a}from"./app.3fa27a80.js";const b=JSON.parse('{"title":"SQL\u5B66\u4E60 - SQL Murder Mystery","description":"","frontmatter":{"title":"SQL\u5B66\u4E60 - SQL Murder Mystery","date":"2023-02-27T08:00:00.000Z","tags":["SQL"],"draft":false,"showToc":false,"layout":"doc"},"headers":[{"level":2,"title":"Learning SQL To-do List","slug":"learning-sql-to-do-list","link":"#learning-sql-to-do-list","children":[]},{"level":2,"title":"\u57FA\u672C\u6982\u5FF5","slug":"\u57FA\u672C\u6982\u5FF5","link":"#\u57FA\u672C\u6982\u5FF5","children":[]},{"level":2,"title":"query","slug":"query","link":"#query","children":[]},{"level":2,"title":"SQL Keywords","slug":"sql-keywords","link":"#sql-keywords","children":[]},{"level":2,"title":"\u89E3\u8C1C\u73AF\u8282","slug":"\u89E3\u8C1C\u73AF\u8282","link":"#\u89E3\u8C1C\u73AF\u8282","children":[{"level":3,"title":"\u539F\u59CB\u7EBF\u7D22\uFF1A","slug":"\u539F\u59CB\u7EBF\u7D22\uFF1A","link":"#\u539F\u59CB\u7EBF\u7D22\uFF1A","children":[]},{"level":3,"title":"\u7EBF\u7D221\uFF1A","slug":"\u7EBF\u7D221\uFF1A","link":"#\u7EBF\u7D221\uFF1A","children":[]}]},{"level":2,"title":"3. Morty Schapiro\u8BC1\u8BCD","slug":"_3-morty-schapiro\u8BC1\u8BCD","link":"#_3-morty-schapiro\u8BC1\u8BCD","children":[]},{"level":2,"title":"4. Annabel Miller\u8BC1\u8BCD","slug":"_4-annabel-miller\u8BC1\u8BCD","link":"#_4-annabel-miller\u8BC1\u8BCD","children":[]},{"level":2,"title":"5. \u8C03\u67E5 Get Fit Now Gym","slug":"_5-\u8C03\u67E5-get-fit-now-gym","link":"#_5-\u8C03\u67E5-get-fit-now-gym","children":[]},{"level":2,"title":"5. Jeremy Bowers\u7684\u4F9B\u8BCD","slug":"_5-jeremy-bowers\u7684\u4F9B\u8BCD","link":"#_5-jeremy-bowers\u7684\u4F9B\u8BCD","children":[]}],"relativePath":"tech_other/SQL_Murder_Mystery.md","lastUpdated":1678036510000}'),n={name:"tech_other/SQL_Murder_Mystery.md"},l=a(`<h1 id="sql\u5B66\u4E60-sql-murder-mystery" tabindex="-1">SQL\u5B66\u4E60 - SQL Murder Mystery <a class="header-anchor" href="#sql\u5B66\u4E60-sql-murder-mystery" aria-hidden="true">#</a></h1><p>\u4E00\u76F4\u60F3\u5B66\u5199SQL\u67E5\u8BE2\u8BED\u53E5\uFF0C\u6709\u4E00\u5929\uFF0C\u6211\u53D1\u73B0\u4E00\u4E2A\u9887\u597D\u73A9\u7684SQL\u5B66\u4E60\u7F51\u9875\uFF1A<br><strong>SQL Murder Mystery</strong></p><p>\u8FD9\u662F\u7531\u829D\u52A0\u54E5\u897F\u5317\u5927\u5B66Knight Lab\u5F00\u6E90\u7684SQL\u5B66\u4E60\u7F51\u7AD9\uFF0C\u6545\u4E8B\u4E3B\u9898\u662F\u4E00\u8D77\u51F6\u6740\u6848\uFF0C\u5B66\u4E60\u8005\u5C06\u4F7F\u7528SQL\u8BED\u53E5\u627E\u51FA\u7EBF\u7D22\uFF0C\u9501\u5B9A\u5ACC\u7591\u4EBA\u3002</p><p>\u542C\u8D77\u6765\u633A\u5E26\u611F\u7684\u54C8\u3002</p><p>\u7F51\u7AD9\uFF1A <a href="https://mystery.knightlab.com/walkthrough.html" target="_blank" rel="noreferrer">https://mystery.knightlab.com/walkthrough.html</a></p><p><img src="https://nic-gz-1308403500.file.myqcloud.com/gruvbox/Lets_Learn_SQL_01-2023-02-27-16-47-41.png" alt="web_img"></p><h2 id="learning-sql-to-do-list" tabindex="-1">Learning SQL To-do List <a class="header-anchor" href="#learning-sql-to-do-list" aria-hidden="true">#</a></h2><p>\u901A\u8FC7Notion\u7684AI\uFF0C\u8BD5\u7740\u751F\u6210\u4E86\u4E00\u4EFD\u5B66\u4E60SQL\u7684to-do list:</p><ul><li>[x] Start with the basics of SQL, including syntax and structure.</li><li>[x] Learn how to create and manipulate tables in a database using SQL commands.</li><li>[x] Practice writing SQL queries to extract data from tables.</li><li>[x] Understand how to use functions and operators in SQL commands.</li><li>[x] Explore advanced SQL concepts, such as subqueries and joins.</li><li>[ ] Learn how to use SQL to perform data analysis and generate reports.</li><li>[ ] Practice using SQL in a real-world scenario, such as solving a murder mystery with SQL Murder Mystery.</li><li>[ ] Challenge yourself to continually improve your SQL skills by taking on new projects and practicing regularly.</li></ul><h2 id="\u57FA\u672C\u6982\u5FF5" tabindex="-1">\u57FA\u672C\u6982\u5FF5 <a class="header-anchor" href="#\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a></h2><p><strong>SQL</strong>:</p><p>Structured Query Language\uFF0C \u662F\u548C\u6570\u636E\uFF08\u4E3B\u8981\u662Ftable\uFF09\u6253\u4EA4\u9053\u7684\u4E00\u79CD\u8BED\u8A00\u3002</p><p><strong>ERD</strong></p><p><strong>: Entity Relationship Diagram</strong>, <strong>\u5B9E\u4F53\u5173\u7CFB\u56FE\u8868</strong>\uFF0C\u8868\u683C\u5C55\u793A\u7684\u4E00\u79CD\u5F62\u5F0F\uFF0C\u53E6\u5916\u4E24\u79CD\u662FList\u548CDetail</p><p><img src="https://mystery.knightlab.com/schema.png" alt="schema"></p><p><strong>Primary Key:</strong></p><p>Primary Key \u662F SQL \u8868\u4E2D\u7528\u4E8E\u552F\u4E00\u6807\u8BC6\u6BCF\u4E2A\u8BB0\u5F55\u7684\u5217\u3002\u5B83\u7684\u503C\u5FC5\u987B\u552F\u4E00\u4E14\u4E0D\u80FD\u4E3A NULL\u3002</p><p><strong>Foreign Key:</strong></p><p>Foreign Key\u662FSQL\u8868\u4E2D\u7684\u4E00\u79CD\u5217\u5C5E\u6027\uFF0C\u5B83\u6307\u5411\u4E86\u53E6\u4E00\u5F20\u8868\u683C\u4E2D\u7684Primary Key\uFF0C\u7528\u4E8E\u8868\u683C\u4E4B\u95F4\u7684\u5173\u8054\u548C\u8FDE\u63A5\u3002</p><h2 id="query" tabindex="-1">query <a class="header-anchor" href="#query" aria-hidden="true">#</a></h2><p><strong>query\u662F</strong>\u4ECEtable\u4E2D\u83B7\u53D6\u60F3\u8981\u7684\u6570\u636E\u7684\u547D\u4EE4\u8BED\u53E5\uFF0C\u5305\u542B</p><ul><li>SQL keywords (like the <code>SELECT</code> and <code>FROM</code> above)</li><li>Column names (like the name column above)</li><li>Table names (like the person table above)</li><li>Wildcard characters (such as <code>%</code>)</li><li>Functions</li><li>Specific filtering criteria</li><li>Etc</li></ul><h2 id="sql-keywords" tabindex="-1">SQL Keywords <a class="header-anchor" href="#sql-keywords" aria-hidden="true">#</a></h2><p><strong>SELECT:</strong></p><p><code>SELECT &lt;column&gt;, &lt;column&gt;, ...</code></p><p>SQL \u7684 SELECT \u5173\u952E\u5B57\u7528\u4E8E\u4ECE\u4E00\u4E2A\u6216\u591A\u4E2A\u6570\u636E\u5E93\u8868\u4E2Dgrab\u6570\u636E\u3002\u5B83\u5141\u8BB8\u60A8\u6307\u5B9A\u8981\u68C0\u7D22\u7684\u5217\u548C\u8981\u4ECE\u4E2D\u68C0\u7D22\u5B83\u4EEC\u7684\u8868\u3002\u60A8\u8FD8\u53EF\u4EE5\u4F7F\u7528 SELECT \u5173\u952E\u5B57\u4F7F\u7528\u8BF8\u5982 SUM\u3001COUNT\u3001AVG \u7B49\u51FD\u6570\u6267\u884C\u8BA1\u7B97\u548C\u64CD\u4F5C\u6570\u636E\u3002</p><p><strong>FROM\uFF1A</strong></p><p><code>FROM &lt;table&gt;</code></p><p>\u9009\u62E9\u76F8\u5E94\u7684\u8868\u683C\uFF0C\u5982 person \u8868\u3002\u5F53\u7136\u4E5F\u53EF\u4EE5\u9009\u62E9\u591A\u4E2A\u8868\uFF0C\u4F46\u9700\u8981 <code>JOIN</code> \u5173\u952E\u5B57\u3002</p><p><strong>WHERE\uFF1A</strong></p><p>filter results by specific criteria.</p><p>\u4F8B\u5B50\uFF1A</p><div class="language-sql line-numbers-mode"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">FROM</span><span style="color:#ABB2BF;"> person </span><span style="color:#C678DD;">WHERE</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;Kinsey Erickson&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><strong>AND\uFF1A</strong></p><p>string together multiple filtering criteria so that the filtered results meet each and every one of the criteria.</p><p><strong>OR\uFF1A</strong></p><p>Same as AND, but returns rows that match any of the criteria</p><h2 id="\u89E3\u8C1C\u73AF\u8282" tabindex="-1">\u89E3\u8C1C\u73AF\u8282 <a class="header-anchor" href="#\u89E3\u8C1C\u73AF\u8282" aria-hidden="true">#</a></h2><h3 id="\u539F\u59CB\u7EBF\u7D22\uFF1A" tabindex="-1">\u539F\u59CB\u7EBF\u7D22\uFF1A <a class="header-anchor" href="#\u539F\u59CB\u7EBF\u7D22\uFF1A" aria-hidden="true">#</a></h3><p>You vaguely remember that the crime was a\xA0<strong>murder</strong>\xA0that occurred sometime on <strong>Jan.15, 2018</strong>\xA0and that it took place in <strong>SQL City</strong>.</p><h3 id="\u7EBF\u7D221\uFF1A" tabindex="-1">\u7EBF\u7D221\uFF1A <a class="header-anchor" href="#\u7EBF\u7D221\uFF1A" aria-hidden="true">#</a></h3><p>Security footage shows that there were 2 witnesses. The first witness lives at <strong>the last house</strong> on <strong>&quot;Northwestern Dr&quot;</strong>. The second witness, named <strong>Annabel</strong>, lives somewhere on <strong>&quot;Franklin Ave&quot;</strong>.</p><p>\u60F3\u67E5\u770B \u4F4F\u5728 <strong>&quot;Franklin Ave&quot;</strong> \u7684 <strong>Annabel</strong></p><div class="language-sql line-numbers-mode"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> *</span></span>
<span class="line"><span style="color:#C678DD;">FROM</span><span style="color:#ABB2BF;"> person</span></span>
<span class="line"><span style="color:#C678DD;">WHERE</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Annabel&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">AND</span><span style="color:#ABB2BF;"> address_street_name </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Franklin Ave&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">// </span><span style="color:#C678DD;">No</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">data</span><span style="color:#ABB2BF;"> returned</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u9519\u8BEF\uFF1A<strong>Annabel\u53EA\u662F\u540D\u5B57\uFF0C\u8981\u7528\u6A21\u7CCA\u67E5\u627E</strong></p><p>\u66F4\u6B63\uFF1A</p><div class="language-sql line-numbers-mode"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">FROM</span><span style="color:#ABB2BF;"> person </span><span style="color:#C678DD;">WHERE</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">LIKE</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;%Annabel%&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u627E\u5230\u7B2C\u4E8C\u8BC1\u4EBAAnnabel\u7684\u4FE1\u606F\u3002</p><table><thead><tr><th>id</th><th>name</th><th>license_id</th><th>address_number</th><th>address_street_name</th><th>ssn</th></tr></thead><tbody><tr><td>16371</td><td>Annabel Miller</td><td>490173</td><td>103</td><td>Franklin Ave</td><td>318771143</td></tr></tbody></table><p>\u627E\u5230\u7B2C\u4E00\u4E2A\u8BC1\u4EBA\uFF1A</p><div class="language-sql line-numbers-mode"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> * </span></span>
<span class="line"><span style="color:#C678DD;">FROM</span><span style="color:#ABB2BF;"> person </span></span>
<span class="line"><span style="color:#C678DD;">WHERE</span><span style="color:#ABB2BF;"> address_street_name </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Northwestern Dr&quot;</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;">ORDER BY</span><span style="color:#ABB2BF;"> address_number </span></span>
<span class="line"><span style="color:#C678DD;">DESC</span></span>
<span class="line"><span style="color:#C678DD;">LIMIT</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><table><thead><tr><th>id</th><th>name</th><th>license_id</th><th>address_number</th><th>address_street_name</th><th>ssn</th></tr></thead><tbody><tr><td>14887</td><td>Morty Schapiro</td><td>118009</td><td>4919</td><td>Northwestern Dr</td><td>111564949</td></tr></tbody></table><h2 id="_3-morty-schapiro\u8BC1\u8BCD" tabindex="-1">3. Morty Schapiro\u8BC1\u8BCD <a class="header-anchor" href="#_3-morty-schapiro\u8BC1\u8BCD" aria-hidden="true">#</a></h2><div class="language-sql line-numbers-mode"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> * </span></span>
<span class="line"><span style="color:#C678DD;">FROM</span><span style="color:#ABB2BF;"> interview</span></span>
<span class="line"><span style="color:#C678DD;">WHERE</span><span style="color:#ABB2BF;"> person_id </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;14887&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th>person_id</th><th>transcript</th></tr></thead><tbody><tr><td>14887</td><td>I heard a gunshot and then saw a man run out. He had a &quot;Get Fit Now Gym&quot; bag. The membership number on the bag started with &quot;48Z&quot;. Only gold members have those bags. The man got into a car with a plate that included &quot;H42W&quot;.</td></tr></tbody></table><h2 id="_4-annabel-miller\u8BC1\u8BCD" tabindex="-1">4. Annabel Miller\u8BC1\u8BCD <a class="header-anchor" href="#_4-annabel-miller\u8BC1\u8BCD" aria-hidden="true">#</a></h2><table><thead><tr><th>person_id</th><th>transcript</th></tr></thead><tbody><tr><td>16371</td><td>I saw the murder happen, and I recognized the killer from my gym when I was working out last week on January the 9th.</td></tr></tbody></table><h2 id="_5-\u8C03\u67E5-get-fit-now-gym" tabindex="-1">5. \u8C03\u67E5 Get Fit Now Gym <a class="header-anchor" href="#_5-\u8C03\u67E5-get-fit-now-gym" aria-hidden="true">#</a></h2><div class="language-sql line-numbers-mode"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> * </span></span>
<span class="line"><span style="color:#C678DD;">FROM</span><span style="color:#ABB2BF;"> get_fit_now_member gfnm </span></span>
<span class="line"><span style="color:#C678DD;">JOIN</span><span style="color:#ABB2BF;"> get_fit_now_check_in gfnci</span></span>
<span class="line"><span style="color:#C678DD;">ON</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">gfnm</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">gfnci</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">membership_id</span></span>
<span class="line"><span style="color:#C678DD;">WHERE</span><span style="color:#ABB2BF;"> id </span><span style="color:#C678DD;">LIKE</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;48Z%&quot;</span></span>
<span class="line"><span style="color:#C678DD;">AND</span><span style="color:#ABB2BF;"> membership_status </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;gold&quot;</span></span>
<span class="line"><span style="color:#C678DD;">AND</span><span style="color:#ABB2BF;"> check_in_date </span><span style="color:#C678DD;">LIKE</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;201801%&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><table><thead><tr><th>id</th><th>person_id</th><th>name</th><th>membership_start_date</th><th>membership_status</th><th>membership_id</th><th>check_in_date</th><th>check_in_time</th><th>check_out_time</th></tr></thead><tbody><tr><td>48Z7A</td><td>28819</td><td>Joe Germuska</td><td>20160305</td><td>gold</td><td>48Z7A</td><td>20180109</td><td>1600</td><td>1730</td></tr><tr><td>48Z55</td><td>67318</td><td>Jeremy Bowers</td><td>20160101</td><td>gold</td><td>48Z55</td><td>20180109</td><td>1530</td><td>1700</td></tr></tbody></table><p>\u6839\u636E\u8F66\u724C\u67E5\u5230\u4E24\u4E2A\u5ACC\u7591\u4EBA</p><div class="language-sql line-numbers-mode"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> * </span></span>
<span class="line"><span style="color:#C678DD;">FROM</span><span style="color:#ABB2BF;"> drivers_license</span></span>
<span class="line"><span style="color:#C678DD;">WHERE</span><span style="color:#ABB2BF;"> plate_number </span><span style="color:#C678DD;">LIKE</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;%H42W%&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th>id</th><th>age</th><th>height</th><th>eye_color</th><th>hair_color</th><th>gender</th><th>plate_number</th><th>car_make</th><th>car_model</th></tr></thead><tbody><tr><td>423327</td><td>30</td><td>70</td><td>brown</td><td>brown</td><td>male</td><td>0H42W2</td><td>Chevrolet</td><td>Spark LS</td></tr><tr><td>664760</td><td>21</td><td>71</td><td>black</td><td>black</td><td>male</td><td>4H42WR</td><td>Nissan</td><td>Altima</td></tr></tbody></table><table><thead><tr><th>id</th><th>name</th><th>license_id</th><th>address_number</th><th>address_street_name</th><th>ssn</th></tr></thead><tbody><tr><td>67318</td><td>Jeremy Bowers</td><td>423327</td><td>530</td><td>Washington Pl, Apt 3A</td><td>871539279</td></tr></tbody></table><p>\u521D\u6B65\u9501\u5B9A\u5ACC\u7591\u4EBA\u4E3AJeremy Bowers</p><h2 id="_5-jeremy-bowers\u7684\u4F9B\u8BCD" tabindex="-1">5. Jeremy Bowers\u7684\u4F9B\u8BCD <a class="header-anchor" href="#_5-jeremy-bowers\u7684\u4F9B\u8BCD" aria-hidden="true">#</a></h2><table><thead><tr><th>person_id</th><th>transcript</th></tr></thead><tbody><tr><td>67318</td><td>I was hired by a woman with a lot of money. I don&#39;t know her name but I know she&#39;s around 5&#39;5&quot; (65&quot;) or 5&#39;7&quot; (67&quot;). She has red hair and she drives a Tesla Model S. I know that she attended the SQL Symphony Concert 3 times in December 2017.</td></tr></tbody></table><p>\u4ECE\u6F14\u5531\u4F1A\u5F97\u51FA\u4E24\u4EBA\uFF1A</p><p><strong>person_id\u4E3A24556\u621699716</strong></p><table><thead><tr><th>ssn</th><th>annual_income</th><th>id</th><th>name</th><th>license_id</th><th>address_number</th><th>address_street_name</th><th>ssn</th><th>id</th><th>age</th><th>height</th><th>eye_color</th><th>hair_color</th><th>gender</th><th>plate_number</th><th>car_make</th><th>car_model</th></tr></thead><tbody><tr><td>987756388</td><td>310000</td><td>99716</td><td>Miranda Priestly</td><td>202298</td><td>1883</td><td>Golden Ave</td><td>987756388</td><td>202298</td><td>68</td><td>66</td><td>green</td><td>red</td><td>female</td><td>500123</td><td>Tesla</td><td>Model S</td></tr></tbody></table><p>\u6B64\u65F6\uFF0C\u57FA\u672C\u53EF\u4EE5\u786E\u5B9A\uFF0C\u5ACC\u7591\u4EBAJeremy\u4F9B\u8BCD\u4E2D\u7684\u6709\u94B1BOSS\u5C31\u662F\u8FD9\u4E2Aid\u4E3A310000\u7684Miranda Priestly\u3002</p>`,71),r=[l];function o(p,d,i,c,h,y){return e(),t("div",null,r)}const m=s(n,[["render",o]]);export{b as __pageData,m as default};
