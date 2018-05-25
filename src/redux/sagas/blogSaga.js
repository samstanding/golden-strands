import { call, put, takeEvery } from 'redux-saga/effects';
import { BLOG_ACTIONS } from '../actions/blogActions';
import { getBlogPosts } from '../requests/blogRequests';

function* getBlogSaga() {
    try{
        yield put ({type: BLOG_ACTIONS.GET_BLOG_POSTS_START});
        const blog = yield call(getBlogPosts);
        yield put ({
            type:BLOG_ACTIONS.GET_BLOG_POSTS_DONE,
            blog
        })
    } 
    catch (error) {
        yield put ({type:BLOG_ACTIONS.GET_BLOG_POSTS_DONE});
        yield put ({
            type:BLOG_ACTIONS.GET_BLOG_POSTS_FAILED,
            message: error.message
        })
    }
}

function* blogSaga() {
    yield takeEvery ('GET_BLOG_POSTS', getBlogSaga);
}

export default blogSaga;