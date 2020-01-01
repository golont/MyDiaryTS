const paginationInit: IPaginate = {
    currentPage: 1,
    postsPerPage: 10
};

const initState: AppState = {
    auth: {
        token: "",
        userId: "",
        isAuthenticated: false
    },
    timer: {
        restTime: "",
        todaysDate: ""
    },
    search: {
        minDate: "",
        maxDate: "",
        from: "",
        to: "",
        posts: [],
        pagination: paginationInit
    },
    data: {
        error: false,
        loading: false,
        lastPost: {},
        previousPosts: [],
        pagination: paginationInit,
        totalPosts: 0
    }
};

interface IAuthentication {
    token?: string;
    userId?: string;
    isAuthenticated: boolean;
}

interface ITimer {
    //time and date in momentjs format now IDK is there some inferfaces for it
    restTime: string;
    todaysDate: string;
}

interface IPost {
    id: string | number;
    title: string;
    text: string;
    date: string;
    files?: [File | string];
}

interface IPaginate {
    currentPage: number;
    postsPerPage: number;
}

interface IData {
    error: boolean;
    loading: boolean;
    lastPost: IPost | {};
    totalPosts: number;
    previousPosts: IPost[];
    pagination: IPaginate;
}

interface ISearch {
    minDate: string;
    maxDate: string;
    from: string;
    to: string;
    posts: IPost[];
    pagination: IPaginate;
}

interface AppState {
    auth: IAuthentication;
    timer?: ITimer;
    data?: IData;
    search?: ISearch;
}
