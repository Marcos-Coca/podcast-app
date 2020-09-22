import Link from 'next/link';
export const SeriesLits = ({ series }) => (
    <>
        <div className="channels">
            {series.map((serie) => (
                <Link href={`/channel?id=${serie.id}`}>
                    <a className="channel">
                        <img src={serie.urls.logo_image.original} alt="" />
                        <h2>{serie.title}</h2>
                    </a>
                </Link>
            ))}
        </div>

        <style jsx>{`
            .channels {
                display: grid;
                grid-gap: 15px;
                padding: 15px;
                grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            }
            a.channel {
                display: block;
                margin-bottom: 0.5em;
                color: #333;
                text-decoration: none;
            }
            .channel img {
                border-radius: 3px;
                box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
                width: 100%;
            }
        `}</style>
    </>
);
