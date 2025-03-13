import React, {useState} from 'react';
// <input> <textarea> <select> <radio>
function Comp(){
    const [num, setNum] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("visa");
    const [shipping ,setShipping] = useState("");
     
    function handleNameChange(event){
        setNum(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(parseInt(event.target.value));
    }
     function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }


    return(
        <div>

            <label>Name:</label>
            <input value={num} onChange={handleNameChange} /><br></br>
            <label>Quantity:</label>
            <input type="number" value={quantity} onChange={handleQuantityChange} />

            <p> Name: {num} </p>
             <p>Quantity: {quantity}</p>
             <textarea placeholder="Please Enter Your Comment" value={comment} onChange={handleCommentChange} />
             <p>Comment: {comment}</p>
             <select value={payment} onChange={handlePaymentChange}>
             <option value="">Select an option</option>
             <option value="visa">Visa</option>
             <option value="mastercard">Mastercard</option>
             <option value="Giftcard">Giftcard</option>
             
             </select>
             <p>Payment: {payment}</p>
             <label>
                
                <input type="radio" value="pick up"
                 checked={shipping === "pick up"} 
                 onChange={handleShippingChange} />
                Pick up

             </label><br />
             <label>
                
                <input type="radio" value="delivery"
                 checked={shipping === "delivery"} 
                 onChange={handleShippingChange} />
                 Delivery

             </label>

         <p>Shipping: {shipping}</p>
             
        </div>
    );

}
export default Comp;
