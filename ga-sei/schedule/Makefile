bin=./bin
src=./src
srcs=$(wildcard sei*.json)
htmls=$(addprefix $(bin)/, $(srcs:.json=.html))
icss=$(addprefix $(bin)/, $(srcs:.json=.ics))
mds=$(addprefix $(bin)/, $(srcs:.json=.md))

all: $(bin) $(htmls) $(icss) $(mds)

$(bin):
	mkdir -p bin

$(htmls): $(bin)/%.html: %.json ./template.json $(src)/makeSchedule.js
	node $(src)/makeSchedule.js html $< > $@

$(icss): $(bin)/%.ics: %.json ./template.json $(src)/makeSchedule.js
	node $(src)/makeSchedule.js ical $< > $@

$(mds): $(bin)/%.md: %.json ./template.json $(src)/makeSchedule.js
	node $(src)/makeSchedule.js md $< > $@

.PHONY: clean
clean: 
	rm $(icss)
