import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';
import courseRoutes from './routes/courses.js';
import materialRoutes from './routes/materials.js';
import assessmentRoutes from './routes/assessment.js';

const app = express();

app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));
app.use(cors());

app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/materials', materialRoutes);
app.use('/assessments', assessmentRoutes);

const CONNECTION_URL = 'mongodb+srv://pawan:1234@cluster0.iezcbmf.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

//MongoDB Connection
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
    console.log('Connection is established and running on port:', PORT)
)).catch((err) => console.log(err.message));

//mongoose.set('useFindAndModify', false);


