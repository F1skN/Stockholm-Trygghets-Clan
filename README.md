# Stockholm Trygghet Clan — Webbmall

Den här mappen innehåller en enkel, original webbplatsmall (HTML/CSS/JS) för "Stockholm Trygghet Clan".
Filer:
- index.html
- styles.css
- script.js
- images/placeholder-person.jpg

---

## 1) Snabbtest lokalt
1. Packa upp ZIP.
2. Öppna `index.html` i din webbläsare.

---

## 2) Formulär (Formspree)
Exemplet i `index.html` använder Formspree. Gör så här:
1. Gå till https://formspree.io och skapa ett konto.
2. Skapa ett formulär (du får en endpoint i stil med `https://formspree.io/f/xxxxx`).
3. Byt `action`-attributet i `<form>`-taggarna i `index.html` mot din endpoint.
4. (Valfritt) Konfigurera vidarebefordran av mail eller webhook i Formspree.

Tips: Om du vill spara ansökningar i Netlify eller GitHub Actions, se Netlify Forms (beskrivs nedan).

---

## 3) Deploy — Netlify (enkelt)
1. Skapa ett gratis konto på https://app.netlify.com.
2. Skapa ett nytt site från Git (GitHub/GitLab/Bitbucket) eller välj "Deploy manually" och dra-och-släpp mappen.
3. Om du vill använda Netlify Forms: lägg till `data-netlify="true"` i varje `<form>` i `index.html` och se till att din site deployas via Git. Netlify kommer fånga in formulären automatiskt.
4. Publicera — din site får en automatisk URL.

Exempel på form-ändring för Netlify:
```html
<form data-netlify="true" name="kontakt">
  <!-- fields -->
</form>
```

---

## 4) Deploy — GitHub Pages
1. Skapa ett nytt GitHub-repo, lägg upp filerna.
2. Gå till **Settings → Pages** och välj branch `main` (eller `gh-pages`) som källa.
3. Spara — din site blir publicerad på `https://<ditt-anvandarnamn>.github.io/<repo>`.

---

## 5) Anpassningar att tänka på
- Byt ut placeholder-bilder mot verkliga bilder (mappen `images/`).
- Byt ut Discord-länk till er riktiga invite.
- Uppdatera texten under "Ledning" och "Regelverk" med era riktiga dokument.
- Respektera upphovsrätt när ni använder logotyper och bilder.

---

## 6) Vill du att jag hjälper dig med:
- Att skapa Formspree-endpoints och testa dem? (Jag visar exakta steg och meddelanden du ska klicka.)
- Att deploya till Netlify med ett GitHub-repo (jag kan generera `git`-kommandon och en GitHub README för publicering).
- Anpassa designen ytterligare (färger, typsnitt, mobila tweaks).

Skriv vad du vill att jag ska göra härnäst så guidar jag dig steg för steg.
