import React from 'react';

const Blogs = () => {
  return (
    <div>
      <h1 className='text-3xl text-center'>How will you improve the performance of a React Application?</h1>
      <p>Answer:Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.
        According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.
        In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.
        In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:</p>
      <h1 className='text-3xl text-center'>What are the different ways to manage a state in a React application?</h1>
      <p>Answer:When we talk about state in our applications, it’s important to be clear about what types of state actually matter.here are four main types of state you need to properly manage in your React apps
        1.Local state
        2.Global state
        3.Server state
        4.URL state
      </p>
      <h1 className='text-3xl text-center'>How does prototypical inheritance work?</h1>
      <p>Answer:Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using proto__.</p>
      <h1 className='text-3xl text-center'>What is a unit test? Why should write unit tests?</h1>
      <p>Answer:unit testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development coding phase of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
      <h1 className='text-3xl text-center'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
      <p>Answer:
        If you update it directly, calling the setState() afterward may just replace the update you made.
        When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
        You will lose control of the state across all components.
      </p>
    </div>
  );
};

export default Blogs;