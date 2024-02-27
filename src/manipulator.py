import json

file_path = "visited_urls.json"
new_list = {}


with open(file_path, "r") as file:
    data = json.load(file)
    print(len(data))
    for item in data:
        if len(data[item]) > 0:
            for image in data[item]:
                new_list[image['discord']] = image['catbox']

with open("tmp.json", "w") as outfile:
    json.dump(new_list, outfile)