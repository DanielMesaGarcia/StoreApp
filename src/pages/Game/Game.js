import React from 'react';
import './Game.css';
import Header from '../../components/header';
import { Input, Radio, Rate } from 'antd';

const Game = () => {
    return (
        <div className='Game'>
            <Header />
            <div className='nameSearchs'>
                <Input />
            </div>
            <div className='gameContent'>
                <div className='leftRectangle'>
                    <img src='img\CounterStrike.webp' alt='counter' />
                    <h2>Game Title</h2>
                    <p>Description of the game goes here.</p>
                    <Rate allowHalf defaultValue={2.5} />
                    <div className='radioButtons'>
                        <Radio.Group>
                            <Radio value={1}>Option 1</Radio>
                            <Radio value={2}>Option 2</Radio>
                        </Radio.Group>
                    </div>
                </div>
                <div className='rightRectangles'>
    <div className='smallRectangle'>
        <div>
            <p>Simulando impuestos y cobros</p>
            <button >Pay</button>
        </div>
    </div>
    <div className='smallRectangle'>
        <div>
            <p>Your Review</p>
            <div>
                <Rate allowHalf defaultValue={2.5} />
                <input type="text" placeholder="Write a review" />
                <button>Submit</button>
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    );
};

export default Game;
