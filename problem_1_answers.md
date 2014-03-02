<!DOCTYPE html>
<meta charset="utf-8">
<title>Homework 2 Problem 1</title>
<style>
	body{
		font-family: Georgia, serif;
	}
	li{
		margin-bottom: 6pt;
	}
	.code {
    	font-family: "Courier New", Courier, monospace;
    	display: inline;
  	}
</style>
<body>
<h1>Problem 1 Answers</h1>

<h2>Questions</h2> 	

<p>For each visualization...
	(fb709d8182fa887ceacc927343ba96c9b7a2b739 )
</p>
<ol type="A">

	<li>Who is the audience? (e.g. project manager, contributor, project user, visitor, etc.)</li>

	<li>What data have been used? How can you get the data using the GitHub API? (Note that it can be the combination of multiple queries and their processing).</li>

	<li>Those visualizations are updated over time. What happens if suddenly a contributor pushes many commits in a short time interval? How would you address this particular issue?</li>

</ol>
<h2>Responses</h2>

<h3>Part 1</h3>

<ol type="1">
	<li><b>Contributions Calendar</b>
		<ol type="A">
			<li>
				Audience includes two parties: the contributor and visitors. The contributer can use this to track their activity and progress over time and assess their involvement in the community. (e.g. have they been adequately contributing or producing code? Do they need to increase?). Visitors can evaluate the contributer's activity and see if they are an active member.
			</li>
			<li> FIX?
				Data consist of public commit events of the user on all their projects. First, retrieve user's events by <p class="code">https://api.github.com/users/USERNAME/events</p>. Since the Git API doesn't appear to support search in events, we can extract all PushEvents, and get the date of commits by requesting the "url" of the "commit" listed in each event item, and extracting the "date" in "commit".
			</li>
			<li>
				To deal with many commits in a short time interval, I would  place a max cap on the number of commits to visualize (and ignore any surplus) and color that particular calendar cell with the max color. 
			</li>
		</ol>
	</li>

	<li><b>Contributors</b>
		<ol type="A">
			<li>
				Audience includes all contributors of the repository (to see who has been working on it) as well as the project manager (to oversee progress and contributor performance over time). It can also show the types of contributions made (additions, deletions, or just commits). 
			</li>
			<li>
				Data consists of: [1] total commits (c) to master excluding merge commits, additions (a) or deletions (d) per week(?), and [2] commits/additions/deletions for each contributor. Time span is over the course of the repository's existence, or for a selected span (selected by the user) for the second data category. 

				To get [2], <p class="code">https://api.github.com/repos/OWNER/REPO/stats/contributors</p>, and get c, a, or d for commits, adds and deletes for each week (convert UNIX stamp to human-readable dates) for each author. To get [1], when iterating through each week, add a, d, c to a sum a, d, c, and after iterating through all authors, plot the resulting sums on the master.

			</li>
			<li>
				If a contributor suddenly pushes many commits in a short interval, I would break the y-axis of the contributor graphs into two segments such that the spike can be visualized in the same graph as the rest of the data.
			</li>
		</ol>
	</li>

	<li><b>Commits Activity</b>
		<ol type="A">
			<li>
				Audience includes the project manager, who would find it useful to track progress of the project over time (per week and per diem) to identify particularly productive patterns, and to project users to see whether the project is still being actively updated.
			</li>
			<li>
				Data consists of: number of commits per week for the past year, and number of commits per day of a selected week. To request the data, <p class="code">https://api.github.com/repos/OWNER/REPO/stats/commit_activity</p> Plot "total" for each "week" on the master, and then the day of the selected week on the weekly chart.
			</li>
			<li>
				Similar to the Contributors graph, I would break the y-axis into two segments such that the outlier value can be plotted on the higher segmeent, while allowing for resolution for the other lower values.
			</li>
		</ol>
	</li>

	<li><b>Code Frequency</b>
		<ol type="A">
			<li>
				Audience includes project manager, collaborators, and project users who would like to see how the code has been modified over time. Big deletions may suggest streamlining of data, while big additions may indicate new features or components. Smaller values may indicate minor adjustments.
			</li>
			<li>
				Data consists of: number of additions and deletions per week over the repository's existience. Request data using <p class="code">https://api.github.com/repos/OWNER/REPO/stats/code_frequency</p>. For each week/array in the output array, plot the week [index=0], additions [index=1], and deletions [index=2].
			</li>
				If a contributer made a relatively high number of commits in a short period of time, unless the commits made large changes in the number of additions and deletions in the code, it would not affect the outcome of the graph. If it did, I would break the y-axis into two or three segments, depending on if additions and/or deletions were extreme. Otherwise, I would just scale the graph to accomodate the data.
			<li>
			</li>
		</ol>
	</li>

	<li><b>Punch Card</b>
		<ol type="A">
			<li>
				Audience includes project manager (e.g. if they need to account for overtime or to track productivity). It's useful to see at what times/days of the week contributors are most productive / active in order to set up meetings / collaborative times, etc.
			</li>
			<li>
				Data consists of cumulative number of commits per hour per day for the repository's existence. Request by: <p class="code">https://api.github.com/repos/OWNER/REPO/stats/punch_card</p>. For each item, plot the number of commits [index=3] for each day [index=0] and time [index=1].
			</li>
			<li>
				If a contributor made a high number of commits on a certain day or time, I would either eliminate the outlier or set a cap on the max number of commits to represennt, setting a max size of the circle plotted. 
			</li>
		</ol>
	</li>

	<li><b>Pulse</b>
		<ol type="A">
			<li>
				The pulse is useful for project managers and contributeres as [1] a quick summary of the scope of the project (number of authors involved, the development of the project according to commits, additions and deletions, and number of files etc.) It is also useful for these parties to see if there are any outstanding issues, and to keep track of those issues which have been resolved. Furthermore, it shows any outstanding pull requests to either merge or reject.
			</li>
			<li>
				Data consists of ...
				<ul>
					<li>
						merged pull requests: <p class="code">https://api.github.com/repos/OWNER/REPO/pulls?state=closed&since=YYYY-MM-DDTHH:MM:SSZ</p>
					</li>
					<li>
						proposed pull requests
					</li>
					<li>
						closed issues <p class="code">https://api.github.com/repos/OWNER/REPO/issues?state=closed&since=YYYY-MM-DDTHH:MM:SSZ</p>
					</li>
					<li>
						new issues <p class="code">https://api.github.com/repos/OWNER/REPO/issues?state=open&since=YYYY-MM-DDTHH:MM:SSZ</p>
					</li>
					<li>
						commits <p class="code">https://api.github.com/repos/OWNER/REPO/commits?since=YYYY-MM-DDTHH:MM:SSZ</p>
					</li>
					<li>
						active authors. Get "author" in "commit" for each item in commits output.
					</li>
					<li>
						files changed on master: for each commit in commits, get sha value and call <p class="code">https://api.github.com/repos/OWNER/REPO/commits/SHA</p>. Get "filename" from files.

					</li>
					<li>
						additions and deletions: for each commit in commits, get sha alue and call <p class="code">https://api.github.com/repos/OWNER/REPO/commits/SHA</p>. Get "stats": "additions" and "deletions".
					</li>
					<li>
						releases <p class="code">https://api.github.com/repos/OWNER/REPO/releases?since=YYYY-MM-DDTHH:MM:SSZ</p>.
					</li>
				</ul>
				for over the course of 24 hours, 3 days, 1 week or 1 month.

				To get these eventss, <p class="code">https://api.github.com/repos/OWNER/REPO/events?since=YYYY-MM-DDTHH:MM:SSZ</p>

				<!-- Data consists of ...
				<ul>
					<li>
						merged pull requests: <p class="code">https://api.github.com/repos/OWNER/REPO/pulls?state=closed+since=YYYY-MM-DDTHH:MM:SSZ</p>. Count output array size for the number, list the details including "repo: id", "description" and "merged_at".
					</li>
					<li>
						proposed pull requests: <p class="code">https://api.github.com/repos/OWNER/REPO/pulls?state=open+since=YYYY-MM-DDTHH:MM:SSZ</p>. Perform the same analysis as in merged pull requests to generate final data for output.
					</li>
					<li>
						closed issues: <p class="code">https://api.github.com/repos/OWNER/REPO/issues?state=closed+since=YYYY-MM-DDTHH:MM:SSZ</p>. Get the 
					</li>
					<li>
						new issues: <p class="code">https://api.github.com/repos/OWNER/REPO/issues?state=open+since=YYYY-MM-DDTHH:MM:SSZ</p>
					</li>
					<li>
						commits: <p class="code">https://api.github.com/repos/OWNER/REPO/commits?since=YYYY-MM-DDTHH:MM:SSZ</p>
					</li>
					<li>
						active authors: get authors from the commits output.
					</li>
					<li>
						files changed on master: for each commit identified in commits output, get "sha" and request: 
						<p class="code">https://api.github.com/repos/OWNER/REPO/commits/SHA</p>. Get "filename"s from "files" list.
					</li>
					<li>
						additions and deletions: <p class="code">https://api.github.com/</p>
					</li>
					<li>
						releases: <p class="code">https://api.github.com/</p>
					</li>
				</ul>
				for over the course of the past 24 hours, 3 days, 1 week or 1 month. Use "since" date/time according to which time span the user is looking at. -->


			</li>

		</ol>
	</li>
</ol>
<h3>Part 2</h3>



Interaction allows the user to view details about commits they're interested in, and reduces clutter in the visualization. A static graph which included these essential commit details would be too cluttered. It would also be difficult to fit all the data into one static graph in an easily-navigatable way, especially for long-running projects that would have a very wide graph.

If many new developers joined and pushed commits for the first time to the project, two things would happen. One, there would be many more rows added to the network graph (corresponding to each new user) and would make the graph very tall. Two, there would be many nodes in a concentrated period of time, which would visually make that corresponding part of the graph very crowded with nodes. To preseve the graph's readability, I would do a few things: (1) make the graph scrollable such that the header axis/legend would fix and allow for better visual alignment with nodes; (2) make users and/or commits filterable by number of commits of those users, or de-selectable by checkboxes, or (3) group these new commits together under one (or a few) nodes depending on their similarities, or the time of commit.

</body>




