import { TestCreation } from "@/components/TestCreation";
import { TestDataAction } from "@/components/TestDataAction";
import { useState } from "react";
import { useData } from "fenextjs-hook/src/useData";
import { InputText } from "fenextjs-component/cjs/Input";

export default function Home() {
  const [nDataAction, setnDataAction] = useState(0)

  const {data,setData} = useData("")

  return (
    <>

      <InputText onChange={setData} />
      <br />
      {data}

      {/* <TestCreation/> */}

      {/* <TestDataAction name="DATA-1"/>
      <br />
      <br />
      <TestDataAction name="DATA-1"/>
      <br />
      <br />
      <TestDataAction name="DATA-2"/>
      <br />
      <br />
      <TestDataAction name="DATA-2"/>
      <br />
      <br />
      <TestDataAction name="DATA-1"/>
      <br />
      <br />
        <button onClick={()=>{
            setnDataAction(e=>e+1)
        }}>
            load new {`<TestDataAction name="DATA-1"/>`}
        </button>
      {
        new Array(nDataAction).fill(1).map((e,i)=>{
          return (
            <div style={{background:"gray",marginTop:"1rem"}} key={i}>
              <TestDataAction name="DATA-1"/>
            </div>
          )
        })
      } */}
    </>
  );
}
