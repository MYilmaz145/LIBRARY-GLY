$(document).ready(function () {
	const modalBox = document.getElementById('newModal');
	const submit = document.getElementsByClassName('submit')[0];
	var modalOpen = '';

	submit.addEventListener('click', editModal);

	$('.edit-btn').click((event) => {
		openModal(event.currentTarget.id);
	});

	function openModal(z) {
		modalBox.style.display = 'flex';
		modalOpen = z;
	}

	function editModal() {
		var titleInput = $('#titleInput')[0].value;
		var commentInput = $('#commentInput')[0].value;
		var titleDisplay = null;
		var commentDisplay = null;
		console.log(modalOpen);

        if (modalOpen == '1') {
			titleDisplay = $('#title1');
			commentDisplay = $('#comment1');
		} 
		if (modalOpen == '2') {
			titleDisplay = $('#title2');
			commentDisplay = $('#comment2');
		} 
		if (modalOpen == '3') {
			titleDisplay = $('#title3');
			commentDisplay = $('#comment3');
		} 
		if (modalOpen == '4') {
			titleDisplay = $('#title4');
			commentDisplay = $('#comment4');
		} 
		if (modalOpen == '5') {
			titleDisplay = $('#title5');
			commentDisplay = $('#comment5');
		} 
		if (modalOpen == '6') {
			titleDisplay = $('#title6');
			commentDisplay = $('#comment6');
		}
		var title = '';
		var message = '';
		var num = modalOpen;
		title = 'title' + num;
		message = 'comment' + num;

		var storage = {};
		storage = JSON.parse(localStorage.getItem('storage')) || {};
		storage[title] = titleInput;
		storage[message] = commentInput;

		localStorage.setItem('storage', JSON.stringify(storage));
		document.getElementById(title).innerHTML = titleInput;
		document.getElementById(message).innerHTML = commentInput;
		modalBox.style.display = 'none';
	}
    try {
		const storage = JSON.parse(localStorage.getItem('storage'));
		for (const item in storage) {
			console.log(`${item}: ${storage[item]}`);
			document.getElementById(item).innerHTML = storage[item];
		}
	} catch (x) {
		console.log(x);
	}
});


/*document.getElementById("1").addEventListener("click", function(){
    document.querySelector(".modal-box").style.display = "flex";
    document.getElementById("submit").style.display = "flex";
})
document.getElementById("2").addEventListener("click", function(){
    document.querySelector(".modal-box").style.display = "flex";
    document.getElementById("submit").style.display = "flex";
})
document.getElementById("3").addEventListener("click", function(){
    document.querySelector(".modal-box").style.display = "flex";
    document.getElementById("submit").style.display = "flex";
})
document.getElementById("4").addEventListener("click", function(){
    document.querySelector(".modal-box").style.display = "flex";
    document.getElementById("submit").style.display = "flex";
})
document.getElementById("5").addEventListener("click", function(){
    document.querySelector(".modal-box").style.display = "flex";
    document.getElementById("submit").style.display = "flex";
})
document.getElementById("6").addEventListener("click", function(){
    document.querySelector(".modal-box").style.display = "flex";
    document.getElementById("submit").style.display = "flex";
})*/
    /*document.getElementById("title1").innerText = document.getElementById("titleInput").value;
    document.getElementById("comment1").innerText = document.getElementById("commentInput").value;
    document.getElementById("title1").innerText = document.getElementById("titleInput").value;
    document.getElementById("comment1").innerText = document.getElementById("commentInput").value;
    document.getElementById("submit").style.display = "none";
    document.querySelector(".modal-box").style.display = "none";*/
