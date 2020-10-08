const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');
//Initialize
mongoose.plugin(slug);

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        slug: { 
            type: String, 
            slug: "name"    
        } 
    },
    { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);