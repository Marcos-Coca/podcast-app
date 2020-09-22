export const Banner = ({ image }) => (
    <>
        <div
            className="banner"
            style={{
                backgroundImage: `url(${image})`,
            }}
        />

        <style>
            {`
            .banner {
                    width: 100%;
                    padding-bottom: 25%;
                    background-position: 50% 50%;
                    background-size: cover;
                    background-color: #aaa;
                }`}
        </style>
    </>
);
