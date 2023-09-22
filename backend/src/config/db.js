import mongoose from "mongoose";
const { MONGODB_URI , PORT } = process.env;

const connectarDB = async (req,res) =>{
    try {
        await mongoose.connect(MONGODB_URI,{
            useNewUrlParse: true,
            useUnifiedTopology:true
        });
        const url = `Conexion establecuda correctamente en el puerto ${PORT}`
        console.log(url);
    } catch (error) {
        console.error('Error al intentar conectar a la base de datos',error);
    }
};

export default connectarDB;