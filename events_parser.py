import json
json.loads

json_data=open('commitactivity_caleydo.json')

data = json.load(json_data)

weeks = 0

for week in data:
	weeks = weeks + 1;

print weeks 

json_data.close()