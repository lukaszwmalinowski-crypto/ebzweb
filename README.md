# Strona projektu - Edukacja bez granic

Statyczna strona internetowa do publikacji na GitHub Pages. Zawiera opis projektu, uzasadnienie tematów szkoleniowych, program szkolenia „Fake news” oraz miejsca do zapisów na trzy szkolenia.

## Pliki

- `index.html`
- `style.css`
- `data.js`
- `script.js`
- `assets/logos/`

## Jak podmienić linki do formularzy zapisów

Otwórz plik `data.js` i uzupełnij:

```js
window.SIGNUP_LINKS = {
  fakeNews: "TU_WKLEJ_LINK_DO_FORMULARZA",
  gamification: "TU_WKLEJ_LINK_DO_FORMULARZA",
  communication: "TU_WKLEJ_LINK_DO_FORMULARZA"
};
```

## Jak wpisać terminy

W tym samym pliku uzupełnij:

```js
window.TRAINING_DATES = {
  fakeNews: "np. 15.09.2026, godz. 9:00-14:30",
  gamification: "do uzupełnienia",
  communication: "do uzupełnienia"
};
```

## Publikacja na GitHub Pages

1. Utwórz repozytorium na GitHubie.
2. Wgraj wszystkie pliki z tej paczki.
3. Wejdź w `Settings` → `Pages`.
4. Wybierz `Deploy from a branch`.
5. Wskaż branch `main` i folder `/root`.
6. Zapisz ustawienia.

Po chwili strona będzie dostępna jako GitHub Pages.
