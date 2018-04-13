module.exports = {
    // blog post endpoints
    getAllPosts: (req,res)=>{
        const db = req.app.get('db')

        db.get_all_posts([])
        .then((posts)=>res.status(200).send(posts))
        .catch(()=>res.status(500).send())
    },
    getOnePost: (req,res)=>{
        const db = req.app.get('db')

        db.get_one([req.params.id])
        .then((post)=>res.status(200).send(post))
        .catch(()=>res.status(500).send())
    },
    addPost: (req,res)=>{
        const db = req.app.get('db')
        const {title, content, image, claps}=req.body
        const {id}=req.params
   
        db.create_post([id,title,content,image,claps])
        .then((post)=>res.status(200).send(post))
        .catch(()=>res.status(500).send())
    },
    editPost: (req,res)=>{
        const db = req.app.get('db')
        const {id} = req.params
        
        db.blog_posts.update({id:id},req.body)
        .then((post)=>res.status(200).send(post))
        .catch(()=>res.status(500).send())
    }, 
    deletePost : (req,res)=>{
        const db = req.app.get('db')
        const {id} = req.params
        console.log(id);
        
        
        db.delete_post([id])
        .then((post)=>res.status(200).send(post))
        .catch(()=>res.status(500).send())
    },
    // response endpoints
    getResponses: (req,res)=>{
        const db = req.app.get('db')

        db.get_responses([req.params.id])
        .then((comment)=>res.status(200).send(comment))
        .then(()=>res.status(500).send())
    },
    addResponse: (req,res)=>{
        const db = req.app.get('db')
        const {user_id, content, claps}=req.body
        const blog_id = req.params.id
        // pass in blog_id through params

        db.create_response([blog_id,user_id,content,claps])
        .then((post)=>res.status(200).send(post))
        .catch(()=>res.status(500).send())
    },
    editResponse: (req,res)=>{
        const db = req.app.get('db')
        const {id} = req.params
        
        db.responses.update({id:id},req.body)
        .then((post)=>res.status(200).send(post))
        .catch(()=>res.status(500).send())
    }

}