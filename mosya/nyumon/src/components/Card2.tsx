export const Card2 = ({
        title = "タイトルなし",
        bgColor = "yellow",
        children
        } : {title? :string, bgColor? :string, children? :any}) => {
    return (
        <>
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
                    <div onClick={() => alert("こんにちは")}>
                        {children}
                    </div>
            </div>
        </>
    )
}

function test(text :string){
    console.log("Card.tsx test, " + text);
    return;
}

const cardStyle = {
    borderRadius: "20px",
}