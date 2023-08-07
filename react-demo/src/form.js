import React from "react"
import "./form.css";

export default function Form() {
    return (
        <form>
            <div>
                <input type="email" placeholder="enter the email"></input>
            </div>
            <div>
                <input type="password" placeholder="enter password"></input>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}