import Post from './post';
import Users from  './users';
import ui from './ui';


Post.findAll()
    .then(ui.renderPosts)
    .catch((error)=> {
        console.log(error);
});

Users.findActive()
    .then(ui.renderUsers)
    .catch((error)=>{
        console.log(error);
});