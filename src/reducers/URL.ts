import { Dispatch, Reducer, ReducerState, useReducer } from 'react';

export enum Types {
    GENERATE = 'GENERATE',
}

export type URLType = {
    link: string;
    memePrctg: number;
    dateCreated: Date;
    shortId?: string;
};

type Action = Partial<URLType> & {
    type: Types;
};

export type State = {
    isLoading: boolean;
    urls: URLType[];

    _INITIAL_MEME_PRCTG: number;
};

export const initialState: State = {
    isLoading: false,
    urls: [],

    _INITIAL_MEME_PRCTG: 30,
};

const reducer: Reducer<State, Action> = (prevState, action) => {
    switch (action.type) {
        case Types.GENERATE:
            if (
                action.link &&
                action.memePrctg &&
                action.dateCreated &&
                action.shortId
            ) {
                return {
                    ...prevState,
                    urls: [
                        ...prevState.urls,
                        {
                            link: action.link,
                            memePrctg: action.memePrctg,
                            dateCreated: action.dateCreated,
                            shortId: action.shortId,
                        },
                    ],
                };
            } else {
                return { ...prevState };
            }

        default:
            return { ...prevState };
    }
};

export const useURLReducer = (): [
    ReducerState<Reducer<State, Action>>,
    Dispatch<Action>
] => {
    const [state, dispatch] = useReducer<Reducer<State, Action>>(
        reducer,
        initialState
    );

    return [state, dispatch];
};
