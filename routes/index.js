var express = require('express');
var router = express.Router();

const videosController = require('../controllers').videos;
const tagssController = require('../controllers').tags;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Videos Router */
router.get('/api/videos', videosController.list);
router.get('/api/videos/:id', videosController.getById);
router.get('/api/videos', videosController.add);
router.get('/api/videos/:id', videosController.update);
router.get('/api/videos/:id', videosController.delete);

/* Tags Router */
router.get('/api/tags', tagsController.add);
router.get('/api/tags/:id', tagsController.delete);

module.exports = router;
