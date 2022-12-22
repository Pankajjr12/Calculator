let result=document.getElementById('result')
function display(val) {
  document.getElementById('result').value += val
  return val
}
function solve() {

  try {
    let x=document.getElementById('result').value
    let y=eval(x);
    document.getElementById('result').value=y
    return y
  } catch (e) {
    alert("Enter the valid input operator")
  }

}

function clr()
{
 result.value = " ";
}
function del(){
  result.value=result.value.slice(0,-1);
}
