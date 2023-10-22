import React, { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { contract } from "./abiFunctions";

function Home() {
   const [Addrs, setAddrs] = useState("");
   const [Amt, setAmt] = useState("");
   const [txx, settx] = useState("");


   const [Wallet, setWallet] = useState("");

   const [NodeTx, setNodeTx] = useState("");

   const [TxnCount, setTxnCount] = useState("");


   const [TxnCounts, setTxnCounts] = useState("");

   const [Counts, setCounts] = useState("");



 
   // const handlePolicyNumber = (e) => {
   //    setNumber(e.target.value)
   // } 

   const handleAddrs = (e) => {
      setAddrs(e.target.value)
   } 

   const handleAmt = (e) => {
      setAmt(e.target.value)
   } 

   const handleTxn = (e) => {
      settx(e.target.value)
   } 
   

   const handleRegAsset = async () => {
      try {
         let tx = await contract.addTransaction(Addrs, Amt.toString(), txx)
         let wait = await tx.wait()
         alert(wait.transactionHash)
         console.log(wait);
      } catch (error) {
         alert(error)
      }
   }


   // const handlePublishHash = (e) => {
   //    setPubHash(e.target.value)
   // }
  

   const handlePublish = async () => {
      try {
         let tx = await contract.getNodeIdentifier()
         console.log(tx);
         setNodeTx(tx)
      } catch (error) {
         console.log(error);
         alert(error)   
      }
   }

   // const handleUnPublishHash = (e) => {
   //    setUnPubHash(e.target.value)
   // }


   const handleUnPublish = async () => {
      try {
         let tx = await contract.getTransactionCount()
         setTxnCount(tx)
         console.log(tx);
         
      } catch (error) {
         alert(error)
      }
   }

   // const handleTransferHash = (e) => {
   //    setTransferHash(e.target.value)
   // }

   const handleTxnCount = (e) => {
      setTxnCounts(e.target.value)
   }

   const handletxncnt = async () => {
      try {
         let tx = await contract.getTransaction(TxnCounts.toString())
         setCounts(tx)
         console.log(tx);
         // alert(wait.transactionHash)
      } catch (error) {
         alert(error)
      }
   }

   

   
   // const handleGetIds = async (e) => {
   //    setGIds(e.target.value)
   // }

   // const handleGetDetails = async () => {
   //    try {
   //       let tx = await contract.digitalAssets(gId.toString())
         
   //       let arr = []
   //       tx.map(e => {
   //          arr.push(e)
   //       })
         
   //       console.log(tx);
   //       setDetails(arr)
   //    } catch (error) {
   //       alert(error)
   //       console.log(error);
   //    }
   // }

   const handleWallet = async () => {
      if (!window.ethereum) {
         return alert('please install metamask');
      }

      const addr = await window.ethereum.request({
         method: 'eth_requestAccounts',
      });

      setWallet(addr[0])

   }

 return (
  <div>
   <h1 style={{ marginTop: "30px", marginBottom: "80px" }}>Distributed ledger Blockchain</h1>
       {!Wallet ?

          <Button onClick={handleWallet} style={{ marginTop: "30px", marginBottom: "50px" }}>Connect Wallet </Button>
          :
          <p style={{ width: "250px", height: "50px", margin: "auto", marginBottom: "50px", border: '2px solid #2096f3' }}>{Wallet.slice(0, 6)}....{Wallet.slice(-6)}</p>
       }
   <Container>
    <Row>



     <Col style={{marginRight:"100px"}}>
      <div>
         {/* <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handlePolicyNumber} type="string" placeholder="Policy number" value={number} /> <br /> */}
      <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleAddrs} type="string" placeholder="Metamask address" value={Addrs} /> <br />
      
      <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleAmt} type="number" placeholder="Amount" value={Amt} /> <br />
     
      <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleTxn} type="string" placeholder="Transaction Id" value={txx} /> <br />
      <Button onClick={handleRegAsset} style={{ marginTop: "10px" }} variant="primary">Add Transaction</Button>

      </div>
     </Col>

      <Col style={{ marginRight: "100px" }}>
         <div>
            <Button onClick={handlePublish} style={{ marginTop: "10px" }} variant="primary"> Get Node identfier</Button>
         {NodeTx ? 
            <p>{NodeTx.slice(0,6)}....{NodeTx.slice(-4)}</p>
            : <p></p>
         }
            {/* <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handlePublishHash} type="string" placeholder="Asset Hash" value={PubHash} /> <br /> */}
                   
         </div>
      </Col> 
           
               
   </Row>    
   <Row style={{marginTop:"100px"}}>
             <Col style={{ marginRight: "100px" }}>
                <div>

                   <Button onClick={handleUnPublish} style={{ marginTop: "10px" }} variant="primary">  Get transaction Count</Button>
                   {TxnCount?
                      <p>{TxnCount.toString()}</p>
                   : <p></p>
                   }
                </div>
             </Col> 


             <Col style={{ marginRight: "100px" }}>
                <div>
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleTxnCount} type="number" placeholder="Txn index" value={TxnCounts} /> <br />
                  

                   <Button onClick={handletxncnt} style={{ marginTop: "10px" }} variant="primary"> Get transaction</Button>
               
                  {Counts ?
                   
                   Counts?.map(e => {
                     return <p>{e.toString()}</p>    
                   })
                   
                   :<p></p>}
                </div>
             </Col>

             
       </Row>
          <Row style={{ marginTop: "50px" }}>
             {/* <Col style={{ marginRight: "100px" }}>
                <div style={{ margin: "auto", marginTop: "100px" }}>
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleGetIds} type="string" placeholder="Enter Assets Hash" value={gId} /><br />

                   <Button onClick={handleGetDetails} style={{ marginTop: "10px" }} variant="primary">Get Digital Assets</Button>
                   {Details ? Details?.map(e => {
                      return <p>{e.toString()}</p>
                   }) : <p></p>}
                </div>
             </Col>    */}
   </Row>
   </Container>

  </div>
 )
}

export default Home;
