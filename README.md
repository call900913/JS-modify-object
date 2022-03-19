# LISEZMOI

Originally, I began writing this only to practice Vim. However, after a few days, I decided to publish it to NPM: 
[https://www.npmjs.com/package/elba-palindrome-detector](https://www.npmjs.com/package/elba-palindrome-detector)

Here I added the palindrome method to the JS String object so that you can call it like so:

```
>"racecar".palindrome()
>true
```

When the string contains punctuations, the palindrome() method will look only at the letters.

## Folders and Tests
The index.js file is inside the `palindrome/` folder.

That folder also contains tests.

Before running those tests, ensure you have Mocha in your system:
```
npm install --global mocha
```

