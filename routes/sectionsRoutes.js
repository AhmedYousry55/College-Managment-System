const express = require('express');
const sectionController = require('../controllers/sectionController');
const authController = require('../controllers/authController');
const router = express.Router();


router
  .route('/')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),sectionController.getAllSections)
  .post(authController.protect,authController.restrictTo('staff','admin'),sectionController.CreateSection);
router
  .route('/:id')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),sectionController.getOneSection)
  .patch(authController.protect,authController.restrictTo('staff','admin'),sectionController.updateSection)
  .delete(authController.protect,authController.restrictTo('staff','admin'),sectionController.deleteSection);

  router.route('/:id/Enroll').post(authController.protect,authController.restrictTo('student','staff','admin'),sectionController.registerSection);


  module.exports = router;
