import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IThread, IThreadData, TCreateThreadData, TEditThreadData, TThreadReturn } from "../../interfaces/threads.interfaces";

@Injectable({
    providedIn: 'root'
})
export class ThreadRequest {
    private BASE_URL = "http://localhost:3001";

    constructor(private http: HttpClient) { }

    createThread(formData: TCreateThreadData) {
        return this.http.post<TThreadReturn>(`${this.BASE_URL}/thread`, formData);
    }

    editThread(formData: TEditThreadData, threadId: string) {
        const token = localStorage.getItem("@TOKEN");

        if (token) {
            const parsedToken = JSON.parse(token);
            return this.http.patch<TThreadReturn>(`${this.BASE_URL}/thread/${threadId}`, formData, {
                headers: {
                    Authorization: `Bearer ${parsedToken}`
                }
            });
        } else {
            return null;
        }
    }

    deleteThread(threadId: string) {
        const token = localStorage.getItem("@TOKEN");

        if (token) {
            const parsedToken = JSON.parse(token);
            return this.http.delete<void>(`${this.BASE_URL}/thread/${threadId}`, {
                headers: {
                    Authorization: `Bearer ${parsedToken}`
                }
            });
        } else {
            return null;
        }
    }

    getThreads() {
        const token = localStorage.getItem("@TOKEN");

        if (token) {
            const parsedToken = JSON.parse(token);
            return this.http.get<TThreadReturn[]>(`${this.BASE_URL}/thread`, {
                headers: {
                    Authorization: `Bearer ${parsedToken}`
                }
            });
        } else {
            return null;
        }
    }

    getThreadById(threadId: string) {
        const token = localStorage.getItem("@TOKEN");

        if (token) {
            const parsedToken = JSON.parse(token);
            return this.http.get<TThreadReturn>(`${this.BASE_URL}/thread/${threadId}`, {
                headers: {
                    Authorization: `Bearer ${parsedToken}`
                }
            });
        } else {
            return null;
        }
    }
}