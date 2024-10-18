import React from 'react';

export default function Pricing() {

    function handleSubmit(e){
        e.preventDefault();
        const form = e.target; // Get the form element from the event
        const formData = new FormData(form);

    console.log(formData);
    const firstFormData = formData.get('inputFirstName');
    const lastFormData = formData.get('inputLastName');
    const emailFormData = formData.get('inputEmail');
    
    

    console.log(firstFormData, lastFormData, emailFormData);
    
    }

    return (
    
    <div id="pricing" className="pricing">
        
        <h5>Pricing:</h5>  
         <div className="pricingForm">
            
            <ul className='formUl'>
                <li>Overnight boarding: $50 /$15 per extra dog</li>
                <li>Daycare: $30 / $10 per extra dog</li>
                <li>Walking services: $25 per hour</li>
                <li>Training: $200-$500</li>
                <li>Grooming: $35-$100</li>
                
            </ul>
           
        <form className='serviceForm' onSubmit={handleSubmit}>
            <div className="formInputs">
                <p className="formParagraph">Fill out the form below for more information or to book services</p>
            <input 
                className='inputs'
                aria-label="first name"
                type="text" 
                placeholder="E.g.John" 
                name="inputFirstName"
            />
            <input 
                className='inputs'
                aria-label="last name"
                type="text"
                placeholder="E.g.Doe" 
                name="inputLastName"
            />    
            <input 
                className='inputs'
                aria-label="email"
                placeholder="johndoe@gmail.com"
                type="email"
                name="inputEmail"
            />
                <select className="dropdown" aria-label="Select service">
                    <option value="daycare">Select a service</option>
                    <option value="daycare">Daycare services</option>
                    <option value="boarding">Boarding</option>
                    <option value="walking">Walking</option>
                    <option value="training">Training</option>
                    <option value="grooming">Grooming</option>
                </select>
                <button className="submitBtn" type="submit">Submit</button>
            </div>
       </form>
       </div>
      
    </div>

        );
}