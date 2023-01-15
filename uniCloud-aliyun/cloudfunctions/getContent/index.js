'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let res = await db.collection('notes').doc(event._id).get();
	//返回数据给客户端
	return res
};
