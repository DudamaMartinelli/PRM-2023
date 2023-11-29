import axios from "axios";
//Exportar ILike
import { IComment, ICredential, ITopic, IUser, ILike } from "../@types";

//Busca o token da Local Storage
const token = localStorage.getItem('token');

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {'Authorization': `Bearer ${token}`}
});

//ENDPOINTS
const _AUTH = '/auth';
const _PROFILE = '/profile';
const _TOPICS = '/topics';
const _COMMENTS = '/comments';
const _REPOSTS = '/reposts';
const _LIKES = '/likes';

//AUTH
const signIn = (credential: ICredential) => api.post(`${_AUTH}/signin`, credential);
const signUp = (user: IUser) => api.post(`${_AUTH}/signup`, user);

//PROFILE
const getProfileByUsername = (username: string) => api.get(`${_PROFILE}/${username}`)

//TOPICS
const getTopicsByUsername = (username?: string) => {
    const queryParam = username ? `?username=${username}` : '';
    return api.get(`${_TOPICS}${queryParam}`);
}
const getTopicsById = (id: number) => (api.get(`${_TOPICS}/${id}`)) 

const createTopic = (topic: ITopic) => (api.post(_TOPICS, topic));

//COMMENTS
const getCommentsByTopic = (topic: ITopic) => (api.get(`${_COMMENTS}?topic=${topic.id}`));
const createComment = (comment: IComment) => (api.post(_COMMENTS, comment));
const removeComment = (comment: IComment) => (api.delete(`${_COMMENTS}/${comment.id}`));

//REPOSTS
const getRepostsByTopic = (topic: ITopic) => (api.get(`${_REPOSTS}?topic=${topic.id}`));

//LIKES
const getLikesByTopic = (topic: ITopic) => (api.get(`${_LIKES}?topic=${topic.id}`));
const createLike = (like: ILike) => (api.post(_LIKES, like));
const removeLike = (like: ILike) => (api.delete(`${_LIKES}/${like.id}`));


export {
    signIn,
    signUp,

    getTopicsById,
    getRepostsByTopic,
    getProfileByUsername,
    getTopicsByUsername,
    createTopic,

    getCommentsByTopic,
    createComment,
    removeComment,

    getLikesByTopic,
    createLike,
    removeLike    

}

