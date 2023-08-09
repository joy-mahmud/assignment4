function cubeNumber(number) {
    if(typeof number !== 'number'){
        return "Invalid input"
    }
    else {
        return Math.pow(number,3)
    }
}

console.log(cubeNumber(4))

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string'){
        return "Please provide both the input as a string !!"
    }
    else{
        return string1.includes(string2)
    }
}

console.log(matchFinder("john doe","Jon"))
console.log(matchFinder("john doe",78))

function sortMaker(arr) {
    if (arr[0] ==  arr[1]) {
        return "equal";
      } else if (arr[0]>=0 && arr[1]>=0) {
        if(arr[0]>arr[1]){
            return arr
        } else {
            let temp = arr[0]
            arr[0] = arr[1]
            arr[1] = temp
            return arr 
            
        }
      } else if (arr[0]<0 || arr[1]<0){
        return "Invalid input "
      }
}

const arr = [0,9]
let res = sortMaker(arr)
console.log(res)

function findAddress(obj) {
    let street=0,house=1,society=2
    let address = []
    if(obj.street == undefined){
        address [street] ="__"
    }
    if(obj.house == undefined){
        address [house] ="__"
    }
    if(obj.society == undefined){
        address [society] ="__"
    }
    for(let x in obj){
        if(x == 'street'){
            address[street] = obj[x]
        }
        if(x == 'house'){
            address[house] = obj[x]
        }
        if(x == 'society'){
            address[society] = obj[x]
        }  
    }
    address = address.join(",")
    let showAddress = ""
    for(let i=0; i<address.length;i++){
        showAddress = showAddress+address[i]
    }

    return showAddress
 
}

let addr = {
   street:10,
   
}
let add = findAddress(addr)
console.log(add)

function canPay(changeArray, totalDue) {
    let total=0
    if(changeArray.length !==0){
        for (let i = 0; i<changeArray.length;i++){
            total = total+changeArray[i]
        }
        if(total<totalDue){
            return false
        }else{
            return true
        }
    }
    else{
        return "Please give some taka if you want to buy chips"
    }
   
}

let notes = [1,2,3,4]
let due = 20
console.log(canPay(notes,due))
