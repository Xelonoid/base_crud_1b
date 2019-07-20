let db = require('../sdk/connection');
let users = db.collection("users");

module.exports = {

    read(req, res){
        var udt = [];
        users.get().then( (s) => {
            s.forEach((dt) => {
                udt.push( dt.data());
            })
            res.status(201).json(udt)
        })
    },

    detail(req, res){
        users.doc(req.params.user_key)
            .get().then((s) => {
                res.status(201).json(s.data())
        })
    },  

    create(req, res) {
        let user = {
            "jenis_kendaraan" : req.body.jenis_kendaraan,
            "plat_nomor": req.body.plat_nomor,
            "jam_masuk": req.body.jam_masuk,
        }
        users.add( user ).then((s) => {
           s.update({user_key : s.id});
            res.status(201).json(user)
        })
    },

    update(req, res) {
        let user = {
            "jenis_kendaraan" : req.body.jenis_kendaraan,
            "plat_nomor": req.body.plat_nomor,
            "jam_masuk": req.body.jam_masuk,
        }
        users.doc(req.body.user_key).update(user).then((s) => {
            res.status(201).json(user)
        })
    },

    delete(req, res) {
        users.doc(req.body.user_key).delete().then((s) => {
            res.status(201).json(req.body.user_key)
        })
    },
};