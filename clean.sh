rm -rf node_modules
watchman watch-del-all
rm -rf $TMPDIR/react-native-packager-cache-*
rm -rf $TMPDIR/metro-bundler-cache-*
yarn cache clean --force
yarn install

cd android/
./gradlew clean
cd ..

cd ios/ 
rm -rf Pods && pod install
cd ..
