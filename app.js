fotos = [];

if (Meteor.isClient) {

  	Template.body.helpers({
    	fotos: function () {
      		return Session.get("fotos");
    	}
  	});

  	Template.body.events({
    	'click button': function () {

      	var cameraOptions = {
        	width: 800,
        	height: 600
      	};

      	MeteorCamera.getPicture(cameraOptions, function (error, data) {        
        	var foto = {src : data};
        	fotos.push(foto);
        	Session.set("fotos", fotos);
      	});

    }

  });

}