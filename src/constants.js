export const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
export const abi = {
    "_format": "hh-sol-artifact-1",
    "contractName": "FileSharing",
    "sourceName": "contracts/FileSharing.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "accessList",
        "outputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "access",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "url",
            "type": "string"
          }
        ],
        "name": "add",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "allow",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "disallow",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          }
        ],
        "name": "display",
        "outputs": [
          {
            "internalType": "string[]",
            "name": "",
            "type": "string[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "shareAccess",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "user",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "access",
                "type": "bool"
              }
            ],
            "internalType": "struct FileSharing.Access[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "bytecode": "0x608060405234801561001057600080fd5b506114d4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806336d6da551461006757806370c2b41914610083578063a9ed9cb8146100b4578063bc8bef81146100d0578063eb39113f146100ee578063ff9913e81461011e575b600080fd5b610081600480360381019061007c9190610c7d565b61013a565b005b61009d60048036038101906100989190610d13565b6101b9565b6040516100ab929190610d7d565b60405180910390f35b6100ce60048036038101906100c99190610da6565b610223565b005b6100d8610445565b6040516100e59190610ecf565b60405180910390f35b61010860048036038101906101039190610da6565b61054e565b6040516101159190611043565b60405180910390f35b61013860048036038101906101339190610da6565b610764565b005b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208282909180600181540180825580915050600190039060005260206000200160009091929091929091929091925091826101b39291906112ab565b50505050565b600260205281600052604060002081815481106101d557600080fd5b90600052602060002001600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff16905082565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060005b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015610441578173ffffffffffffffffffffffffffffffffffffffff16600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061036d5761036c61137b565b5b9060005260206000200160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361042e576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106104095761040861137b565b5b9060005260206000200160000160146101000a81548160ff0219169083151502179055505b8080610439906113d9565b9150506102bb565b5050565b6060600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610545578382906000526020600020016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900460ff161515151581525050815260200190600101906104a6565b50505050905090565b60603373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806106105750600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b61064f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106469061147e565b60405180910390fd5b6000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156107595783829060005260206000200180546106cc906110ce565b80601f01602080910402602001604051908101604052809291908181526020018280546106f8906110ce565b80156107455780601f1061071a57610100808354040283529160200191610745565b820191906000526020600020905b81548152906001019060200180831161072857829003601f168201915b5050505050815260200190600101906106ad565b505050509050919050565b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060011515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151503610a1c5760005b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015610a16578173ffffffffffffffffffffffffffffffffffffffff16600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106109425761094161137b565b5b9060005260206000200160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610a03576001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106109de576109dd61137b565b5b9060005260206000200160000160146101000a81548160ff0219169083151502179055505b8080610a0e906113d9565b915050610890565b50610bad565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180604001604052808373ffffffffffffffffffffffffffffffffffffffff168152602001600115158152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff02191690831515021790555050506001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610be582610bba565b9050919050565b610bf581610bda565b8114610c0057600080fd5b50565b600081359050610c1281610bec565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610c3d57610c3c610c18565b5b8235905067ffffffffffffffff811115610c5a57610c59610c1d565b5b602083019150836001820283011115610c7657610c75610c22565b5b9250929050565b600080600060408486031215610c9657610c95610bb0565b5b6000610ca486828701610c03565b935050602084013567ffffffffffffffff811115610cc557610cc4610bb5565b5b610cd186828701610c27565b92509250509250925092565b6000819050919050565b610cf081610cdd565b8114610cfb57600080fd5b50565b600081359050610d0d81610ce7565b92915050565b60008060408385031215610d2a57610d29610bb0565b5b6000610d3885828601610c03565b9250506020610d4985828601610cfe565b9150509250929050565b610d5c81610bda565b82525050565b60008115159050919050565b610d7781610d62565b82525050565b6000604082019050610d926000830185610d53565b610d9f6020830184610d6e565b9392505050565b600060208284031215610dbc57610dbb610bb0565b5b6000610dca84828501610c03565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610e0881610bda565b82525050565b610e1781610d62565b82525050565b604082016000820151610e336000850182610dff565b506020820151610e466020850182610e0e565b50505050565b6000610e588383610e1d565b60408301905092915050565b6000602082019050919050565b6000610e7c82610dd3565b610e868185610dde565b9350610e9183610def565b8060005b83811015610ec2578151610ea98882610e4c565b9750610eb483610e64565b925050600181019050610e95565b5085935050505092915050565b60006020820190508181036000830152610ee98184610e71565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f57578082015181840152602081019050610f3c565b60008484015250505050565b6000601f19601f8301169050919050565b6000610f7f82610f1d565b610f898185610f28565b9350610f99818560208601610f39565b610fa281610f63565b840191505092915050565b6000610fb98383610f74565b905092915050565b6000602082019050919050565b6000610fd982610ef1565b610fe38185610efc565b935083602082028501610ff585610f0d565b8060005b8581101561103157848403895281516110128582610fad565b945061101d83610fc1565b925060208a01995050600181019050610ff9565b50829750879550505050505092915050565b6000602082019050818103600083015261105d8184610fce565b905092915050565b600082905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806110e657607f821691505b6020821081036110f9576110f861109f565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026111617fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611124565b61116b8683611124565b95508019841693508086168417925050509392505050565b6000819050919050565b60006111a86111a361119e84610cdd565b611183565b610cdd565b9050919050565b6000819050919050565b6111c28361118d565b6111d66111ce826111af565b848454611131565b825550505050565b600090565b6111eb6111de565b6111f68184846111b9565b505050565b5b8181101561121a5761120f6000826111e3565b6001810190506111fc565b5050565b601f82111561125f57611230816110ff565b61123984611114565b81016020851015611248578190505b61125c61125485611114565b8301826111fb565b50505b505050565b600082821c905092915050565b600061128260001984600802611264565b1980831691505092915050565b600061129b8383611271565b9150826002028217905092915050565b6112b58383611065565b67ffffffffffffffff8111156112ce576112cd611070565b5b6112d882546110ce565b6112e382828561121e565b6000601f8311600181146113125760008415611300578287013590505b61130a858261128f565b865550611372565b601f198416611320866110ff565b60005b8281101561134857848901358255600182019150602085019450602081019050611323565b868310156113655784890135611361601f891682611271565b8355505b6001600288020188555050505b50505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006113e482610cdd565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611416576114156113aa565b5b600182019050919050565b600082825260208201905092915050565b7f596f7520646f6e27742068617665206163636573730000000000000000000000600082015250565b6000611468601583611421565b915061147382611432565b602082019050919050565b600060208201905081810360008301526114978161145b565b905091905056fea264697066735822122032c5d4c68d61dc8e53419e72e1bcfca429f031c14071840eecf1df71fc009d7564736f6c63430008140033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100625760003560e01c806336d6da551461006757806370c2b41914610083578063a9ed9cb8146100b4578063bc8bef81146100d0578063eb39113f146100ee578063ff9913e81461011e575b600080fd5b610081600480360381019061007c9190610c7d565b61013a565b005b61009d60048036038101906100989190610d13565b6101b9565b6040516100ab929190610d7d565b60405180910390f35b6100ce60048036038101906100c99190610da6565b610223565b005b6100d8610445565b6040516100e59190610ecf565b60405180910390f35b61010860048036038101906101039190610da6565b61054e565b6040516101159190611043565b60405180910390f35b61013860048036038101906101339190610da6565b610764565b005b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208282909180600181540180825580915050600190039060005260206000200160009091929091929091929091925091826101b39291906112ab565b50505050565b600260205281600052604060002081815481106101d557600080fd5b90600052602060002001600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff16905082565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060005b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015610441578173ffffffffffffffffffffffffffffffffffffffff16600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061036d5761036c61137b565b5b9060005260206000200160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361042e576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106104095761040861137b565b5b9060005260206000200160000160146101000a81548160ff0219169083151502179055505b8080610439906113d9565b9150506102bb565b5050565b6060600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610545578382906000526020600020016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900460ff161515151581525050815260200190600101906104a6565b50505050905090565b60603373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806106105750600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b61064f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106469061147e565b60405180910390fd5b6000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156107595783829060005260206000200180546106cc906110ce565b80601f01602080910402602001604051908101604052809291908181526020018280546106f8906110ce565b80156107455780601f1061071a57610100808354040283529160200191610745565b820191906000526020600020905b81548152906001019060200180831161072857829003601f168201915b5050505050815260200190600101906106ad565b505050509050919050565b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060011515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151503610a1c5760005b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015610a16578173ffffffffffffffffffffffffffffffffffffffff16600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106109425761094161137b565b5b9060005260206000200160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610a03576001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106109de576109dd61137b565b5b9060005260206000200160000160146101000a81548160ff0219169083151502179055505b8080610a0e906113d9565b915050610890565b50610bad565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180604001604052808373ffffffffffffffffffffffffffffffffffffffff168152602001600115158152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff02191690831515021790555050506001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610be582610bba565b9050919050565b610bf581610bda565b8114610c0057600080fd5b50565b600081359050610c1281610bec565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610c3d57610c3c610c18565b5b8235905067ffffffffffffffff811115610c5a57610c59610c1d565b5b602083019150836001820283011115610c7657610c75610c22565b5b9250929050565b600080600060408486031215610c9657610c95610bb0565b5b6000610ca486828701610c03565b935050602084013567ffffffffffffffff811115610cc557610cc4610bb5565b5b610cd186828701610c27565b92509250509250925092565b6000819050919050565b610cf081610cdd565b8114610cfb57600080fd5b50565b600081359050610d0d81610ce7565b92915050565b60008060408385031215610d2a57610d29610bb0565b5b6000610d3885828601610c03565b9250506020610d4985828601610cfe565b9150509250929050565b610d5c81610bda565b82525050565b60008115159050919050565b610d7781610d62565b82525050565b6000604082019050610d926000830185610d53565b610d9f6020830184610d6e565b9392505050565b600060208284031215610dbc57610dbb610bb0565b5b6000610dca84828501610c03565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610e0881610bda565b82525050565b610e1781610d62565b82525050565b604082016000820151610e336000850182610dff565b506020820151610e466020850182610e0e565b50505050565b6000610e588383610e1d565b60408301905092915050565b6000602082019050919050565b6000610e7c82610dd3565b610e868185610dde565b9350610e9183610def565b8060005b83811015610ec2578151610ea98882610e4c565b9750610eb483610e64565b925050600181019050610e95565b5085935050505092915050565b60006020820190508181036000830152610ee98184610e71565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f57578082015181840152602081019050610f3c565b60008484015250505050565b6000601f19601f8301169050919050565b6000610f7f82610f1d565b610f898185610f28565b9350610f99818560208601610f39565b610fa281610f63565b840191505092915050565b6000610fb98383610f74565b905092915050565b6000602082019050919050565b6000610fd982610ef1565b610fe38185610efc565b935083602082028501610ff585610f0d565b8060005b8581101561103157848403895281516110128582610fad565b945061101d83610fc1565b925060208a01995050600181019050610ff9565b50829750879550505050505092915050565b6000602082019050818103600083015261105d8184610fce565b905092915050565b600082905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806110e657607f821691505b6020821081036110f9576110f861109f565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026111617fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611124565b61116b8683611124565b95508019841693508086168417925050509392505050565b6000819050919050565b60006111a86111a361119e84610cdd565b611183565b610cdd565b9050919050565b6000819050919050565b6111c28361118d565b6111d66111ce826111af565b848454611131565b825550505050565b600090565b6111eb6111de565b6111f68184846111b9565b505050565b5b8181101561121a5761120f6000826111e3565b6001810190506111fc565b5050565b601f82111561125f57611230816110ff565b61123984611114565b81016020851015611248578190505b61125c61125485611114565b8301826111fb565b50505b505050565b600082821c905092915050565b600061128260001984600802611264565b1980831691505092915050565b600061129b8383611271565b9150826002028217905092915050565b6112b58383611065565b67ffffffffffffffff8111156112ce576112cd611070565b5b6112d882546110ce565b6112e382828561121e565b6000601f8311600181146113125760008415611300578287013590505b61130a858261128f565b865550611372565b601f198416611320866110ff565b60005b8281101561134857848901358255600182019150602085019450602081019050611323565b868310156113655784890135611361601f891682611271565b8355505b6001600288020188555050505b50505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006113e482610cdd565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611416576114156113aa565b5b600182019050919050565b600082825260208201905092915050565b7f596f7520646f6e27742068617665206163636573730000000000000000000000600082015250565b6000611468601583611421565b915061147382611432565b602082019050919050565b600060208201905081810360008301526114978161145b565b905091905056fea264697066735822122032c5d4c68d61dc8e53419e72e1bcfca429f031c14071840eecf1df71fc009d7564736f6c63430008140033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }
  