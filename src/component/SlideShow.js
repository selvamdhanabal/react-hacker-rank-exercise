import React, {useState} from 'react';

const slideItems = [
    {
        name: 'Slide 1',
        description: 'This is slide 1'
    },
    {
        name: 'Slide 2',
        description: 'This is slide 2'
    },
    {
        name: 'Slide 3',
        description: 'This is slide 3'
    },
]

function SlideShow() {
    const [name, setName] = useState(slideItems[0].name)
    const [description, setDescription] = useState(slideItems[0].description)
    const [prevDisabled, setPrevDisabled] = useState(false);
    const [nextDisabled, setNextDisabled] = useState(false);

    const resetHandler = () => {
        setName(slideItems[0].name);
        setDescription(slideItems[0].description);
        setPrevDisabled(false);
        setNextDisabled(false);
    }

    const prevHandler = () => {
        const matchIndex = slideItems.findIndex(slide => slide.name === name)
        if(matchIndex === 0){
            setPrevDisabled(true);
        } else {
            setName(slideItems[matchIndex - 1].name);
            setDescription(slideItems[matchIndex - 1].name)
            setNextDisabled(false);
        }
    }

    const nextHandler = () => {
        const matchIndex = slideItems.findIndex(slide => slide.name === name)
        if(slideItems.length === (matchIndex+1)){
            setNextDisabled(true);
        } else {
            setName(slideItems[matchIndex+1].name);
            setDescription(slideItems[matchIndex+1].name)
            setPrevDisabled(false);
        }
    }

    return <div>
        <div className='row'>
            <button className='btn btn-primary' style={{margin:'10px'}} onClick={resetHandler}>Reset</button>
            <button className='btn btn-primary' style={{margin:'10px'}} onClick={prevHandler} disabled={prevDisabled}>Previous</button>
            <button className='btn btn-primary' style={{margin:'10px'}} onClick={nextHandler} disabled={nextDisabled}>Next</button>
        </div>
        <div className='' style={{border: '1px solid #3333', width:'25%'}}>
            <h2>{name}</h2>
            <div style={{marginTop: '25px'}}></div>
            <p>{description}</p>
        </div>
    </div>;
}

export default SlideShow;
