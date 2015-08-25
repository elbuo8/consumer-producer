'use strict';

var consumer = require('./consumer');

consumer.listen(process.env.PORT || 3000, function() {
  var address = this.address();
  console.log('Consumer running on http://%s:%d', address.address, address.port);
});
