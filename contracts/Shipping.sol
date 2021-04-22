// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract Shipping {
    enum Status {Pending, Shipped, Delivered}
    address payable public owner;
    address payable internal deliverer = 0xc71fDbDE4938D7605528FD998a7a5F5420eAbB6A;

    Status public orderStatus;

    constructor() public {
        owner = msg.sender;
        orderStatus = Status.Pending;
    }

    function isShipped() public {
        orderStatus = Status.Shipped;
    }
    function isDelivered() public {
        orderStatus = Status.Delivered;
    }
}
