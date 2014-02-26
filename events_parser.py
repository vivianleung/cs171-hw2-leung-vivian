import requests
import json
from Queue import *
import threading
import time

repo = 'https://api.github.com/repos/BIOFAB/ClothoBiofabEdition/'
branchurl = repo + 'branches'
branches = requests.get(branchurl)

print(branches.text)

def getComs(sha):
	while True:
		item = q.get()
		comsurl = repo + 'commits?sha=' + sha
		payload = {'some': 'data'}
		headers = {'content-type': 'application/json'}
		coms = requests.get(comsurl, data=json.dumps(payload), headers=headers)
		
		json.dump(coms, f)

		commits.append(coms)
		json_data.close()
		q.task_done()

if (branches.ok):
	branches.json()
	f = open('commits_plife', 'w')
	print len(branches)
	q = Queue()
	commits = [];

	for branch in branches:
		t = threading.Thread(target=getComs(branch["commit"]["sha"]))
		t.daemon = True
		t.start()
		print "t: ", t

	for item in source():
		print item
		q.put(item)

	q.join()


	f.close()
	print commits


