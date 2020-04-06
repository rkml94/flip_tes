# FLIP TEST FRONT END

Flip test frontend ini saya kerjakan menggunakan templet free dan untuk tablenya menggunakan mdbreact.
Karena dalam test ini hanya memerlukan satu page jadi untuk header, footer dan sidebar saya tidak tampilkan.
Untuk API yang di berikan dari flip.id juga saya convert ke array agar datanya dapat di mapping di ttable mdbreact / mdbdatatable.

NB :
- http://localhost:3000/#/master/flip  ---> anda dapat search untuk semua bagian yang ada di dalam table.
- http://localhost:3000/#/master/flipSearchByName ---> anda hanya bisa search pada field nama tujuan saja.


**Cara untuk menjalankan applikasi ini**

``` bash
# clone the repo
$ git clone https://github.com/rkml94/flip_tes.git

# go into app's directory
$ cd my-project

# install app's dependencies
$ npm install
```


### Copy and Paste

Copy all your files to your project folder and then,

``` bash
# masuk ke directory project
$ cd test_flip or flip_tes (sesuai nama folder hasil extract)

# install app's dependencies
$ npm install

# install reactstrap dependencies
$ npm install reactstrap

# install axios dependencies
$ npm install axios

# install mdbreact dependencies
$ npm install mdbreact

```

``` bash
# untuk menjalankannya di server --> http://localhost:3000
$ npm start
```

```bash
# untuk build to server prouduction
$ npm run build
```
