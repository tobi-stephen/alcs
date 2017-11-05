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
	//console.log(req.body);
	var resource = new Resource(req.body);
	resource.save(function(err, resource){
		if (err) next();
		res.redirect('/');
	});
}

exports.getStudentResource = function(req, res, next){
	var id = req.params.id;
	Resource.findById(id, function(err, resource){
		if (err) next();
		res.render('student', {title: 'Show Student Resource', resource: resource});
	});
	//console.log(id);	
}

exports.getEditStudent = function(req, res, next){
	var id = req.params.id;
	console.log("Let us edit " + id);
	Resource.findById(id, function(err, resource){
		if (err) next();
		res.render("update", {title: "Student Update", resource: resource});
	});
}

exports.postEditStudent = function(req, res, next){
	var id = req.params.id;
	console.log("Let us post Edit " + id);
	Resource.findById(id, function(err, resource){
		if (err) next();
		//incase the attr is not in the request body, default back
		resource.name = req.body.name || resource.name;
		resource.department = req.body.department || resource.department;
		resource.email = req.body.email || resource.email;
		resource.gender = req.body.gender || resource.gender;
		resource.save(function(err, resource){
			if (err) next();
			res.redirect('/');
		});
	});
}

exports.deleteStudent = function(req, res, next){
	var id = req.params.id;
	console.log(id);
	Resource.findById(id, function(err, resource){
		if (err || !resource){
			next();
		}
		else{
		resource.remove(function(err,resource){
			if(err) {
				console.error(err);
				next();
			}else{
				res.redirect('/');
			}
		})
		}
	})
}

/*exports.deleteStudentResource = function(req, res, next){
	var id = req.params.id;
	console.log("Let us delete " + id);
	res.end();
}*/