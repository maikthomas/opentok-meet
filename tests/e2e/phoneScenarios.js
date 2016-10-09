/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */
/* global browser: false */
/* global element: false */
/* global by: false */
var uuid = require('uuid');
describe('Phone', function () {
  var roomName;
  beforeEach(function () {
    while(!roomName || roomName.indexOf('p2p') > -1) {
      // Don't want the roomname to have p2p in it or it will be a p2p room
      roomName = uuid.v1();
    }
    browser.ignoreSynchronization = true;
    browser.get(roomName + '/phone');
  });
  it('has the right phone number on the page', function () {
    expect(element(by.css('p')).getInnerHtml()).toContain('Call ' + browser.params.phoneNumber);
  });
});
