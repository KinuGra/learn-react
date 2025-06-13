type props = {
    title: string,
    bgColor: string,
}

export const Card = (props :props) => {
    return (
        <div>
            <div
                style={{
                    backgroundColor: props.bgColor,
                    borderRadius: "20px",
                    width: "200px",
                    textAlign: "center",
                    padding: "20px 20px"
                }}
                onClick={() => test("こんにちは")}
            >
                    {props.title}
            </div>
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