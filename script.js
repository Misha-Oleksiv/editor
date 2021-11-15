'use strict'

const getS = selector => document.querySelector(selector);

getS('.btn-edit').addEventListener('click', function () {
	getS('.edit-block').classList.add('show');
	getS('.style-block').classList.remove('show');

	getS('.edit-area').value = getS('.top-block').innerHTML;
})

getS('.btn-save').addEventListener('click', function () {
	getS('.edit-block').classList.remove('show');
	getS('.top-block').innerHTML = getS('.edit-area').value;
})

getS('.btn-style').addEventListener('click', () => {
	getS('.style-block').classList.add('show');
	getS('.edit-block').classList.remove('show');
})

/* font size options function*/


function fontSize() {
	if(event.target.name = 'size'){
		getS('.top-block').style.fontSize = event.target.value;
	}
}

//Font family change

getS('#font-family').addEventListener('change', function (e) {
	getS('.top-block').style.fontFamily = e.target.value;
})



/*start text and bg colors*/

let colors = ['rgb(180, 16, 16)', 'rgb(75, 33, 190)', 'rgb(8, 129, 39)', 'rgb(71, 156, 212)', 'rgb(88, 36, 36)', 'rgb(240, 14, 44)', 'rgb(179, 139, 139)', 'rgb(194, 224, 56)', 'rgb(175, 194, 154)'];
for (let i = 0; i < getS('.colors').children.length; i++) {
	getS('.btn-color').addEventListener('click', function () {
		getS('.colors').classList.remove('hide');

		getS('.colors').children[i].style.backgroundColor = colors[i];
		getS('.colors').children[i].onclick = function (e) {
			getS('.top-block').style.color = e.target.style.backgroundColor;
		}
	})
	getS('.btn-bg-color').addEventListener('click', function () {
		getS('.colors').classList.remove('hide');

		getS('.colors').children[i].style.backgroundColor = colors[i];
		getS('.colors').children[i].onclick = function (e) {
			getS('.top-block').style.backgroundColor = e.target.style.backgroundColor;
		}
	})
}

getS('.colors').addEventListener('click', function () {
	getS('.colors').classList.add('hide');
})

/*end text bg colors*/



/* start function bold style*/

getS('.font-weight-bold').addEventListener('click', function () {
	// if(event.target.checked){
	getS('.top-block').classList.add('bold');
	getS('.font-cursive').checked = false;
	getS('.top-block').classList.remove('cursive');
})


/* end function bold style*/

/* start cursive style*/
getS('.font-cursive').addEventListener('click', function () {
	getS('.top-block').classList.remove('bold');
	getS('.font-weight-bold').checked = false;
	getS('.top-block').classList.add('cursive');
})

/* end cursive style*/


//Hiding/showing first and second blocks

//Option #1
getS('.btn-add').addEventListener('click' ,function () {
	getS('.first').classList.remove('show');
	getS('.second').classList.add('show');
})


//Option #2
// getS('.btn-add').onclick = function () {
// 	getS('.first').classList.remove('show');
// 	getS('.second').classList.add('show');
// }


/*Start of ul list Generating*/

const list = document.forms['form-list'];

//Optinon #2
getS('.btn-create-list').addEventListener('click', function () {

	const countLi = list.count.value;
	const typeLi = list.type.value;

	getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`;
	for (let i = 0; i < countLi; i++) {
		getS('.edit-area').value += `<li>Item${i+1}</li>`;
	}
	getS('.edit-area').value += '</ul>';
	getS('.first').classList.add('show');
	getS('.second').classList.remove('show');
})


//Optinon #2
// getS('.btn-create-list').onclick = function () {

// 	const countLi = list.count.value;
// 	const typeLi = list.type.value;

// 	getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`;
// 	for (let i = 0; i < countLi; i++) {
// 		getS('.edit-area').value += `<li>Item${i+1}</li>`;
// 	}
// 	getS('.edit-area').value += '</ul>';
// 	getS('.first').classList.add('show');
// 	getS('.second').classList.remove('show');
// }

document.querySelector('.choose-list').addEventListener('click', function () {
	getS('.create-list').classList.remove('hide');
	getS('.create-table').classList.add('hide');
})


/*End of ul list Generating*/




/*Start of table Generating*/
//option #1
const table = document.forms['form-table'];
getS('.btn-create-table').addEventListener('click', function (){

	let rows = table.countTr.value;
	let cols = table.countTd.value;
	let tdWidth = table.tdWidth.value;
	let tdHeight = table.tdHeight.value; 
	let bcolor = table.borderColor.value;
	let bType = table.borderType.value;
	let bWidth = table.borderWidth.value;

	getS('.edit-area').value +=`<table style='border: ${bWidth}px ${bType} ${bcolor} ;'>`;
	for(let r = 0; r< rows; r++){
		getS('.edit-area').value +=`<tr>`;
		
		for(let c = 0; c<cols; c++){
			getS('.edit-area').value +=`<td style='border: ${bWidth}px ${bType} ${bcolor}; width: ${tdWidth}px; height: ${tdHeight}px;'>TD</td>`;
		}
		getS('.edit-area').value +=`</tr>`;
	}
	getS('.edit-area').value +=`</table>`;

	getS('.first').classList.add('show');
		getS('.second').classList.remove('show');

		// document.querySelector('.choose-table').addEventListener('click', function () {
		// getS('.create-table').classList.remove('hide');
		// getS('.create-list').classList.add('hide');
});

document.querySelector('.choose-table').addEventListener('click', function () {
	getS('.create-table').classList.remove('hide');
	getS('.create-list').classList.add('hide');
});

//option #2

// const table = document.forms['form-table'];
// getS('.btn-create-table').onclick = function (){

// 	let rows = table.countTr.value;
// 	let cols = table.countTd.value;
// 	let tdWidth = table.tdWidth.value;
// 	let tdHeight = table.tdHeight.value; 
// 	let bcolor = table.borderColor.value;
// 	let bType = table.borderType.value;
// 	let bWidth = table.borderWidth.value;

// 	getS('.edit-area').value +=`<table style='border: ${bWidth}px ${bType} ${bcolor} ;'>`;
// 	for(let r = 0; r< rows; r++){
// 		getS('.edit-area').value +=`<tr>`;
		
// 		for(let c = 0; c<cols; c++){
// 			getS('.edit-area').value +=`<td style='border: ${bWidth}px ${bType} ${bcolor}; width: ${tdWidth}px; height: ${tdHeight}px;'>TD</td>`;
// 		}
// 		getS('.edit-area').value +=`</tr>`;
// 	}
// 	getS('.edit-area').value +=`</table>`;

// 	getS('.first').classList.add('show');
// 		getS('.second').classList.remove('show');
// }

/*End of table Generating*/

