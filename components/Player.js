export const Player = ({ title, userName, audio }) => (
    <>
        <div className="player">
            <h3>{title}</h3>
            <h6>{userName}</h6>
            <audio controls>
                <source src={audio} type="audio/mpeg" />
            </audio>
        </div>
        <style jsx>
            {`
                .player {
                    padding: 30px;
                    background: rgba(0, 0, 0, 0.3);
                    text-align: center;
                }
                h3 {
                    margin: 0;
                }
                h6 {
                    margin: 0;
                    margin-top: 1em;
                }
                audio {
                    margin-top: 2em;
                    width: 100%;
                }
            `}
        </style>
    </>
);
