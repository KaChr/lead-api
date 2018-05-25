// import * as Users from '../lib/Users'
import DB from '../models'
import { rand } from '../helpers/Math'
import BCrypt from 'bcryptjs'
import JWT from 'jsonwebtoken'

export default {
    list(req, res) {
        DB.Profile_students.findAll({
            attributes: [
                'city_id',
                'image_adress',
                'current_school',
                'school_length',
                'intern_period_start',
                'intern_period_end',
                'description',
                'knowledge',
                'education',
                'student_id'
            ]
        })
        .then((profileStudents) => {
            console.log(profileStudents);
            res.status(200).send(profileStudents);
        })
        .catch((error) => {
            console.log(error);
            res.status(400).send(error);
        });
    },
    find(req, res) {
        DB.Students.find({
            attributes: [
                'first_name',
                'last_name'
            ],
            where: {
                id: req.params.id
            },
            include: [{
                attributes: [
                    'city_id',
                    'image_adress',
                    'current_school',
                    'school_length',
                    'intern_period_start',
                    'intern_period_end',
                    'description',
                    'knowledge',
                    'education',
                    'student_id'
                ],
                model: DB.Profile_students
            }]
        })
        /*DB.Profile_students.find({
            attributes: [
                'city_id',
                'image_adress',
                'current_school',
                'school_length',
                'intern_period_start',
                'intern_period_end',
                'description',
                'knowledge',
                'education',
                'student_id'
            ],
            where: {
                student_id: req.params.id
            }
        })*/
        .then((ProfileStudent) => {
            console.log(ProfileStudent);
            res.status(200).send(ProfileStudent);
        })
        .catch((error) => {
            console.log(error);
            res.status(400).send(error);
        });
    },
    create(req, res) {
        DB.Profile_students.create({
            city_id: req.body.city_id,
            image_adress: req.body.image_adress,
            current_school: req.body.current_school,
            school_length: req.body.school_length,
            intern_period_start: req.body.intern_period_start,
            intern_period_end: req.body.intern_period_end,
            description: req.body.description,
            knowledge: req.body.knowledge,
            education: req.body.education,
            student_id: req.params.id
        })
        .then((ProfileStudent) => {
            console.log(ProfileStudent);
            res.status(200).send(ProfileStudent);
        })
        .catch((error) => {
            console.log(error);
            res.status(400).send(error);
        });
    },
    update(req, res) {
        DB.Profile_students.update({
            city_id: req.body.city_id,
            image_adress: req.body.image_adress,
            current_school: req.body.current_school,
            school_length: req.body.school_length,
            intern_period_start: req.body.intern_period_start,
            intern_period_end: req.body.intern_period_end,
            description: req.body.description,
            knowledge: req.body.knowledge,
            education: req.body.education,
        }, {  
            where: {
                student_id: req.params.id
            }
        })
        .then((ProfileStudent) => {
            console.log(ProfileStudent);
            res.status(200).send(ProfileStudent);
        })
        .catch((error) => {
            console.log(error);
            res.status(400).send(error);
        });
    },
    destroy(req, res) {
        DB.Profile_students.destroy({
            where: {
                student_id: req.params.id
            }
        })
        .then((result) => {
            console.log(result);
            return res.status(200).json({
              message: 'Profile student successfully deleted'
            });
        }).catch((error) => {
            console.log(error);
            return res.status(400).json({
              message: 'Failure in deleting profile student'
            });
        });
    }
}