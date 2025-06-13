export const Card2 = ({title = "タイトルなし", bgColor = "yellow"} : {title?: string, bgColor?: string}) => {
    return (
        <div
            style={{
                backgroundColor: bgColor,
                borderRadius: "20px",
                width: "200px",
                textAlign: "center",
                padding: "20px 20px",
                color: "pink",
            }}
            onClick={() => test("こんにちは")}
        >
                {title}
        </div>
    )
}

function test(text :string){
    console.log("Card.tsx test, " + text);
    return;
}

const cardStyle = {
    borderRadius: "20px",
}