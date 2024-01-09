let dodger;

function moveDodgerLeft() {
  
  let left = parseInt(dodger.style.left) || 0;

  
  left = Math.max(left - 5, 0); 

  dodger.style.left = `${left}px`;
}

function moveDodgerRight() {

  let left = parseInt(dodger.style.left) || 0;

  
  left = Math.min(left + 5, 360); 


  dodger.style.left = `${left}px`;
}