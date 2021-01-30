//================== common function =======================
function btnIdName(idName, callback){
	document.getElementById(idName).addEventListener("click" , callback)
};
// ================= for generate random numbers ===========================

let showRandom = document.getElementById('show-random-numbers');
var generateButton = btnIdName('generate-btn', function(){
	let randomNumbers = parseInt(Math.floor(1000 + Math.random() * 9000));
	document.querySelector('.action-left').innerHTML = 3+' try left'
	showRandom.value = randomNumbers ;
	// after click and hide
	document.getElementById('pin-match').style.display = 'none';
	document.getElementById('pin-not-match').style.display = 'none';
})

// catch input-value for btn 
var displayValue = document.getElementById('displayValue');

// =========================== Working with button ===========================

let Seven = btnIdName('btn_seven',function(){displayValue.value += 7;});
let Eight = btnIdName('btn_eight',function(){displayValue.value += 8;});
let Nine = btnIdName('btn_nine',function(){displayValue.value += 9;});
let Four= btnIdName('btn_four',function(){displayValue.value += 4;});
let Five = btnIdName('btn_five',function(){displayValue.value += 5;});
let Six= btnIdName('btn_six',function(){displayValue.value += 6;});
let One = btnIdName('btn_one',function(){displayValue.value += 1;});
let Two= btnIdName('btn_two',function(){displayValue.value += 2;});
let Three = btnIdName('btn_three',function(){displayValue.value += 3;});
let Zero = btnIdName('btn_zero',function(){displayValue.value += 0;});
let backSpace = btnIdName('btn_left',function(){displayValue.value = (displayValue.value).slice(0,-1);});
let Clear = btnIdName('btn_clear',function(){displayValue.value = '';});

// ============================ Working with pin ========================
var count = 2;
var submitBtn = btnIdName('submit-btn', function(){
if(showRandom.value == ''){
	alert('Generate your pin!')
}else if(displayValue.value == ''){
	alert('Enter your digit!')
}else if(displayValue.value == showRandom.value){
	document.getElementById('pin-match').style.display = 'block';
	document.getElementById('pin-not-match').style.display = 'none';
	displayValue.value = '';
	showRandom.value = '';
	document.querySelector('.action-left').innerHTML = ''
	
}else{
	document.getElementById('pin-not-match').style.display = 'block';
	document.getElementById('pin-match').style.display = 'none';
	
	// for action-left
	if(count < 1){
	document.querySelector('.action-left').innerHTML = 'No more try'
	displayValue.value = '';
	showRandom.value = '';
	}else{
	document.querySelector('.action-left').innerHTML = count-- + ' try left'
	displayValue.value = '';
	}	
}
});

//======================================= End ======================================