
var exec = require('cordova/exec');

module.exports = {

    /**
     * Returns the version name (or "Unknown" if it fails)
     *
     * @param {Function} callback       The message to accept the version name.
     */
    getVersion: function(callback) {
        exec(callback, function(err) {
        	callback('Unknown');
    	}, 'AppInfo', 'getVersion', []);
    },

    /**
     * Returns the package identifier (or "Unknown" if it fails)
     *
     * @param {Function} callback       The message to accept the identifier.
     */
    getIdentifier: function(callback){
        exec(callback, function(err){
            callback('Unknown');
        }, 'AppInfo', 'getIdentifier', []);
    }
};
