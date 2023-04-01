import React from 'react';
import'./Questions.css';

const Questioins = () => {
    return (
        <div className='questions-bg container'>
            <h2 className='questions'>Questions</h2>
            <h3 className='question'>  1.what is the differences between props and state?</h3>

           <p className='answer'> Ans: props are the way of passing data from one component to another component.It can not be changed.
            just read ,and it is immutable.
            state:state can be change.Every component have its state.Its mutable .</p>
            
          <h3 className='question'>  2.How does use state work ?</h3>
           <p className='answer'> Ans:use state is a hook.It allows us to have state variable in functional components.We pass the initial 
            state to this function,and it returns a variable =with a current state and set state.</p>

           <h3 className='question'> 3.What is work of use Effect without loading data?</h3>
           <p className='answer'> Ans Setting up a subscription ,manually changing 
             the DOM are the work of use effect.we can call it side effect.</p>

           <h3 className='question'> 4.How does react work?</h3>
           <p className='answer'> Ans:we can html code in JavaScript named jsx or jsxml.we can create a representation 
            of a dom node by declaring the Element in function in react.</p>
            





        </div>
    );
};

export default Questioins;
