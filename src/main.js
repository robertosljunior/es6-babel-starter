import Cat from './modules/animal/cat';

(()=> {
	let cat = new Cat('Fritz');
	document.body.innerHTML = cat.do();
})();

