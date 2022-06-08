import mongoose from 'mongoose';

const materialSchema = mongoose.Schema({
    materialID: String,
    materialName: String
})

const material = mongoose.model('material', materialSchema);

export default material;