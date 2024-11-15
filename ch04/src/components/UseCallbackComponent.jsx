import { useCallback, useState } from "react";
export default function UseCallbackComponent() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  //한번 생성된 함수를 재활용하게 됨 useCallback을 사용하지 않을 경우, 
  const count1Handler = useCallback(() => {
    setCount1((preCount) => preCount + 1);
  }, []);

  count1Handler.id = count1Handler.id || crypto.randomUUID();

  console.log("현재 count1Handler 함수 ID : " + count1Handler.id);
  //prettier-ignore
  return(
        <div className="UseCallbackComponent">
            <h4>UseCallbackComponent</h4>
            
            <p>count1: {count1}</p>
            <button onClick={count1Handler}>증가</button>

            <p>count2: {count2}</p>
            <button onClick={()=>setCount2(count2 + 1)}>증가</button>

        </div>
    )
}
