export const paginationInit: IPaginate = {
    currentPage: 1,
    notesPerPage: 10
};

export const initState: AppState = {
    auth: {
        token: "",
        userId: "",
        isAuthenticated: false
    },
    timer: {
        restTime: "",
        todaysDate: ""
    },
    // search: {
    //     minDate: "",
    //     maxDate: "",
    //     from: "",
    //     to: "",
    //     notes: [],
    //     pagination: paginationInit
    // },
    data: {
        error: false,
        loading: false,
        lastNote: { date: "", _id: "", text: "", title: "" },
        previousNotes: [],
        pagination: paginationInit,
        totalNotes: 0
    }
};

export interface IAuthentication {
    token: string;
    userId?: string;
    isAuthenticated: boolean;
}

export interface ITimer {
    restTime: string;
    todaysDate: string;
}

export interface INote {
    _id: string | number;
    title: string;
    text: string;
    date: string;
    files?: (File | string)[];
}

export interface IPaginate {
    currentPage: number;
    notesPerPage?: number;
}

export interface IData {
    error: boolean;
    loading: boolean;
    lastNote: INote;
    totalNotes: number;
    previousNotes: INote[];
    pagination: IPaginate;
}

export interface ISearch {
    minDate?: string;
    maxDate?: string;
    from?: string;
    to?: string;
    notes?: INote[];
    pagination: IPaginate;
}

export interface AppState {
    auth: IAuthentication;
    timer: ITimer;
    data: IData;
    search?: ISearch;
}
