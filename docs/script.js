let count = 0;

function increaseCount(){
    count++;
    document.getElementById('count').textContent = count;
    if(count >= 20){
        document.getElementById('congrats').style.display = 'block';
    }else{
        document.getElementById('congrats').style.display = 'none';
    }

    if(count >= 40){
        document.getElementById('congrats2').style.display = 'block';
        document.getElementById('congrats').style.display = 'none';
    }else{
        document.getElementById('congrats2').style.display = 'none';
    }

    if(count >= 100){
        document.getElementById('congrats3').style.display = 'block';
        document.getElementById('congrats2').style.display = 'none';
    }else{
        document.getElementById('congrats3').style.display = 'none';
    }
}