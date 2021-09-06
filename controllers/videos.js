const Videos = require('../models').Videos;
const Tags = require('../models').Tags;

module.exports = {
    list(req, res) {
        return Videos
            .findAll({
                include: [{
                    model: Tags,
                    as: 'tags'
                }],
                order: [
                    ['createdAt', 'DESC'],
                    [{ model: Tags, as: 'tags' }, 'createdAt', 'DESC']
                ],
            })
            .then((videos) => res.status(200).send(videos))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        return Videos
          .findByPk(req.params.id, {
            include: [{
              model: Tags,
              as: 'tags'
            }],
        })
        .then((videos) => {
        if (!videos) {
            return res.status(404).send({
            message: 'Video Not Found',
            });
        }
        return res.status(200).send(videos);
        })
        .catch((error) => res.status(400).send(error));
    },
    
    add(req, res) {
    return Videos
        .create({
        nom: req.body.nom,
        description: req.body.description,
        url: req.body.url,
        })
        .then((videos) => res.status(201).send(videos))
        .catch((error) => res.status(400).send(error));
    },
    
    update(req, res) {
    return Videos
        .findByPk(req.params.id, {
        include: [{
            model: Tags,
            as: 'tags'
        }],
        })
        .then(videos => {
        if (!videos) {
            return res.status(404).send({
            message: 'Video Not Found',
            });
        }
        return videos
            .update({
            nom: req.body.nom || videos.nom,
            description: req.body.description || videos.description,
            url: req.body.url || videos.url,
            })
            .then(() => res.status(200).send(videos))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },
    
    delete(req, res) {
    return Videos
        .findByPk(req.params.id)
        .then(videos => {
        if (!videos) {
            return res.status(400).send({
            message: 'Video Not Found',
            });
        }
        return videos
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },
};