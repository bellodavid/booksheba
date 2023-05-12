import {View, Text, Dimensions} from 'react-native';
import {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import Pdf from 'react-native-pdf';
import {ActivityIndicator} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WIDTH = Dimensions.get('window').width;

interface pageProps {
  page: number;
  totalPages: number;
  setPageNumber: (pageNumber: string) => void;
}

const Reading = () => {
  const [pageNumber, setPageNumber] = useState<pageProps>();
  const [lastSession, setLastSession] = useState<number>();
  const [lastPage, setLastPage] = useState<number>(1); // set initial value to 1
  const source = {
    uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    cache: true,
  };
  // Store the last page number

  const storeLastSession = async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, value.toString());
      console.log('saved sucessfully');
    } catch (e) {
      console.log('Failed to save Data');
    }
  };

  // Retrieve the last page number

  const getData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        setLastPage(JSON.parse(value));
      }
    } catch (e) {
      console.log('failed to get');
    }
  };

  useEffect(() => {
    getData('lastPage'); // retrieve last page on mount
  }, []);

  useEffect(() => {
    if (lastSession !== undefined) {
      storeLastSession('lastPage', lastSession); // store last page when it changes
    }
  }, [lastSession]);

  return (
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <Pdf
        page={lastPage}
        maxScale={2}
        source={source}
        trustAllCerts={false}
        onPageChanged={(page, totalPages) => {
          setPageNumber({page, totalPages, setPageNumber});
          setLastSession(page);
        }}
        renderActivityIndicator={() => (
          <ActivityIndicator color="black" size="large" />
        )}
        style={{flex: 1, width: WIDTH, backgroundColor: 'gray'}}
      />
      <View style={{height: 30}}>
        {/* <View style={{ backgroundColor: "black", height: 2, width: WIDTH, borderRadius: 20 }}></View> */}
        <Text style={{top: 4, color: 'black', fontSize: 15}}>
          {pageNumber?.page}/{pageNumber?.totalPages}
        </Text>
      </View>
    </View>
  );
};

export default Reading;
