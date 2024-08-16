

const ercAbi = [
  
  // Read-Only Functions
  "function balanceOf(address owner) view returns (uint256)",
  
  // Authenticated Functions
  "function transfer(address to, uint amount) returns (bool)",
  "function deposit() public payable",
  "function approve(address spender, uint256 amount) returns (bool)",
];

describe("SimpleSwap", function () {
  it("Should provide a caller with more DAI than they started with after a swap", async function () {
    
    /* Deploy the SimpleSwap contract */


    /* Connect to weth9 and wrap some eth  */

    
    /* Check Initial DAI Balance */ 


    /* Approve the swapper contract to spend weth9 for me */

    
    /* Execute the swap */
 
    
    /* Check DAI end balance */

    
    /* Test that we now have more DAI than when we started */


  });
});
