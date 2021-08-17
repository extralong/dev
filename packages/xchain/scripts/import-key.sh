curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.importKey",
    "params" :{
        "username":"admin",
        "password":"adminS00perSt8r",
        "privateKey":"PrivateKey-8KEQAA2PVhfk9ZvAJemLH531KUdXkKk453Mw4MFsp1ZJumzcC"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X

