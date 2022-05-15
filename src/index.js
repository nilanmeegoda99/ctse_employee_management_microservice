import express from "express";
import mongoose from "mongoose";
import {ApolloServer, gql} from "apollo-server-express"
import {resolvers} from "./resolver"
import {typeDefs} from "./typeDefs"

const server = async () => {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    await server.start();

    server.applyMiddleware({app});

    try{
        await mongoose.connect("mongodb+srv://nilanmeegoda:admin123@employeecluster.6unxr.mongodb.net/employee_db?retryWrites=true&w=majority", {useNewUrlParser: true})
        console.log('db connected')
    }catch(err){
        console.log(err)
    }
   

    app.listen({port: 4001}, ()=> {
        console.log('server running')
    })
}

server();