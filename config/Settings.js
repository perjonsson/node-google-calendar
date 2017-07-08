// Sample CalendarAPI settings
const SERVICE_ACCT_ID = '...@...iam.gserviceaccount.com';
const KEYFILE = 'googleapi-keyfile.pem';				//path to pem key
const TIMEZONE = 'UTC+08:00';
const CALENDAR_ID = {
	'primary': '',
	'calendar-1': 'calendar1@group.calendar.google.com',
	'calendar-2': 'calendar2@group.calendar.google.com'
};

module.exports.serviceAcctId = SERVICE_ACCT_ID;
module.exports.keyfile = KEYFILE;
module.exports.timezone = TIMEZONE;
module.exports.calendarId = CALENDAR_ID;

// Example for using json keys
// var fs = require('fs');
// const KEYPATH = '../json-googleapi-key';
// var json = fs.readFileSync(KEYPATH, 'utf8');
// var key = JSON.parse(json).private_key;
// module.exports.key = key;