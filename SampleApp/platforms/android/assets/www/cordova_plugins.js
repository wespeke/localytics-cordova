cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.localytics.phonegap.LocalyticsPlugin/www/Localytics.js",
        "id": "com.localytics.phonegap.LocalyticsPlugin.Localytics",
        "clobbers": [
            "Localytics"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.localytics.phonegap.LocalyticsPlugin": "1.0.0"
}
// BOTTOM OF METADATA
});