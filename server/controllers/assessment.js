import AssessmentData from '../models/assessment.js';

export const getAssessment = async (req, res)=> {
    try {
        const allAssessment = await AssessmentData.find();
        res.status(200).json(allAssessment);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createAssessment = async (req, res)=> {
    const assessment = req.body;

    const newAssessment = new AssessmentData(assessment);

    try {
        await newAssessment.save();
        res.status(201).json(newAssessment);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const deleteAssessment = async (req, res)=> {
    const id =  req.params.id;
    try {
        await AssessmentData.findByIdAndRemove(id).exec();
        res.send('Successfully Deleted!')
    } catch (error) {
        console.log(error);
    }
}