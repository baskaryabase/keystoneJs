var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
// var User = new keystone.List('User');
var User = new keystone.List('User', {
  map: { name: 'fullname' }
});

User.add({
	email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
	email: { type: String, unique: true, lowercase: true },
	started: { type: Boolean, default: false },
	fullname: {type:String,index:true},
	contactnumber: {type:Number,index:true},
	fathersname: {type:String,index:true},
	groupin12th: {type:String,index:true},
	marks: {type:Number,index:true}
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Registration
 */
User.defaultColumns = 'fullname, email, started, contactnumber, marks';
User.register();
