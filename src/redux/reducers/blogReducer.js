import { BLOG_ACTIONS } from '../actions/blogActions';

export const blog = (state=[], action) => {
    switch(action.type) {
        case BLOG_ACTIONS.GET_BLOG_POSTS_DONE:
        console.log(action.blog);
        return action.blog || state;
        default:
        return state;
    }
}