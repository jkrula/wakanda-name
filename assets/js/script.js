var nameForm = document.querySelector('#input-content form');
var newNameSpan = document.querySelector('#result span'); 
var button = document.querySelector('#input-content button');
var input = document.querySelector('#input-content input');

//validating the input
var regex = /^[a-zA-Z]{1,20}$/;
input.addEventListener('keyup', function(e){
   if(regex.test(input.value)){
       input.className = 'valid';
       button.disabled = false;
       
   } else{
       input.className = 'invalid';
       button.disabled = true;
   }
});
nameForm.addEventListener('submit',  function(e){
    e.preventDefault();
    wakandalizeName(input.value);
});

function wakandalizeName(name) {
    var wakandaName = [];
    var nameLetters = name.toLowerCase().split(''); 

    //the generator
var wakandaLetters = {
    a: 'ka',
    b: 'zu',
    c: 'mi',
    d: 'te',
    e: 'ku',
    f: 'lu',
    g: 'ji',
    h: 'ri',
    i: 'ki',
    j: 'zu',
    k: 'me',
    l: 'ta',
    m: 'rin',
    n: 'to',
    o: 'mo',
    p: 'no',
    q: 'ke',
    r: 'shi',
    s: 'ari',
    t: 'chi',
    u: 'do',
    v: 'ru',
    w: 'mei',
    x: 'na',
    y: 'fu',
    z: 'z',
    
}

for (let i = 0; i<nameLetters.length; i++){
    for (let letter of Object.keys(wakandaLetters)){
        if (letter === nameLetters[i]){
            wakandaName.push(wakandaLetters[letter]);
        }
    }
}
   wakandaName = wakandaName.join(''); 
    newNameSpan.innerHTML = wakandaName;
        
    }

