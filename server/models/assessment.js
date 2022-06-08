import mongoose from 'mongoose';

const assessmentSchema = mongoose.Schema({
    assessmentNo: Number,
    courseName: String,
    marks: Number
})

const assessment = mongoose.model('assessment', assessmentSchema);

export default assessment;