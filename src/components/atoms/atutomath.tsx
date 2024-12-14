"use client"
import { atom } from "recoil";

interface AuthState {
  isAuthenticated: boolean;
  user: string;  
  token: string | null;
  role:string| null
}

export const authState = atom<AuthState>({
  key: "authState",
  default: {
    isAuthenticated: false,
    token: null,
	user:"",
	role:"Customer"
  },
});