import{_ as n,c as r,a5 as e,j as s,a,G as l,B as h,o as p}from"./chunks/framework.Bz6nTDLE.js";const o="/SwarmMakie.jl/previews/PR26/assets/mkxypzh.Dom8Nfxi.png",B=JSON.parse('{"title":"Algorithms","description":"","frontmatter":{},"headers":[],"relativePath":"algorithms.md","filePath":"algorithms.md","lastUpdated":null}'),k={name:"algorithms.md"},d={class:"jldocstring custom-block",open:""},g={class:"jldocstring custom-block",open:""},m={class:"jldocstring custom-block",open:""},c={class:"jldocstring custom-block",open:""},E={class:"jldocstring custom-block",open:""},y={class:"jldocstring custom-block",open:""};function u(b,i,w,f,F,C){const t=h("Badge");return p(),r("div",null,[i[19]||(i[19]=e(`<h1 id="algorithms" tabindex="-1">Algorithms <a class="header-anchor" href="#algorithms" aria-label="Permalink to &quot;Algorithms&quot;">​</a></h1><p>SwarmMakie aims to offer several beeswarm algorithms, which give different results. You can change the algorithm which SwarmMakie uses by passing it as a keyword argument <code>algorithm</code>, or mutating <code>plot.algorithm</code> after the fact.</p><p>Currently, it offers the <a href="/SwarmMakie.jl/previews/PR26/api#SwarmMakie.SimpleBeeswarm"><code>SimpleBeeswarm</code></a> and <a href="/SwarmMakie.jl/previews/PR26/api#SwarmMakie.WilkinsonBeeswarm"><code>WilkinsonBeeswarm</code></a> algorithms, which are inspired by Matplotlib and Leland Wilkinson&#39;s original paper respectively, and a no-op <a href="/SwarmMakie.jl/previews/PR26/api#SwarmMakie.NoBeeswarm"><code>NoBeeswarm</code></a> algorithm which simply decomposes back to the original data.</p><p>In addition, SwarmMakie offers jittered scatter plots as algorithms to <code>beeswarm</code>. These aren&#39;t exactly beeswarm plots since they don&#39;t guarantee that all points are non-overlapping, but they can still be useful to show distributions, especially for larger numbers of points where all points cannot fit into a beeswarm. These algorithms are accessible as <a href="/SwarmMakie.jl/previews/PR26/api#SwarmMakie.UniformJitter"><code>UniformJitter</code></a>, <a href="/SwarmMakie.jl/previews/PR26/api#SwarmMakie.PseudorandomJitter"><code>PseudorandomJitter</code></a>, and <a href="/SwarmMakie.jl/previews/PR26/api#SwarmMakie.QuasirandomJitter"><code>QuasirandomJitter</code></a>, similar to <code>ggbeeswarm</code>&#39;s options.</p><h2 id="comparison" tabindex="-1">Comparison <a class="header-anchor" href="#comparison" aria-label="Permalink to &quot;Comparison&quot;">​</a></h2><p>Here&#39;s a comparison of all the available algorithms:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SwarmMakie, CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">algorithms </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NoBeeswarm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SimpleBeeswarm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">WilkinsonBeeswarm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UniformJitter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PseudorandomJitter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">QuasirandomJitter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(; size </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">450</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); ys </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ax_plots </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">beeswarm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Tuple</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(idx)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], xs, ys; color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xs, algorithm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> algorithms[idx], markersize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, axis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (; title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(algorithms[idx]))) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> idx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CartesianIndices</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(algorithms)]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jitter_plots </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> getproperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(ax_plots[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, :], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">setproperty!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(jitter_plots, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:markersize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">setproperty!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(jitter_plots, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:alpha</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Makie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">update_state_before_display!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig</span></span></code></pre></div><p><img src="`+o+'" alt=""></p><h2 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h2>',9)),s("details",d,[s("summary",null,[i[0]||(i[0]=s("a",{id:"SwarmMakie.SimpleBeeswarm-algorithms",href:"#SwarmMakie.SimpleBeeswarm-algorithms"},[s("span",{class:"jlbinding"},"SwarmMakie.SimpleBeeswarm")],-1)),i[1]||(i[1]=a()),l(t,{type:"info",class:"jlObjectType jlType",text:"Type"})]),i[2]||(i[2]=e('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SimpleBeeswarm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>A simple implementation like Matplotlib&#39;s algorithm. This is the default algorithm used in <code>beeswarm</code>.</p><p>This algorithm dodges in <code>x</code> but preserves the exact <code>y</code> coordinate of each point. If you don&#39;t want to preserve the y coordinate, check out <a href="/SwarmMakie.jl/previews/PR26/api#SwarmMakie.WilkinsonBeeswarm"><code>WilkinsonBeeswarm</code></a>.</p><p><a href="https://github.com/MakieOrg/SwarmMakie.jl/blob/f877cf762fc1c8c6a5b0d05dcb79146a8838aa09/src/algorithms/simple.jl#L9-L17" target="_blank" rel="noreferrer">source</a></p>',4))]),s("details",g,[s("summary",null,[i[3]||(i[3]=s("a",{id:"SwarmMakie.WilkinsonBeeswarm-algorithms",href:"#SwarmMakie.WilkinsonBeeswarm-algorithms"},[s("span",{class:"jlbinding"},"SwarmMakie.WilkinsonBeeswarm")],-1)),i[4]||(i[4]=a()),l(t,{type:"info",class:"jlObjectType jlType",text:"Type"})]),i[5]||(i[5]=e('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">WilkinsonBeeswarm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>A beeswarm algorithm that implements Leland Wilkinson&#39;s original dot-hist algorithm.</p><p>This is essentially a histogram with dots, where all dots are binned in the <code>y</code> (non-categorical) direction, and then dodged in the <code>x</code> (categorical) direction.</p><p>Original y-coordinates are not preserved, and if you want that try <a href="/SwarmMakie.jl/previews/PR26/api#SwarmMakie.SimpleBeeswarm"><code>SimpleBeeswarm</code></a> instead.</p><p><a href="https://github.com/MakieOrg/SwarmMakie.jl/blob/f877cf762fc1c8c6a5b0d05dcb79146a8838aa09/src/algorithms/wilkinson.jl#L18-L27" target="_blank" rel="noreferrer">source</a></p>',5))]),s("details",m,[s("summary",null,[i[6]||(i[6]=s("a",{id:"SwarmMakie.NoBeeswarm-algorithms",href:"#SwarmMakie.NoBeeswarm-algorithms"},[s("span",{class:"jlbinding"},"SwarmMakie.NoBeeswarm")],-1)),i[7]||(i[7]=a()),l(t,{type:"info",class:"jlObjectType jlType",text:"Type"})]),i[8]||(i[8]=s("p",null,[a("A simple no-op algorithm, which causes the scatter plot to be drawn as if you called "),s("code",null,"scatter"),a(" and not "),s("code",null,"beeswarm"),a(".")],-1)),i[9]||(i[9]=s("p",null,[s("a",{href:"https://github.com/MakieOrg/SwarmMakie.jl/blob/f877cf762fc1c8c6a5b0d05dcb79146a8838aa09/src/recipe.jl#L53",target:"_blank",rel:"noreferrer"},"source")],-1))]),i[20]||(i[20]=s("p",null,[a("Code exists for the algorithm suggested by Michael Borregaard in "),s("a",{href:"https://github.com/JuliaPlots/StatsPlots.jl/pull/61#issuecomment-328853342",target:"_blank",rel:"noreferrer"},"this StatsPlots.jl PR"),a(", but it is currently nonfunctional. If you'd like to take a crack at getting it working, please do!")],-1)),s("details",c,[s("summary",null,[i[10]||(i[10]=s("a",{id:"SwarmMakie.UniformJitter-algorithms",href:"#SwarmMakie.UniformJitter-algorithms"},[s("span",{class:"jlbinding"},"SwarmMakie.UniformJitter")],-1)),i[11]||(i[11]=a()),l(t,{type:"info",class:"jlObjectType jlType",text:"Type"})]),i[12]||(i[12]=e('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UniformJitter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(; jitter_width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>A jitter algorithm that uses a uniform distribution to create the jitter.</p><p><a href="https://github.com/MakieOrg/SwarmMakie.jl/blob/f877cf762fc1c8c6a5b0d05dcb79146a8838aa09/src/algorithms/jitter.jl#L30-L34" target="_blank" rel="noreferrer">source</a></p>',3))]),s("details",E,[s("summary",null,[i[13]||(i[13]=s("a",{id:"SwarmMakie.PseudorandomJitter-algorithms",href:"#SwarmMakie.PseudorandomJitter-algorithms"},[s("span",{class:"jlbinding"},"SwarmMakie.PseudorandomJitter")],-1)),i[14]||(i[14]=a()),l(t,{type:"info",class:"jlObjectType jlType",text:"Type"})]),i[15]||(i[15]=e('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PseudorandomJitter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(; jitter_width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>A jitter algorithm that uses a pseudorandom distribution to create the jitter. A pseudorandom distribution is a uniform distribution weighted by the PDF of the data.</p><p><a href="https://github.com/MakieOrg/SwarmMakie.jl/blob/f877cf762fc1c8c6a5b0d05dcb79146a8838aa09/src/algorithms/jitter.jl#L39-L44" target="_blank" rel="noreferrer">source</a></p>',3))]),s("details",y,[s("summary",null,[i[16]||(i[16]=s("a",{id:"SwarmMakie.QuasirandomJitter-algorithms",href:"#SwarmMakie.QuasirandomJitter-algorithms"},[s("span",{class:"jlbinding"},"SwarmMakie.QuasirandomJitter")],-1)),i[17]||(i[17]=a()),l(t,{type:"info",class:"jlObjectType jlType",text:"Type"})]),i[18]||(i[18]=e('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">QuasirandomJitter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(; jitter_width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>A jitter algorithm that uses a quasirandom (van der Corput) distribution weighted by the data&#39;s pdf to jitter the data points.</p><p><a href="https://github.com/MakieOrg/SwarmMakie.jl/blob/f877cf762fc1c8c6a5b0d05dcb79146a8838aa09/src/algorithms/jitter.jl#L49-L54" target="_blank" rel="noreferrer">source</a></p>',3))]),i[21]||(i[21]=e('<p>We also welcome any new algorithms you may have in mind. Just open a PR!</p><h2 id="Adding-a-new-algorithm" tabindex="-1">Adding a new algorithm <a class="header-anchor" href="#Adding-a-new-algorithm" aria-label="Permalink to &quot;Adding a new algorithm {#Adding-a-new-algorithm}&quot;">​</a></h2><p>In order to add a new algorithm, you must simply define a <code>struct</code> which subtypes <code>SwarmMakie.BeeswarmAlgorithm</code>.</p><p>There must also be a corresponding dispatch on <code>SwarmMakie.calculate!(buffer, alg, positions, markersize)</code> which loads the new positions calculated in pixel space into <code>buffer</code>. Note that <code>buffer</code> <em>must</em> be modified here.</p><p>See the Wilkinson source page for a deep dive into how to write a beeswarm algorithm!</p>',5))])}const S=n(k,[["render",u]]);export{B as __pageData,S as default};
