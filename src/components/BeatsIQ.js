import React, { useEffect, useRef } from 'react';

const BeatsIQ = () => {
    const ref = useRef();
    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, []);
    const cardDetails = [
        {
            emoji: '😀',
            title: 'Card Title 1',
            description: 'This is a description for Card 1.',
            backgroundColor: '#daf3ff',
            textColor: '#000000',
            rotation: '0deg',
        },
        {
            emoji:'😠',
            title: 'You argue with a colleague',
            description: "You get angry and defensive, instead of staying open and working towards common ground.",
            backgroundColor: '#efeafe',
            textColor: '#000000',
            rotation: '0deg',
        },
        {
            emoji: '😳',
            title: 'You get a promotion at work',
            description: "You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities.",
            backgroundColor: '#6441f0',
            textColor: '#ffffff',
            rotation: '-5deg',
        },
        {
            emoji: '🤨',
            title: 'You attend a class reunion',
            description: "You compare yourself with your peers' achievements, instead of making your self-judgement more independent of others.",
            backgroundColor: '#ffefd7',
            textColor: '#000000',
            rotation: '0deg',
        },
        {
            emoji: '😒',
            title: "You are at a lively dinner party",
            description: "You play on your phone, instead of confidently approaching strangers and striking up a chat.",
            backgroundColor: '#fffaed',
            textColor: '#000000',
            rotation: '0deg',
        },
        {
            emoji: '😬',
            title: "You hit dead end in a negotiation",
            description: "You get nervous, frazzled, and frustrated, instead of staying optimistic and solution-oriented.",
            backgroundColor: '#f2f8f8',
            textColor: '#000000',
            rotation: '0deg',
        },
        // Add more card details here
      ];
    return (
        <div className='iQContainer'>
            <div className='eQContainer'>
                <div className='eQ'>EQ beats IQ</div>
                <div className='eqContentContainer'>
                    <p>People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.</p>
                    <p>They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.</p>
                </div>
                
            </div>

            <div className='cardCon'>
                <h2 className="container-title">Dose this sound familiar...</h2>
                <div className="card-container">
                    {cardDetails.map((card, index) => (
                    <div ref={ref} className="card" 
                    key={index}
                    style={{
                        backgroundColor: card.backgroundColor,
                        color: card.textColor,
                        transform: `rotate(${card.rotation})`, // Apply rotation from the array
                      }}>
                        <div className="emoji">{card.emoji}</div>
                        <div className="title">{card.title}</div>
                        <div className="description">{card.description}</div>
                    </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
}

export default BeatsIQ;
