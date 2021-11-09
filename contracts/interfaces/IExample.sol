// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

// Libraries
import { LibDiamond } from "../libraries/LibDiamond.sol";

/**
 * @title Interface for contract ...
 */
interface IExampleContract {
    
    struct ExampleStruct {
        uint256 prop1;
        string prop2;
        address prop3;
    }

    /** 
     * @notice ... 
     * @dev Function with a struct as input
     * @param _exampleStruct ...
     * @return A boolean value indicating whether the operation succeeded 
     */    
    function exampleFunction1(ExampleStruct memory _exampleStruct) external returns (bool);    

    function exampleFunction2(uint256 _param1, uint256[] memory _param2) external returns (string memory, uint256, address);

    /**
     * @notice Emitted when ...
     * @param output1 ...
     * @param output2 ...
     * @param output3 ...                                                           
     */
    event ExampleEvent(
        uint256 indexed output1,
        address indexed output2, 
        address indexed output3,
        uint256 output4
    );
    
  }