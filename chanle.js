var check = ``;
function chan(){
    var chan = document.getElementById(`chan`).value;
    check = chan;
    document.getElementById(`again`).innerHTML = ``;
    document.getElementById(`again`).style.border = ``;
    document.getElementById(`result`).innerHTML = ``;
    document.getElementById(`output`).innerHTML = ``;
    
   document.getElementById(`output`).innerHTML = `bạn đã chọn tài!`;

}
function le(){
    var le = document.getElementById(`le`).value;
    check = le;
    document.getElementById(`again`).innerHTML = ``;
                document.getElementById(`again`).style.border = ``;
                document.getElementById(`result`).innerHTML = ``;
                document.getElementById(`output`).innerHTML = ``;
   document.getElementById(`output`).innerHTML = `bạn đã chọn xỉu!`;
   
}
function quay(){
   var random = Math.floor(Math.random() * 6) + 1;
      if(check ==`le` || check == `chan`){
        document.getElementById(`load`).style.display = `block`;
      } 
       
    setTimeout(() => {
        if(check==`chan` || check == `le`){
            if(random %2 == 0 &&  check == `chan`){
                document.getElementById(`result`).innerHTML = random + ` => tài` + `<br>` + `Bạn đã chiến thắng` ;
                check = `again`;
                document.getElementById(`again`).innerHTML = `Play Again!`;
                document.getElementById(`again`).style.border = `3px solid red`;
                document.getElementById(`load`).style.display = `none`;
            } else if(random %2 == 0 &&  check != `chan`) {
                document.getElementById(`result`).innerHTML = random + ` => tài` + `<br>` + `Bạn đã chọn sai `;
                check = `again`;
                document.getElementById(`again`).innerHTML = `Play Again!`;
                document.getElementById(`again`).style.border = `3px solid red `;
                document.getElementById(`load`).style.display = `none`;
            } else if (random %2 != 0 &&  check == `le`)
            {
                document.getElementById(`result`).innerHTML = random + ` => xỉu` + `<br>` + `Bạn đã chiến thắng` ;
                check = `again`;
                document.getElementById(`again`).innerHTML = `Play Again!`;
                document.getElementById(`again`).style.border = `3px solid red`;
                document.getElementById(`load`).style.display = `none`;
            } else {
                document.getElementById(`result`).innerHTML = random + ` => xỉu` + `<br>` + `Bạn đã chọn sai `;
                check = `again`;
                document.getElementById(`again`).innerHTML = `Play Again!`;
                document.getElementById(`again`).style.border = `3px solid red`;
                document.getElementById(`load`).style.display = `none`;
            }
        }
    }, 1000);
        if(check==``){
            alert(`vui lòng chọn tài hoặc xỉu`);
        }
        if(check == `again`){
            document.getElementById(`again`).innerHTML = ``;
                document.getElementById(`again`).style.border = ``;
                document.getElementById(`result`).innerHTML = ``;
                document.getElementById(`output`).innerHTML = ``;
            alert(`vui lòng chọn lại tài hoặc xỉu`);
        }
    
    
    // if(check == `run`){
    //     document.getElementById(`load`).style.display = `block`;
    //    }
}
function again(){
    document.getElementById(`result`).innerHTML = ``;
    document.getElementById(`output`).innerHTML = ``;
    document.getElementById(`again`).innerHTML = ``;
    document.getElementById(`again`).style.border = ``;
}
