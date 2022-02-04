
function* getStop() {
  yield "Joypurhat";
  yield "Dinajpur";
  yield "Rangpur";
  yield "Syedpur";
  yield "Dhaka";
  yield "Chattogram";
}

const myStop = getStop()

console.log('testing generator function')

const checkStop = () => {
  const current = myStop.next()
  if(current.done){
    console.log('we made it!')
  }else{
    console.log('Current station is ', current.value)
  }
}
checkStop()
checkStop()
checkStop()
checkStop()
checkStop()
checkStop()
checkStop()
checkStop()