const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(express.json())
app.use(cors({origin:true}));

app.post('/authenticate',async(req,res)=>{
    const {username} = req.body;
    try {
        const responce = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, first_name: username,secret: username},
            {headers:{'private-key':'44f6e756-7f0d-4e05-88b1-5a9eb1d16bf3'}}
        )
        return res.status(responce.status).json(responce.data)
    } catch (error) {
        return res.status(e.responce.status).json(e.responce.data)
    }
})

app.listen(3200)