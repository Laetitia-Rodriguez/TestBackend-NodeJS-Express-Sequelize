const Tags = require('../models').Tags;
const Videos = require('../models').Videos;

module.exports = {
    add(req, res) {
    return Tags
        .create({
        valeur: req.body.valeur,
        })
        .then((tags) => res.status(201).send(tags))
        .catch((error) => res.status(400).send(error));
    },
    
    delete(req, res) {
    return Tags
        .findByPk(req.params.id)
        .then(tags => {
        if (!tags) {
            return res.status(400).send({
            message: 'Tag Not Found',
            });
        }
        return tags
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },
};