import Property from '../models/property.js'

const PropertyController = {
    async index(req, res) {
        try {
            await PropertyController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryIndex(req, res) {
        const properties = await Property.findAll()
        res.status(200)
        res.json({
            success: true,
            data: properties
        })
    },
    async show(req, res) {
        try {
            await PropertyController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryShow(req, res) {
        const property = await Property.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: property
        })
    },
    async store(req, res) {
        try {
            await PropertyController.tryStore(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryStore(req, res) {
        const property = await Property.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: property
        })
    },
    async update(req, res) {
        try {
            await PropertyController.tryUpdate(req, res)
        }catch(error) {
            let actualMessage = '';
            if(error.message == 'Fail! Record not found!') {
                actualMessage = error.message
                res.status(404)
            }else {
                res.status(500)
                actualMessage = 'Fail! The query is failed!'
            }
            
            res.json({
                success: false,
                message: actualMessage
            })
        }
    },
    async tryUpdate(req, res) {
        const recordNumber = await Property.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const property = await Property.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: property
        })
    },
    async destroy(req, res) {
        try {
            await PropertyController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryDestroy(req, res) {
        const property = await Property.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: property
        })
    }
}

export default PropertyController
