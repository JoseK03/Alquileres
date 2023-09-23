import express from "express";
import cors from 'cors';


class Server{

    constructor(){
        this.app = express();

        this.port = process.env.PORT

        //----metodos path


        this.middleware();
        //this.routes();
    }

    middleware(){
        this.app.use(cors());
    }

    router(){
        //rutas

    }

    listenner(){
        this.app.listen(this.port,()=>{
            console.log(`puerto:${this.port}`);
        })
    }
};

export default Server;