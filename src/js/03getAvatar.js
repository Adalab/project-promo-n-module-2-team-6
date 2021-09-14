'use strict';
const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');
const defaultImg =
	'https://via.placeholder.com/300x300/cccccc/666666/?text=IMAGE';
/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
	const myFile = e.currentTarget.files[0];
	fr.addEventListener('load', writeImage);
	fr.readAsDataURL(myFile);
	console.log(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
	/* En la propiedad `result` de nuestro FR se almacena
	 * el resultado. Ese resultado de procesar el fichero que hemos cargado
	 * podemos pasarlo como background a la imagen de perfil y a la vista previa
	 * de nuestro componente.
	 */
	data.photo = fr.result;
	console.log(fr.result);
	console.log(data.photo);
	previewImage();
}

function previewImage() {
	if (data.photo === '') {
		profileImage.style.backgroundImage = `url(${defaultImg})`;
	} else {
		profileImage.style.backgroundImage = `url(${data.photo})`;
		profilePreview.style.backgroundImage = `url(${data.photo})`;
	}
}

/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick() {
	fileField.click();
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener('change', getImage);
