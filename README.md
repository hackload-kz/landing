# Landing Page Project

## Development Setup

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Start the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open your browser and visit:
```
http://localhost:5173/
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production buildild
- `npm test` - Runs tests (if configured)

## Requirements

- Node.js 14.0 or later
- npm or yarn package manager

## Translaton process

Currently Andrii use following process for translation
- Write Russian JSON file which is original
- Convert JSON to PO file using http://github.com/kant2002/robotranslator
- Translate PO to Kazakh using RoboTranslator + Google Translate API
- Convert PO to JSON using RoboTranslator. This should produce `src/i18n/locales/kk.json`

Please do not translate `kk.json` yourself, or inform team that something is changed beforehand, so we would not overwrite your changes by mistake.

Naming convention in JSON files approximately following `component.ui-part.context-word`. First work is exact name of the components, for easier location, at least for now. Second and third parts are not 

After handing over file to Monti process *SHOULD* change.