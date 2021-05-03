const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// A user has many blog posts and a blog post has one user
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// A blog post has many comments and a comment has one post
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// A user has many comments and a comment has one user
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = {User, Post, Comment}