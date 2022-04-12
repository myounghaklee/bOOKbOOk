# All aboud React Native FrameWork
reference : https://reactnative.dev/docs/activityindicator
## What we to do?
we make a hybrid Application.
In order to create Android and iOS apps, many things must be installed to develop them, but we will develop them using expo.

![image](https://user-images.githubusercontent.com/43670838/157061005-2850ccec-600e-41bb-a372-232ce8a7b11f.png)

we need all of this picture, but we only handle the js, markup/styling. 
how is this possible? Because expo takes care of the other parts.

## How to install

1.
```cli
npm install -- global expo-cli
```

2. if you are mac user, install watchman 
```
brew install watchman
```
3. install Expo Go app at iphone or pad
and then create Account 

## Initializin  bOOKbOOk
```
# create project named(my-app)
expo init my-app 

# navigate to the project directory

cd my-app
```

## Start project
move to project , and then typing
```
npm start
```
you can see the QRcode to start app at expo go
if you want to run the simulator at expo, your Desktop and ios phone use same wi-fi


## About RN
### StyleSheet.create 
object생성에 사용된다 
````
StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    fontSize:100,    
  },
});
````
이처럼 객체로 사용하는 이유는 자동완성기능을 제공하기 때문이다. create를 사용하지않고 아래처럼 사용해도 무관한다 
```
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    fontSize:100,    
  },
});
```

### Necessary
- RN can't use <div>. you must use View tag and import view
```
import {StyleSheet, Text, View} from "react-native"
```

- All text has to be in text component.
we can't use <p>, <span> like webHtml.

- `navigation components` no longer available

