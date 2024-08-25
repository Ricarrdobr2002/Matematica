    const corpo1 = document.getElementById('corpo1');
    const corpo2 = document.getElementById('corpo2');

var result = Math.floor(Math.random()*50)+1;

    //esquerda
    var nr = Math.floor(Math.random()*10)+1;
    var nrv = Math.floor(Math.random()*5)+1;

    var nb = Math.floor(Math.random()*10)+1;
    var nbv = Math.floor(Math.random()*5)+1;
    
    var lr = (nr * nrv)+(nb * nbv);

    if(lr == result){
        direita();
        function direita(){
        var nrr = Math.floor(Math.random()*10)+1;      
        var nbr = Math.floor(Math.random()*10);
        var rr = (nrr * nrv)+(nbr * nbv);

        if(rr !== result || nb == nbr && nr == nrr){             
            nrr = 0;
             nbr = 0;
             direita();}else{

                for(let t = 0; t < nb ; t++ ) {
                    var nd = document.createElement('div');
                    nd.className = "box blue";
                    nd.id = "fx"
                    corpo1.appendChild(nd);   
               }
                for(let l = 0; l < nr ; l++ ) {
                    var nd = document.createElement('div');
                    nd.className = "box red";
                    nd.id = "fx";
                    corpo1.appendChild(nd);

                    nd.innerHTML=nrv;
                }
            
                for(let i = 0; i < nbr ; i++ ) {
                    var nd = document.createElement('div');
                    nd.className = "box blue";
                    nd.id = "fx"
                    corpo2.appendChild(nd);
                    
               }
                for(let j = 0; j < nrr ; j++ ) {
                    var nd = document.createElement('div');
                    nd.className = "box red";
                    nd.id = "fx";
                    corpo2.appendChild(nd);
            
                    nd.innerHTML=nrv;
                }
}
        
    }

    }else{window.location.reload()}

    ///////

    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        let isDragging = false;
        let offsetX, offsetY;

        // Inicia o arrasto ao pressionar o mouse
        box.addEventListener('mousedown', (e) => {

            if(box.id == 'fx'){
            isDragging = true;
            offsetX = e.clientX - box.getBoundingClientRect().left;
            offsetY = e.clientY - box.getBoundingClientRect().top;

            box.style.transition = '0s';

            // Adiciona os eventos de mousemove e mouseup
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);}
        });

        function onMouseMove(e) {
            if (isDragging) {
                box.style.left = `${e.clientX - offsetX}px`;
                box.style.top = `${e.clientY - offsetY}px`;
                box.style.position = 'absolute';
            }
        }

        function onMouseUp() {
            isDragging = false;

            // Remove os eventos de mousemove e mouseup após o arrasto
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            drop();
        }

        function drop(){
            var topo = '1000px';
            box.style.top = topo;
            box.style.transition ='2s'; 
            box.id = "fora";
            box.style.position ='fixed';
            bala();

            function suma(){
                box.style.display ='none';
            }
            setTimeout(suma,100);
        }

        const bt = document.getElementById('bt');
        const balanca = document.getElementById('balanca');
        const corpo = document.getElementById('corpo');

        bt.onclick = function(){reset();}
        function reset(){
            boxes.forEach(box =>{
                 box.style.position = 'static';
                 box.style.display = 'flex';
                 if(box.className == "box red"){box.id = 'fx';}else{box.id = 'fx';}
            });
           bala();
        }
        function bala(){
            var lb = result;
            var rb = result;

            boxes.forEach(box =>{
                if(box.id == "fora"){
                if(box.parentNode === corpo1){
                    if(box.className == "box red"){
                        lb = lb - nrv;
                    }else{lb = lb - nbv;}
                }
                if(box.parentNode === corpo2){
                    if(box.className == "box red"){
                        rb = rb - nrv;
                    }else{rb = rb - nbv;}
                }
                }
            });
            if(lb == rb){
                balanca.style.rotate = '0deg';
                corpo.style.rotate = '0deg';
            }else if(lb < rb){
                balanca.style.rotate = '20deg';
                corpo.style.rotate = '20deg';}
                else{
                    balanca.style.rotate = '-20deg';
                    corpo.style.rotate = '-20deg';
                }
        }
        
        const cor = document.getElementById('cor');
        const inpb = document.getElementById('enr');
        const inp = document.getElementById('resp');
            inpb.onclick = function(){verificarR();}
                function verificarR(){
                    var resppp = document.createElement('div');
                    if(inp.value == nbv){
                        resppp.id = "respostaC";
                        cor.appendChild(resppp);
                        resppp.innerHTML = ("<h1>Resposta Correta!!!</h1>");

                        
                        function car(){
                            window.location.reload();
                        }
                        setTimeout(car,1000);
                    }else{
                        resppp.id = "respostaC";
                        cor.appendChild(resppp);
                        resppp.innerHTML = ("<h1>Tente Novamente!</h1>");

                        function ttt(){
                            cor.innerHTML = '';
                        }setTimeout(ttt,1000)
                    }
                }

    });
    
    