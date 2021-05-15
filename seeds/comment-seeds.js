const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Test!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "What!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Who"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "add content"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "BOOOOOOOO!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "what the what!"
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: "You're a tool"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice tool! HAHHAHAH you said tool"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;