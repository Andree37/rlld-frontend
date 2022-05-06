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
            'http://localhost:8080/url/tinify',
            requestOptions
        );
        const data = await response.json();

        return data.short_id;
    };

    return {
        postURL,
    };
};
