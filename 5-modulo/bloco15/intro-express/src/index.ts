// https://documenter.getpostman.com/view/18694580/UzJJuHBc

import express from "express";
import cors from 'cors'
import users from './users.json'
import posts from './posts.json'
import { writeFile } from 'node:fs';

const app = express()
app.use(express.json())
app.use(cors())

type User = {
id: number,
name: string,
phone: string,
email: string,
website: string,
}

type Post = {
  id: number,
  title: string,
  body: string,
  userId: number
}

app.delete("/user/:userId/delete", (req,res) => {
  const requestUserId = Number(req.params.userId)

  const filteredUser:User[] = users.filter(user => {
    return (requestUserId !== user.id)
  })
  const filteredUserString:string = JSON.stringify(filteredUser)

  writeFile('/Users/pedromarinsekine/Pedro-Sekine/5-modulo/bloco15/intro-express/src/users.json', filteredUserString, (err) => {
    if (err){
      console.log("erro")
    }
  })

  res.send("usuário deletado com sucesso")
})

app.delete("/post/:id/delete", (req, res) => {
  const requestId:number = Number(req.params.id)

  const filteredPosts:Post[] = posts.filter(post => {
    // if (post.id === requestId) {
    //   console.log("post.id === requestId",post.title)
    // }
    return (post.id !== requestId)
  })

  const filteresPostsJSON:string = JSON.stringify(filteredPosts)

  writeFile('/Users/pedromarinsekine/Pedro-Sekine/5-modulo/bloco15/intro-express/src/posts.json', filteresPostsJSON, (err) => {
     if (err) {
      console.log("erro")
     }
  })

  res.send(`publicação deletada.`)

})

app.get("/:userId/posts", (req,res) => {
  const requestUserId:number = Number(req.params.userId)

  if (!requestUserId || typeof(requestUserId) !== "number" || requestUserId > users.length || requestUserId < 1 ) {
    res.status(400).send("Incorrect User ID")
  }

  const filteredPosts:Post[] = posts.filter(post => {
    return(requestUserId === post.userId)
  })

  res.send(filteredPosts)
})

app.get("/posts",(req,res) => {
  res.send(posts)
})

app.get("/users", (req,res) => {
  res.send(users)
})

app.get("/pedro",(req, res) => {
  res.send("esse cara é fera")
})

app.listen(3003,() => {
  console.log("Server is Running in port 3003, http://localhost:3003")
})