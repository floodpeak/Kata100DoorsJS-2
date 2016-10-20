export default (doorNumber)=>{
  if(doorNumber === 4){
    return 3
  }
  if(doorNumber > 1){
    return 2
  }
  return 1
}
