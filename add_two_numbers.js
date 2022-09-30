function doSomething(){

    let a = document.getElementById("inputA").value
    let b = document.getElementById("inputB").value
    result = Number(a) + Number(b)
    "Sum of A and B is " + result;
    document.getElementById("valueA").innerHTML = a;
    document.getElementById("valueB").innerHTML = b;
    document.getElementById("valueC").innerHTML = result;
}