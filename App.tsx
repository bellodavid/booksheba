import {View, Text, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import {Amplify, Hub} from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);
import {Authenticator, ThemeProvider} from '@aws-amplify/ui-react-native';
import {DataStore} from 'aws-amplify';
import {User} from './src/models';
import {AppContext} from './AppContext';
import {API} from 'aws-amplify';

const CreateUserMutation = `
mutation createUser($input: CreateUserInput!){
  createUser(input: $input) {
  id
  name
  handle
  bio
  }
  }`;

const App = () => {
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const removeListener = Hub.listen('auth', async data => {
      if (data.payload.event === 'signIn') {
        const userInfo = data.payload.data.attributes;
        // console.log(JSON.stringify(userInfo, null, 2));

        const newUser = {
          id: userInfo.sub,
          name: userInfo.name,
          handle: userInfo.nickname,
        };
        await API.graphql({
          query: CreateUserMutation,
          variables: {input: newUser},
        });
        console.log('user signed in to the database');
      }
    });

    return () => removeListener();
  }, []);
  return (
    <Authenticator.Provider>
      <NavigationContainer>
        <Authenticator>
          <AppContext.Provider
            value={{
              userId,
              setUserId: (userId: string) => setUserId(userId),
            }}>
            <RootStack />
          </AppContext.Provider>
        </Authenticator>
      </NavigationContainer>
    </Authenticator.Provider>
  );
};

export default App;
