# # SwarmMakie.jl

module SwarmMakie

using Makie, Random

include("recipe.jl")
include("algorithms/simple.jl")
include("algorithms/mkborregaard.jl")
include("algorithms/seaborn.jl")

end
