import Head from 'next/head';
import { useState } from 'react';
import { Wizard, useWizard } from 'react-use-wizard';

const Home = () => {

  return (
    <div className="root">
      <Head>
        <title>Chameleon</title>
      </Head>
      <div className="container">
        <Wizard>
          <Welcome />
          <Step1 />
          <Step2 />
          <Step3 />
        </Wizard>
      </div>
    </div>
  );
};

const Welcome = () => {
  const { handleStep, nextStep } = useWizard();
  const [userInput, setUserInput] = useState('');
  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };
  handleStep(() => {
    sessionStorage.setItem("userName", userInput);
  });
  return (
    <>
      <div className="header">
        <div className="header-title">
          <h1>Hello! I'm Chameleon 🦎 </h1>
        </div>
        <div className="header-subtitle">
          <h2 >What is your name?</h2><br />
          <input name="userName" placeholder='Insert name here' onChange={onUserChangedText}></input>
        </div>
      </div>
      <div className="prompt-container">
        <div className="prompt-buttons">
          <a className='generate-button' onClick={() => nextStep()}>
            <div className="generate">
              <p>Start</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
const Step1 = () => {
  const { handleStep, nextStep } = useWizard();
  let userName = sessionStorage.getItem("userName");
  const [userInput, setUserInput] = useState('');
  const [charInput, setCharInput] = useState('');
  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };
  const onUserChangedTextC = (event) => {
    setCharInput(event.target.value);
  };
  handleStep(() => {
    sessionStorage.setItem("charName", userInput);
    sessionStorage.setItem("charType", charInput);
  });
  return (
    <>
      <div className="header">
        <div className="header-title">
          <h1>Nice to meet you {userName}. Let's build a cool character together 😸 </h1>
        </div>
        <div className="header-subtitle">
          <h2 >What is your character?</h2><br />
          <input name="charType" placeholder='Insert here' onChange={onUserChangedTextC}></input><br/>
          For example: Chameleon, avocado, cat, ice cream, dog, tomato, anything that you want
          <h2 >What is it's name?</h2><br />
          <input name="charName" placeholder='Insert here' onChange={onUserChangedText}></input>
        </div>
      </div>
      <div className="prompt-container">
        <div className="prompt-buttons">
          <a className='generate-button' onClick={() => nextStep()}>
            <div className="generate">
              <p>Next</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
const Step2 = () => {
  const { handleStep, nextStep } = useWizard();
  let charName = sessionStorage.getItem("charName");
  const [userInput, setUserInput] = useState('');
  const [charInput, setCharInput] = useState('');
  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };
  const onUserChangedTextC = (event) => {
    setCharInput(event.target.value);
  };
  handleStep(() => {
    sessionStorage.setItem("charAge", userInput);
    sessionStorage.setItem("charJob", charInput);
  });
  return (
    <>
      <div className="header">
        <div className="header-title">
          <h1>That's cool! Please Tell us more about {charName}. 🤖 </h1>
        </div>
        <div className="header-subtitle">
          <fieldset onChange={onUserChangedText}>
            <legend> <h2 >What is its age?</h2></legend>

            <div>
              <input type="radio" id="baby" name="age" value="baby"/>
                <label htmlFor="baby">Baby</label>
            </div><br/>

            <div>
              <input type="radio" id="young" name="age" value="young"/>
                <label htmlFor="young">Young</label>
            </div><br/>

            <div>
              <input type="radio" id="old" name="age" value="old"/>
                <label htmlFor="old">Old</label>
            </div>
          </fieldset>

          <h2 >What is {charName} job?</h2><br />
          <input name="charJob" placeholder='Insert here' onChange={onUserChangedTextC}></input><br/>
          For example: Football player, laywer, teacher, actor


        </div>
      </div>
      <div className="prompt-container">
        <div className="prompt-buttons">
          <a className='generate-button' onClick={() => nextStep()}>
            <div className="generate">
              <p>Next</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
const Step3 = () => {
  const { handleStep, nextStep } = useWizard();
  let charName = sessionStorage.getItem("charName");
  const [userInput, setUserInput] = useState('');
  const [charInput, setCharInput] = useState('');
  const [charInput2, setCharInput2] = useState('');
  const [charInput3, setCharInput3] = useState('');
  const [isGenerating, setIsGenerating] = useState(false)
  const [apiOutput, setApiOutput] = useState('')
  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };
  const onUserChangedTextC = (event) => {
    setCharInput(event.target.value);
  };
  const onUserChangedTextC2 = (event) => {
    setCharInput2(event.target.value);

  };
  const onUserChangedTextC3 = (event) => {
    setCharInput3(event.target.value);
  };
  handleStep(() => {
  });
  const callGenerateEndpoint = async () => {
    sessionStorage.setItem("charVibe", userInput);
    sessionStorage.setItem("charClothes", charInput);
    sessionStorage.setItem("charLocation", charInput2);
    sessionStorage.setItem("charStyle", charInput3);
    let charType = sessionStorage.getItem("charType");
    let charAge = sessionStorage.getItem("charAge");
    let charJob = sessionStorage.getItem("charJob");
    let charVibe = sessionStorage.getItem("charVibe");
    let charClothes = sessionStorage.getItem("charClothes");
    let charLocation = sessionStorage.getItem("charLocation");
    let charStyle = sessionStorage.getItem("charStyle");
    setIsGenerating(true);

    const response = await fetch('/api/image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ charName, charType, charJob, charAge, charVibe, charClothes, charLocation, charStyle  }),
    });

    const data = await response.json();
    const { output } = data;

    setApiOutput(`${output}`);
    setIsGenerating(false);
  }
  return (
    <>
      <div className="header">
        <div className="header-title">
          <h1>Yay, last questions about {charName}. 🏂 </h1>
        </div>
        <div className="header-subtitle">
          <h2 >What is {charName} vibe?</h2><br />
          <input name="charVibe" placeholder='Insert here' onChange={onUserChangedText}></input><br/>
          For example: Happy, sad, scared, smiling, eating, excited, exshuated, etc...


          <h2 >What is {charName} wearing?</h2><br />
          <input name="charClothes" placeholder='Insert here' onChange={onUserChangedTextC}></input><br/>
          For example: Red shirt, sunglasess, dark jeans, headband

          <h2 >Where is {charName}?</h2><br />
          <input name="charLocation" placeholder='Insert here' onChange={onUserChangedTextC2}></input><br/>
          For example: Classroom, space, beach, forest, home
          <fieldset onChange={onUserChangedTextC3}>
            <legend> <h2 >Choose a theme</h2></legend>

            <div>
              <input type="radio" id="pixar" name="theme" value="pixar"/>
                <label htmlFor="pixar">Pixar</label>
            </div><br/>

            <div>
              <input type="radio" id="comics" name="theme" value="comics"/>
                <label htmlFor="comics">Comics</label>
            </div><br/>

            <div>
              <input type="radio" id="3d" name="theme" value="3d"/>
                <label htmlFor="3d">3D</label>
            </div><br/>

            <div>
              <input type="radio" id="watercolor" name="theme" value="watercolor"/>
                <label htmlFor="watercolor">Watercolor</label>
            </div><br/>

            <div>
              <input type="radio" id="anime" name="theme" value="anime"/>
                <label htmlFor="anime">Anime</label>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="prompt-container">
        <div className="prompt-buttons">
        <a
            className={isGenerating ? 'generate-button loading' : 'generate-button'}
            onClick={callGenerateEndpoint}
          >
            <div className="generate">
              {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
            </div>
          </a>
        </div>
      </div>
      {apiOutput && (
          <div className="output">
            <h1> Hello! i'm {charName}</h1>
            <div className="output-content">
              <img src={apiOutput}/>
            </div>
          </div>
        )}
    </>
  );
};

export default Home;
