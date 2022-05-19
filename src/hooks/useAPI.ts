export type APIProps = {
    postURL: ({ original_url, meme_prctg }: PostURL) => Promise<string>;
};

type PostURL = {
    original_url: string;
    meme_prctg: number;
};

export const useAPI = (): APIProps => {
    const postURL = async ({
        original_url,
        meme_prctg,
    }: PostURL): Promise<string> => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ original_url, meme_prctg }),
        };

        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}tinify`,
            requestOptions
        );
        const data = await response.json();

        return data.short_id;
    };

    return {
        postURL,
    };
};
