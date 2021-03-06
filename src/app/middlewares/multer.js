// multer configuration - file middleware
const multer = require('multer')

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./public/images")
	},
	filename: (req, file, cb) => {
		cb(null, `${Date.now().toString()}-${file.originalname}`)
	}
})

const fileFilter = (req, file, cb) => {
	const isAccepted = ['image/png', 'image/jpg', 'image/jpeg']
		.find(acceptedFormat => acceptedFormat == file.mimetype)
	return cb(null, isAccepted)
}

module.exports = multer({
	storage,
	fileFilter
})