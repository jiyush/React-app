import express from 'express';
const router =  require('express-promise-router')();
import passport from 'passport';
import passportConf from '../../passport';
import { validateBody, schemas } from '../../helpers/route.helpers';
import  TaskController from '../controllers/task.controller';

router.route('/add').post(TaskController.create);

module.exports = router;