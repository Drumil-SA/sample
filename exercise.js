function echo(str,num){
    for(var i=0;i<num;i++){
        console.log(str);
    }
}


// echo("Echo!!!",10);
// echo("Simarpajji",15);


function average(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    console.log(Math.ceil(sum/(arr.length)));
}

var score = [40,65,77,82,80,54,73,63,95,49];
average(score);

