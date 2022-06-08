import MaterialData from '../models/materials.js';

export const getMaterials = async (req, res)=> {
    try {
        const allMaterials = await MaterialData.find();
        res.status(200).json(allMaterials);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createMaterial = async (req, res)=> {
    const material = req.body;

    const newMaterial = new MaterialData(material);

    try {
        await newMaterial.save();
        res.status(201).json(newMaterial);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const deleteMaterial = async (req, res)=> {
    const id =  req.params.id;
    try {
        await MaterialData.findByIdAndRemove(id).exec();
        res.send('Successfully Deleted!')
    } catch (error) {
        console.log(error);
    }
}