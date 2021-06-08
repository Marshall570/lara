require('dotenv/config')
const multer = require('multer')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')
const path = require('path')
const crypto = require('crypto')


const storageTypes = {
    local: multer.diskStorage({
        destination: (request, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
        },

        filename: (request, file, cb) => {
            if (err) cb(err)
    
            file.key = `${file.name}`
    
            cb(null, file.key)            
        }
    }),

    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'lara-profile-pics',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            const fileName = `${file.originalname}`
    
            cb(null, fileName)
        }
    })
}

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),

    storage: storageTypes[process.env.STORAGE_ENV],

    limits: {
        fileSize: 2 * 1024 * 1024
    },

    fileFilter: (request, file, cb) => {
        const allowedMime = [
            'image/jpeg',
            'image/jpg',
            'image/pjpeg',
            'image/png'
        ]

        if (allowedMime.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new Error('Invalid file'))
        }
    }
}