import { useState, useEffect, useMemo } from 'react';
import { Container, Row } from 'react-bootstrap';


function WelcomePage() {
    const [word, setWord] = useState('Breath');
    const words = useMemo(() => ['Calm',
        'Balance',
        'Flexibility',
        'Strength',
        'Meditation',
        'Mindfulness',
        'Wellness',
        'Harmony',
        'Focus',
        'Serenity',
        'Inner peace',
        'Health',
        'Relaxation',
        'Connection',
        'Spiritual'], []);

    useEffect(() => {
        const interval = setInterval(() => {
            const newWord = words[Math.floor(Math.random() * words.length)];
            setWord(newWord);
        }, 1500);

        return () => clearInterval(interval);
    }, [words]);

    return (
        <>
        <Container className='welcome_page' height={100}>
            
            <h1>Yoga is <br /> {word}</h1>
      
        </Container>
        </>

    )
}

export default WelcomePage
