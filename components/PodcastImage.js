export const PodcastImage = ({ image, image2 }) => (
    <>
        <picture>
            <div
                style={{
                    backgroundImage: `url(${image || image2})`,
                }}
            />
        </picture>

        <style jsx>
            {`
                picture {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex: 1 1;
                    flex-direction: column;
                    width: auto;
                    padding: 10%;
                }
                picture div {
                    width: 100%;
                    height: 100%;
                    background-position: 50% 50%;
                    background-size: contain;
                    background-repeat: no-repeat;
                }
            `}
        </style>
    </>
);
