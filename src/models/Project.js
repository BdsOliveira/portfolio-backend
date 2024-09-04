const mongoose = require('mongoose');

const Project = mongoose.model('Project', {
    gitHubLink: String,
    liveLink: String,
    title: String,
    description: String,
    skillUsed1: String,
    skillUsed2: String,
    skillUsed3: String,
    skillUsed4: String,
    skillUsed5: String,
    isVisible: Boolean
})
module.exports = Project;

const newModel = {
    title: String,
    objective: String,
    features: Array,
    skills: Array,
    images: Array,
    github_url: String,
    live_url: String,
    is_visible: Boolean
}