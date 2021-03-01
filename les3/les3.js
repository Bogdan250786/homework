const arr = [
    {name: 'width', value: 10},
    {name: 'height', value: 20}
];

function desArr(arr){
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        const {name, value} = arr[i];
        obj[name] = value;
    }
    return obj;
}
console.log(desArr(arr));
