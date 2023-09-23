import mongoose from "mongoose";


const connectarDB = async (req,res) =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        const url = `Conexion establecida correctamente en el puerto ${process.env.PORT}`
        console.log(url);
    } catch (error) {
        console.error('Error al intentar conectar a la base de datos',error);
    }
};

export default connectarDB;