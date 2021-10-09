# Think-it Web Challenge: Gaming Charts - Junior

​
I will be describing in this readme file the choices i made and what architecture and visualization i chose and why.

# Architecture

First of all i deciced to create the project with razzle to abstracts all the complex configuration needed for building SPA's and SSR applications into a single dependency.
Next i started modifying the architecture and configuring eslint file .
server directory : services-controllers-routers-types
client directory : components-containers-pages-types (ps : i didnt add redux because its a SPA)
models : is a shared models between backend and front end (ps : if we had mongo i would do the same by creating models / document-models who extends models)

# Development

I will be outlining only the important parts :

- Aggregate part : I created a generic function that takes as argument dataSet, options and totalOffset , so totalOffset part is because the 2 querys will return the same JSON structure so i had to avoid to create the function twice because the only diffrence is replacing totalPlayTime with totalPlayers.
- SPA part : I created a data table component from scratch which took me a while haha , i also created a small unit test for it.

# TimeLine :

I will be providing you in this section with a link that contains stats of how much this took time and in what exactly so feel free to check it :
https://wakatime.com/@97ffcea2-3472-4619-8986-5cd72ac25eea/projects/ddmnzaxbha?start=2021-06-21&end=2021-06-27

# Extrat Packages

-Axios

# Commits

- There is a commits.txt file inside the project.
