import json
from Queue import *
import threading
import time
import requests

repo = 'https://api.github.com/repos/SleeplessByte/programming-life/'
print "hello"

def getComs(sha):
	while True:
		item = q.get()
		comsurl = repo + 'commits?sha=' + sha +'&per_page=50'
		payload = {'some': 'data'}
		headers = {'content-type': 'application/json'}
		coms = requests.get(comsurl, data=json.dumps(payload), headers=headers)
		
		json.dump(coms, f)

		commits.append(coms)
		json_data.ClothoBiofabEditionse()
		q.task_done()

print "hi again"
branchurl = repo + 'branches'
print "got the url"
print branchurl

r = requests.get(branchurl)
branches = r.json()

f = open('commits_plife', 'w')
print len(branches)
q = Queue()
commits = [];

for branch in branches:
	t = threading.Thread(target=getComs(branch["commit"]["sha"]))
	t.daemon = True
	t.start()
	print "t: ", target

for item in source():
	print item
	q.put(item)

q.join()


f.close()
print commits


