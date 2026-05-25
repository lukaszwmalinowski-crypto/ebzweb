# Edukacja bez granic - strona projektu i zapisów

Statyczna strona HTML/CSS/JS do publikacji na GitHub Pages.

## Co zawiera

- opis, po co powstał projekt,
- uzasadnienie wyboru tematów szkoleń,
- dynamiczną sekcję opisującą 3 szkolenia,
- miejsca do zapisów na szkolenia,
- oryginalne logo projektu w folderze `assets/logos/`.

## Jak podmienić linki do zapisów

Otwórz plik `data.js` i uzupełnij:

```js
window.SIGNUP_LINKS = {
  fakeNews: "LINK_DO_FORMULARZA",
  communication: "LINK_DO_FORMULARZA",
  gamification: "LINK_DO_FORMULARZA"
};
```

## Publikacja na GitHub Pages

1. Utwórz repozytorium.
2. Wgraj wszystkie pliki z paczki.
3. Wejdź w `Settings` → `Pages`.
4. Wybierz `Deploy from a branch`.
5. Wskaż branch `main` i folder `/root`.
6. Zapisz.
