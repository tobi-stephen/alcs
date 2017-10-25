var Resource = require('./resource');

exports.getStudents = function(req, res, next){
	Resource.find(function(err, reso){
		res.render('index', {title: 'Welcome', list: reso});
	});
}

exports.getCreateStudent = function(req, res, next){
	res.render('create', {title: 'Create New Resource'});
}

exports.postCreateStudent = function(req, res, next){
	console.log(req.body);
	var resource = new Resource(req.body);
	resource.save(function(err, resource, next){
		if (err) next();
		res.redirect('/');
	});
}

exports.getStudentResource = function(req, res, next){
	var id = req.params.id;
	console.log(id);	
}

exports.editStudentResource = function(req, res, next){
	var id = req.params.id;
	console.log("Let us edit " + id);
	res.end();
}

exports.deleteStudentReso = function(req, res, next){
	var id = req.params.id;
	console.log(id);
	Resource.findById(id, function(err, resource){
		if (err){
			console.log(err);
			res.end();
		}
		console.log(resource);
		res.end();
		/*else{
		resource.remove(function(err,resource){
			if(err) {
				console.error(err);
				res.send("SWW");
			}else{
				res.json(resources)
			}
		})
		}*/
	})
}

exports.deleteStudentResource = function(req, res, next){
	var id = req.params.id;
	console.log("Let us delete " + id);
	res.end();
}