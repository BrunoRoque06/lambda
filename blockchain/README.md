# Blockchain

This project consists of a simple implementation of a Blockchain, managed by a group of miners. Blockchain is a technology that "guarantees" the order of a given set of events. If these events are bank transactions for example, it "solves" the double spending problem. Another important element of these systems is `Digital Signature`, which guarantees authentication, non-repudiation, and integrity.

Routine:

- Data (digitally signed) is sent to the `Unconfirmed Data`;
- A miner takes an unconfirmed data entry;
- Miner solves a `Proof of Work`; in this project a simple `hash.substring(0, 4) === "0000"`. Function used by Bitcoin takes around ~10 minute/block (~17 0s!) to find a correct value for `nonce` property;
- Miner broadcasts block;
- Other miners receive the block, confirm the integrity of the block (hash validation), and add it to their Blockchain;
- If the block is not validated (hash), miners won't add it to their Blockchain and won't broadcast it;
- In case of forks in the chain, the longest chain should be kept, and the other blocks sent back to the `Unconfirmed Data`.
