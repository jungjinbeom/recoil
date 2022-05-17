import React, {useEffect} from 'react';
import {textState} from "../recoil/Home";

const Home = () => {
    const [text, setText] = useRecoilState(textState);
    useEffect(()=>{
        setText("recoil 테스트 중")
    },[])
    return (
        <div >
            {text}
        </div>
    );
};

export default Home;
