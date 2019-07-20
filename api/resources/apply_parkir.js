module.exports = {
    read(req, res) {
        res.status(201).json("api apply parkir read")
    },
    update(req, res) {
        res.status(201).json("api apply parkir update")
    },
    create(req, res) {
        res.status(201).json("api apply parkir create")
    },
    delete(req, res) {
        res.status(201).json("api apply parkir delete")
    },
};