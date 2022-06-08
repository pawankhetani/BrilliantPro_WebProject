import CourseData from '../models/courses.js';

export const getCourse = async (req, res)=> {
    try {
        const allCourses = await CourseData.find();
        res.status(200).json(allCourses);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createCourse = async (req, res)=> {
    const course = req.body;

    const newCourse = new CourseData(course);

    try {
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const deleteCourse = async (req, res)=> {
    const id =  req.params.id;
    try {
        await CourseData.findByIdAndRemove(id).exec();
        res.send('Successfully Deleted!')
    } catch (error) {
        console.log(error);
    }
}