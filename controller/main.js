var _ = require('common/util');
var IslamicDate = require('../lib/IslamicDate');

_.extend(exports, {
	':load': function() {
		console.log('View was loaded');
		var view = this;
		
		// To adjust hijriah date
		var adjustment = -2;
		
		var islamicDate = new IslamicDate.IslamicDate();
		var txtIslamicDate = view.get('txtIslamicDate');
		
		txtIslamicDate.label(islamicDate.getIslamicDate(adjustment));
	}
});
