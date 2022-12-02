import React from 'react';
import Header from './components/Header';
import { useState } from 'react';


const App = () => {
    const [todos, setTodos] = useState([{
        text: 'Купить бананы',
        favorite: false,
    },
    {
        text: 'Продать квартиру',
        favorite: false,
    },
    {
        text: 'Выучить уроки по JavaScript',
        favorite: false,
    }
    ]);

    console.log(todos)

    const deleteTodo = (i) => {
        const filtered = todos.filter((todo, index) => {
            if (index === i) {
                return false
            }
            return true
        })
        setTodos(filtered)
    };

    const makeFavorite = (i) => {
        setTodos(todos.map((item, index) => {
            if (i === index) {
                return {
                    ...item,
                    favorite: !item.favorite
                }
            }
            return item
        }))
    }

    const [text, setText] = useState("");


    const newTodos = todos.map((todo, index) => {
        return (
            <div className={`todo ${todo.favorite ? 'selected' : ''}`}>
                <div className='favorite'>
                    <button onClick={() => makeFavorite(index)}>
                        ★
                    </button>
                </div>
                <div className='todoText'>
                    {todo.text}
                </div>
                <div className='actions'>
                    <button onClick={() => deleteTodo(index)}>X</button>
                </div>
            </div>
        )
    });




    const addTodo = () => {
        setTodos([{
            text: text,
            favorite: false
        }, ...todos ]);
        setText('');
    }

    return (
        <div className='common'>
            <Header />
            <div className='addendum'>
                <input className='ipt'
                    placeholder='Введите текст...'
                    type='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}>

                </input>
                <button className='btn'
                    onClick={addTodo}>Добавить</button>
            </div>
            <div className='todos'>
                {newTodos}
            </div>
        </div>
    );
};

export default App;