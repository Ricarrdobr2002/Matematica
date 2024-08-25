const corpo = document.getElementById('corpo');


function aleatorio(){
   var n1 = Math.floor(Math.random()*6)+2;

   console.log('rn='+n1)

   var n2 = Math.floor(Math.random()*5)+1;

   console.log('bn='+n2)

   var npr = Math.floor(Math.random()*5)+1;
   var npb = Math.floor(Math.random()*5)+1;

   console.log('rv='+npr)
   console.log('bv='+npb)

   var result = (n1 * npr)+(n2 * npb);

   console.log(result);

   //determinando igualdade
        var left = result/2;
        console.log(left);

   for(let i = 0; i < n1 ; i++ ) {
        var nd = document.createElement('div');
        nd.className = "box blue";
        corpo.appendChild(nd);

        nd.style.backgroundColor = 'blue'; 
        nd.style.width = '50px';          
        nd.style.height = '50px'; 
        nd.style.border = 'solid black'; 
   }
   for(let j = 0; j < n2 ; j++ ) {
        var nd = document.createElement('div');
        nd.className = "box red";
        corpo.appendChild(nd);

        nd.style.backgroundColor = 'red'; 
        nd.style.width = '50px';          
        nd.style.height = '50px';
        nd.style.border = 'solid black'; 
   }

   var nprv = document.querySelectorAll('.red');
   var npbv = document.querySelectorAll('.blue');

            nprv.forEach(function(nprv){nprv.innerHTML = npr;})

}
aleatorio();


/////////////////////////////////////////////////////////////////////////
