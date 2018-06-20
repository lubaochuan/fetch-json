This example uses redux to fetch a JSON file and caches it till the remote copy of the file is updated. If the network is not accessible, the app simply uses a local copy of the file in AsyncStorage.
Install dependencies:
```
npm install axios redux-axios-middleware redux react-redux --save
```

Resources:
* https://blog.cloudboost.io/getting-started-with-react-native-and-redux-6cd4addeb29
