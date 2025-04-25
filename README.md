# Rick & Morty API Project

This project was created for the subject **Programación II**.

It provides a basic scaffold for working with the [Rick & Morty API](https://rickandmortyapi.com/) to fetch character data and more.  
You can easily adapt it to use other public APIs, such as the [Pokémon API](https://pokeapi.co/), by updating the `baseApiUrl` in `src/constants/index.ts`.

## 🧱 Features

- TypeScript support
- Live development server using `live-server`
- Easily extendable to use other public APIs

## 🚀 How to Run the Project

1. Make sure you have [Node.js](https://nodejs.org/en) installed.  
   Although the project runs in the browser, it uses dependencies from [npm](https://www.npmjs.com/).
2. Install dependencies:
```bash
  npm install
```  
3. Start the development server:

```bash
  npm run dev
```  

4. Open your browser and go to:
http://localhost:5500


## 📁 Project Structure

```bash
rick-morty-api-project/
├── src/
│   ├── constants/
│   │   └── index.ts       # base API URL
│   ├── interfaces/        # TypeScript interfaces for data models
│   ├── services/          # API fetching logic
│   └── main.ts            # Entry point
├── index.html             # HTML file to mount the app
├── tsconfig.json          # TypeScript configuration
├── package.json
└── README.md
```

### 🧪 Example APIs You Can Use
[Rick and Morty API](https://rickandmortyapi.com/)

[Pokémon API](https://pokeapi.co/)

[Studio Ghibli API](https://ghibliapi.vercel.app/)

