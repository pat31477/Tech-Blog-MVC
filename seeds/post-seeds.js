const { Post } = require('../models');

const postData = [
    {
        title: "Add something here",
        post_content: "Add a comment to this.",
        user_id: 3
    },
    {
        title: "Put stuff here!",
        post_content: "I need more comments",
        user_id: 1
    },
    {
        title: "Make a comment about portfolio!",
        post_content: "Add a comment that expands on portfolio",
        user_id: 2

    },
    {
        title: "Witty Comment!",
        post_content: "Something goes in here as well",
        user_id: 2
    },
    {
        title: "Test Test Test!",
        post_content: "iwerjgewjrgekgeermgmermerhh[h[rhwrhrwhrwphwrpkhkhprkhkwrwkphkrphtkwp",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;