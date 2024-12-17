import { TypeAnimation } from 'react-type-animation';

const Speech = () => {
  return (
    <div className="bubbleContainer">
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "lorem ispum dolor sit amet",
            1000, 
            "lorem hello world how are you",
            1000,
            "We produce food for Guinea Pigs",
            1000,
            "We produce food for Chinchillas",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="./man.png" alt="" />
    </div>
  );
};

export default Speech;
