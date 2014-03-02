Questions

Given your previous design critiques, your experience with the previous graph visualization implementation and the reading of the article cited below (Lee et al., 2006), answer the following questions:

Which graph-related tasks does an ideal GitHub Network Graph need to address?
-  show individual user contributions
-  shows each commit, and relationships among branches, including forks
-  shows how the repository structure has changed over time



Get back to the GitHub network visualization you implemented and test it with the following projects on GitHub: D3, jQuery and Bootstrap. There's a lot more data, but the interaction patterns of users are also very different. What do you notice about the three repositories?

-  many more users, and forks, many more nodes
-  visualization gets too complex, too many overlapping branches, and arrows
-  too many users to represent
-  hard to navigate in time space (dragging is a pain)

How does this impact your graph?

-  makes it more difficult to see what's going on, i.e. how the repository is structured exactly, and how branches have evolved/merged over time. 

-  for my graph, it would make too many nodes, so many that it would be difficult to see different commits (nodes) and too many different branches to represent with unique colors

How would you improve your visualization to address issues with the larger and more complex data?

-  consolidate commits along a branch into a group node (that can be expanded) to save space and visual complexity
-  allow for toggling of different users / branches to focus on certain aspects
-  allow for time scaling -- i.e. zoom in/out, to look more specifically at certain parts, or to get a general sense of the repository
-  color legend for different branches, or something that indicates the ID of the branch is being hovered.



ABOUT THE SKETCH: 
Design Features
- Toggle Users/Authors in a dropdown menu, to deal with too many users 
- Zoom-able time scale, by button and scroll, to see things in more detail, with a master commit/pull events graph on the top.
- options to highlight/isolate specific branches (to compare say, a fork with a master) and by issue, or issue type (open issues). 
- scale nodes by number of changes in commit
