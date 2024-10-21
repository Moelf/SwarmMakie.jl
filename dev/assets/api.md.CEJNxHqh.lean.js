import{_ as l,c as r,a5 as n,j as e,a as s,G as t,B as o,o as p}from"./chunks/framework.C1z906Z6.js";const T=JSON.parse('{"title":"API Reference","description":"","frontmatter":{},"headers":[],"relativePath":"api.md","filePath":"api.md","lastUpdated":null}'),d={name:"api.md"},c={class:"jldocstring custom-block",open:""},h={class:"jldocstring custom-block",open:""},k={class:"jldocstring custom-block",open:""},m={class:"jldocstring custom-block",open:""},g={class:"jldocstring custom-block",open:""},u={class:"jldocstring custom-block",open:""},b={class:"jldocstring custom-block",open:""},f={class:"jldocstring custom-block",open:""},y={class:"jldocstring custom-block",open:""},w={class:"jldocstring custom-block",open:""},j={class:"jldocstring custom-block",open:""},M={class:"jldocstring custom-block",open:""};function S(E,a,v,C,B,A){const i=o("Badge");return p(),r("div",null,[a[39]||(a[39]=n('<h1 id="API-Reference" tabindex="-1">API Reference <a class="header-anchor" href="#API-Reference" aria-label="Permalink to &quot;API Reference {#API-Reference}&quot;">​</a></h1><ul><li><a href="#SwarmMakie.JitterAlgorithm"><code>SwarmMakie.JitterAlgorithm</code></a></li><li><a href="#SwarmMakie.NoBeeswarm"><code>SwarmMakie.NoBeeswarm</code></a></li><li><a href="#SwarmMakie.PseudorandomJitter"><code>SwarmMakie.PseudorandomJitter</code></a></li><li><a href="#SwarmMakie.QuasirandomJitter"><code>SwarmMakie.QuasirandomJitter</code></a></li><li><a href="#SwarmMakie.SeabornBeeswarm"><code>SwarmMakie.SeabornBeeswarm</code></a></li><li><a href="#SwarmMakie.SimpleBeeswarm"><code>SwarmMakie.SimpleBeeswarm</code></a></li><li><a href="#SwarmMakie.UniformJitter"><code>SwarmMakie.UniformJitter</code></a></li><li><a href="#SwarmMakie.WilkinsonBeeswarm"><code>SwarmMakie.WilkinsonBeeswarm</code></a></li><li><a href="#SwarmMakie.beeswarm-Tuple"><code>SwarmMakie.beeswarm</code></a></li><li><a href="#SwarmMakie.could_overlap-Tuple{Point2, Any, AbstractVector{&lt;:Point2}, AbstractVector}"><code>SwarmMakie.could_overlap</code></a></li><li><a href="#SwarmMakie.first_non_overlapping_candidate-NTuple{8, Any}"><code>SwarmMakie.first_non_overlapping_candidate</code></a></li><li><a href="#SwarmMakie.position_candidates-NTuple{6, Any}"><code>SwarmMakie.position_candidates</code></a></li></ul>',2)),e("details",c,[e("summary",null,[a[0]||(a[0]=e("a",{id:"SwarmMakie.JitterAlgorithm",href:"#SwarmMakie.JitterAlgorithm"},[e("span",{class:"jlbinding"},"SwarmMakie.JitterAlgorithm")],-1)),a[1]||(a[1]=s()),t(i,{type:"info",class:"jlObjectType jlType",text:"Type"})]),a[2]||(a[2]=e("p",null,"The abstract type for jitter algorithms, which are markersize-agnostic.",-1)),a[3]||(a[3]=e("p",null,[e("a",{href:"https://github.com/MakieOrg/SwarmMakie.jl/blob/18543c0530f835b2410d83e8dfa270638c4e6f5e/src/algorithms/jitter.jl#L27",target:"_blank",rel:"noreferrer"},"source")],-1))]),e("details",h,[e("summary",null,[a[4]||(a[4]=e("a",{id:"SwarmMakie.NoBeeswarm",href:"#SwarmMakie.NoBeeswarm"},[e("span",{class:"jlbinding"},"SwarmMakie.NoBeeswarm")],-1)),a[5]||(a[5]=s()),t(i,{type:"info",class:"jlObjectType jlType",text:"Type"})]),a[6]||(a[6]=e("p",null,[s("A simple no-op algorithm, which causes the scatter plot to be drawn as if you called "),e("code",null,"scatter"),s(" and not "),e("code",null,"beeswarm"),s(".")],-1)),a[7]||(a[7]=e("p",null,[e("a",{href:"https://github.com/MakieOrg/SwarmMakie.jl/blob/18543c0530f835b2410d83e8dfa270638c4e6f5e/src/recipe.jl#L53",target:"_blank",rel:"noreferrer"},"source")],-1))]),e("details",k,[e("summary",null,[a[8]||(a[8]=e("a",{id:"SwarmMakie.PseudorandomJitter",href:"#SwarmMakie.PseudorandomJitter"},[e("span",{class:"jlbinding"},"SwarmMakie.PseudorandomJitter")],-1)),a[9]||(a[9]=s()),t(i,{type:"info",class:"jlObjectType jlType",text:"Type"})]),a[10]||(a[10]=n('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PseudorandomJitter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(; jitter_width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>A jitter algorithm that uses a pseudorandom distribution to create the jitter. A pseudorandom distribution is a uniform distribution weighted by the PDF of the data.</p><p><a href="https://github.com/MakieOrg/SwarmMakie.jl/blob/18543c0530f835b2410d83e8dfa270638c4e6f5e/src/algorithms/jitter.jl#L39-L44" target="_blank" rel="noreferrer">source</a></p>',3))]),e("details",m,[e("summary",null,[a[11]||(a[11]=e("a",{id:"SwarmMakie.QuasirandomJitter",href:"#SwarmMakie.QuasirandomJitter"},[e("span",{class:"jlbinding"},"SwarmMakie.QuasirandomJitter")],-1)),a[12]||(a[12]=s()),t(i,{type:"info",class:"jlObjectType jlType",text:"Type"})]),a[13]||(a[13]=n('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">QuasirandomJitter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(; jitter_width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>A jitter algorithm that uses a quasirandom (van der Corput) distribution weighted by the data&#39;s pdf to jitter the data points.</p><p><a href="https://github.com/MakieOrg/SwarmMakie.jl/blob/18543c0530f835b2410d83e8dfa270638c4e6f5e/src/algorithms/jitter.jl#L49-L54" target="_blank" rel="noreferrer">source</a></p>',3))]),e("details",g,[e("summary",null,[a[14]||(a[14]=e("a",{id:"SwarmMakie.SeabornBeeswarm",href:"#SwarmMakie.SeabornBeeswarm"},[e("span",{class:"jlbinding"},"SwarmMakie.SeabornBeeswarm")],-1)),a[15]||(a[15]=s()),t(i,{type:"info",class:"jlObjectType jlType",text:"Type"})]),a[16]||(a[16]=n('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SeabornBeeswarm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>A beeswarm algorithm based on the <code>seaborn</code> Python package.</p><p>More adaptive to marker size than <code>SimpleBeeswarm</code>, but takes longer to compute.</p><p><a href="https://github.com/MakieOrg/SwarmMakie.jl/blob/18543c0530f835b2410d83e8dfa270638c4e6f5e/src/algorithms/seaborn.jl#L25-L32" target="_blank" rel="noreferrer">source</a></p>',4))]),e("details",u,[e("summary",null,[a[17]||(a[17]=e("a",{id:"SwarmMakie.SimpleBeeswarm",href:"#SwarmMakie.SimpleBeeswarm"},[e("span",{class:"jlbinding"},"SwarmMakie.SimpleBeeswarm")],-1)),a[18]||(a[18]=s()),t(i,{type:"info",class:"jlObjectType jlType",text:"Type"})]),a[19]||(a[19]=n('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SimpleBeeswarm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>A simple implementation like Matplotlib&#39;s algorithm. This is the default algorithm used in <code>beeswarm</code>.</p><p>This algorithm dodges in <code>x</code> but preserves the exact <code>y</code> coordinate of each point. If you don&#39;t want to preserve the y coordinate, check out <a href="/SwarmMakie.jl/dev/api#SwarmMakie.WilkinsonBeeswarm"><code>WilkinsonBeeswarm</code></a>.</p><p><a href="https://github.com/MakieOrg/SwarmMakie.jl/blob/18543c0530f835b2410d83e8dfa270638c4e6f5e/src/algorithms/simple.jl#L9-L17" target="_blank" rel="noreferrer">source</a></p>',4))]),e("details",b,[e("summary",null,[a[20]||(a[20]=e("a",{id:"SwarmMakie.UniformJitter",href:"#SwarmMakie.UniformJitter"},[e("span",{class:"jlbinding"},"SwarmMakie.UniformJitter")],-1)),a[21]||(a[21]=s()),t(i,{type:"info",class:"jlObjectType jlType",text:"Type"})]),a[22]||(a[22]=n('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UniformJitter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(; jitter_width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>A jitter algorithm that uses a uniform distribution to create the jitter.</p><p><a href="https://github.com/MakieOrg/SwarmMakie.jl/blob/18543c0530f835b2410d83e8dfa270638c4e6f5e/src/algorithms/jitter.jl#L30-L34" target="_blank" rel="noreferrer">source</a></p>',3))]),e("details",f,[e("summary",null,[a[23]||(a[23]=e("a",{id:"SwarmMakie.WilkinsonBeeswarm",href:"#SwarmMakie.WilkinsonBeeswarm"},[e("span",{class:"jlbinding"},"SwarmMakie.WilkinsonBeeswarm")],-1)),a[24]||(a[24]=s()),t(i,{type:"info",class:"jlObjectType jlType",text:"Type"})]),a[25]||(a[25]=n('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">WilkinsonBeeswarm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>A beeswarm algorithm that implements Leland Wilkinson&#39;s original dot-hist algorithm.</p><p>This is essentially a histogram with dots, where all dots are binned in the <code>y</code> (non-categorical) direction, and then dodged in the <code>x</code> (categorical) direction.</p><p>Original y-coordinates are not preserved, and if you want that try <a href="/SwarmMakie.jl/dev/api#SwarmMakie.SimpleBeeswarm"><code>SimpleBeeswarm</code></a> instead.</p><p><a href="https://github.com/MakieOrg/SwarmMakie.jl/blob/18543c0530f835b2410d83e8dfa270638c4e6f5e/src/algorithms/wilkinson.jl#L18-L27" target="_blank" rel="noreferrer">source</a></p>',5))]),e("details",y,[e("summary",null,[a[26]||(a[26]=e("a",{id:"SwarmMakie.beeswarm-Tuple",href:"#SwarmMakie.beeswarm-Tuple"},[e("span",{class:"jlbinding"},"SwarmMakie.beeswarm")],-1)),a[27]||(a[27]=s()),t(i,{type:"info",class:"jlObjectType jlMethod",text:"Method"})]),a[28]||(a[28]=n(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">beeswarm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">beeswarm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(positions)</span></span></code></pre></div><p><code>beeswarm</code> is a <code>PointBased</code> recipe like <code>scatter</code>, accepting all of <code>scatter</code>&#39;s input.</p><p>It displaces points which would otherwise overlap in the x-direction by binning in the y direction.</p><p>Specific attributes to <code>beeswarm</code> are:</p><ul><li><p><code>algorithm = SimpleBeeswarm()</code>: The algorithm used to lay out the beeswarm markers.</p></li><li><p><code>side = :both</code>: The side towards which markers should extend. Can be <code>:left</code>, <code>:right</code>, or both.</p></li><li><p><code>direction = :y</code>: Controls the direction of the beeswarm. Can be <code>:y</code> (vertical) or <code>:x</code> (horizontal).</p></li><li><p><code>gutter = nothing</code>: Creates a gutter of a desired size around each category. Gutter size is always in data space.</p></li><li><p><code>gutter_threshold = .5</code>: Emit a warning of the number of points added to a gutter per category exceeds the threshold.</p></li></ul><p><strong>Arguments</strong></p><p>Available attributes and their defaults for <code>Plot{SwarmMakie.beeswarm}</code> are:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  algorithm         SimpleBeeswarm()</span></span>
<span class="line"><span>  alpha             1.0</span></span>
<span class="line"><span>  clip_planes       MakieCore.Automatic()</span></span>
<span class="line"><span>  color             :black</span></span>
<span class="line"><span>  colormap          :viridis</span></span>
<span class="line"><span>  colorrange        MakieCore.Automatic()</span></span>
<span class="line"><span>  colorscale        identity</span></span>
<span class="line"><span>  cycle             [:color]</span></span>
<span class="line"><span>  depth_shift       0.0f0</span></span>
<span class="line"><span>  depthsorting      false</span></span>
<span class="line"><span>  direction         :y</span></span>
<span class="line"><span>  distancefield     &quot;nothing&quot;</span></span>
<span class="line"><span>  glowcolor         (:black, 0.0)</span></span>
<span class="line"><span>  glowwidth         0.0</span></span>
<span class="line"><span>  gutter            &quot;nothing&quot;</span></span>
<span class="line"><span>  gutter_threshold  0.5</span></span>
<span class="line"><span>  highclip          MakieCore.Automatic()</span></span>
<span class="line"><span>  inspectable       true</span></span>
<span class="line"><span>  inspector_clear   MakieCore.Automatic()</span></span>
<span class="line"><span>  inspector_hover   MakieCore.Automatic()</span></span>
<span class="line"><span>  inspector_label   MakieCore.Automatic()</span></span>
<span class="line"><span>  lowclip           MakieCore.Automatic()</span></span>
<span class="line"><span>  marker            :circle</span></span>
<span class="line"><span>  marker_offset     MakieCore.Automatic()</span></span>
<span class="line"><span>  markersize        9</span></span>
<span class="line"><span>  markerspace       :pixel</span></span>
<span class="line"><span>  nan_color         :transparent</span></span>
<span class="line"><span>  overdraw          false</span></span>
<span class="line"><span>  rotation          Billboard{Float32}(0.0f0)</span></span>
<span class="line"><span>  side              :both</span></span>
<span class="line"><span>  space             :data</span></span>
<span class="line"><span>  ssao              false</span></span>
<span class="line"><span>  strokecolor       :black</span></span>
<span class="line"><span>  strokewidth       0</span></span>
<span class="line"><span>  transform_marker  false</span></span>
<span class="line"><span>  transparency      false</span></span>
<span class="line"><span>  uv_offset_width   (0.0, 0.0, 0.0, 0.0)</span></span>
<span class="line"><span>  visible           true</span></span></code></pre></div><p><strong>Example</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Makie, SwarmMakie</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">beeswarm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ones</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(RGBf, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><p><a href="https://github.com/MakieOrg/SwarmMakie.jl/blob/18543c0530f835b2410d83e8dfa270638c4e6f5e/src/recipe.jl#L9-L33" target="_blank" rel="noreferrer">source</a></p>`,11))]),e("details",w,[e("summary",null,[a[29]||(a[29]=e("a",{id:"SwarmMakie.could_overlap-Tuple{Point2, Any, AbstractVector{<:Point2}, AbstractVector}",href:"#SwarmMakie.could_overlap-Tuple{Point2, Any, AbstractVector{<:Point2}, AbstractVector}"},[e("span",{class:"jlbinding"},"SwarmMakie.could_overlap")],-1)),a[30]||(a[30]=s()),t(i,{type:"info",class:"jlObjectType jlMethod",text:"Method"})]),a[31]||(a[31]=n('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">could_overlap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(position, markersize, positions, markersizes)</span></span></code></pre></div><p>Check if a point given by <code>position</code> with markersize <code>markersize</code> could overlap with any other point in the swarm. Returns a vector of integer indices.</p><p><a href="https://github.com/MakieOrg/SwarmMakie.jl/blob/18543c0530f835b2410d83e8dfa270638c4e6f5e/src/algorithms/seaborn.jl#L78-L83" target="_blank" rel="noreferrer">source</a></p>',3))]),e("details",j,[e("summary",null,[a[32]||(a[32]=e("a",{id:"SwarmMakie.first_non_overlapping_candidate-NTuple{8, Any}",href:"#SwarmMakie.first_non_overlapping_candidate-NTuple{8, Any}"},[e("span",{class:"jlbinding"},"SwarmMakie.first_non_overlapping_candidate")],-1)),a[33]||(a[33]=s()),t(i,{type:"info",class:"jlObjectType jlMethod",text:"Method"})]),a[34]||(a[34]=n('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Returns </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`(position::Point2f, idx::Int)`</span></span></code></pre></div><p><a href="https://github.com/MakieOrg/SwarmMakie.jl/blob/18543c0530f835b2410d83e8dfa270638c4e6f5e/src/algorithms/seaborn.jl#L124-L126" target="_blank" rel="noreferrer">source</a></p>',2))]),e("details",M,[e("summary",null,[a[35]||(a[35]=e("a",{id:"SwarmMakie.position_candidates-NTuple{6, Any}",href:"#SwarmMakie.position_candidates-NTuple{6, Any}"},[e("span",{class:"jlbinding"},"SwarmMakie.position_candidates")],-1)),a[36]||(a[36]=s()),t(i,{type:"info",class:"jlObjectType jlMethod",text:"Method"})]),a[37]||(a[37]=e("p",null,[s("Returns "),e("code",null,"(positions::Vector{Point2f}, idxs::Vector{Int})"),s(".")],-1)),a[38]||(a[38]=e("p",null,[e("a",{href:"https://github.com/MakieOrg/SwarmMakie.jl/blob/18543c0530f835b2410d83e8dfa270638c4e6f5e/src/algorithms/seaborn.jl#L94-L96",target:"_blank",rel:"noreferrer"},"source")],-1))])])}const x=l(d,[["render",S]]);export{T as __pageData,x as default};