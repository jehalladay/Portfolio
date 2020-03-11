/* 
**************************************************************************
Assignment
James Halladay
Advanced Programming with JavaScript
Date: 

**************************************************************************

    The template for this program originally 
    written by James Halladay on 1/24/20 for 
    the FizzBuzz and Warehouse Kattis submissions

**************************************************************************
Steps:
Step 1: Create input function
Step 2: Create processor function
Step 3: Create repackager function
Step 4: Create output function
Step 5: Create Main function
Step 6: Create Unit Test Function
Step 7: Create instructions to run the program normally
        or run the tests based on the given arguments
**************************************************************************
*/


'use strict'


// Step 1: Create input function

function input(){
    
    const lines = require('readline');
    const terminal = lines.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    terminal.on("line", line => {
        terminal.close();
        main(line)
    })
}


// Step 2: Create processor function

function processor(input) {

    var maximum = 0;
    var total = 0;
    input = input.split(' ')
    total = 2*parseInt(input.shift())
    input = input.map((a)=>{return parseInt(a)}).reduce((a, b)=>{return a+b})
    if (input <= total) {
        input = "possible"
    } else {
        input = "impossible"
    }

    return input
}


// Step 3: Create repackager function

function repackager(input) {
    return input
}


// Step 4: Create output function

function output(input) {
    console.log(input)
}


// Step 5: Create Main function

/**
 * main function recieves input
 * from the input function, processes it,
 * repackages it, and then sorts it 
 * before sending it to output
 */
function main(input) {
    input = processor(input)
    input = repackager(input)
    output(input)
}


// Step 6: Create Unit Test Function

function unittest() {
    
    const assert = require("assert").strict;
    var pass = true;
    
    console.log("Testing Processor Function");
    
    try {
        assert.deepEqual(processor(null), null)
        console.log("Deep assert on Processor: Passed")
    } catch {
        console.log('Deep assert on Processor: Failed')
        pass = false
    }

    console.log("Testing Repackager Function");
    
    try {
        assert.deepEqual(repackager(null), null)
        console.log("Deep assert on Repackager: Passed")
    } catch {
        console.log('Deep assert on Repackager: Failed')
        pass = false
    }

    if (pass) {
        console.log("All test cases passed")
    } else {
        console.log("TEST FAILED!!")
    }
}

    
// Step 7: Create instructions to run the program normally or run the tests based on the given arguments

if (require.main == module) {
    if (process.argv.length > 2 && process.argv[2] == 'test') { 
        unittest();
    } else {
        input();
    }
}