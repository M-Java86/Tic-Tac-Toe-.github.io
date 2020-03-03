const { Schema } = require('mongoose')

const IdeaSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
      default: 'New Title'
    },
    description: {
      type: String,
      required: false,
      default: 'New Description'
    }
  },
  {
    timestamps: {}
  }
)

module.exports = {
  IdeaSchema
}