import Cat from './modules/animal/cat';

(()=> {
	let cat = new Cat('Fritz');
	window.cat = cat;
	document.body.innerHTML = cat.do();
})();

