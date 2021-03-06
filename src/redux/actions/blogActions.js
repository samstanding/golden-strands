export const BLOG_ACTIONS = {
    GET_BLOG_POSTS: 'GET_BLOG_POSTS',
    GET_BLOG_POSTS_START: 'GET_BLOG_POSTS_START',
    GET_BLOG_POSTS_DONE: 'GET_BLOG_POSTS_DONE',
    GET_BLOG_POSTS_FAILED: 'GET_BLOG_POSTS_FAILED'
}

export const fetchBlogPosts = () => ({
    type: BLOG_ACTIONS.GET_BLOG_POSTS,
});