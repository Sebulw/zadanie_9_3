var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
	dinosaur = 'triceratops';
	dinosaurUpperCased = dinosaur.toUpperCase();
	velociraptorReplaced = text.replace('Velociraptor', dinosaurUpperCased);
console.log(velociraptorReplaced.length);
	halfOfText = velociraptorReplaced.slice(0, 72);
console.log(halfOfText)