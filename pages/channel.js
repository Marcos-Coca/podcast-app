import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { SeriesLits } from '../components/SeriesList';
import { PodcastsList } from '../components/PodcastsList';
import { Banner } from '../components/Banner';
import Error from './_error';
import PodcastPlayer from '../components/PodcastPlayer';

const Channel = ({ channel, audioClips = [], series = [], statusCode }) => {
    const [openPodcast, setOpenPodcast] = useState(null);

    function handleOpenPodcast(e, podcast) {
        e.preventDefault();
        setOpenPodcast(podcast);
    }

    function handleClosePodcast(e) {
        e.preventDefault();
        setOpenPodcast(null);
    }

    if (statusCode !== 200) {
        return <Error statusCode={statusCode} />;
    }

    return (
        <Layout title={`Channel ${channel.title}`}>
            <Banner image={channel.urls.banner_image.original} />

            {openPodcast && (
                <PodcastPlayer
                    clip={openPodcast}
                    onClose={handleClosePodcast}
                />
            )}
            <h1>{channel.title}</h1>

            <h2>Series</h2>
            <SeriesLits series={series} />

            <h2>Ultimos Podcasts</h2>
            <PodcastsList
                audioClips={audioClips}
                handlePodcast={handleOpenPodcast}
            />

            <style jsx>{`
                h1 {
                    font-weight: 600;
                    padding: 15px;
                }
                h2 {
                    padding: 5px;
                    font-size: 32px;
                    font-weight: 600;
                    margin: 0;
                    text-align: center;
                }
            `}</style>
        </Layout>
    );
};

export async function getServerSideProps({ query, res }) {
    const idChannel = query.id;
    try {
        const [reqChannel, reqSeries, reqAudio] = await Promise.all([
            fetch(`https://api.audioboom.com/channels/${idChannel}`),
            fetch(
                `https://api.audioboom.com/channels/${idChannel}/child_channels`
            ),
            fetch(
                `https://api.audioboom.com/channels/${idChannel}/audio_clips`
            ),
        ]);

        if (reqChannel.status >= 400) {
            res.statusCode = reqChannel.status;
            return {
                props: {
                    channel: null,
                    audioClips: null,
                    series: null,
                    statusCode: 404,
                },
            };
        }
        const dataChanel = await reqChannel.json();
        const channel = dataChanel.body.channel;

        const dataAudio = await reqAudio.json();
        const audioClips = dataAudio.body.audio_clips;

        let dataSeries = await reqSeries.json();
        let series = dataSeries.body.channels;

        return { props: { channel, audioClips, series, statusCode: 200 } };
    } catch (err) {
        return {
            props: {
                channel: null,
                audioClips: null,
                series: null,
                statusCode: 503,
            },
        };
    }
}

export default Channel;
