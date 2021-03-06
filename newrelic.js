'use strict'
const config = require('config');
/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV);

exports.config = {
  /**
   * Array of application names.
   */

  app_name: [config.get("NEW_RELIC.APP_NAME")],
  /**
   * Your New Relic license key.
   */
  license_key: config.get("NEW_RELIC.LICENSE_KEY"),
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info'
  }
}
