const fs = require('fs')
const File = require('../models/File')
const config = require('config')

class FileService {
	createDir(file, path) {
		const filePath = path + '/' + file.user + '/' + file.path
		return new Promise((resolve, reject) => {
			try {
				if (!fs.existsSync(filePath)) {
					fs.mkdirSync(filePath)
					return resolve({ message: 'File was created' })
				} else {
					return reject({ message: 'File already exist' })
				}
			} catch (e) {
				return reject({ message: 'File error' })
			}
		})
	}

	deleteFile(pathFile, type) {
		const path = pathFile

		console.log(type)
		if (type === 'dir') {
			fs.rmdirSync(path)
		} else {
			fs.unlinkSync(path)
		}
	}

	getPath(req, file) {
		return req.filePath + '/' + file.user + '/' + file.path
	}
}
module.exports = new FileService()
