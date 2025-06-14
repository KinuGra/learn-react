export const Weather = (p) => {

    return (
        <>
            {/* onClick={p.onClick()}にすると描画時に実行してしまう */}
            <button onClick={p.onClick}>天気を取得</button>
        </>
    )
}