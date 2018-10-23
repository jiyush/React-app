import express from 'express';
const router =  require('express-promise-router')();
import passport from 'passport';
import passportConf from '../../passport';
import { validateBody, schemas } from '../../helpers/route.helpers';
import  CustomerController from '../controllers/customer.controller';

    /*************** Api Routes for Customer *******************/

    router.route('/').post(CustomerController.getCustomer); 

    router.route('/create').post(validateBody(schemas.customerSchema), CustomerController.createCustomer);

    router.route('/update/:customerId').post(CustomerController.updateCustomer);

    router.route('/delete/:customerId').post(CustomerController.deleteCustomer); 

    router.route('/:customerId').post(CustomerController.getCustomer);

    router.route('/status/:customerId').post(CustomerController.updateStatus); 

module.exports = router;