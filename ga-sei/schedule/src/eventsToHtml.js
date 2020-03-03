const { dayOfWeek, timeAsLocaleDate } = require('./time.js');

const eventsToHtml = (events) => {
  let course = [];
  let week = [];
  let day = [];
  let lastDay = null;
  for (let curEvent of events) {
    let curDay = dayOfWeek(curEvent.start);
    if (lastDay !== null && curDay !== lastDay) {
        week.push(day);
        day = [];
        if (curDay < lastDay) {
          course.push(week);
          week = [];
        }
    }
    day.push(curEvent);
    lastDay = curDay;
  }
  week.push(day);
  course.push(week);

  let html =
    '<!DOCTYPE html>\n' +
    '<style>\n' +
    'body {\n' +
    '  font-family: sans-serif;\n' +
    '  font-size: 0.8em;\n' +
    '}\n' +
    '.week {\n' +
    '  clear: both;\n' +
    '}\n' +
    '.day {\n' +
    '  border-left: 1px solid #cccccc;\n' +
    '  border-top: 1px solid black;\n' +
    '  float: left;\n' +
    '  margin: 1em 0.5em 2em 0;\n' +
    '  padding: 0.5em 0 0 0.5em;\n' +
    '  width: 19%;\n' +
    '}\n' +
    '.day-header {\n' +
    '  font-size: 1.2em;\n' +
    '  font-weight: bold;\n' +
    '}\n' +
    '.name {\n' +
    '  color: black;\n' +
    '  font-weight: bold;\n' +
    '  text-decoration: none;\n' +
    '}\n' +
    '.name.link:hover {\n' +
    '  text-decoration: underline;\n' +
    '}\n' +
    '</style>\n';

  for (let week of course) {
    html += '<div class="week">\n';
    for (let day of week) {
      let date = timeAsLocaleDate(day[0].start).toLocaleDateString()
      html +=
        '  <div class="day">\n' +
        `    <div class="day-header">${date}</div>\n`;
      for (let curEvent of day) {
        let name = curEvent.eventData.name;
        let link =
            'https://git.generalassemb.ly/atl-wdi/sei-curriculum/blob/master/' +
            `course-material/${name}`;
        let nameElement =
            (name === 'holiday' || name === 'lunch' ||
             name.endsWith('-presentations')) ?
            `<span class="name">${name}</span>` :
            `<a href="${link}" class="name link">${name}</a>`;
        let time = timeAsLocaleDate(curEvent.start).toLocaleTimeString();
        html +=
          '    <div class="event">\n' +
          `      ${nameElement}\n` +
          `      <span class="time">${time}</span>\n` +
          '    </div>\n';
      }
      html += '  </div>\n';
    }
    html += '</div>\n';
  }

  console.log(html);
};

module.exports = {
  eventsToHtml
};
