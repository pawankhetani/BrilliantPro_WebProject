import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    courseID: String,
    courseName: String
})

const course = mongoose.model('course', courseSchema);

export default course;