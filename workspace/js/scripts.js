var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
	dinosaur = 'triceratops';
	dinosaurUpperCased = dinosaur.toUpperCase();
	velociraptorReplaced = text.replace('Velociraptor', dinosaurUpperCased);
var textLength = text.length/2;
var textLength = velociraptorReplaced.slice(0, textLength);
console.log(textLength)