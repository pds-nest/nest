/**
 * All strings contained in the app should be present in this dict.
 *
 * If a key is missing in a language, the italian one is displayed instead.
 *
 * Define format strings as in C#:
 * ```js
 * "Raggio di {number} km"
 * "{number} km radius"
 * ```
 */
export default {
    // 🇮🇹
    it: {
        appName: "N.E.S.T.",
        appFullName: "Noi Estraiamo Statistiche Tweet",

        server: "Scegli un server",
        baseURL: "Base URL",
        notLoggedIn: "Accesso non effettuato",
        login: "Accedi",
        email: "Email",
        passwd: "Password",

        dashboardTitle: "Crea una nuova repository",
        dashboard: "Dashboard",
        searchBy: "Ricerca per",
        byZone: "area",
        byHashtag: "hashtag",
        byUser: "utente",
        byTimePeriod: "arco di tempo",
        timeBefore: "Prima",
        timeAfter: "Dopo",
        conditions: "Condizioni",
        createRepo: "Crea repository",
        repoName: "Nome repository",
        request: "Richiedi",
        filterOR: "Almeno una cond.",
        filterAND: "Tutte le cond.",
        rollback: "Annulla modifiche",
        save: "Salva modifiche",
        wordcloud: "Wordcloud",

        repositories: "Repositories",
        repoMenu: "Menu repository",
        repoEdit: "Modifica repository",
        menuActive: "Le tue repository attive",
        menuArchived: "Le tue repository archiviate",
        emptyMenu: "Non c'è nulla qui",
        delete: "Elimina",
        archive: "Archivia",
        edit: "Modifica",
        created: "Creata",
        archived: "Archiviata",

        alerts: "Allarmi",
        alertTitle: "I tuoi allarmi",
        alertCreate: "Crea un allarme",
        notImplemented: "🚧 Non implementato.",

        settings: "Impostazioni",
        loggedInTitle: "Accesso effettuato",
        loggedInOn: "Al momento hai effettuato l'accesso su",
        loggedInAs: "come",
        logout: "Esci",
        switchTheme: "Cambia tema",
        darkMode: "Scuro",
        lightMode: "Chiaro",
        changeLang: "Cambia lingua",
        alertSettings: "Impostazioni allarmi",
        changeEmail: "Cambia il tuo indirizzo email",
        changePasswd: "Cambia la tua password",

        users: "Utenti",
        manageUsers: "Gestisci utenti",
        userList: "Elenco utenti",
        userCreate: "Crea nuovo utente",
        userName: "Username",
        create: "Crea",
        type: "Tipo",
        admin: "Amministratore",
        user: "Utente",
    },
    // 🇬🇧
    en: {
        appName: "N.E.S.T.",
        appFullName: "We Extract Statistics from Tweets",

        server: "Choose a server",
        baseURL: "Base URL",
        notLoggedIn: "Not logged in",
        login: "Login",
        email: "Email",
        passwd: "Password",

        dashboardTitle: "Create a new repository",
        dashboard: "Dashboard",
        searchBy: "Search by",
        byZone: "zone",
        byHashtag: "hashtag",
        byUser: "user",
        byTimePeriod: "time period",
        timeBefore: "Before",
        timeAfter: "After",
        conditions: "Conditions",
        createRepo: "Create repository",
        repoName: "Repository name",
        request: "Request",
        filterOR: "At least one cond.",
        filterAND: "Every cond.",
        rollback: "Rollback changes",
        save: "Save changes",
        wordcloud: "Wordcloud",

        repositories: "Repositories",
        repoMenu: "Repositories menu",
        repoEdit: "Edit repository",
        menuActive: "Your active repositories",
        menuArchived: "Your archived repositories",
        emptyMenu: "There's nothing here",
        delete: "Delete",
        archive: "Archive",
        edit: "Edit",
        created: "Created",
        archived: "Archived",

        alerts: "Alerts",
        alertTitle: "Your alerts",
        alertCreate: "Create a new alert",
        notImplemented: "🚧 Not implemented.",

        settings: "Settings",
        loggedInTitle: "Logged in",
        loggedInOn: "You are currently logged in at",
        loggedInAs: "as",
        logout: "Logout",
        switchTheme: "Switch theme",
        darkMode: "Dark",
        lightMode: "Light",
        changeLang: "Change language",
        alertSettings: "Alert settings",
        changeEmail: "Change your email address",
        changePasswd: "Change your password",

        users: "Users",
        manageUsers: "Manage users",
        userList: "User list",
        userCreate: "Create new user",
        userName: "Username",
        create: "Create",
        type: "Type",
        admin: "Admin",
        user: "User",
    },
    // 🇫🇮
    fi: {
        appName: "N.E.S.T.",
        appFullName: "Poimimme Twiittien Tilastot",

        server: "Valitse palvelin",
        baseURL: "Perus-URL",
        notLoggedIn: "Ei kirjautunut sisään",
        login: "Kirjaudu sisään",
        email: "Sähköposti",
        passwd: "Salasana",

        dashboardTitle: "Luo uusi arkisto",
        dashboard: "Kojelauta",
        searchBy: "Haku ",
        byZone: "vyöhykkeen mukaan",
        byHashtag: "hashtagin mukaan",
        byUser: "käyttäjän mukaan",
        byTimePeriod: "aikajakson mukaan",
        timeBefore: "Ennen",
        timeAfter: "Jälkeen",
        conditions: "Ehdot",
        createRepo: "Luo arkisto",
        repoName: "Arkiston nimi",
        request: "Pyydä",
        filterOR: "Vähintään yksi ehto",
        filterAND: "Kaikki ehdot",
        rollback: "Peruuta muutokset",
        save: "Tallenna muutokset",
        wordcloud: "Sanapilvi",

        repositories: "Arkistot",
        repoMenu: "Arkistot-valikko",
        repoEdit: "Muokkaa arkistoa",
        menuActive: "Aktiiviset arkistosi",
        menuArchived: "Arkistoidut arkistosi",
        emptyMenu: "Täällä ei ole mitään",
        delete: "Poista",
        archive: "Arkistoi",
        edit: "Muokkaa",
        created: "Luotu",
        archived: "Arkisto",

        alerts: "Hälytykset",
        alertTitle: "Hälytyksesi",
        alertCreate: "Luo uusi hälytys",
        notImplemented: "🚧 Ei toteutettu.",

        settings: "Asetukset",
        loggedInTitle: "Kirjautunut sisään",
        loggedInOn: "Olet tällä hetkellä kirjautuneena sisään",
        loggedInAs: "nimellä",
        logout: "Kirjaudu ulos",
        switchTheme: "Vaihda teema",
        darkMode: "Tumma",
        lightMode: "Selkeä",
        changeLang: "Vaihda kieltä",
        alertSettings: "Hälytysasetukset",
        changeEmail: "Vaihda sähköpostiosoitteesi",
        changePasswd: "Vaihda salasanasi",

        users: "Käyttäjät",
        manageUsers: "Käyttäjien hallinta",
        userList: "Käyttäjäluettelo",
        userCreate: "Luo uusi käyttäjä",
        userName: "Käyttäjätunnus",
        create: "Luo",
        type: "Tyyppi",
        admin: "Ylläpitäjä",
        user: "Käyttäjä",
    },
}
