export interface IInitialProvider {
  currentUser: WebAppUser | null;
  currentLanguage: string;
  setCurrentLanguage: (langCode: string) => void;
}
