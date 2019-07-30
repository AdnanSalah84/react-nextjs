"start": "next start -p $PORT"

If you are on Windows, your start script should be next start -p %PORT%.

npm run build

Then try to run the following commands, one by one (two sessions), in their own terminal:

PORT=8000 npm start
PORT=9000 npm start

On Windows, you will need to run the commands differently. One option is to install the npm module cross-env into your app. Then run these two commands from the command line: 
cross-env PORT=8000 npm start 
cross-env PORT=9000 npm start