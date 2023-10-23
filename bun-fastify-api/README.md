## Prequisites
- Bun installed
- NodeJS installed

## Set up

```
bun install # to save time
chmod +x ./scripts/curl-requests.sh
chmod +x ./scripts/avg-response-time.sh
```

## Testing approach

1. Run the server and pipe results to a file

    NPM
    ```
    npm start >> node-api-logs.txt
    ```

    Bun
    ```
    bun run bun:start >> bun-api-logs.txt
    ```

2. Run `./src/curl-requests` in a separate terminal
3. Get average time using the `avg-response-time.sh` utility script
    ```
    ./avg-response-time.sh "log.txt"
    ```
    NOTE: For MacOS, you would have to modify script to use `gawk`