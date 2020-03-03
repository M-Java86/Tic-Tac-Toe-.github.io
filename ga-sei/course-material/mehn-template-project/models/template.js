/* 
 * Place all DB schemas here for a single model.
 */

/* Step 1
 *
 * Import mongoose connection
 *
 */
const mongoose = require('../db/connection.js')

/* Step 2
 *
 * TODO: create model schema 
 *
 */
const TemplateModelSchema = new mongoose.Schema({
  name: String
})

/* Step 3
 *
 * TODO: export the schema
 */
module.exports = mongoose.model('Template', TemplateModelSchema);
