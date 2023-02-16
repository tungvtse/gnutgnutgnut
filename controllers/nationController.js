const Nations = require('../models/nation');

class NationController {
    index(req, res, next) {
        Nations.find({})
            .then((nations) => {
                res.render('nation', {
                    title: "The list of Nations",
                    nations: nations,
                });
            }).catch(next);
    }
    create(req, res, next) {
        const nation = new Nations(req.body);
        nation.save()
            .then(() => res.redirect('/nation'))
            .catch(error => { });
    }
    formEdit(req, res, next) {
        const nationId = req.params.nationId;
        let viewsData = {};
        Nations.findById(nationId)
            .then((nation) => {
                res.render('editNation', {
                    title: 'Edit nation',
                    nation: nation,
                });
            })
            .catch(next);
    }
    edit(req, res, next) {
        Nations.updateOne({ _id: req.params.nationId }, req.body)
            .then(() => {
                res.redirect('/nation')
            })
            .catch(next)
    }
    delete(req, res, next) {
        Nations.findByIdAndDelete({ _id: req.params.nationId })
            .then(() => res.redirect('/nation'))
            .catch(next);
    }
}
module.exports = new NationController;
