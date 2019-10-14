import axios from 'axios'
import Qs from 'qs'
const Qs = require('qs')
const service = axios.create({
	baseURL: Process.env.BASE_API,
	timeout: 5000,
	transformRequest: [
		function (data) {
			return Qs.stringify(data)
		}
	]
})