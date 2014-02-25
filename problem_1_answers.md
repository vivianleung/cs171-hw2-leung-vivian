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

<p>For each visualization...</p>
<ol type="A">

	<li>Who is the audience? (e.g. project manager, contributor, project user, visitor, etc.)</li>

	<li>What data have been used? How can you get the data using the GitHub API? (Note that it can be the combination of multiple queries and their processing).</li>

	<li>Those visualizations are updated over time. What happens if suddenly a contributor pushes many commits in a short time interval? How would you address this particular issue?</li>

</ol>
<h2>Responses</h2>

<ol type="1">
	<li><b>Contributions Calendar</b>
		<ol type="A">
			<li>
				Audience includes two parties: the contributer and visitors. The contributer can use this to track their activity and progress over time and assess their involvement in the community. (e.g. have they been adequately contributing or producing code? Do they need to increase?). Visitors can evaluate the contributer's activity and see if they are an active member.
			</li>
			<li>
				Data consist of commit events of the user on all their projects. Retrieve data by <p class="code">GET /repos/:owner/:repo/stats/contributors</p> for that

			</li>

			<li>
			</li>
		</ol>
	</li>

	<li><b>Contributors</b>
		<ol type="A">
			<li>
			</li>

			<li>
			</li>

			<li>
			</li>
		</ol>
	</li>

	<li><b>Commits Activity</b>
		<ol type="A">
			<li>
			</li>

			<li>
			</li>

			<li>
			</li>
		</ol>
	</li>

	<li><b>Code Frequency</b>
		<ol type="A">
			<li>
			</li>

			<li>
			</li>

			<li>
			</li>
		</ol>
	</li>

	<li><b>Punch Card</b>
		<ol type="A">
			<li>
			</li>

			<li>
			</li>

			<li>
			</li>
		</ol>
	</li>

	<li><b>Pulse</b>
		<ol type="A">
			<li>
			</li>

			<li>
			</li>

			<li>
			</li>
		</ol>
	</li>

</ol>
</body>




