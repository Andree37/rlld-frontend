import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { useAPI } from '../hooks/useAPI';
import { initialState, State, Types, URLType, useURLReducer } from '../reducers/URL';

type PotatoType = {
    children?: ReactNode;
};

export type ContextProps = {
    state: State;
    generateURL: (args: URLType) => void;
    showCopy: boolean;
    setHasPressed: (args: boolean) => void;
    setURL: (args: string) => void;
    url: string;
    memePrctg: number;
    setMemePrctg: (args: number) => void;
};

const URLContext = createContext<ContextProps>({
    state: initialState,
    generateURL: () => {},
    showCopy: false,
    setHasPressed: () => {},
    setURL: () => {},
    url: '',
    memePrctg: 30,
    setMemePrctg: () => {},
});

export const URLProvider: React.FC<PotatoType> = ({ children }) => {
    const [state, dispatch] = useURLReducer();
    const { postURL } = useAPI();
    const [hasPressed, setHasPressed] = useState(false);

    const [memePrctg, setMemePrctg] = useState(state._INITIAL_MEME_PRCTG);
    const [url, setURL] = useState('');

    const showCopy = useMemo(() => {
        return hasPressed && state.urls.length > 0;
    }, [hasPressed, state.urls]);

    const generateURL = useCallback(
        async (args: URLType) => {
            // POST on backend
            const shortId = await postURL({
                original_url: args.link,
                meme_prctg: args.memePrctg / 100,
            });

            dispatch({ type: Types.GENERATE, ...args, shortId });
        },
        [dispatch, postURL]
    );

    const urlProps = useMemo(() => {
        return {
            state,
            generateURL,
            showCopy,
            setHasPressed,
            url,
            setURL,
            memePrctg,
            setMemePrctg,
        };
    }, [state, generateURL, showCopy, url, memePrctg]);

    return <URLContext.Provider value={urlProps}>{children}</URLContext.Provider>;
};

export const useURL = () => useContext(URLContext);
