export interface UserI {
  displayName: string | null;
  email: string | null;
  emailVerified: boolean | null;
  photoURL: string | null;
  password: string;
  uid: string;
}