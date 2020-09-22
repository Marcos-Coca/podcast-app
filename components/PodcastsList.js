import { Link } from '../routes';
export const PodcastsList = ({ audioClips, handlePodcast }) => {
    return (
        <>
            {audioClips.map((clip) => (
                <Link
                    key={clip.id}
                    route="podcast"
                    params={{
                        slug: clip.title,
                        slugChannel: clip.channel.title,
                        id: clip.id,
                        idChannel: clip.channel.id,
                    }}>
                    <a
                        className="podcast"
                        onClick={(e) => handlePodcast(e, clip)}>
                        <h3>{clip.title}</h3>
                        <div className="meta">
                            {Math.ceil(clip.duration / 60)} minutes
                        </div>
                    </a>
                </Link>
            ))}

            <style jsx>
                {`
                    .podcast {
                        display: block;
                        text-decoration: none;
                        color: #333;
                        padding: 15px;
                        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
                        cursor: pointer;
                    }
                    .podcast:hover {
                        color: #000;
                    }
                    .podcast h3 {
                        margin: 0;
                    }
                    .podcast .meta {
                        color: #666;
                        margin-top: 0.5em;
                        font-size: 0.8em;
                    }
                `}
            </style>
        </>
    );
};
