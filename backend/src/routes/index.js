const router = require('express').Router();

const routes=[
    {
        path:'/auth',
        route:require('./Auth.route')
        
    }
]
// app.use('/api', router);
routes.forEach((cur)=>{
    router.use(cur.path,cur.route)
})  
module.exports=router