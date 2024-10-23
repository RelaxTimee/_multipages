import React, { useEffect, useRef, useState } from 'react';
import './Animation.css'; // Make sure to create this file for styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Animation() {
    // Global constants
    const fieldWidth = 800;
    const fieldHeight = 400;
    const diameter = 100;

    const maxLeft = fieldWidth - diameter - 2;
    const maxTop = fieldHeight - diameter - 2;
    const vx = 5;
    const vy = 5;

    // State variables
    const [running, setRunning] = useState(false);
    const [x, setX] = useState((fieldWidth - diameter) / 2);
    const [y, setY] = useState((fieldHeight - diameter) / 2);
    const [angle, setAngle] = useState(0);
    const [ballType, setBallType] = useState('none');

    // Movement direction
    let goRight = useRef(true);
    let goDown = useRef(true);

    const toggleRun = () => {
        setRunning((prev) => !prev);
    };

    const calculate = () => {
        // Calculate the new position of the ball
        setX((prevX) => {
            if (goRight.current) {
                if (prevX >= maxLeft) {
                    goRight.current = false;
                }
                return Math.min(prevX + vx, maxLeft);
            } else {
                if (prevX <= 0) {
                    goRight.current = true;
                }
                return Math.max(prevX - vx, 0);
            }
        });

        setY((prevY) => {
            if (goDown.current) {
                if (prevY >= maxTop) {
                    goDown.current = false;
                }
                return Math.min(prevY + vy, maxTop);
            } else {
                if (prevY <= 0) {
                    goDown.current = true;
                }
                return Math.max(prevY - vy, 0);
            }
        });

        setAngle((prevAngle) => (prevAngle + 3) % 360);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (running) {
                calculate();
            }
        }, 25);

        return () => clearInterval(interval);
    }, [running]);

    const changeBall = (type) => {
        setBallType(type);
    };

    return (
        <div className="animation-container">
            <div id="container">
                <div
                    id="field"
                    style={{
                        position: 'relative',
                        width: `${fieldWidth}px`,
                        height: `${fieldHeight}px`,
                        border: '2px solid black', // Optional field border
                        backgroundColor: '#e9ecef', // Optional field background
                        borderRadius: '10px',
                    }}
                >
                    <div
                        id="ball"
                        className={ballType}
                        style={{
                            position: 'absolute',
                            left: `${x}px`,
                            top: `${y}px`,
                            width: `${diameter}px`,
                            height: `${diameter}px`,
                            borderRadius: '50%',
                            backgroundColor: 'lightskyblue', // Default ball color for debugging
                            transform: `rotate(${angle}deg)`,
                            transition: 'left 0.025s, top 0.025s',
                        }}
                    ></div>
                </div>
                <div id="control" style={{ marginTop: '20px' }}>
                    <button
                        id="run"
                        className={`btn ${running ? 'btn-danger' : 'btn-success'}`}
                        onClick={toggleRun}
                    >
                        <span className={`bi ${running ? 'bi-pause-fill' : 'bi-play-fill'}`}>
                            &nbsp;{running ? 'PAUSE' : 'RUN'}
                        </span>
                    </button>
                    <span>
                        <button className="btn btn-outline-dark" onClick={() => changeBall('none')}>
                            None
                        </button>
                        <button className="btn btn-outline-primary" onClick={() => changeBall('basketball')}>
                            Basketball
                        </button>
                        <button className="btn btn-outline-primary" onClick={() => changeBall('football')}>
                            Football
                        </button>
                        <button className="btn btn-outline-primary" onClick={() => changeBall('volleyball')}>
                            Volleyball
                        </button>
                        <button className="btn btn-outline-primary" onClick={() => changeBall('human')}>
                            Human
                        </button>
                        <button className="btn btn-outline-primary" onClick={() => changeBall('cartoon')}>
                            Cartoon
                        </button>
                        <button className="btn btn-outline-primary" onClick={() => changeBall('logo')}>
                            Logo
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Animation;
