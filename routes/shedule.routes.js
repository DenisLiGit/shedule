const express = require('express')
const router = express.Router()
const Shedule = require('../models/Shedule')

router.post(
    '/setShedule',
    async (req, res) => {
        const shedule = req.body

        try {
            const candidate = await Shedule.findOne({userId: shedule.userId})
            if (candidate) {
                const getShedule = candidate.shedules.find(item => item._id == shedule.shedule._id)
                if (!!getShedule) {
                    candidate.shedules = candidate.shedules.map(item => {
                        if (item._id == shedule.shedule._id) {
                            return shedule.shedule
                        }
                        return item
                    })

                    await candidate.save()
                    res.status(201).json({"message": "Обновленно"})
                } else {
                    delete shedule.shedule._id
                    candidate.shedules.push(shedule.shedule)
                    await candidate.save()
                    res.status(201).json({"message": "Сохранено"})
                }
            } else {
                const shedulesNew = new Shedule({
                    userId: shedule.userId,
                    shedules: [
                        shedule.shedule
                    ]
                })
                await shedulesNew.save()
                res.status(201).json({'message': 'Расписание сохранено'})
            }
        } catch (e) {
            res.status(500).json({'message': 'Что то пошло нетак'})
        }
    }
)

router.get(
    '/getShedule',
    async (req, res) => {
        const userId = req.query.userId
        const sheduleId = req.query.sheduleId

        try {
            const shedule = await Shedule.find({userId})
            if (!shedule.length) {
                res.status(404).json({'message': 'Добавьте расписание'})
            } else {
                if (sheduleId === 'undefined') {
                    res.status(201).json({
                        type: 'get',
                        shedule
                    })
                } else {
                    res.status(201).json({
                        type: 'edit',
                        shedule: shedule[0].shedules.filter((item) => item._id == sheduleId)
                    })
                }
            }
        } catch (e) {
            res.status(500).json({'message': 'Ошибка соединения с сервером'})
        }
    }
)

router.delete(
    '/deleteShedule',
    async (req, res) => {
        const userId = req.query.userId
        const sheduleId = req.query.sheduleId

        try {
            const candidate = await Shedule.findOne({userId: userId})

            if (!candidate) {
                res.status(400).json({message: 'Что то пошло не так'})
            } else {
                candidate.shedules = candidate.shedules.filter(item => {
                    return item._id != sheduleId
                })

                await candidate.save()
                res.status(201).json({message: 'Время удалено'})
            }
        } catch (e) {
            res.status(500).json({'message': 'Ошибка удаления'})
        }
    }
)

module.exports = router