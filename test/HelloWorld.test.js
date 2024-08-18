const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HelloWorld", function(){
    it("Should print a hello world greeting", async function () {
        /* Deploy the helloWorld contract */
        

        const greeting = await helloWorld.greet(); 
        expect(greeting).is.equal("Hello World!")
    });
});
