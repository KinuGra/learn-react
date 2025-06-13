export const FooButton = ({buttonName = "指定なし"} :{buttonName?: string}) => {
    return (
        <div
            style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "20px",
            }}
        >
            {buttonName}
        </div>
    )
}