// import * as dotenv from 'dotenv'
// dotenv.config()
import express, { Request, Response } from 'express';
import cors from 'cors';
import { arrayOfStudent } from './database/student.db';
const app = express();
import { IStudent } from './database/models/student.model';

let arrOfStudents = [...arrayOfStudent];
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log('Listening On Port 3000');
});

app.get('/', function (req: Request, res: Response) {
  res.send('Home');
});

app.get('/api/students', function (req: Request, res: Response) {
  console.log('Get Request');
  res.send(arrOfStudents);
});

app.post('/api/students', function (req: Request, res: Response) {
  let student: IStudent = {
    fullName: req.body.fullName,
    StudentID: req.body.id,
    grade: req.body.age,
    hobby: req.body.hobby,
  };
  arrOfStudents.push(student);
  res.send(student);
});

app.delete('/api/students/:fullName', function (req: Request, res: Response) {
  let student_fullNmae = req.params.fullName;
  let temp = arrOfStudents.filter((s) => s.fullName !== student_fullNmae);
  arrOfStudents = temp;

  res.send();
});
