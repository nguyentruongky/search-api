# First TypeScript lesson

I'm following an awesome tutorial to learn TypeScript. 

I spent 2 days to learn TypeScript syntax but felt confuse at all. Can't remember syntax and understand well fundamental concepts. Get confuse with Swift and Javascript. So changed the strategy: learning by example. 

Try some but this tutorial is super cool. It's written in clean and professional way. You can follow this tut yourself at [https://itnext.io/production-ready-node-js-rest-apis-setup-using-typescript-postgresql-and-redis-a9525871407](https://itnext.io/production-ready-node-js-rest-apis-setup-using-typescript-postgresql-and-redis-a9525871407).

By following the article, you understand most of the things. I just write some notes what I have when I follow that and not mentioned in the tut. 

In TypeScript/Javascript, "**;**" is not required but some developers still love it. But I'm a Swift developer, so I don't like "**;**".

## Install environment
- Setup Node.js
- Visual studio code: Add `launch.json` in `./.vscode` with content below. 

```
{
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "Launch Program",
        "program": "${workspaceFolder}/output/server.js",
        "preLaunchTask": "tsc: build - tsconfig.json",
        "outFiles": ["${workspaceFolder}/output/*.js"]
      }
    ]
}
```

This configuration helps to use debug in visual code. 

- `./tsconfig.json` is created by default when you install TypeScript. It has many configurations but some below are important. 
```
{
  "compilerOptions": {
    "esModuleInterop": true,
    "target": "es5",
    "module": "commonjs",
    "outDir": "output",
    "sourceMap": true
  }
}
```

The `output` in `launch.json` and `tsconfig.json` are the folder contains compiled js files. The app starts from there. 

## Structure 
This tutorial is using Express and written with Dependency Injection to prevent dependency to Express. 

### Middleware 
There are many middlewares in a professional project. If we use it directly in `server.ts`, it becomes to an almighty class (as Massaive View Controller in iOS Development). 

We group all middleware into a place `./middleware` which contains many middleware we have. And we have an `./middleware/index.ts` to collect all middlewares to one output. Like Facade pattern. 

Now, it's ready to use middleware in `server.ts`.

### Routes 
Same to middleware, an application supports dozens of APIs or even hundreds of APIs. 2 years ago, I put all routes into server class, and it was a mess. 

We group all routes into `./services` and group by features, like membership, search, or anything into different folders. 

`/.services/index.ts` is the Facade pattern to hide all complicated logic from `server.ts`. 

### Error Handlers
Handle errors is one of the most important things. We have an error handlers middleware, and Facade to hide the logics of handlers. 

With TypeScript, we can create error classes, which can't be done with Javascript. Any error comes, we can throw a related error effortlessly. 

### Framework 
This article is written with Express. What if someday we need to change to Koa or Sail, we have to change Express from hundreds of files. 

I added `./src/Framework` as a bridge of Express. So we removed the dependency on Express in the code. 

Remember to update `tsconfig.json` with 
```
"compilerOptions": {
    "baseUrl": "./src",
    ...
  }
```