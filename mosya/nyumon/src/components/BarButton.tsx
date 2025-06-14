import './../static/BarButton.css'
import clsx from 'clsx';

type props = {
    role :string,
}

export const BarButton = (props :props) => {
    // let className = "button";
    let userName;

    // if(props.role === "admin") {
    //     className += "red";
    //     userName = "admin";
    // } else if(props.role === "user") {
    //     className += "blue";
    //     userName = "user";
    // } else {
    //     className += "black"
    //     userName = "None";
    // }

    if (!userName) userName = 'ボタン！！';

    // clsx
    const className = clsx("aiueo", {
        red: props.role === "admin",
        blue: props.role === "user",
        gray: props.role !== "admin" && props.role !== "user",
    });


    return (
        <button className={className}>{userName}</button>
    )
}