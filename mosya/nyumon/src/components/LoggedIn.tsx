export default function({is} :{is?: boolean}){
    return(
        <div style={abc}>
            {is && (
                <div>
                    ログイン済みです
                </div>
            )}
            {!is && (
                <div>
                    ログインしていません
                </div>
            )}
            hoge
        </div>
    )
}

const abc = {
    margin: "10px",
    backgroundColor: "gray"
}