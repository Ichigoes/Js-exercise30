function numRange(input) {

    let number = Number(input[0])

    if ( -100 < number < 100 & number != 0) {
        console.log("Yes")
    } else {
        console.log("No")
    }

}

numRange(["0"])