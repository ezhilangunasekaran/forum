import xss from 'xss-filters';

let ui ={
    renderPosts(posts){
        let elements = posts.map((post)=>{
            let {title,lastReply} = post;
            return articleTemplate(title,lastReply);
        });
        let target = document.querySelector(".container");
        target.innerHTML = elements.join("");
    },

    renderUsers(users){
        let elements = users.map((user)=>{
            let {name,avatar} = user;
            return userList(name,avatar);
        });
        let target = document.querySelector(".sidebar");
        target.innerHTML = elements.join("");
    }
}
 function articleTemplate(title,lastReply){
    let safeTitle = xss.inHTMLData(title);
    let safeLastReply = xss.inHTMLData(lastReply);
    let template =`
    <article class='post'>
    <h2 class='post-title'>
    ${safeTitle}
    </h2>
    <p class="post-meta">
    ${safeLastReply}
    </p>
    </article>`;
return template;
}

function userList(name,avatar) {
     let safeName = xss.inHTMLData(name);
     let safeAvatar = xss.inHTMLData(avatar);
     let template =`<div class='user'>
    <h3>${safeName}</h3>
    <img src="assets/${safeAvatar}">
    </div>`;
    return template;
}
export default ui;
