import{_ as a,c as i,a5 as e,o as n}from"./chunks/framework.CLWLLiKQ.js";const t="/SwarmMakie.jl/dev/assets/chtrehp.BjllYdv7.png",g=JSON.parse('{"title":"SwarmMakie","description":"","frontmatter":{},"headers":[],"relativePath":"introduction.md","filePath":"introduction.md","lastUpdated":null}'),p={name:"introduction.md"};function l(h,s,r,k,d,o){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="swarmmakie" tabindex="-1">SwarmMakie <a class="header-anchor" href="#swarmmakie" aria-label="Permalink to &quot;SwarmMakie&quot;">​</a></h1><p><code>SwarmMakie</code> implements beeswarm or swarm plots in Makie. These are scatter plots which are categorical (or singular) in the x-axis, where the markers are nudged so that each marker is visible and avoids overlap.</p><p>The main entry point to the package is the <a href="/SwarmMakie.jl/dev/api#SwarmMakie.beeswarm-Tuple"><code>beeswarm</code></a> recipe, which takes the same arguments as Makie&#39;s <code>scatter</code> plots, and transforms them into a beautiful beeswarm plot!</p><p>Being a Makie recipe, you can also use this with AlgebraOfGraphics.</p><h2 id="Quick-start" tabindex="-1">Quick start <a class="header-anchor" href="#Quick-start" aria-label="Permalink to &quot;Quick start {#Quick-start}&quot;">​</a></h2><p>Here&#39;s a quick example to get you started:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie, SwarmMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ys </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f, a, p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> scatter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(xs, ys; color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xs, axis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (; title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Scatter plot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">beeswarm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], xs, ys; color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xs, algorithm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> SimpleBeeswarm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), axis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (; title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Beeswarm plot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><p><img src="`+t+`" alt=""></p><h2 id="Use-with-AlgebraOfGraphics.jl" tabindex="-1">Use with AlgebraOfGraphics.jl <a class="header-anchor" href="#Use-with-AlgebraOfGraphics.jl" aria-label="Permalink to &quot;Use with AlgebraOfGraphics.jl {#Use-with-AlgebraOfGraphics.jl}&quot;">​</a></h2><p>As a Makie recipe, <code>beeswarm</code> also composes with AlgebraOfGraphics!</p><div class="language-@example vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">@example</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import CairoMakie # hide</span></span>
<span class="line"><span>CairoMakie.activate!() # hide</span></span>
<span class="line"><span>import Main.MakieDocsHelpers4 # hide</span></span>
<span class="line"><span>var&quot;#result&quot; = begin # hide</span></span>
<span class="line"><span>using AlgebraOfGraphics, CairoMakie, SwarmMakie</span></span>
<span class="line"><span>using RDatasets, DataFrames</span></span>
<span class="line"><span>iris = dataset(&quot;datasets&quot;, &quot;iris&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>f = data(iris) * </span></span>
<span class="line"><span>    mapping(:Species, :SepalLength; color = :Species) * </span></span>
<span class="line"><span>    visual(Beeswarm) |&gt; draw</span></span>
<span class="line"><span>Makie.update_state_before_display!(f.figure)</span></span>
<span class="line"><span>Makie.update_state_before_display!(f.figure)</span></span>
<span class="line"><span>f</span></span>
<span class="line"><span>end # hide</span></span>
<span class="line"><span>if var&quot;#result&quot; isa Makie.FigureLike # hide</span></span>
<span class="line"><span>    MakieDocsHelpers4.AsMIME(MIME&quot;image/png&quot;(), var&quot;#result&quot;) # hide</span></span>
<span class="line"><span>else # hide</span></span>
<span class="line"><span>    var&quot;#result&quot; # hide</span></span>
<span class="line"><span>end # hide</span></span></code></pre></div><h2 id="Tips-and-tricks" tabindex="-1">Tips and tricks <a class="header-anchor" href="#Tips-and-tricks" aria-label="Permalink to &quot;Tips and tricks {#Tips-and-tricks}&quot;">​</a></h2><p>If your beeswarms are overlapping, or extending outside the axis area, try decreasing <code>markersize</code>. You can do this by setting <code>plot.markersize = 6</code> for example, and then re-displaying the figure.</p><p>Generally, the algorithm takes a few iterations of calling <code>Makie.update_state_before_display!(figure)</code> to settle in a good configuration. We are working to fix this.</p>`,14)]))}const E=a(p,[["render",l]]);export{g as __pageData,E as default};