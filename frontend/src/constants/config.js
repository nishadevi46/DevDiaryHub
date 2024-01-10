export const API_NOTIFICATION_MESSAGES={
loading:{
    title:'loading...',
  message:'ur data is being loaded Please wait'
},
success:{
    title:'Success',
    message:'data successfully loaded'
},
responseFailure:{
    title:'Error',
    message:'any error occured while fetching response from server. plz try later'
},
requestFailure:{
    title:'Error',
    message:'an error occured whilke parsing request data'
},
networkError:{
    title:'Error',
    message:'unable to connect with the server Plz check internet connectivity'
}
}
export const SERVICE_URL={
    userSignup: { url: '/signup', method: 'POST' },
    userLogin: { url: '/login', method: 'POST' },
    uploadFile: { url: '/file/upload', method: 'POST' },
    createPost: { url: 'create', method: 'POST' },
    getAllPosts: { url: '/posts', method: 'GET', params: true },
    getPostById: { url: 'post', method: 'GET', query: true },
    updatePost: { url: 'update', method: 'PUT', query: true },
    deletePost: { url: 'delete', method: 'DELETE', query: true },
    newComment: { url: '/comment/new', method: 'POST' },
    getAllComments: { url: 'comments', method: 'GET', query: true },
    deleteComment: { url: 'comment/delete', method: 'DELETE', query: true }
    
}