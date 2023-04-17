# Welcome to Kitty Shelter!

Cats need homes, and we give them one until you are ready to welcome them to yours!

## Installation

For starters, you just need to create a new react app in the terminal by running the command:

```bash
npx create-react-app name-of-app
```

as well as this command for using react router:
```bash
npm install react-router-dom@5
```

## Usage
To run the app, cd into the react app directory, and then run:
```
npm start
```
This app works with a separate back end so one can either set up a json-server or create a backend to work with the front end.
I used Ruby with ActiveRecord and Sinatra for my backend, here is a link to that repo if you are interested:

https://github.com/JamesSalcedo001/phase-3-sinatra-react-project

The routes I set up for my two models in the backend are: 

Cats: 

1: GET: "http://localhost:9292/cats"

2: POST: "http://localhost:9292/cats"

3: PATCH: "http://localhost:9292/cats/{id}"

4: DELETE: "http://localhost:9292/cats/{id}"

Shelters: 

1: GET: "http://localhost:9292/shelters"

2: POST: "http://localhost:9292/shelters"

To interact with the app, in the header there are four nav links. You can view a list of cats in the shelters, add a new cat to the shelter, add a new shelter, or you can view the list of current shelters available. On the cards, you can edit the cat information with the Edit button, and remove the cat from the shelters with the Adopt button.



## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Credit
These cat images were from google images, I do not own any of these pictures.

## License

[MIT](https://choosealicense.com/licenses/mit/)
