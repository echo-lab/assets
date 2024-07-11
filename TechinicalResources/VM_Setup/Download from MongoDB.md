# Download stuff from Mongo

## Saving to a JSON and Downloading

SSH into your server and run the following command. This will save a JSON to the folder you are in.

~~~bash
mongoexport --db DATABASE_NAME --collection COLLECTION_NAME --out FILE_NAME.json
~~~

Leave the SSH and go to your  local computer. Find the location you would like to save the file into.

~~~bash
scp sangwonlee@PROJECT_NAME.cs.vt.edu:8080/data.json C:\Users\techstaff\Downloads
~~~

This example will save to downloads.

I did my saves in the root folder so mine looked like this

~~~bash
scp sangwonlee@PROJECT_NAME.cs.vt.edu:/home/sangwonlee/data.json C:\...
~~~

If you are having trouble with the scp. Look for the file in the ssh with the following command

~~~bash
ls -l /path/to/data_mess.json
~~~

You can also save to the current directory with:

~~~bash
scp sangwonlee@PROJECT_NAME.cs.vt.edu:/home/sangwonlee/data.json .
~~~

The '.' at the end signifies current directory