

## Getting Started

First, run the development server:
you should be in the folder /testjhon and then use npm
```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Then you can run backend node.js server go to the folder testjhon/testjhon_backend
```bash
npm install
npm run dev 
```
Now you can use api from backend server go to http://localhost:5000/
you should see {"message":"working"}

## Or You can use docker-compose

For this method you can go to folder testjhon
then open terminal (make sure you in the go/to/the/testjhon) directory
and now you can write
```bash
docker-compose up -d
```
as the same website you can find > localhost:3000

## In my environment i use several folder
## Features 
Component with logic that can be used only in pages or between another "Features" components
## Shared 
Component that has only visual and can be used everywhere in my project
## Styles 
In that folder i'm storage styles only for pages


