import { useEffect, useState } from "react";
export default function UseEffectComponent() {
  const [name, setName] = useState("홍길동");
  const [age, setAge] = useState(0);

  //mount단계
  useEffect(() => {
    console.log("UseEffectComponent mount!!!");

    //여기서 통신(fetch)

    return () => {
      //unmount단계
      console.log("UseEffectComponent unmount!!!");
    };
  }, []);

  //update단계
  useEffect(() => {
    console.log("UseEffectComponent update");
  });

  //의존성 배열의 state 값이 수정될 때 호출
  useEffect(() => {
    console.log("UseEffectComponent name update");
  }, [name, age]);

  //prettier-ignore
  return(
        <div className="UseEffectComponent">
            <h4>UseEffectComponent</h4>
            
            <p>이름: {name}</p>
            <input type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />

            <p>나이: {age}</p>
            <input type="text"
            value={age}
            onChange={(e)=> setAge(e.target.value)}
            />
        </div>
    )
}
