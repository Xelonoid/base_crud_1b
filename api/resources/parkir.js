module.exports = {
    read(req, res) {
        res.status(201).json("api parkir read")
    },
    update(req, res) {
        res.status(201).json("api parkir update")
    },
    create(req, res) {
        res.status(201).json("api parkir create")
    },
    delete(req, res) {
        res.status(201).json("api parkir delete")
    },
};