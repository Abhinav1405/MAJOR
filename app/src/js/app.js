
// if (typeof web3 !== 'undefined') {
//     web3 = new Web3(web3.currentProvider);
// } else {
//     // set the provider you want from Web3.providers
// web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
// }

var web3;

var agentContractAddress = '0xFc403D4cfe54fDeE2c74A3d4ACf8e8fC27dfa653';

function connect(){
    web3 = new Web3(window.ethereum)
    window.ethereum.enable().catch(error => {
        // User denied account access
        console.log(error);
    })
    abi = JSON.parse(`
    [
        {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "doctorList",
            "outputs": [
              {
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "source",
                "type": "string"
              }
            ],
            "name": "stringToBytes32",
            "outputs": [
              {
                "name": "result",
                "type": "bytes32"
              }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "address"
              }
            ],
            "name": "patientInfo",
            "outputs": [
              {
                "name": "name",
                "type": "string"
              },
              {
                "name": "age",
                "type": "uint256"
              },
              {
                "name": "record",
                "type": "string"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "patientList",
            "outputs": [
              {
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
        {

          "constant": true,
          "inputs": [
            {
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "get_accessed_doctorlist_for_patient",
          "outputs": [
            {
              "name": "",
              "type": "address[]"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "paddr",
              "type": "address"
            },
            {
              "name": "daddr",
              "type": "address"
            }
          ],
          "name": "remove_patient",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "doctorList",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "paddr",
              "type": "address"
            },
            {
              "name": "daddr",
              "type": "address"
            }
          ],
          "name": "get_patient_doctor_name",
          "outputs": [
            {
              "name": "",
              "type": "string"
            },
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "daddr",
              "type": "address"
            }
          ],
          "name": "revoke_access",
          "outputs": [],
          "payable": true,
          "stateMutability": "payable",
          "type": "function"
        },
        {
            "constant": true,
            "inputs": [
              {
                "name": "addr",
                "type": "address"
              }
            ],
            "name": "get_patient",
            "outputs": [
              {
                "name": "",
                "type": "string"
              },
              {
                "name": "",
                "type": "uint256"
              },
              {
                "name": "",
                "type": "uint256[]"
              },
              {
                "name": "",
                "type": "address"
              },
              {
                "name": "",
                "type": "string"
              },
              {
                "name": "",
                "type": "bytes32[]"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
        {
          "constant": true,
          "inputs": [
            {
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "get_doctor",
          "outputs": [
            {
              "name": "",
              "type": "string"
            },
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "insurerList",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "paddr",
              "type": "address"
            }
          ],
          "name": "get_hash",
          "outputs": [
            {
              "name": "",
              "type": "string"
            },
            {
              "name": "",
              "type": "bytes32[]"
            },
            {
              "name": "",
              "type": "bytes32[]"
            }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
        {
          "constant": true,
          "inputs": [
            {
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "get_insurer",
          "outputs": [
            {
              "name": "",
              "type": "string"
            },
            {
              "name": "",
              "type": "uint256"
            },
            {
              "name": "",
              "type": "address[]"
            },
            {
              "name": "",
              "type": "address[]"
            },
            {
              "name": "",
              "type": "uint256[]"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "paddr",
              "type": "address"
            }
          ],
          "name": "accept_claim",
          "outputs": [],
          "payable": true,
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "patientList",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "permit_access",
          "outputs": [],
          "payable": true,
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "filehash",
              "type": "bytes32"
            },
            {
              "name": "filehash2",
              "type": "bytes32"
            }
          ],
          "name": "upload_patient_health_record",
          "outputs": [],
          "payable": true,
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "get_doctor_list",
          "outputs": [
            {
              "name": "",
              "type": "address[]"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "iaddr",
              "type": "address"
            },
            {
              "name": "_diagnosis",
              "type": "uint256[]"
            }
          ],
          "name": "select_insurer",
          "outputs": [],
          "payable": true,
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "get_accessed_patientlist_for_doctor",
          "outputs": [
            {
              "name": "",
              "type": "address[]"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "get_patient_list",
          "outputs": [
            {
              "name": "",
              "type": "address[]"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "get_insurer_list",
          "outputs": [
            {
              "name": "",
              "type": "address[]"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_name",
              "type": "string"
            },
            {
              "name": "_age",
              "type": "uint256"
            },
            {
              "name": "_designation",
              "type": "uint256"
            },
            {
              "name": "_hash",
              "type": "string"
            }
          ],
          "name": "add_agent",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "paddr",
              "type": "address"
            },
            {
              "name": "_diagnosis",
              "type": "uint256"
            },
            {
              "name": "_hash",
              "type": "string"
            }
          ],
          "name": "insurance_claim",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
    `)
    AgentContract = web3.eth.contract(abi);
    contractInstance = AgentContract.at(agentContractAddress);   
    web3.eth.defaultAccount = web3.currentProvider.selectedAddress;
    console.log("Web3 Connected:"+ web3.eth.defaultAccount );
    return web3.currentProvider.selectedAddress;
}
    
window.addEventListener('load', async () => {
    // New web3 provider
    connect();
    console.log("Externally Loaded!");
});