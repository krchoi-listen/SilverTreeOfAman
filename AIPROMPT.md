### Back End API Server
1. work on Node.js Express
2. port number: 3333
3. protocol: HTTP
4. need to add swagger document for each API
5. 5 categories of APIs
    (1) machine
        a. start
        b. shutdown
    (2) execute
        a. instruction
        b. program
    (3) memory
        a. view
    (4) context
        a. view
    (5) device (TBD)
6. Each API needs its own path ex. https://server-ip/machine/start for machine start API
7. Each API needs its own classes
    (1) API router: path matching handler, finally calls actual service
    (2) API service: actual service that process the request
    (3) API schema: API input parameter and output result format interface. JSON format.
8. Use TypeScript for development
9. Source Code are maintained under project-root/src folder
10. package.json and tsconfig.json is maintained under project-root
11. build output are maintained under project-root/build folder
        
